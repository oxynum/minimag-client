/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BagComponent } from './bag.component';

describe('BagComponent', () => {
  let component: BagComponent;
  let fixture: ComponentFixture<BagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
