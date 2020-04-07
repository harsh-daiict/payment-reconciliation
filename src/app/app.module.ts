import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportFilterComponent } from './report-filter/report-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent,
    ReportsComponent,
    ReportFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
