import { Component } from '@angular/core';
import { Samurai } from 'src/app/models/Samurai';
import { GenericService } from 'src/app/services/generic.service';


@Component({
  selector: 'app-samurai',
  templateUrl: './samurai.component.html',
  styleUrls: ['./samurai.component.css']
})
export class SamuraiComponent {
  samuraiList: Samurai[] = [];
  filteredSamuraiList: Samurai[] = [];
  searchTerm: string = '';

  constructor(private service: GenericService<Samurai>) {}

  ngOnInit(): void {
    this.getAll();
  }

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
