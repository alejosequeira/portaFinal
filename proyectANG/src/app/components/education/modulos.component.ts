import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit{

  miPortFolio:any;
  constructor(private datosPortFolio: PortfolioService){}

  ngOnInit(): void {
    this.datosPortFolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortFolio=data;
    });
  }
}