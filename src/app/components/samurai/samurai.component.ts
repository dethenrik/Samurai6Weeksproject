import { Component } from '@angular/core';
import { Samurai } from 'src/app/models/Samurai';
import { GenericService } from 'src/app/services/generic.service';


@Component({
  selector: 'app-samurai',
  templateUrl: './samurai.component.html',
  styleUrls: ['./samurai.component.css']
})
export class SamuraiComponent {
  //initializing the list
  samuraiList: Samurai[] = [];
  filteredSamuraiList: Samurai[] = [];
  searchTerm: string = '';

  constructor(private service: GenericService<Samurai>) {}
// getall will run when Angular initializes the component.
  ngOnInit(): void {
    this.getAll();
  }
//this is where i call the getall method from generic.service.ts.//
// i am saying i want to call a table called samurai and it want it in a list of arrays//
  getAll(): void {
    this.service.getAll('samurai').subscribe(data => {
      this.samuraiList = data;
      this.applySearchFilter(); // Apply filter initially
    });
  }

  applySearchFilter(): void {
    this.filteredSamuraiList = this.samuraiList.filter(samurai =>
      samurai.samuraiName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
