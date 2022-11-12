import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoComponent } from './yo/yo.component';
import { MascotasComponent } from './mascotas/mascotas.component';

@NgModule({
  declarations: [
    AppComponent,
    YoComponent,
    MascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
