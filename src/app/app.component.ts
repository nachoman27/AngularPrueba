import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductoService } from './shared/servicios/producto.service';
import { ProductoComponent } from './pantallas/productos/producto.component';
import { UsuarioService } from './shared/servicios/usuario.service';
import { UsuarioComponent } from './pantallas/usuarios/UsuarioComponent';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomepageComponent } from './pantallas/homepage/homepage.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ProductoComponent,UsuarioComponent,NavbarComponent, RouterLink, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  
}



/*export class AppComponent implements OnInit{
  title = 'Nacho';
  lista : Cliente[] = [];
  public cliente: any=[];
  productos: any [] = [];
  usuarios: any[] = [];

  private readonly productoService = inject(ProductoService);
constructor( 
  private clienteService : ClienteService){
}

ngOnInit():void{
  this.lista = this.clienteService.getClientes();
  this.productoService.getProductos().subscribe(
    productosObs => {
    console.log(productosObs);
    this.productos = productosObs;

  });
}

agregarnombre(){
 // console.log(this.nombre);
this.clienteService.addCliente(this.cliente);
this.cliente ={};
 }
} */
