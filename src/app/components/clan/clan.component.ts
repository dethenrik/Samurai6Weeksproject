
import { Component, Input } from '@angular/core';
import { Clan } from 'src/app/models/Clan';
import { GenericService } from 'src/app/services/generic.service';
@Component({
  selector: 'app-round-card',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent {

  clanImages: Clan[] = [];

  constructor(private service: GenericService<Clan>) {}

  ngOnInit(): void {
    this.getClanImages();
  }

  getClanImages(): void {
    this.service.getAll('clan').subscribe(data => {
      this.clanImages = data;
    });
  }
}
