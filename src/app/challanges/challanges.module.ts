import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallangesRoutingModule } from './challanges-routing.module';
import { ChallangesScreenComponent } from './components/challanges-screen/challanges-screen.component';
import { ChallangesListComponent } from './components/challanges-list/challanges-list.component';
import { AddChallangeComponent } from './components/add-challange/add-challange.component';
import { ChallangeDetailsComponent } from './components/challange-details/challange-details.component';
import { BetChallangeComponent } from './components/bet-challange/bet-challange.component';


@NgModule({
  declarations: [ChallangesScreenComponent, ChallangesListComponent, AddChallangeComponent, ChallangeDetailsComponent, BetChallangeComponent],
  imports: [
    CommonModule,
    ChallangesRoutingModule
  ]
})
export class ChallangesModule { }
