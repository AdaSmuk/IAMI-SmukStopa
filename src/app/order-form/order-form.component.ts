import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public startDate: Date;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.startDate = this.getStartDate();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', [Validators.required, Validators.email]]
    });
  }

  private getStartDate(): Date {
    const today: Date = new Date;
    if (today.getMonth() === 11) {
      today.setMonth(0);
      today.setFullYear(today.getFullYear() + 1);
      return today;
    } else {
      today.setMonth(today.getMonth() + 1);
      return today;
    }
  }

}
