import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { MenuComponent } from './container/nav/menu/menu.component';
import { NavComponent } from './container/nav/nav.component';
import { LogoComponent } from './container/nav/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    InputComponent,
    LabelComponent,
    MenuComponent,
    NavComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
