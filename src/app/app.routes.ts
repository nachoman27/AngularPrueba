import { Routes } from '@angular/router';
import { ProductoComponent } from './pantallas/productos/producto.component';
import { UsuarioComponent } from './pantallas/usuarios/usuario.component';
import { HomepageComponent } from './pantallas/homepage/homepage.component';

export const routes: Routes = [
{path: 'productos', component: ProductoComponent},
{path: 'usuarios', component: UsuarioComponent},
{path: 'homepages', component: HomepageComponent},
{path: '', redirectTo: 'homepages', pathMatch: 'full'},
];
