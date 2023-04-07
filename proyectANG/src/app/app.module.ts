import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfobasicaComponent } from './components/encabezado/infobasica/infobasica.component';
import { SkillsComponent } from './components/encabezado/skills/skills.component';
import { LanguagesComponent } from './components/encabezado/languages/languages.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { EnvironmentProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { RegistrarEmpleadosComponent } from './components/empleados/registrar-empleados/registrar-empleados.component';
import { ActualizarEmpleadosComponent } from './components/empleados/actualizar-empleados/actualizar-empleados.component';
import { ListarEmpleadosComponent } from './components/empleados/listar-empleados/listar-empleados.component';
import { DetallesEmpleadosComponent } from './components/empleados/detalles-empleados/detalles-empleados.component';
import { ListarEducationComponent } from './components/education/listar-education/listar-education.component';
import { ActualizarEducationComponent } from './components/education/actualizar-education/actualizar-education.component';
import { RegistrarEducationComponent } from './components/education/registrar-education/registrar-education.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    InfobasicaComponent,
    SkillsComponent,
    LanguagesComponent,
    ProyectsComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    RegistrarEmpleadosComponent,
    ActualizarEmpleadosComponent,
    ListarEmpleadosComponent,
    DetallesEmpleadosComponent,
    ListarEducationComponent,
    ActualizarEducationComponent,
    RegistrarEducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [PortfolioService,
    { provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
