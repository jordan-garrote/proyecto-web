import { NavController, isPlatform, ToastController } from '@ionic/angular'
import { HttpService } from './../../../core/services/http/http.service'
import { Component, OnInit } from '@angular/core'
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  usuario: any = {
    email: 'test@test.com',
    contrasena_usuario: '123456'
  }

  user: any = null

  constructor(
    public navCtrl: NavController,
    private httpService: HttpService,
    private toastController: ToastController
  ) {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize()
    }
  }

  ngOnInit() {}

  async onSingInGoogle() {
    this.user = await GoogleAuth.signIn()
    console.log('user', this.user)
    if (this.user) {
      localStorage.setItem('userLogged', JSON.stringify(this.user))
      localStorage.setItem('isAuth', 'true')
      this.navCtrl.navigateForward('/menu-principal')
    } else {
      this.presentToast('Error al ingresar con Google', 'top')
    }
  }

  async onRefreshGoogle() {
    const authCode: any = await GoogleAuth.refresh()
    console.log('refresh', authCode)
    // { accessToken: 'XXX', idToken: 'XXX' }
  }
  async onSingOutGoogle() {
    this.user = await GoogleAuth.signOut()
    this.user = null
  }

  async onSingIn() {
    console.log(this.usuario)
    if (
      this.usuario.email === 'test@test.com' &&
      this.usuario.contrasena_usuario ==='123456'
    ) {
      localStorage.setItem('isAuth', 'true')
      localStorage.setItem('userLogged', JSON.stringify(this.usuario))
      this.navCtrl.navigateForward('/menu-principal')
    } else {
      this.presentToast('Credenciales incorrectas', 'top')
    }
  }

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}
