import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadosComponent } from './components/empleados/actualizar-empleados/actualizar-empleados.component';
import { DetallesEmpleadosComponent } from './components/empleados/detalles-empleados/detalles-empleados.component';
import { ListarEmpleadosComponent } from './components/empleados/listar-empleados/listar-empleados.component';
import { RegistrarEmpleadosComponent } from './components/empleados/registrar-empleados/registrar-empleados.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegistrarEducationComponent } from './components/education/registrar-education/registrar-education.component';
import { ListarEducationComponent } from './components/education/listar-education/listar-education.component';
import { ActualizarEducationComponent } from './components/education/actualizar-education/actualizar-education.component';
import { RegistrarAboutComponent } from './components/about/registrar-about/registrar-about.component';
import { ActualizarAboutComponent } from './components/about/actualizar-about/actualizar-about.component';
import { ListarAboutComponent } from './components/about/listar-about/listar-about.component';
import { RegistrarInfoComponent } from './components/encabezado/infobasica/registrar-info/registrar-info.component';
import { ListarInfoComponent } from './components/encabezado/infobasica/listar-info/listar-info.component';
import { ActualizarInfoComponent } from './components/encabezado/infobasica/actualizar-info/actualizar-info.component';
import { RegistrarSkillsComponent } from './components/encabezado/skills/registrar-skills/registrar-skills.component';
import { ListarSkillsComponent } from './components/encabezado/skills/listar-skills/listar-skills.component';
import { ActualizarSkillsComponent } from './components/encabezado/skills/actualizar-skills/actualizar-skills.component';
import { RegistrarLanguagesComponent } from './components/encabezado/languages/registrar-languages/registrar-languages.component';
import { ListarLanguagesComponent } from './components/encabezado/languages/listar-languages/listar-languages.component';
import { ActualizarLanguagesComponent } from './components/encabezado/languages/actualizar-languages/actualizar-languages.component';
import { RegistrarWorkComponent } from './components/work/registrar-work/registrar-work.component';
import { ListarWorkComponent } from './components/work/listar-work/listar-work.component';
import { ActualizarWorkComponent } from './components/work/actualizar-work/actualizar-work.component';
import { RegistrarProyectsComponent } from './components/proyects/registrar-proyects/registrar-proyects.component';
import { ListarProyectsComponent } from './components/proyects/listar-proyects/listar-proyects.component';
import { ActualizarProyectsComponent } from './components/proyects/actualizar-proyects/actualizar-proyects.component';
import { PhotoGalleryComponent } from './components/encabezado/photo-gallery/photo-gallery.component';

const routes: Routes = [
  //aca seria {path}:'portfolio-button',component:PortfolioButtonComponent};
  {path:'portfolio',component:PortfolioComponent},
  {path:'photo-gallery', component: PhotoGalleryComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'},

  {path : 'empleados',component:ListarEmpleadosComponent},
  {path : 'registrar-empleado',component : RegistrarEmpleadosComponent},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadosComponent},
  {path : 'empleado-detalles/:id',component : DetallesEmpleadosComponent},

  {path : 'registrar-education', component : RegistrarEducationComponent},
  {path : 'listar-education', component: ListarEducationComponent},
  {path : 'actualizar-education/:id', component: ActualizarEducationComponent},

  {path : 'registrar-about', component : RegistrarAboutComponent},
  {path : 'listar-about', component : ListarAboutComponent},
  {path : 'actualizar-about/:id', component : ActualizarAboutComponent},

  {path : 'registrar-info', component : RegistrarInfoComponent},
  {path : 'listar-info', component : ListarInfoComponent},
  {path : 'actualizar-info/:id', component: ActualizarInfoComponent},

  {path : 'registrar-skills', component : RegistrarSkillsComponent},
  {path : 'listar-skills', component : ListarSkillsComponent},
  {path : 'actualizar-skills/:id', component : ActualizarSkillsComponent},

  {path : 'registrar-languages', component : RegistrarLanguagesComponent},
  {path : 'listar-languages', component : ListarLanguagesComponent},
  {path : 'actualizar-languages/:id', component : ActualizarLanguagesComponent},

  {path : 'registrar-work', component : RegistrarWorkComponent},
  {path : 'listar-work', component : ListarWorkComponent},
  {path : 'actualizar-work/:id', component : ActualizarWorkComponent},

  {path : 'registrar-proyects', component : RegistrarProyectsComponent},
  {path : 'listar-proyects', component : ListarProyectsComponent},
  {path : 'actualizar-proyects/:id', component : ActualizarProyectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
