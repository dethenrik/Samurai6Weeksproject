import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmourComponent } from './armour.component';

describe('ArmourComponent', () => {
  let component: ArmourComponent;
  let fixture: ComponentFixture<ArmourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmourComponent]
    });
    fixture = TestBed.createComponent(ArmourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
