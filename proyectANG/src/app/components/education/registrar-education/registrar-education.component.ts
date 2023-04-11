import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-registrar-education',
  templateUrl: './registrar-education.component.html',
  styleUrls: ['./registrar-education.component.css']
})
export class RegistrarEducationComponent implements OnInit{

  education : Education = new Education();
  constructor(private educationServicio:EducationService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarEducation(){
    this.educationServicio.registrarEducation(this.education).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEducation();
    },error => console.log(error));
  }

  irALaListaDeEducation(){
    this.router.navigate(['/listar-education']);
    
  }

  onSubmit(){
    this.guardarEducation();
  }
}
