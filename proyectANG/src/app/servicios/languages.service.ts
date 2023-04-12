import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Languages } from '../languages';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

 //Esta URL obtiene el listado de todos los languagess en el backend
 private URL = "http://localhost:8080/api/v2/languages";

 constructor(private httpClient : HttpClient) { }

 //este metodo nos sirve para obtener los languages
 obtenerListaDeLanguages():Observable<Languages[]>{
   return this.httpClient.get<Languages[]>(`${this.URL}`);
 }

 //este metodo nos sirve para registrar un languages
 registrarLanguages(languages:Languages) : Observable<Object>{
   return this.httpClient.post(`${this.URL}`,languages);
 }

 //este metodo sirve para actualizar el languages
 actualizarLanguages(id:number,languages:Languages) : Observable<Object>{
   return this.httpClient.put(`${this.URL}/${id}`,languages);
 }

 //este metodo sirve para obtener o buscar un languages
 obtenerLanguagesPorId(id:number):Observable<Languages>{
   return this.httpClient.get<Languages>(`${this.URL}/${id}`);
 }

 eliminarLanguages(id:number): Observable<Object>{
   return this.httpClient.delete(`${this.URL}/${id}`);
 }
}