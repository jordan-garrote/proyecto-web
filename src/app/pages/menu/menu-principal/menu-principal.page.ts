import { HttpService } from './../../../core/services/http/http.service'
import { MenuController, NavController } from '@ionic/angular'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss']
})
export class MenuPrincipalPage implements OnInit {
  menuList: any[] = [
    { text: 'Menú Principal', value: 'menu-principal' },
    { text: 'Buscar Torneos', value: 'buscar-torneos' },
    { text: 'Mis Torneos', value: 'mis-torneos' },
    { text: 'Selección Buscar Torneo', value: 'seleccion-buscar-torneo' },
    { text: 'Inscripción Torneos', value: 'inscripcion-torneos' },
  ]
  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private httpService: HttpService,
    private menu: MenuController,
  ) {}

  ngOnInit() {}

  onLogout() {
    this.navCtrl.navigateForward('/login')
    localStorage.clear()
  }

  goTo(value: string) {
    this.navCtrl.navigateForward(`/${value}`)
    this.menu.close('main-menu')
  }
}
