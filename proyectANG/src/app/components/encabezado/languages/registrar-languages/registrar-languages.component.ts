import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Languages } from 'src/app/languages';
import { LanguagesService } from 'src/app/servicios/languages.service';

@Component({
  selector: 'app-registrar-languages',
  templateUrl: './registrar-languages.component.html',
  styleUrls: ['./registrar-languages.component.css']
})
export class RegistrarLanguagesComponent implements OnInit {

  languages : Languages = new Languages();
  constructor(private languagesServicio:LanguagesService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarLanguages(){
    this.languagesServicio.registrarLanguages(this.languages).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeLanguages();
    },error => console.log(error));
  }

  irALaListaDeLanguages(){
    this.router.navigate(['/portfolio']);
    
  }

  onSubmit(){
    this.guardarLanguages();
  }
}