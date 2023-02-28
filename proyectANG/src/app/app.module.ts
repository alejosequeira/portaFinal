import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ComponentsComponent } from './components/components.component';
import { ButtonComponent } from './components/button/button.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { WorkComponent } from './components/work/work.component';
import { InfobasicaComponent } from './encabezado/infobasica/infobasica.component';
import { LanguagesComponent } from './components/encabezado/languages/languages.component';
import { SkillsComponent } from './components/encabezado/skills/skills.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ComponentsComponent,
    ButtonComponent,
    ContactComponent,
    EducationComponent,
    EncabezadoComponent,
    WorkComponent,
    InfobasicaComponent,
    LanguagesComponent,
    SkillsComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
