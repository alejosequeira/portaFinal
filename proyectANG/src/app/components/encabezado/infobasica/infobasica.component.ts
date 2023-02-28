import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-infobasica',
  templateUrl: './infobasica.component.html',
  styleUrls: ['./infobasica.component.css']
})
export class InfobasicaComponent implements OnInit {

miPortfolio:any;
constructor(private datosPortfolio: PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }
}