import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  LocalePt  from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';


registerLocaleData(LocalePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID,
      useValue: 'pt-br'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { private http: HttpClientModule}





