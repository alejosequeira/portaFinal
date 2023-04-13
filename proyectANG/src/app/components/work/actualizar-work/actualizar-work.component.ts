import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkService } from 'src/app/servicios/work.service';
import { Work } from 'src/app/work';

@Component({
  selector: 'app-actualizar-work',
  templateUrl: './actualizar-work.component.html',
  styleUrls: ['./actualizar-work.component.css']
})
export class ActualizarWorkComponent implements OnInit {

  id:number;
  work:Work = new Work();
  constructor(private workService:WorkService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.workService.obtenerWorkPorId(this.id).subscribe(dato =>{
      this.work = dato;
    },error => console.log(error));
  }

  irAlaListaDeWork(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.workService.actualizarWork(this.id,this.work).subscribe(dato => {
      this.irAlaListaDeWork();
    },error => console.log(error));
  }
}
