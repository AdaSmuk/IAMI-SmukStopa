import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagDesingComponent } from './bag-desing.component';

describe('BagDesingComponent', () => {
  let component: BagDesingComponent;
  let fixture: ComponentFixture<BagDesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagDesingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
