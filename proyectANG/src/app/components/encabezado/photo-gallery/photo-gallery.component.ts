import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/servicios/photo.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  photos: any[] = [];
  selectedPhoto: any;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getAllPhotos().subscribe((data: any[]) => {
      this.photos = data;
    });
  }
  ngOnChanges(): void {
    this.photoService.getAllPhotos();
  }

  uploadPhoto(event: Event): void {
    const target = event.target as HTMLInputElement;
    const photoFile = (target.files as FileList)[0];
    this.photoService.uploadPhoto(photoFile).subscribe(() => {
      this.photoService.getAllPhotos().subscribe((data: any[]) => {
        this.photos = data;
      });
    });
  }

  selectPhoto(photo: any): void {
    this.selectedPhoto = photo;
  }

  updatePhoto(): void {
    this.photoService.updatePhoto(this.selectedPhoto.id, this.selectedPhoto).subscribe();
  }

  deletePhoto(): void {
    this.photoService.deletePhoto(this.selectedPhoto.id).subscribe(() => {
      this.photoService.getAllPhotos().subscribe((data: any[]) => {
        this.photos = data;
        this.selectedPhoto = null;
      });
    });
  }
}