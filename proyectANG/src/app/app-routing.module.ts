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

const routes: Routes = [
  //aca seria {path}:'portfolio-button',component:PortfolioButtonComponent};
  {path:'portfolio',component:PortfolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'', redirectTo:'empleados', pathMatch:'full'},

  {path : 'empleados',component:ListarEmpleadosComponent},
  {path : 'registrar-empleado',component : RegistrarEmpleadosComponent},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadosComponent},
  {path : 'empleado-detalles/:id',component : DetallesEmpleadosComponent},

  {path : 'registrar-education', component : RegistrarEducationComponent},
  {path : 'listar-education', component: ListarEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
