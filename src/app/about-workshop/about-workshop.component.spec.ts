import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkshopComponent } from './about-workshop.component';

describe('AboutWorkshopComponent', () => {
  let component: AboutWorkshopComponent;
  let fixture: ComponentFixture<AboutWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
