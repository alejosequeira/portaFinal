import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
 //Esta URL obtiene el listado de todos los Skillss en el backend
 private URL = "http://localhost:8080/api/v2/skills";

 constructor(private httpClient : HttpClient) { }

 //este metodo nos sirve para obtener los skills
 obtenerListaDeSkills():Observable<Skills[]>{
   return this.httpClient.get<Skills[]>(`${this.URL}`);
 }

 //este metodo nos sirve para registrar un Skills
 registrarSkills(skills:Skills) : Observable<Object>{
   return this.httpClient.post(`${this.URL}`,skills);
 }

 //este metodo sirve para actualizar el Skills
 actualizarSkills(id:number,skills:Skills) : Observable<Object>{
   return this.httpClient.put(`${this.URL}/${id}`,skills);
 }

 //este metodo sirve para obtener o buscar un Skills
 obtenerSkillsPorId(id:number):Observable<Skills>{
   return this.httpClient.get<Skills>(`${this.URL}/${id}`);
 }

 eliminarSkills(id:number): Observable<Object>{
   return this.httpClient.delete(`${this.URL}/${id}`);
 }
}
