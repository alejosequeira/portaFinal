import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyects } from 'src/app/proyects';
import { ProyectsService } from 'src/app/servicios/proyects.service';

@Component({
  selector: 'app-actualizar-proyects',
  templateUrl: './actualizar-proyects.component.html',
  styleUrls: ['./actualizar-proyects.component.css']
})
export class ActualizarProyectsComponent implements OnInit {

  id:number;
  proyects:Proyects = new Proyects();
  constructor(private proyectsService:ProyectsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proyectsService.obtenerProyectsPorId(this.id).subscribe(dato =>{
      this.proyects = dato;
    },error => console.log(error));
  }

  irAlaListaDeProyects(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.proyectsService.actualizarProyects(this.id,this.proyects).subscribe(dato => {
      this.irAlaListaDeProyects();
    },error => console.log(error));
  }
}