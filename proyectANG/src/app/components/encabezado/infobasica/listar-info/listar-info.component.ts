import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoBasica } from 'src/app/infobasica';
import { InfoBasicaService } from 'src/app/servicios/infobasica.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-listar-info',
  templateUrl: './listar-info.component.html',
  styleUrls: ['./listar-info.component.css']
})
export class ListarInfoComponent implements OnInit {

  inf:InfoBasica[];

  constructor(private infobasicaServicio:InfoBasicaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerInfoBasica();
  }
  ngOnChanges(): void {
    this.obtenerInfoBasica();
  }

  actualizarInfoBasica(id:number){
    this.router.navigate(['actualizar-info',id]);
  }

  registrarInfo(){
    this.router.navigate(['/registrar-info']);
  }

  private obtenerInfoBasica(){
    this.infobasicaServicio.obtenerListaDeInfoBasica().subscribe(dato => {
      this.inf = dato;
    });
  }

    eliminarInfoBasica(id:number){
            this.infobasicaServicio.eliminarInfoBasica(id).subscribe(dato => {
            console.log(dato);
            this.obtenerInfoBasica();
           })
        }
      
  verDetallesDelInfoBasica(id:number){
    this.router.navigate(['listar-info',id]);
  }
}