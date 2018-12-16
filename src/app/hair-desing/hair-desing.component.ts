import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hair-desing',
  templateUrl: './hair-desing.component.html',
  styleUrls: ['./hair-desing.component.scss']
})
export class HairDesingComponent implements OnInit {

  public matGridOver: boolean[];

  constructor() { }

  ngOnInit() {
    this.matGridOver = [];
    this.matGridOver.fill(false, 0, 3);
  }

  public changeMatGridOver(index: number): void {
    this.matGridOver[index] = this.matGridOver[index] === true ? false : true;
  }

}
