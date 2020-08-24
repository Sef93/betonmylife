import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangesListComponent } from './challanges-list.component';

describe('ChallangesListComponent', () => {
  let component: ChallangesListComponent;
  let fixture: ComponentFixture<ChallangesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallangesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallangesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
