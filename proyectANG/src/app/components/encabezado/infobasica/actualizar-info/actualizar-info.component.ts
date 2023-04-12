import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoBasica } from 'src/app/infobasica';
import { InfoBasicaService } from 'src/app/servicios/infobasica.service';

@Component({
  selector: 'app-actualizar-info',
  templateUrl: './actualizar-info.component.html',
  styleUrls: ['./actualizar-info.component.css']
})
export class ActualizarInfoComponent implements OnInit {

  id:number;
  info:InfoBasica = new InfoBasica();
  constructor(private infobasicaService:InfoBasicaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.infobasicaService.obtenerInfoBasicaPorId(this.id).subscribe(dato =>{
      this.info = dato;
    },error => console.log(error));
  }

  irAlaListaDeInfoBasica(){
    this.router.navigate(['/listar-info']);
  }

  onSubmit(){
    this.infobasicaService.actualizarInfoBasica(this.id,this.info).subscribe(dato => {
      this.irAlaListaDeInfoBasica();
    },error => console.log(error));
  }
}