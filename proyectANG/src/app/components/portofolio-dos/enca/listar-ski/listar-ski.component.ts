import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from 'src/app/skills';
@Component({
  selector: 'app-listar-ski',
  templateUrl: './listar-ski.component.html',
  styleUrls: ['./listar-ski.component.css']
})
export class ListarSkiComponent implements OnInit {

  ski:Skills[];

  constructor(private skillsServicio:SkillsService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerSkills();
  }
  ngOnChanges(): void {
    this.obtenerSkills();
  }
  private obtenerSkills(){
    this.skillsServicio.obtenerListaDeSkills().subscribe(dato => {
      this.ski = dato;
    });
  }

  /*
  actualizarSkills(id:number){
    this.router.navigate(['/actualizar-skills',id]);
  }

  registrarSkills(){
    this.router.navigate(['/registrar-skills']);
  }  
    eliminarSkills(id:number){
            this.skillsServicio.eliminarSkills(id).subscribe(dato => {
            console.log(dato);
            this.obtenerSkills();
           })
        }
      
  verDetallesDelSkills(id:number){
    this.router.navigate(['listar-skills',id]);
  }*/
}
