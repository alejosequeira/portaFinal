import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
 

  //Esta URL obtiene el listado de todos los empleados en el backend
  private URL = "http://localhost:8080/addUser";

  constructor(private httpClient : HttpClient) { }

  

  //este metodo nos sirve para registrar una userlogin
  registrarUserLogin(userlogin:UserLogin) : Observable<Object>{
    return this.httpClient.post(`${this.URL}`,userlogin);
  }

  eliminarUserLogin(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`);
  }


















/*
  url:string="localhost:8080/"
  currentUserSubject: any;
  constructor(private http:HttpClient) { }


  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.url+"ver/userlogin");
  }
  
  editaruserlogin(userlogin:any):Observable<any>{

    return this.http.put<any>(this.url+"edit/userlogin",userlogin). pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }));
  }

  agregaruserlogin (aggEdu:any):Observable<any>{

    return this.http.post(this.url+"new/userlogin", aggEdu). pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }
  
*/
}