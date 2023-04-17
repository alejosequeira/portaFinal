import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyects } from '../proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService{

  //Esta URL obtiene el listado de todos los empleados en el backend
  private URL = "https://portfolioback-jrnq.onrender.com/api/v2/proyects";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener las proyects
  obtenerListaDeProyects():Observable<Proyects[]>{
    return this.httpClient.get<Proyects[]>(`${this.URL}`);
  }

  //este metodo nos sirve para registrar una proyects
  registrarProyects(proyects:Proyects) : Observable<Object>{
    return this.httpClient.post(`${this.URL}`,proyects);
  }

  //este metodo sirve para actualizar el empleado
  actualizarProyects(id:number,proyects:Proyects) : Observable<Object>{
    return this.httpClient.put(`${this.URL}/${id}`,proyects);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerProyectsPorId(id:number):Observable<Proyects>{
    return this.httpClient.get<Proyects>(`${this.URL}/${id}`);
  }

  eliminarProyects(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
}
