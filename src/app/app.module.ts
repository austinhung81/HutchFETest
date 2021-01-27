import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    CoreModule,
    NzBreadCrumbModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
