import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SamuraiComponent } from './components/samurai/samurai.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeaponComponent } from './components/weapon/weapon.component';
import { ClanComponent } from './components/clan/clan.component';
import { HorseComponent } from './components/horse/horse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { ArmourComponent } from './components/armour/armour.component';
import { WarComponent } from './components/war/war.component';
@NgModule({
  declarations: [
    AppComponent,
    SamuraiComponent,
    WeaponComponent,
    ClanComponent,
    HorseComponent,
    LoginComponent,
    FrontpageComponent,
    HeaderComponent,
    AdminComponent,
    ArmourComponent,
    WarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
