import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutMe } from '../aboutme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  //Esta URL obtiene el listado de todos los AboutMes en el backend
  private URL = "https://portfolioback-jrnq.onrender.com/api/v2/about";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los AboutMes
  obtenerListaDeAboutMe():Observable<AboutMe[]>{
    return this.httpClient.get<AboutMe[]>(`${this.URL}`);
  }

  //este metodo nos sirve para registrar un AboutMe
  registrarAboutMe(aboutme:AboutMe) : Observable<Object>{
    return this.httpClient.post(`${this.URL}`,aboutme);
  }

  //este metodo sirve para actualizar el AboutMe
  actualizarAboutMe(id:number,aboutme:AboutMe) : Observable<Object>{
    return this.httpClient.put(`${this.URL}/${id}`,aboutme);
  }

  //este metodo sirve para obtener o buscar un AboutMe
  obtenerAboutMePorId(id:number):Observable<AboutMe>{
    return this.httpClient.get<AboutMe>(`${this.URL}/${id}`);
  }

  eliminarAboutMe(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
}

