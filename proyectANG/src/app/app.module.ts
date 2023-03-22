import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulosComponent } from './components/education/modulos.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfobasicaComponent } from './components/encabezado/infobasica/infobasica.component';
import { SkillsComponent } from './components/encabezado/skills/skills.component';
import { LanguagesComponent } from './components/encabezado/languages/languages.component';
import {HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
@NgModule({
  declarations: [
    AppComponent,
    ModulosComponent,
    EncabezadoComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    InfobasicaComponent,
    SkillsComponent,
    LanguagesComponent,
    ButtonComponent,
    ProyectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
