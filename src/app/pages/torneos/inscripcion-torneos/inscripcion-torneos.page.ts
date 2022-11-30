import { HttpService } from './../../../core/services/http/http.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inscripcion-torneos',
  templateUrl: './inscripcion-torneos.page.html',
  styleUrls: ['./inscripcion-torneos.page.scss'],
})
export class InscripcionTorneosPage implements OnInit {


  idTorneo="";// se carga el cod ngOnInit
  id_usuario="camilo5105";

  varSp :{}; //variable SP
  arrayTorneo: any = [];

//vista 1
textBuscar : string ="";

arrayCargarJugadores = [
  {
    categoria: "",
    correo: "",
    fecha_nacimiento: "",
    id: "",
    lado: "",
    nacionalidad: "",
    nick: "",
    nombre: "",
    talla: "",

    }
  ];

  arrayCargarJugadores2 = [
    {
      categoria: "",
      correo: "",
      fecha_nacimiento: "",
      id: "",
      lado: "",
      nacionalidad: "",
      nick: "",
      nombre: "",
      talla: "",

      }
    ];
  constructor(private route: ActivatedRoute,public navCtrl:NavController,
    private httpService: HttpService, private alertCtrl: AlertController) { }

  
  ngOnInit() {

//TRAER EL ID  Y (TAMBIEN EL LOGIN)
 //  alert(id); otra forma de console log
    let id = this.route.snapshot.paramMap.get('id');
    this.idTorneo=id;



    //VISTA UNO
    this.cargarJugadores();
    //VISTA DOS 
    this.cargarCategorias();
    //VISTA TRES
    this.cargadoresOnHttpVentanaTresBloqueos();


  }




//INICIO  ventana 1

// Cargar cargarJugadores    SELECTOR
async cargarJugadores() {

  this.varSp={
                SP: "get_jugadores",
                FILTERS: {
                    _TIPO : ""
                }
              }

  const response = await this.httpService.callSP(this.varSp);

  this.arrayCargarJugadores=response.data.data;
}

//metodo buscar jugadores V1 y V2
 onSherchChange(event)
{
  this.textBuscar = event.detail.value;

    if(this.textBuscar.length==0){ return   this.arrayCargarJugadores2=[];}

      this.arrayCargarJugadores2 = this.arrayCargarJugadores.filter(item => {
        return item.correo.toLowerCase().indexOf(this.textBuscar.toLowerCase()) > -1 || item.nombre.toLowerCase().indexOf(this.textBuscar.toLowerCase()) > -1;
      });
}

 
 //JUGADOR2
idJugador2="";
nickJudador2="";
nombreJugador2="";
tallaJugador2="";

//limpiar jugador 2
limpiarJugador2()
{
  this.idJugador2="";
  this.nickJudador2="";
  this.nombreJugador2="";
  this.tallaJugador2="";
  this.textBuscar="";
}

//Seleccionar jugador 2
jugadorSeleccionado2(id,nick,nombre,talla)
{
    this.arrayCargarJugadores2=[];

    this.idJugador2=id;
    this.nickJudador2=nick;
    this.nombreJugador2=nombre;
    this.tallaJugador2=talla;
    this.textBuscar="";
}

// FIN VENTANA UNO





// INICIO VENTANA DOS

   arrayTipoDeCategoria =[
    {
       categoria:"",
       genero:"",
       id:"",
       nombre_2:""
   }      
  ];

idCategoriaSeleccionada="";
nombreCategoriaSeleccionada="";

//Cargar categorias    SELECTOR
async cargarCategorias() {

   
  this.varSp={
                SP: "get_categoria_torneo",
                FILTERS: {
                  _ID_TORNEO : this.idTorneo
                }
              }

  
  const response = await this.httpService.callSP(this.varSp);
  this.arrayTipoDeCategoria=response.data.data;
  
   console.log('onCallSP cargarCategorias cantidad de cupos',this.arrayTipoDeCategoria);
}



selCategoria(idCategoria,nombreCategoria)
{
  console.log(idCategoria);
  this.idCategoriaSeleccionada=idCategoria;
  this.nombreCategoriaSeleccionada=nombreCategoria;

}

btnLimpiarCategoria()
{
  this.nombreCategoriaSeleccionada="";
  this.idCategoriaSeleccionada="";
}
// FIN VENTANA DOS





// INICIO VENTANA TRES

arrayCargarFechaDeBloqueTorneo :{ tipoDePago: string }[] = [];
arrayCargarHorasDeBloqueTorneo :{ tipoDePago: string }[] = [];
arrayHorasBloqueadasParejas :{ tipoDePago: string }[] = [];
bloqueoDeHora="colorBloqueo";

cargadoresOnHttpVentanaTresBloqueos()
{
  this.cargarFechaDeBloqueTorneo();
  this.cargarHorasDeBloqueTorneo();
}


