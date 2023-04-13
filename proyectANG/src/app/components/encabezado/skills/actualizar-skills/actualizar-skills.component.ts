import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from 'src/app/skills';

@Component({
  selector: 'app-actualizar-skills',
  templateUrl: './actualizar-skills.component.html',
  styleUrls: ['./actualizar-skills.component.css']
})
export class ActualizarSkillsComponent implements OnInit {

  id:number;
  skill:Skills = new Skills();
  constructor(private skillsService:SkillsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.skillsService.obtenerSkillsPorId(this.id).subscribe(dato =>{
      this.skill = dato;
    },error => console.log(error));
  }

  irAlaListaDeSkills(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.skillsService.actualizarSkills(this.id,this.skill).subscribe(dato => {
      this.irAlaListaDeSkills();
    },error => console.log(error));
  }
}