import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingModule } from './shared/components/loading/loading.module';
import { EjercicioNgifNgforComponent } from './ejercicios/ejercicio-ngif-ngfor/ejercicio-ngif-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioNgifNgforComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
