import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  nombre_apellido: string = "";
  fecha_nacimiento: string = "";
  categoria: string = "";
  nacionalidad:string = "";
  lado:string = "";
  talla:string = "";
  genero:string = "";
  instagram:string = "";
  whatsApp:string = "";

  mail:string = "";
  contrasena:string ="";


  
  usuario_registro = {
    nombre_apellido:"",
    fecha_nacimiento:"",
    categoria:"",
    nacionalidad:"",
    lado:"",
    talla:"",
    genero:"",
    instagram:"",
    whatsApp:"",
    mail:"",
    contrasena:"",
  }

  constructor() { }

  ngOnInit() {
  }

  btn_guardar_usuario()
  {
    console.log(this.usuario_registro)
  }
}
