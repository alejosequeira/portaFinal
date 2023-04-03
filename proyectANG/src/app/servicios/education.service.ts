import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
 
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
  

}
