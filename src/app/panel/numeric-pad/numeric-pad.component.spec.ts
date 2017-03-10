/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumericPadComponent } from './numeric-pad.component';

describe('NumericPadComponent', () => {
  let component: NumericPadComponent;
  let fixture: ComponentFixture<NumericPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
