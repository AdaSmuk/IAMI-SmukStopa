import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletDesingComponent } from './wallet-desing.component';

describe('WalletDesingComponent', () => {
  let component: WalletDesingComponent;
  let fixture: ComponentFixture<WalletDesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletDesingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
