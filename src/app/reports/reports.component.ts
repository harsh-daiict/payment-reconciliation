import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Order} from '../domains/Order';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  data : MatTableDataSource<Order>;

  displayedColumns = ['orderId', 'orderDate', 'orderAmount', 'orderStatus', 'deliveryDate', 'orderReturnId', 'orderPayment', 'transactionId', 'transactionDate'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface ReportTableData {
  orderId: number;
  orderDate: string;
  orderAmount: number;
  orderStatus: string;
  deliveryDate: string;
  orderReturnId: number;
  orderPayment: boolean;
  transactionId: number;
  transactionDate: string;
}

const ELEMENT_DATA: ReportTableData[] = [
  { orderId: 1, orderDate: '2020-05-20', orderAmount: 1000, orderStatus: 'A', deliveryDate: '2020-05-22', orderReturnId: 1, orderPayment: true, transactionId: 1, transactionDate: '2020-05-20' },
  { orderId: 2, orderDate: '2020-05-21', orderAmount: 1500, orderStatus: 'B', deliveryDate: '2020-05-23', orderReturnId: 2, orderPayment: false, transactionId: 2, transactionDate: '2020-05-21' },
  { orderId: 3, orderDate: '2020-05-22', orderAmount: 500, orderStatus: 'A', deliveryDate: '2020-05-24', orderReturnId: 3, orderPayment: true, transactionId: 3, transactionDate: '2020-05-22' },
  { orderId: 4, orderDate: '2020-05-23', orderAmount: 1200, orderStatus: 'A', deliveryDate: '2020-05-25', orderReturnId: 4, orderPayment: false, transactionId: 4, transactionDate: '2020-05-23' },
  { orderId: 5, orderDate: '2020-05-24', orderAmount: 1700, orderStatus: 'D', deliveryDate: '2020-05-26', orderReturnId: 5, orderPayment: true, transactionId: 5, transactionDate: '2020-05-24' },
  { orderId: 6, orderDate: '2020-05-25', orderAmount: 400, orderStatus: 'B', deliveryDate: '2020-05-27', orderReturnId: 6, orderPayment: true, transactionId: 6, transactionDate: '2020-05-25' },
  { orderId: 7, orderDate: '2020-05-26', orderAmount: 1400, orderStatus: 'C', deliveryDate: '2020-05-28', orderReturnId: 7, orderPayment: false, transactionId: 7, transactionDate: '2020-05-26' },
  { orderId: 8, orderDate: '2020-05-27', orderAmount: 1600, orderStatus: 'A', deliveryDate: '2020-05-29', orderReturnId: 8, orderPayment: true, transactionId: 8, transactionDate: '2020-05-27' },
  { orderId: 9, orderDate: '2020-05-28', orderAmount: 800, orderStatus: 'C', deliveryDate: '2020-05-30', orderReturnId: 9, orderPayment: true, transactionId: 9, transactionDate: '2020-05-28' },
  { orderId: 10, orderDate: '2020-05-29', orderAmount: 2000, orderStatus: 'A', deliveryDate: '2020-05-31', orderReturnId: 10, orderPayment: false, transactionId: 10, transactionDate: '2020-05-29' }
  ];
