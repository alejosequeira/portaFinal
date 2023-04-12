import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkService } from 'src/app/servicios/work.service';
import { Work } from 'src/app/work';

@Component({
  selector: 'app-listar-work',
  templateUrl: './listar-work.component.html',
  styleUrls: ['./listar-work.component.css']
})
export class ListarWorkComponent implements OnInit{
  works: Work[];

  
  constructor(private workServicio:WorkService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerWork();
  }
  ngOnChanges(): void {
    this.obtenerWork();
  }

  actualizarWork(id:number){
    this.router.navigate(['actualizar-work',id]);
    console.log("ejecu act");
            this.obtenerWork();
  }
  registrarWork(){
    this.router.navigate(['registrar-work']);
  }

  private obtenerWork(){
    this.workServicio.obtenerListaDeWork().subscribe(dato => {
      this.works = dato;
    });
  }

    eliminarWork(id:number){
            this.workServicio.eliminarWork(id).subscribe(dato => {
            console.log(dato);
            this.obtenerWork();
           })
        }
      
  verDetallesDelWork(id:number){
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