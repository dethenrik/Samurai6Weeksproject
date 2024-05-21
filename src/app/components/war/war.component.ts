import { Component, OnInit } from '@angular/core';
import { War } from 'src/app/models/War';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.css']
})
export class WarComponent implements OnInit {
  //initializing the list
  wars: War[] = [];

  constructor(private service: GenericService<War>) {}
// getall will run when Angular initializes the component.
  ngOnInit(): void {
    this.getWars();
  }
//this is where i call the getall method from generic.service.ts.//
// i am saying i want to call a table called war and it want it in a list of arrays//
  getWars(): void {
    this.service.getAll('war').subscribe(data => {
      this.wars = data;
    });
  }
}
