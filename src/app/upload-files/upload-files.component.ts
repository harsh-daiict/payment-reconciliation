import { Component, OnInit } from '@angular/core';

import { IpcRenderer } from 'electron';
import {MESSAGES} from '../util/messages';
import {MatSnackBar} from '@angular/material';

const electron = (<any>window).require('electron');
const ipc = electron.ipcRenderer;

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  company = '';
  uploadType = '';

  sendMessage() {
    if(this.company === '' || this.uploadType === '') {
      console.log("Please Select Company and Upload Type")
      //Show Error Message
      return;
    }
    if(this.uploadType === 'payment') ipc.send(MESSAGES.UPLOAD_PAYMENTS, this.company);
    if(this.uploadType === 'order') ipc.send(MESSAGES.UPLOAD_ORDERS, this.company);
  }

}
