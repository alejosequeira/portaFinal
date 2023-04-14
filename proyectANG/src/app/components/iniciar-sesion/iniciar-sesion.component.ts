import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private autenticacionService:AutenticacionService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
        mailUser:['', [Validators.required, Validators.email]],
        passwordUser:['', [Validators.required, Validators.minLength(8)]]
        }
    )
  }
  ngOnInit(): void{
  }

  get MailUser(){
    return this.form.get('mailUser');
  }
  get PasswordUser(){
    return this.form.get('passwordUser');
  }
  onEnviar(event:Event)
  {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }


}

