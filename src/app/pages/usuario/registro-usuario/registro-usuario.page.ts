import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  nombre: string = "";
  apellido: string = "";
  edad: string = "";
  ciudad:string = "";
  fono:string = "";
  mail:string = "";
  contrasena:string ="";


  usuario_registro = {
    nombre:"",
    apellido:"",
    edad:"",
    ciudad:"",
    fono:"",
    email:"",
    contrasena:""
  }

  constructor() { }

  ngOnInit() {
  }

  btn_guardar_usuario()
  {
    console.log(this.usuario_registro)
  }
}
