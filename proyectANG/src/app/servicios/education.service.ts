import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Education } from '../education';
@Injectable({
  providedIn: 'root'
})
export class EducationService {
 

  //Esta URL obtiene el listado de todos los empleados en el backend
  private URL = "https://portfolioback-jrnq.onrender.com/api/v2/educationts";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener las education
  obtenerListaDeEducation():Observable<Education[]>{
    return this.httpClient.get<Education[]>(`${this.URL}`);
  }

  //este metodo nos sirve para registrar una education
  registrarEducation(education:Education) : Observable<Object>{
    return this.httpClient.post(`${this.URL}`,education);
  }

  //este metodo sirve para actualizar el empleado
  actualizarEducation(id:number,education:Education) : Observable<Object>{
    return this.httpClient.put(`${this.URL}/${id}`,education);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEducationPorId(id:number):Observable<Education>{
    return this.httpClient.get<Education>(`${this.URL}/${id}`);
  }

  eliminarEducation(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`);
  }


















/*
  url:string="localhost:8080/"
  currentUserSubject: any;
  constructor(private http:HttpClient) { }


  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.url+"ver/education");
  }
  
  editarEducation(education:any):Observable<any>{

    return this.http.put<any>(this.url+"edit/education",education). pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }));
  }

  agregarEducation (aggEdu:any):Observable<any>{

    return this.http.post(this.url+"new/education", aggEdu). pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }
  
*/
}
