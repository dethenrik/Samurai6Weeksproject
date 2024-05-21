import { Component } from '@angular/core';
import { Horse } from 'src/app/models/Horse';
import { GenericService } from 'src/app/services/generic.service';

@Component({
selector: 'app-horse',
templateUrl: './horse.component.html',
styleUrls: ['./horse.component.css']
})

export class HorseComponent {
horseList: Horse [] = [];


ngOnInit(): void{

this.getAll();

}

constructor(private service: GenericService<Horse>) {

}

getAll(): void{
this.service.getAll('Horse').subscribe(data => {
this.horseList= data;
console.log(data)
console.log(this.horseList); }//end getAll



)};
}