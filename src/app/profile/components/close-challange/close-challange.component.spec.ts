import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseChallangeComponent } from './close-challange.component';

describe('CloseChallangeComponent', () => {
  let component: CloseChallangeComponent;
  let fixture: ComponentFixture<CloseChallangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseChallangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
