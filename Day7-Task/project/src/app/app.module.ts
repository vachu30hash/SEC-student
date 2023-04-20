import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
