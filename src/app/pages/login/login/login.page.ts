import { NavController } from '@ionic/angular';
import { HttpService } from './../../../core/services/http/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // email_usuario:string="";    ->cree un objeto para esto
  // contrasena_usuario:string="";

  usuario = {
    email_usuario:"",
    contrasena_usuario:""
  }


  constructor(public navCtrl:NavController,
    private httpService: HttpService) { }

  ngOnInit() {
  }


  async btnLogin(mail:string)
  {
    console.log(mail)
    this.navCtrl.navigateForward('/menu-principal/'+mail);

  }


}