  //Cargar cargarFechaDeBloqueTorneo
  async cargarFechaDeBloqueTorneo() {
    this.varSp ={
      SP: "get_fechas_bloques",
          FILTERS: {
              _ID_TORNEO : this.idTorneo,
          }
    };
    const response = await this.httpService.callSP(this.varSp)
    this.arrayCargarFechaDeBloqueTorneo=response.data.data;
    // console.log("cargarFechaDeBloqueTorneo",response);
    // console.log(this.varSp);
  }
  
  
  //Cargar cargarHorasDeBloqueTorneo
  async cargarHorasDeBloqueTorneo() {
    this.varSp ={
      SP: "get_bloques",
          FILTERS: {
            _ID_TORNEO : this.idTorneo,
          }
    };
  
    const response = await this.httpService.callSP(this.varSp)
    this.arrayCargarHorasDeBloqueTorneo=response.data.data;


    
    // console.log("cargarHorasDeBloqueTorneo",this.varSp);
    // console.log("cargarHorasDeBloqueTorneo",response);
    // console.log("cargarHorasDeBloqueTorneo",response);
  }


  //BOTONES
  //Cargar cargarHorasDeBloqueTorneo

async bloquearBloque(event)
{
  var existe =this.arrayHorasBloqueadasParejas.indexOf(event.id);

  if(existe !=-1)
  {
    this.arrayHorasBloqueadasParejas.splice(existe,1);


    // this.arrayHorasBloqueadasParejas.push(event.id);
    console.log("eliminar");
    console.log(this.arrayHorasBloqueadasParejas);


  }
 else
 {
  this.arrayHorasBloqueadasParejas.push(event.id);
  console.log(this.arrayHorasBloqueadasParejas);
  this.bloqueoDeHora="colorBloqueo";

      //vista 4 
      this.cargarFechaDeBloqueTorneo();
      this.cargarHorasDeBloqueTorneo();
 
    }
}



// FIN VENTANA TRES
















//vista 5
async btnAgregarParejaTorneo(){
  this.varSp={
    SP: "create_pareja_torneo",
    FILTERS: {
      _ID           : "0",
      _ID_CATEGORIA : this.idCategoriaSeleccionada+"",
      _JUGADOR1     : this.id_usuario+"",
      _JUGADOR2     : this.idJugador2+"",
      _ESTADO_PAGOJ1  : "0",
      _ESTADO_PAGOJ2  : "0",
      _CABEZA       : "0"
    }
  }

const response = await this.httpService.callSP(this.varSp);




















// if(response.data.data[0].id>0)
// {
// this.presentAlert("Exitoso","Ingreso de Pareja");
// //this.cargarBloqueos(response.data.data[0].id);
// //this.limpiarDatos();
// }

// else

// {
//   this.presentAlert(response.data.data[0].error,"Error");
//   console.log(response.data.data[0]);
// }

}










// ALERTAS 
async presentAlert(mensajeSubHe,mensajeHeader) {
  const alert = await this.alertCtrl.create({
    backdropDismiss:false,
    cssClass: 'my-custom-class',
    header: mensajeHeader,
    subHeader: mensajeSubHe,
    message: '',
    buttons: ['Continuar']
  });
  await alert.present();
}





    //control de pantallas
    div1: any = false;
    div2: any = true;
    div3: any = true;
    div4: any = true;
    div5: any = true;

// CONTROL DE VENTANAS
segmentChanged(event)
{
  if(event.detail.value ==="n1")
  {
    this.div1 = false;
    this.div2 = true;
    this.div3 = true;
    this.div4 = true;
    this.div5 = true;
  }
  if(event.detail.value ==="n2")
  {
    this.div1 = true;
    this.div2 = false;
    this.div3 = true;
    this.div4 = true;
    this.div5 = true;

  }
  if(event.detail.value ==="n3")
  {
    this.div1 = true;
    this.div2 = true;
    this.div3 = false;
    this.div4 = true;
    this.div5 = true;
  }
  if(event.detail.value ==='n4')
  {
    this.div1 = true;
    this.div2 = true;
    this.div3 = true;
    this.div4 = false;
    this.div5 = true;
  }
  if(event.detail.value ==='n5')
  {
    this.div1 = true;
    this.div2 = true;
    this.div3 = true;
    this.div4 = true;
    this.div5 = false;
  }

}



}
