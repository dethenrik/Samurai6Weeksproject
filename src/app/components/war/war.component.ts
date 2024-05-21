import { Component, OnInit } from '@angular/core';
import { War } from 'src/app/models/War';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.css']
})
export class WarComponent implements OnInit {
  wars: War[] = [];

  constructor(private service: GenericService<War>) {}

  ngOnInit(): void {
    this.getWars();
  }

  getWars(): void {
    this.service.getAll('war').subscribe(data => {
      this.wars = data;
    });
  }
}
