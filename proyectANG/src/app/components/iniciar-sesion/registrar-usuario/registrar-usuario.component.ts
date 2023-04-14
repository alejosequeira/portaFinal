import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/servicios/userlogin.service';
import { UserLogin } from 'src/app/userlogin';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{

  userlogin : UserLogin = new UserLogin();
  constructor(private userloginServicio:UserloginService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarUserLogin(){
    this.userloginServicio.registrarUserLogin(this.userlogin).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeUserLogin();
    },error => console.log(error));
  }

  irALaListaDeUserLogin(){
    this.router.navigate(['/portfolio']);
    
  }

  onSubmit(){
    this.guardarUserLogin();
  }
}
