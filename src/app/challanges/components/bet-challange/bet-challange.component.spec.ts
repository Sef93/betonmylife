import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetChallangeComponent } from './bet-challange.component';

describe('BetChallangeComponent', () => {
  let component: BetChallangeComponent;
  let fixture: ComponentFixture<BetChallangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetChallangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
