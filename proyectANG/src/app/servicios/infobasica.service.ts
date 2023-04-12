import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoBasica } from '../infobasica';

@Injectable({
  providedIn: 'root'
})
export class InfoBasicaService {

   //Esta URL obtiene el listado de todos los InfoBasicas en el backend
   private URL = "http://localhost:8080/api/v2/info";

   constructor(private httpClient : HttpClient) { }
 
   //este metodo nos sirve para obtener los InfoBasicas
   obtenerListaDeInfoBasica():Observable<InfoBasica[]>{
     return this.httpClient.get<InfoBasica[]>(`${this.URL}`);
   }
 
   //este metodo nos sirve para registrar un InfoBasica
   registrarInfoBasica(infobasica:InfoBasica) : Observable<Object>{
     return this.httpClient.post(`${this.URL}`,infobasica);
   }
 
   //este metodo sirve para actualizar el InfoBasica
   actualizarInfoBasica(id:number,infobasica:InfoBasica) : Observable<Object>{
     return this.httpClient.put(`${this.URL}/${id}`,infobasica);
   }
 
   //este metodo sirve para obtener o buscar un InfoBasica
   obtenerInfoBasicaPorId(id:number):Observable<InfoBasica>{
     return this.httpClient.get<InfoBasica>(`${this.URL}/${id}`);
   }
 
   eliminarInfoBasica(id:number): Observable<Object>{
     return this.httpClient.delete(`${this.URL}/${id}`);
   }
}
