import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

miPortfolio:any;
constructor(private datosPortFolio: PortfolioService){}

ngOnInit(): void {
  this.datosPortFolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.miPortfolio=data;
  });
}
}