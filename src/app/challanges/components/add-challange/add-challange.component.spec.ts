import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChallangeComponent } from './add-challange.component';

describe('AddChallangeComponent', () => {
  let component: AddChallangeComponent;
  let fixture: ComponentFixture<AddChallangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChallangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
