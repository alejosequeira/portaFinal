import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Languages } from 'src/app/languages';
import { LanguagesService } from 'src/app/servicios/languages.service';

@Component({
  selector: 'app-listar-languages',
  templateUrl: './listar-languages.component.html',
  styleUrls: ['./listar-languages.component.css']
})
export class ListarLanguagesComponent implements OnInit {

  lang:Languages[];

  constructor(private languagesServicio:LanguagesService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerLanguages();
  }
  ngOnChanges(): void {
    this.obtenerLanguages();
  }

  actualizarLanguages(id:number){
    this.router.navigate(['/actualizar-languages',id]);
  }

  registrarLanguages(){
    this.router.navigate(['/registrar-languages']);
  }

  private obtenerLanguages(){
    this.languagesServicio.obtenerListaDeLanguages().subscribe(dato => {
      this.lang = dato;
    });
  }

    eliminarLanguages(id:number){
            this.languagesServicio.eliminarLanguages(id).subscribe(dato => {
            console.log(dato);
            this.obtenerLanguages();
           })
        }
      
  verDetallesDelLanguages(id:number){
    this.router.navigate(['listar-languages',id]);
  }
}