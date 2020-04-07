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

  constructor() { }

  ngOnInit() {
  }

}
