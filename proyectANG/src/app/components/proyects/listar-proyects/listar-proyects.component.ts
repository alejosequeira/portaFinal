import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyects } from 'src/app/proyects';
import { ProyectsService } from 'src/app/servicios/proyects.service';

@Component({
  selector: 'app-listar-proyects',
  templateUrl: './listar-proyects.component.html',
  styleUrls: ['./listar-proyects.component.css']
})
export class ListarProyectsComponent implements OnInit{
  proyectss: Proyects[];

  
  constructor(private proyectsServicio:ProyectsService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerProyects();
  }
  ngOnChanges(): void {
    this.obtenerProyects();
  }

  actualizarProyects(id:number){
    this.router.navigate(['actualizar-proyects',id]);
    console.log("ejecu act");
            this.obtenerProyects();
  }
  registrarProyects(){
    this.router.navigate(['registrar-proyects']);
  }

  private obtenerProyects(){
    this.proyectsServicio.obtenerListaDeProyects().subscribe(dato => {
      this.proyectss = dato;
    });
  }

    eliminarProyects(id:number){
            this.proyectsServicio.eliminarProyects(id).subscribe(dato => {
            console.log(dato);
            this.obtenerProyects();
           })
        }
      
  verDetallesDelProyects(id:number){
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
