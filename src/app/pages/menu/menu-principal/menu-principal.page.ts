import { HttpService } from './../../../core/services/http/http.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  mail_usuario="";
  
  constructor(private route: ActivatedRoute,public navCtrl:NavController,
    private httpService: HttpService) { }

  
  ngOnInit() {

    let trae_mail_usuario = this.route.snapshot.paramMap.get('mail');
    this.mail_usuario=trae_mail_usuario;
  }

}
