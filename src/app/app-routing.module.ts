import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamuraiComponent } from './components/samurai/samurai.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { Armour } from './models/Armour';
import { Clan } from './models/Clan';
import { Horse } from './models/Horse';
import { War } from './models/War';
import { Weapon } from './models/Weapon';
import { ClanComponent } from './components/clan/clan.component';
import { HorseComponent } from './components/horse/horse.component';
import { WarComponent } from './components/war/war.component';
import { WeaponComponent } from './components/weapon/weapon.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ArmourComponent } from './components/armour/armour.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' }, // Default route
  {path:'admin', component: AdminComponent},
  {path:'login', component: LoginComponent},
  {path: 'frontpage', component: FrontpageComponent },
  {path: 'Samurai', component: SamuraiComponent },
  {path: 'Clan', component: ClanComponent },
  {path: 'Horse', component: HorseComponent },
  {path: 'War', component: WarComponent },
  {path: 'Weapon', component: WeaponComponent },
  {path: 'Armour', component: ArmourComponent },



  // Define other routes as needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
