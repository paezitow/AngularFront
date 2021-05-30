import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FormsModule } from '@angular/forms';
import { StockCardComponent } from './stock-card/stock-card.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    StockCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[

  ]
})
export class DashboardModule { }
