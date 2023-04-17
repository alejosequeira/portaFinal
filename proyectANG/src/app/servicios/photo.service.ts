import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private baseUrl = 'https://portfolioback-jrnq.onrender.com/api/v2/photo';

  constructor(private http: HttpClient) {}

  getAllPhotos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPhotoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/`);
  }

  uploadPhoto(photoFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('photo', photoFile);
    return this.http.post(`${this.baseUrl}`, formData);
  }

  updatePhoto(id: number, photoData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/`, photoData);
  }

  deletePhoto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}/`);
  }
}