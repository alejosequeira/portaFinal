import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta URL obtiene el listado de todos los empleados en el backend
  private URL = "https://portfolioback-jrnq.onrender.com/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.URL}`);
  }

  //este metodo nos sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.httpClient.post(`${this.URL}`,empleado);
  }

  //este metodo sirve para actualizar el empleado
  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.URL}/${id}`,empleado);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.URL}/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
}
