import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ContactComponent } from './components/contact/contact.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ActualizarAboutComponent } from './components/about/actualizar-about/actualizar-about.component';
import { ListarAboutComponent } from './components/about/listar-about/listar-about.component';
import { RegistrarAboutComponent } from './components/about/registrar-about/registrar-about.component';
import { RegistrarInfoComponent } from './components/encabezado/infobasica/registrar-info/registrar-info.component';
import { ListarInfoComponent } from './components/encabezado/infobasica/listar-info/listar-info.component';
import { ActualizarInfoComponent } from './components/encabezado/infobasica/actualizar-info/actualizar-info.component';
import { ActualizarSkillsComponent } from './components/encabezado/skills/actualizar-skills/actualizar-skills.component';
import { ListarSkillsComponent } from './components/encabezado/skills/listar-skills/listar-skills.component';
import { RegistrarSkillsComponent } from './components/encabezado/skills/registrar-skills/registrar-skills.component';
import { RegistrarLanguagesComponent } from './components/encabezado/languages/registrar-languages/registrar-languages.component';
import { ActualizarLanguagesComponent } from './components/encabezado/languages/actualizar-languages/actualizar-languages.component';
import { ListarLanguagesComponent } from './components/encabezado/languages/listar-languages/listar-languages.component';
import { ListarWorkComponent } from './components/work/listar-work/listar-work.component';
import { RegistrarWorkComponent } from './components/work/registrar-work/registrar-work.component';
import { ActualizarWorkComponent } from './components/work/actualizar-work/actualizar-work.component';
import { ActualizarProyectsComponent } from './components/proyects/actualizar-proyects/actualizar-proyects.component';
import { RegistrarProyectsComponent } from './components/proyects/registrar-proyects/registrar-proyects.component';
import { ListarProyectsComponent } from './components/proyects/listar-proyects/listar-proyects.component';
import { PhotoGalleryComponent } from './components/encabezado/photo-gallery/photo-gallery.component';
import { RegistrarUsuarioComponent } from './components/iniciar-sesion/registrar-usuario/registrar-usuario.component';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';
import { PortofolioDosComponent } from './components/portofolio-dos/portofolio-dos.component';
import { ListarEduComponent } from './components/portofolio-dos/listar-edu/listar-edu.component';
import { ListarWorComponent } from './components/portofolio-dos/listar-wor/listar-wor.component';
import { ListarProComponent } from './components/portofolio-dos/listar-pro/listar-pro.component';
import { ListarAboComponent } from './components/portofolio-dos/listar-abo/listar-abo.component';
import { EncaComponent } from './components/portofolio-dos/enca/enca.component';
import { ListarInfComponent } from './components/portofolio-dos/enca/listar-inf/listar-inf.component';
import { ListarLanComponent } from './components/portofolio-dos/enca/listar-lan/listar-lan.component';
import { ListarSkiComponent } from './components/portofolio-dos/enca/listar-ski/listar-ski.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ContactComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    RegistrarEmpleadosComponent,
    ActualizarEmpleadosComponent,
    ListarEmpleadosComponent,
    DetallesEmpleadosComponent,
    ListarEducationComponent,
    ActualizarEducationComponent,
    RegistrarEducationComponent,
    ActualizarAboutComponent,
    ListarAboutComponent,
    RegistrarAboutComponent,
    RegistrarInfoComponent,
    ListarInfoComponent,
    ActualizarInfoComponent,
    ActualizarSkillsComponent,
    ListarSkillsComponent,
    RegistrarSkillsComponent,
    RegistrarLanguagesComponent,
    ActualizarLanguagesComponent,
    ListarLanguagesComponent,
    ListarWorkComponent,
    RegistrarWorkComponent,
    ActualizarWorkComponent,
    ActualizarProyectsComponent,
    RegistrarProyectsComponent,
    ListarProyectsComponent,
    PhotoGalleryComponent,
    RegistrarUsuarioComponent,
    CerrarSesionComponent,
    PortofolioDosComponent,
    ListarEduComponent,
    ListarWorComponent,
    ListarProComponent,
    ListarAboComponent,
    EncaComponent,
    ListarInfComponent,
    ListarLanComponent,
    ListarSkiComponent,
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
