import { NavController, isPlatform } from '@ionic/angular'
import { HttpService } from './../../../core/services/http/http.service'
import { Component, OnInit } from '@angular/core'
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  // email_usuario:string="";    ->cree un objeto para esto
  // contrasena_usuario:string="";

  usuario = {
    email_usuario: '',
    contrasena_usuario: ''
  }

  user: any = null

  constructor(
    public navCtrl: NavController,
    private httpService: HttpService
  ) {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize()
    }
  }

  ngOnInit() {}

  async singIn() {
    this.user = await GoogleAuth.signIn()
    console.log('user', this.user)
  }

  async refresh() {
    const authCode: any = await GoogleAuth.refresh()
    console.log('refresh', authCode)
    // { accessToken: 'XXX', idToken: 'XXX' }
  }
  async singOut() {
    this.user = await GoogleAuth.signOut()
    this.user = null
  }

  async btnLogin(mail: string) {
    console.log(mail)
    this.navCtrl.navigateForward('/menu-principal/' + mail)
  }
}
