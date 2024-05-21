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
  imageUrls: SamuraiImages[] = [];
  

  constructor(private service: GenericService<SamuraiImages>, private router: Router) {

  }
  
  ngOnInit(): void {
    this.getImageUrls();
  }

  getImageUrls(): void {
    this.service.getAll('frontpage').subscribe(data => {
      this.imageUrls = data;
    });
  }

  
  navigateToPage(page: string): void {
    this.router.navigate(['/' + page]);
  }
}
