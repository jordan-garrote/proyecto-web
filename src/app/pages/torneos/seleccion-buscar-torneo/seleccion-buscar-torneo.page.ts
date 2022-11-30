import { NavController } from '@ionic/angular';
import { HttpService } from './../../../core/services/http/http.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share'; 




@Component({
  selector: 'app-seleccion-buscar-torneo',
  templateUrl: './seleccion-buscar-torneo.page.html',
  styleUrls: ['./seleccion-buscar-torneo.page.scss'],
})
export class SeleccionBuscarTorneoPage implements OnInit {

  var_grupo=0;
  var_grupoArray: any = [];


  id_torneo="";
  id_usuario
  
  arrayTorneos: any = [];
  arrayCategoriaTorneo: any = [];
  arrayMostrarGetFixture: any = [];
  arrayMostrarClasificacion: any = [];
  arrayMostrarClasificacionFiltrado: any = [];
  arrayGrupo: any = [];


  picImage:any;  //variable
  base64Data =  "";


//Ventanas divs
  //control de pantallas
  div1: any = false;
  div2: any = true;
  div3: any = true;



  // COMPARTIR Y WHATSAPP
  codePais:string;
  numeroWhatsapp:string;
  url:string;



  constructor(private route: ActivatedRoute,public navCtrl:NavController,
    private httpService: HttpService) { }



     
     isModalOpen = false;
      setOpen(isOpen: boolean,idCategoria) {
        this.isModalOpen = isOpen;
        this.mostrarGetFixture(idCategoria)
        this.var_categoria=idCategoria;
       // console.log(this.var_categoria);
       var grupo = 0;
       for(var i = 0; i < this.arrayMostrarClasificacion.length;i++){
          if(this.arrayMostrarClasificacion[i].id_categoria_torneo == idCategoria){
              if(grupo != this.arrayMostrarClasificacion[i].grupo*1){
                  this.arrayGrupo.push(this.arrayMostrarClasificacion[i].grupo);
                  grupo++;
              }
              this.arrayMostrarClasificacionFiltrado.push(this.arrayMostrarClasificacion[i]);
          }
       }
       console.log(this.arrayMostrarClasificacionFiltrado);
       console.log(this.arrayGrupo);

      }
    





      //CARGAR TORNEOS
      async mostrarMisTorneos(id_torneo) {
        const response = await this.httpService.callSP({
          SP: "get_torneo",
          FILTERS: {
              _COMUNA : "0",
              _ESTADO : "0",
              _USUARIO: "0",
              _ID_TORNEO:this.id_torneo,
          }
        })
        
        this.arrayTorneos =response.data.data;
     //   console.log('response SeleccionBuscarTorneoPage', response.data.data)
      }


      // mostrar Categorias De Torneo
      async mostrarCategoriasDeTorneo (id_torneo) {
        const response = await this.httpService.callSP({
          SP: "get_categoria_torneo",
          FILTERS: {
              _ID_TORNEO:this.id_torneo,
          }
        })
        this.arrayCategoriaTorneo =response.data.data;
        console.log('response mostrarCategoriasDeTorneo', response.data.data)
      }



      // mostrar mostrar Get Fixture De Torneo
      async mostrarGetFixture(idCategoria) {
        const response = await this.httpService.callSP({
          SP: "get_fixture",
          FILTERS: {
              _ID_TORNEO : this.id_torneo,
              _ID_CATEGORIA : idCategoria,
              _ID_FASE : "0",
          }
        })
        this.arrayMostrarGetFixture =response.data.data;
        console.log('response mostrar GetFixture', response.data.data)

      }


      var_categoria="";
            // mostrar mostrar Get Fixture De Torneo
            async mostrarClasificacion() {
              const response = await this.httpService.callSP({
                SP: "get_grupo_torneo",
                FILTERS: {
                    _ID_TORNEO : this.id_torneo,

                }
              })
              this.arrayMostrarClasificacion =response.data.data;
              console.log('response mostrar mostrarClasificacion', response.data.data)
      
            }





      //



  ngOnInit() {
    let trae_id_torneo = this.route.snapshot.paramMap.get('id');
    this.id_torneo=trae_id_torneo;

    this.mostrarMisTorneos(trae_id_torneo);
    this.mostrarCategoriasDeTorneo(trae_id_torneo);

    this.mostrarGetFixture("0");
    this.mostrarClasificacion();
  }



  modalVerFixture(a)
  {
    console.log('modalVerFixture',a);
  }

  
  shareAppCompartir(){

    Share.share({
     title: 'Comparte Padel Fixture',
     text: 'Descarga Padel Fixture',
     url: 'https://play.google.com/store/apps/details?id=com.padelmanager.padelmanager&hl=es',
     // dialogTitle: 'Share with buddies',
   });
 }
 ayudaWhatsapp(){
   codePais :"569";
   numeroWhatsapp : "84714590";
   url: "https://wa.me/"+this.codePais +this.numeroWhatsapp+"?text=hi";
   
 }



 btnInscripcion()
 {
    this.navCtrl.navigateForward('/inscripcion-torneos/'+this.id_torneo+'/'+this.id_usuario);
 }


















 

// CONTROL DE VENTANAS
segmentChanged(event)
{
  if(event.detail.value ==="n1")
  {
    this.div1 = false;
    this.div2 = true;
    this.div3 = true;
  }
  if(event.detail.value ==="n2")
  {
    this.div1 = true;
    this.div2 = false;
    this.div3 = true;

  }
  if(event.detail.value ==="n3")
  {
    this.div1 = true;
    this.div2 = true;
    this.div3 = false;
  }

}


}