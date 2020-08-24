import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangesScreenComponent } from './challanges-screen.component';

describe('ChallangesScreenComponent', () => {
  let component: ChallangesScreenComponent;
  let fixture: ComponentFixture<ChallangesScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallangesScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallangesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
