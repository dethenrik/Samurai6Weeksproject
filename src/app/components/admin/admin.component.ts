import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { War } from 'src/app/models/War';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public warList: War[] = [];
  public isEditing: boolean = false;
  public editedWar: War | null = null;

  warForm: FormGroup = new FormGroup({
    warName: new FormControl('', Validators.required),
    deathCount: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });

  editForm: FormGroup = this.formBuilder.group({
    warName: ['', Validators.required],
    deathCount: ['', Validators.required],
    location: ['', Validators.required],
  });

  constructor(
    private service: GenericService<War>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll('war').subscribe(data => {
      this.warList = data;
    });
  }

  create(): void {
    if (this.warForm.valid) {
      const warData = { ...this.warForm.value };

      this.service.create(warData, 'war').subscribe({
        next: (data) => {
          this.getAll();
          this.warForm.reset();
        },
        error: (error) => {
          console.error('Error creating war:', error);
        }
      });
    } else {
      console.log('Form is invalid. Cannot create war.');
    }
  }

  deleteWar(id: number | undefined): void {
    if (id !== undefined) {
      this.service.delete('war', id).subscribe(result => {
        if (result) {
          console.log(`War with ID ${id} deleted successfully.`);
          this.getAll();
        } else {
          console.error(`Failed to delete War with ID ${id}.`);
        }
      });
    } else {
      console.error('Cannot delete. War ID is undefined.');
    }
  }

  editWar(war: War): void {
    this.isEditing = true;
    this.editedWar = war;
    this.editForm.setValue({
      warName: war.warName,
      deathCount: war.deathCount,
      location: war.location
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editedWar = null;
    this.editForm.reset();
  }

  updateWar(): void {
    if (this.editForm.valid && this.editedWar) {
      const updatedWar: War = { ...this.editedWar, ...this.editForm.value };
      this.service.update(updatedWar, 'war', updatedWar.warId).subscribe(data => {
        console.log('War updated successfully:', data);
        this.getAll();
        this.cancelEdit();
      }, error => {
        console.error('Error updating war:', error);
      });
    } else {
      console.error('Form is invalid or edited war is null.');
    }
  }
}
