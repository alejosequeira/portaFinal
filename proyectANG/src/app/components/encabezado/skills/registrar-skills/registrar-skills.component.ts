import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from 'src/app/skills';

@Component({
  selector: 'app-registrar-skills',
  templateUrl: './registrar-skills.component.html',
  styleUrls: ['./registrar-skills.component.css']
})
export class RegistrarSkillsComponent implements OnInit{

  skills : Skills = new Skills();
  constructor(private skillsServicio:SkillsService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarSkills(){
    this.skillsServicio.registrarSkills(this.skills).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeSkills();
    },error => console.log(error));
  }

  irALaListaDeSkills(){
    this.router.navigate(['/portfolio']);
    
  }

  onSubmit(){
    this.guardarSkills();
  }
}
