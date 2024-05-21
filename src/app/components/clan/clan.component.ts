
import { Component, Input } from '@angular/core';
import { Clan } from 'src/app/models/Clan';
import { GenericService } from 'src/app/services/generic.service';
@Component({
  selector: 'app-round-card',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent {

  //initializing the list
  clanImages: Clan[] = [];

  constructor(private service: GenericService<Clan>) {}
// getall will run when Angular initializes the component. 
  ngOnInit(): void {
    this.getClanImages();
  }
//I call the getall method from generic.service.ts.//
//I call a table called frontpage and it want it in a list of arrays//
  getClanImages(): void {
    this.service.getAll('clan').subscribe(data => {
      this.clanImages = data;
    });
  }
}
