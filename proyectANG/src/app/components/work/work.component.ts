import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit{

  miPortFolio:any;
  constructor(private datosPortFolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortFolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortFolio=data;
    });
  }
}