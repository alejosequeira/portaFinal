import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Languages } from 'src/app/languages';
import { LanguagesService } from 'src/app/servicios/languages.service';

@Component({
  selector: 'app-listar-lan',
  templateUrl: './listar-lan.component.html',
  styleUrls: ['./listar-lan.component.css']
})
export class ListarLanComponent implements OnInit {

  lang:Languages[];

  constructor(private languagesServicio:LanguagesService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerLanguages();
  }
  ngOnChanges(): void {
    this.obtenerLanguages();
  }
  private obtenerLanguages(){
    this.languagesServicio.obtenerListaDeLanguages().subscribe(dato => {
      this.lang = dato;
    });
  }

  /*
  actualizarLanguages(id:number){
    this.router.navigate(['/actualizar-languages',id]);
  }

  registrarLanguages(){
    this.router.navigate(['/registrar-languages']);
  }

  

    eliminarLanguages(id:number){
            this.languagesServicio.eliminarLanguages(id).subscribe(dato => {
            console.log(dato);
            this.obtenerLanguages();
           })
        }
      
  verDetallesDelLanguages(id:number){
    this.router.navigate(['listar-languages',id]);
  }*/
}