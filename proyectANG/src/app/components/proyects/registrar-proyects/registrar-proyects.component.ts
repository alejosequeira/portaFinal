import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyects } from 'src/app/proyects';
import { ProyectsService } from 'src/app/servicios/proyects.service';

@Component({
  selector: 'app-registrar-proyects',
  templateUrl: './registrar-proyects.component.html',
  styleUrls: ['./registrar-proyects.component.css']
})
export class RegistrarProyectsComponent implements OnInit {

  proyects : Proyects = new Proyects();
  constructor(private proyectsServicio:ProyectsService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarProyects(){
    this.proyectsServicio.registrarProyects(this.proyects).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeProyects();
    },error => console.log(error));
  }

  irALaListaDeProyects(){
    this.router.navigate(['/portfolio']);
    
  }

  onSubmit(){
    this.guardarProyects();
  }
}
