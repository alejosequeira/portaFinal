import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoBasica } from 'src/app/infobasica';
import { InfoBasicaService } from 'src/app/servicios/infobasica.service';

@Component({
  selector: 'app-registrar-info',
  templateUrl: './registrar-info.component.html',
  styleUrls: ['./registrar-info.component.css']
})
export class RegistrarInfoComponent implements OnInit{

  info : InfoBasica = new InfoBasica();
  constructor(private infobasicaServicio:InfoBasicaService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarInfoBasica(){
    this.infobasicaServicio.registrarInfoBasica(this.info).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeInfoBasica();
    },error => console.log(error));
  }

  irALaListaDeInfoBasica(){
    this.router.navigate(['/listar-info']);
    
  }

  onSubmit(){
    this.guardarInfoBasica();
  }
}
