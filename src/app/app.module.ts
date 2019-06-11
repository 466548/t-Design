import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { MenuComponent } from './container/nav/menu/menu.component';
import { NavComponent } from './container/nav/nav.component';
import { LogoComponent } from './container/nav/logo/logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconLabelComponent } from './icon-label/icon-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    InputComponent,
    LabelComponent,
    MenuComponent,
    NavComponent,
    LogoComponent,
    IconLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
