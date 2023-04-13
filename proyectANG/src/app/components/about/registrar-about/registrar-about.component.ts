import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/aboutme';
import { AboutMeService } from 'src/app/servicios/aboutme.service';

@Component({
  selector: 'app-registrar-about',
  templateUrl: './registrar-about.component.html',
  styleUrls: ['./registrar-about.component.css']
})
export class RegistrarAboutComponent implements OnInit{

    abo : AboutMe = new AboutMe();
    constructor(private aboutmeServicio:AboutMeService,private router:Router) { }
  
    ngOnInit(): void {
    }
  
    guardarAboutMe(){
      this.aboutmeServicio.registrarAboutMe(this.abo).subscribe(dato => {
        console.log(dato);
        this.irALaListaDeAboutMe();
      },error => console.log(error));
    }
  
    irALaListaDeAboutMe(){
      this.router.navigate(['/portfolio']);
      
    }
  
    onSubmit(){
      this.guardarAboutMe();
    }
  }