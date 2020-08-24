import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';
import { ChallangesScreenComponent } from './components/challanges-screen/challanges-screen.component';
import { CloseChallangeComponent } from './components/close-challange/close-challange.component';
import { MyBetsComponent } from './components/my-bets/my-bets.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileScreenComponent, ChallangesScreenComponent, CloseChallangeComponent, MyBetsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
