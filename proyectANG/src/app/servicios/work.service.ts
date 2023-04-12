import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Work } from '../work';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  //Esta URL obtiene el listado de todos los empleados en el backend
  private URL = "http://localhost:8080/api/v2/work";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener las work
  obtenerListaDeWork():Observable<Work[]>{
    return this.httpClient.get<Work[]>(`${this.URL}`);
  }

  //este metodo nos sirve para registrar una work
  registrarWork(work:Work) : Observable<Object>{
    return this.httpClient.post(`${this.URL}`,work);
  }

  //este metodo sirve para actualizar el empleado
  actualizarWork(id:number,work:Work) : Observable<Object>{
    return this.httpClient.put(`${this.URL}/${id}`,work);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerWorkPorId(id:number):Observable<Work>{
    return this.httpClient.get<Work>(`${this.URL}/${id}`);
  }

  eliminarWork(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
}
