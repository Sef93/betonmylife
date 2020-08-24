import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPwScreenComponent } from './forgot-pw-screen.component';

describe('ForgotPwScreenComponent', () => {
  let component: ForgotPwScreenComponent;
  let fixture: ComponentFixture<ForgotPwScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPwScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPwScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
