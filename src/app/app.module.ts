import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaGarciaModule } from './Lista-garcia/lista-garcia.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ListaGarciaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
