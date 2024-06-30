import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductoService } from '../../shared/servicios/producto.service';
import { Subscription } from 'rxjs';
import { Producto } from '../../shared/modelo/producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ProductoComponent],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit, OnDestroy {
  title = 'Nacho';
  productos: Producto[] = [];
  private readonly productoService = inject(ProductoService);
  private productosSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.productosSubscription = this.productoService.getProductos().subscribe(
      productosObs => {
        console.log(productosObs);
        this.productos = productosObs;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.productosSubscription) {
      this.productosSubscription.unsubscribe();
    }
  }
}




