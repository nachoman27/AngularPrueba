import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from '../productos/producto.component';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterOutlet, FormsModule,ProductoComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

}
