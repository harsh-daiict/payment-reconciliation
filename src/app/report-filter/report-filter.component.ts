import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent, MatRadioChange} from '@angular/material';

@Component({
  selector: 'app-report-filter',
  templateUrl: './report-filter.component.html',
  styleUrls: ['./report-filter.component.css']
})
export class ReportFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  startDate;
  endDate;
  company : string;
  status : string;
  settelementType : string;
  paymentType : string;
  id = '';
  reportType = 'Order';
  isPaymentModeDisabled = true;

  onStartDateSelect(type: string, event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value;
    console.log(this.startDate);
  }

  onEndDateSelect(type: string, event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value;
    console.log(this.endDate);
  }

  onSettlementTypeChanged(event: MatRadioChange) {
    if(event.value === 'settled'){
      this.isPaymentModeDisabled = false;
    } else {
      this.paymentType = 'all'
      this.isPaymentModeDisabled = true;
    }
    this.settelementType = event.value
  }

  onPaymentTypeChanged(event: MatRadioChange) {
    this.paymentType = event.value;
  }

  onSubmitClick() {

  }

  creatFilter() {

  }
}
