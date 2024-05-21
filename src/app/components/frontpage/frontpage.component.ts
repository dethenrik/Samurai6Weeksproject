import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { SamuraiImages } from '../../models/SamuraiImages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  //initializing the list
  imageUrls: SamuraiImages[] = [];
  

  constructor(private service: GenericService<SamuraiImages>, private router: Router) {

  }
  // getall will run when Angular initializes the component. 
  ngOnInit(): void {
    this.getImageUrls();
  }
//I call the getall method from generic.service.ts.//
//I call a table called frontpage and it want it in a list of arrays//
  getImageUrls(): void {
    this.service.getAll('frontpage').subscribe(data => {
      this.imageUrls = data;
    });
  }

  
  navigateToPage(page: string): void {
    this.router.navigate(['/' + page]);
  }
}
