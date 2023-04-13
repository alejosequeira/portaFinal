import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Languages } from 'src/app/languages';
import { LanguagesService } from 'src/app/servicios/languages.service';

@Component({
  selector: 'app-actualizar-languages',
  templateUrl: './actualizar-languages.component.html',
  styleUrls: ['./actualizar-languages.component.css']
})
export class ActualizarLanguagesComponent implements OnInit {

  id:number;
  languages:Languages = new Languages();
  constructor(private languagesService:LanguagesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.languagesService.obtenerLanguagesPorId(this.id).subscribe(dato =>{
      this.languages = dato;
    },error => console.log(error));
  }

  irAlaListaDeLanguages(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.languagesService.actualizarLanguages(this.id,this.languages).subscribe(dato => {
      this.irAlaListaDeLanguages();
    },error => console.log(error));
  }
}
