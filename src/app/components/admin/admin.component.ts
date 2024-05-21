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
  //initializing the list
  public warList: War[] = [];
  public isEditing: boolean = false;
  public editedWar: War | null = null;
// Form control for war, it is a way to save user input and send it somewhere needed
  warForm: FormGroup = new FormGroup({
    warName: new FormControl('', Validators.required),
    deathCount: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });
// Form control for editing war
  editForm: FormGroup = this.formBuilder.group({
    warName: ['', Validators.required],
    deathCount: ['', Validators.required],
    location: ['', Validators.required],
  });

  constructor(
    private service: GenericService<War>,
    private formBuilder: FormBuilder
  ) {}
// getall will run when Angular initializes the component. 
  ngOnInit(): void {
    this.getAll();
  }
//I call the getall method from generic.service.ts.//
//I call a table called war and it want it in a list of arrays//
  getAll(): void {
    this.service.getAll('war').subscribe(data => {
      this.warList = data;
    });
  }
// getting value from warForm
// sending it to a table called war
// if not possible show error message
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
// getting value from war defined as id:number
// if it works it will show the updated list
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
// sets the editing flag to true
// stores the war being edited
// populate edit form with war details
  editWar(war: War): void {
    this.isEditing = true;
    this.editedWar = war;
    this.editForm.setValue({
      warName: war.warName,
      deathCount: war.deathCount,
      location: war.location
    });
  }
// sets the editing to false
// clears the war
// and resets the edit form
  cancelEdit(): void {
    this.isEditing = false;
    this.editedWar = null;
    this.editForm.reset();
  }

  updateWar(): void {
    if (this.editForm.valid && this.editedWar) {
      // Create an updated war object with form values merged into the edited war.
      const updatedWar: War = { ...this.editedWar, ...this.editForm.value };
      // Send update request to the service.
      this.service.update(updatedWar, 'war', updatedWar.warId).subscribe(data => {
        // Log success message and refresh war list
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
