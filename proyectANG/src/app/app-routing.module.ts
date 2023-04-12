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

const routes: Routes = [
  //aca seria {path}:'portfolio-button',component:PortfolioButtonComponent};
  {path:'portfolio',component:PortfolioComponent},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
