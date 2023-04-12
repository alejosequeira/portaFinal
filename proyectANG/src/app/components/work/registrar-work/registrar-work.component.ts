import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkService } from 'src/app/servicios/work.service';
import { Work } from 'src/app/work';

@Component({
  selector: 'app-registrar-work',
  templateUrl: './registrar-work.component.html',
  styleUrls: ['./registrar-work.component.css']
})
export class RegistrarWorkComponent implements OnInit{

  work : Work = new Work();
  constructor(private workServicio:WorkService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarWork(){
    this.workServicio.registrarWork(this.work).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeWork();
    },error => console.log(error));
  }

  irALaListaDeWork(){
    this.router.navigate(['/listar-work']);
    
  }

  onSubmit(){
    this.guardarWork();
  }
}