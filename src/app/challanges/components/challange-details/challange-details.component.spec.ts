import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeDetailsComponent } from './challange-details.component';

describe('ChallangeDetailsComponent', () => {
  let component: ChallangeDetailsComponent;
  let fixture: ComponentFixture<ChallangeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallangeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallangeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
