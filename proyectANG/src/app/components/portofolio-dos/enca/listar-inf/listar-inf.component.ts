import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoBasica } from 'src/app/infobasica';
import { InfoBasicaService } from 'src/app/servicios/infobasica.service';
@Component({
  selector: 'app-listar-inf',
  templateUrl: './listar-inf.component.html',
  styleUrls: ['./listar-inf.component.css']
})
export class ListarInfComponent implements OnInit {

  infu:InfoBasica[];

  constructor(private infobasicaServicio:InfoBasicaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerInfoBasica();
  }
  ngOnChanges(): void {
    this.obtenerInfoBasica();
  }
  private obtenerInfoBasica(){
    this.infobasicaServicio.obtenerListaDeInfoBasica().subscribe(dato => {
      this.infu = dato;
    });
  }
/*
  actualizarInfoBasica(id:number){
    this.router.navigate(['actualizar-info',id]);
  }

  registrarInfo(){
    this.router.navigate(['/registrar-info']);
  }

 

    eliminarInfoBasica(id:number){
            this.infobasicaServicio.eliminarInfoBasica(id).subscribe(dato => {
            console.log(dato);
            this.obtenerInfoBasica();
           })
        }
      
  verDetallesDelInfoBasica(id:number){
    this.router.navigate(['listar-info',id]);
  }*/
}
