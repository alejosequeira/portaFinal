import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/aboutme';
import { AboutMeService } from 'src/app/servicios/aboutme.service';

@Component({
  selector: 'app-listar-about',
  templateUrl: './listar-about.component.html',
  styleUrls: ['./listar-about.component.css']
})
export class ListarAboutComponent implements OnInit{
    abo: AboutMe[];
  
    
    constructor(private aboutmeServicio:AboutMeService,private router:Router) { }
  
    ngOnInit(): void {
      this.obtenerAboutMe();
    }
    ngOnChanges(): void {
      this.obtenerAboutMe();
    }
  
    actualizarAboutMe(id:number){
      this.router.navigate(['actualizar-about',id]);
      console.log("ejecu act");
              this.obtenerAboutMe();
    }
    registrarAboutMe(){
      this.router.navigate(['/registrar-about']);
    }
  
    private obtenerAboutMe(){
      this.aboutmeServicio.obtenerListaDeAboutMe().subscribe(dato => {
        this.abo = dato;
      });
    }
  
      eliminarAboutMe(id:number){
              this.aboutmeServicio.eliminarAboutMe(id).subscribe(dato => {
              console.log(dato);
              this.obtenerAboutMe();
             })
          }
        
    verDetallesDelAboutMe(id:number){
      this.router.navigate(['/portfolio',id]);
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