import { Component, OnInit } from '@angular/core';
import { Armour } from 'src/app/models/Armour';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-armour',
  templateUrl: './armour.component.html',
  styleUrls: ['./armour.component.css']
})
export class ArmourComponent implements OnInit {
  armourImages: Armour[] = [];
  modalVisible: boolean = false;
  enlargedImageSrc: string = '';

  constructor(private service: GenericService<Armour>) {}

  ngOnInit(): void {
    this.getArmourImages();
  }

  getArmourImages(): void {
    this.service.getAll('armour').subscribe(data => {
      this.armourImages = data;
    });
  }

  showImage(imgPath: string): void {
    this.enlargedImageSrc = `../../assets/img/${imgPath}.jpg`;
    this.modalVisible = true;
  }

  hideImage(): void {
    this.modalVisible = false;
  }
}
