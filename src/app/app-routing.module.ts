import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/usuario/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'recuperar-clave',
    loadChildren: () => import('./pages/usuario/recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
  },
  {
    path: 'menu-principal/:mail',
    loadChildren: () => import('./pages/menu/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'buscar-torneos',
    loadChildren: () => import('./pages/torneos/buscar-torneos/buscar-torneos.module').then( m => m.BuscarTorneosPageModule)
  },
  {
    path: 'mis-torneos',
    loadChildren: () => import('./pages/torneos/mis-torneos/mis-torneos.module').then( m => m.MisTorneosPageModule)
  },
  {
    path: 'seleccion-buscar-torneo/:id',
    loadChildren: () => import('./pages/torneos/seleccion-buscar-torneo/seleccion-buscar-torneo.module').then( m => m.SeleccionBuscarTorneoPageModule)
  },
  {
    path: 'inscripcion-torneos/:id/:idUsuario',
    loadChildren: () => import('./pages/torneos/inscripcion-torneos/inscripcion-torneos.module').then( m => m.InscripcionTorneosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
