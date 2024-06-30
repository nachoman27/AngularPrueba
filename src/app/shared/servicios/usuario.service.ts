import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaService: Usuario[] = [];
  private readonly _http = inject(HttpClient);

  getUsuarios(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>('https://fakestoreapi.com/users');
  }
}

