import { Component } from '@angular/core';
import { Horse } from 'src/app/models/Horse';
import { GenericService } from 'src/app/services/generic.service';

@Component({
selector: 'app-horse',
templateUrl: './horse.component.html',
styleUrls: ['./horse.component.css']
})

export class HorseComponent {
  //initializing the list
horseList: Horse [] = [];

// getall will run when Angular initializes the component. 
ngOnInit(): void{
this.getAll();
}

constructor(private service: GenericService<Horse>) {

}
//this is where i call the getall method from generic.service.ts.//
// i am saying i want to call a table called samurai and it want it in a list of arrays//
getAll(): void{
this.service.getAll('Horse').subscribe(data => {
this.horseList= data;
console.log(data)
console.log(this.horseList); }//end getAll



)};
}