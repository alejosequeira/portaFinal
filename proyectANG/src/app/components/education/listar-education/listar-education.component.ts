import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Education } from 'src/app/education';
import { EducationService } from 'src/app/servicios/education.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-education',
  templateUrl: './listar-education.component.html',
  styleUrls: ['./listar-education.component.css']
})
export class ListarEducationComponent implements OnInit{
  educations: Education[];

  
  constructor(private educationServicio:EducationService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerEducation();
  }
  ngOnChanges(): void {
    this.obtenerEducation();
  }

  actualizarEducation(id:number){
    this.router.navigate(['actualizar-education',id]);
  }
  registrarEducation(){
    this.router.navigate(['registrar-education']);
  }

  private obtenerEducation(){
    this.educationServicio.obtenerListaDeEducation().subscribe(dato => {
      this.educations = dato;
    });
  }

    eliminarEducation(id:number){
            this.educationServicio.eliminarEducation(id).subscribe(dato => {
            console.log(dato);
            this.obtenerEducation();
           })
        }
      
  verDetallesDelEducation(id:number){
    this.router.navigate(['portfolio',id]);
  }






  /*
  miPortFolio:any;
  constructor(private datosPortFolio: PortfolioService){}

  ngOnInit(): void {
    this.datosPortFolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortFolio=data;
    });
  }
  */
}