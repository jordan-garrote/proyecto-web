import { AlertController, PickerController } from '@ionic/angular';
import { HttpService } from './../../../core/services/http/http.service';
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


  //carga selectorCategoria
  arrayTipoDeCategoria =[
    {
        categoria:"",
        genero:"",
        id:"",
        nombre_2:""
    }      
   ];

   arrayTipoDeNacionalidad =[
    {
      descripcion:"",
      id:"",
      tipo:""
    }      
   ];

   arrayTipoDeLado =[
    {
      descripcion:"",
      id:"",
      tipo:""
    }      
   ];

   arrayTipoDeTalla =[
    {
      descripcion:"",
      id:"",
      tipo:""
    }      
   ];

   arrayTipoDeGenero =[
    {
      descripcion:"",
      id:"",
      tipo:""
    }      
   ];


  constructor(private httpService: HttpService,private alertCtrl: AlertController, private pickerCtrl: PickerController) { }

  ngOnInit() {
  
    this.cargarTipoDeCategoria();
    this.cargarTipoDeNacionalidad();
    this.cargarTipoDeLado();
    this.cargarTipoDeTalla();
    this.cargarTipoDeGenero();
  }

  //cargadores







//Cargar categorias    SELECTOR
async cargarTipoDeCategoria() {
  console.log('onCallSP cargarTipoDeCategoria')
  const response = await this.httpService.callSP({
    SP: "get_tipo_categoria",
    FILTERS: {
        
    }
  })
  
  this.arrayTipoDeCategoria=response.data.data;
     console.log("get_tipo_categoria ",this.arrayTipoDeCategoria);
}


async cargarTipoDeNacionalidad() {
  const response = await this.httpService.callSP({
    SP: "get_dato",
    FILTERS: {
        _TIPO : "NACIONALIDAD"
    }
  })
  console.log("cargarTipoDeNacionalidad ",response);
  this.arrayTipoDeNacionalidad=response.data.data;
}

//CARGAR LADO 
async cargarTipoDeLado() {
  const response = await this.httpService.callSP({
    SP: "get_dato",
    FILTERS: {
        _TIPO : "LADO"
    }
  })
  console.log("arrayTipoDeLado ",response);
  this.arrayTipoDeLado=response.data.data;
}

//CARGAR TALLA 
async cargarTipoDeTalla() {
  const response = await this.httpService.callSP({
    SP: "get_dato",
    FILTERS: {
        _TIPO : "TALLA"
    }
  })
  console.log("cargarTipoDeTalla ",response);
  this.arrayTipoDeTalla=response.data.data;
}

//CARGAR genero 
async cargarTipoDeGenero() {
  const response = await this.httpService.callSP({
    SP: "get_dato",
    FILTERS: {
        _TIPO : "GENERO"
    }
  })
  console.log("arrayTipoDeGenero ",response);
  this.arrayTipoDeGenero=response.data.data;
}









  btn_guardar_usuario()
  {
    console.log(this.usuario_registro);
    console.log();
  }


// FECHA CUMPLEAÑOS


async presentAlertTimeVreacionDeTorneo() {
  const alert = await this.alertCtrl.create({
   
    header: 'Ingrese  fecha de nacimiento',
    buttons: [
      {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          console.log('Confirm Cancel');
          },
      },
      {
          text: 'Ok',
          handler: () => {
          console.log('Confirm Ok  ');

          
          },
      },
      ],
    inputs: [
      // input date with min & max
      {
        name: 'Popfecha_nacimiento',
        type: 'date',
        min: '01-01-2022',
      },
    ]
  });

  await alert.present();
  
  const result = await alert.onDidDismiss();
          const resultData = result.data;
          //console.log(resultData);
          console.log(resultData.values.Popfecha_nacimiento);


          this.usuario_registro.fecha_nacimiento =this.cambiarFormatoFecha(resultData.values.Popfecha_nacimiento);

          console.log("this.fecha_nacimiento", this.usuario_registro.fecha_nacimiento);


}

  selCategoria(valorSelect)
  {
    this.usuario_registro.categoria = valorSelect.detail.value;
    // console.log(valorSelect.detail.value);
  }
  selNacionalidad(valorSelect)
  {
    this.usuario_registro.nacionalidad = valorSelect.detail.value;
    // // console.log(valorSelect.detail.value);
  }
  selLado(valorSelect)
  {
    this.usuario_registro.lado = valorSelect.detail.value;
    // console.log(valorSelect.detail.value);
  }
  selTalla(valorSelect)
  {
    this.usuario_registro.talla = valorSelect.detail.value;
    // console.log(valorSelect.detail.value);
  }
  selGenero(valorSelect)
  {
    this.usuario_registro.genero = valorSelect.detail.value;
    // console.log(valorSelect.detail.value);
  }


  cambiarFormatoFecha(fecha)
  {
    var f = fecha.split("-");
    f = f[2]+"-"+f[1]+"-"+f[0];
    return f;
  }



}
