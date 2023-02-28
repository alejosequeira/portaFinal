import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit{

miPortFolio:any;
constructor(private datosPortfolio: PortfolioService){}

ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data =>{
  this.miPortFolio=data;
  });
}
}
