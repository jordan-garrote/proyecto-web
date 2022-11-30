import { HttpService } from './../../../core/services/http/http.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-torneos',
  templateUrl: './buscar-torneos.page.html',
  styleUrls: ['./buscar-torneos.page.scss'],
})
export class BuscarTorneosPage implements OnInit {

  arrayTorneos: any = [];
  picImage:any;  //variable
  base64Data =  "";

  constructor(public navCtrl:NavController,
        private httpService: HttpService) { }

        //CARGAR TORNEOS
        async mostrarMisTorneos() {
          const response = await this.httpService.callSP({
            SP: "get_torneo",
            FILTERS: {
                _COMUNA : "0",
                _ESTADO : "0",
                _USUARIO: "0",
                _ID_TORNEO:"0",
            }
          })
          
         
          // console.log('response codigo', response)
          // console.log('response codigo array', response.data.data)

          this.arrayTorneos =response.data.data;
          this.base64Data = this.arrayTorneos[0].image;
          this.picImage = "data:image/jpeg;base64,"+this.base64Data;  //this.base64Data contains base64 string

          // console.log('arrayTorneos ', this.arrayTorneos)
          // console.log('arrayTorneos nombre', this.arrayTorneos[0].club)
          // console.log('base64Data c', this.arrayTorneos[0].image)

        }








  ngOnInit() {

    this.mostrarMisTorneos();

    
   

  }

  async selecTorneo(id:string)
  {
    this.navCtrl.navigateForward('/seleccion-buscar-torneo/'+id);
  }

}
