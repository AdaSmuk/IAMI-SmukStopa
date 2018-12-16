import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairDesingComponent } from './hair-desing.component';

describe('HairDesingComponent', () => {
  let component: HairDesingComponent;
  let fixture: ComponentFixture<HairDesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairDesingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
