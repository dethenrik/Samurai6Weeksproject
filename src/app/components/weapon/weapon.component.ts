import { Component } from '@angular/core';
import { Weapon } from 'src/app/models/Weapon';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent {
  //initializing the list
  weaponList: Weapon[] = [];

  constructor(private service: GenericService<Weapon>) { }
// getall will run when Angular initializes the component
  ngOnInit(): void {
    this.getAll();
  }
//this is where i call the getall method from generic.service.ts.//
// i am saying i want to call a table called weapon and it want it in a list of arrays//
  getAll(): void {
    this.service.getAll('Weapon').subscribe((data: Weapon[]) => {
      this.weaponList = data;
      console.log(data);
      console.log(this.weaponList);
    });
  }
}