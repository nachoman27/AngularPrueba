import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../modelo/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  listaService: Producto[] = [];
  private readonly _http = inject(HttpClient);

  getProductos(): Observable<Producto[]> {
    return this._http.get<Producto[]>('https://fakestoreapi.com/products');
  }
}
























  
//SPA renderiza componentes envez de refrescar toda la pagina