import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutMe } from 'src/app/aboutme';
import { AboutMeService } from 'src/app/servicios/aboutme.service';

@Component({
  selector: 'app-actualizar-about',
  templateUrl: './actualizar-about.component.html',
  styleUrls: ['./actualizar-about.component.css']
})
export class ActualizarAboutComponent implements OnInit {

  id:number;
  abo:AboutMe = new AboutMe();
  constructor(private aboutmeService:AboutMeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.aboutmeService.obtenerAboutMePorId(this.id).subscribe(dato =>{
      this.abo = dato;
    },error => console.log(error));
  }

  irAlaListaDeAboutMe(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.aboutmeService.actualizarAboutMe(this.id,this.abo).subscribe(dato => {
      this.irAlaListaDeAboutMe();
    },error => console.log(error));
  }
}
