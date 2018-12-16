import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-desing',
  templateUrl: './wallet-desing.component.html',
  styleUrls: ['./wallet-desing.component.scss']
})
export class WalletDesingComponent implements OnInit {

  public matGridOver: boolean[];

  constructor() { }

  ngOnInit() {
    this.matGridOver = [];
    this.matGridOver.fill(false, 0, 4);
  }

  public changeMatGridOver(index: number): void {
    this.matGridOver[index] = this.matGridOver[index] === true ? false : true;
  }

}
