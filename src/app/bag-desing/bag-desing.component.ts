import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag-desing',
  templateUrl: './bag-desing.component.html',
  styleUrls: ['./bag-desing.component.scss']
})
export class BagDesingComponent implements OnInit {

  public matGridOver: boolean[];

  constructor() { }

  ngOnInit() {
    this.matGridOver = [];
    this.matGridOver.fill(false, 0, 2);
  }

  public changeMatGridOver(index: number): void {
    this.matGridOver[index] = this.matGridOver[index] === true ? false : true;
  }

}
