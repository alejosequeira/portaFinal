import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/servicios/education.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/education';
@Component({
  selector: 'app-actualizar-education',
  templateUrl: './actualizar-education.component.html',
  styleUrls: ['./actualizar-education.component.css']
})
export class ActualizarEducationComponent implements OnInit {

  id:number;
  education:Education = new Education();
  constructor(private educationService:EducationService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.educationService.obtenerEducationPorId(this.id).subscribe(dato =>{
      this.education = dato;
    },error => console.log(error));
  }

  irAlaListaDeEducation(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.educationService.actualizarEducation(this.id,this.education).subscribe(dato => {
      this.irAlaListaDeEducation();
    },error => console.log(error));
  }
}
