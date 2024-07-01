import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly apiUrl = 'https://fakestoreapi.com/users';
  private readonly _http = inject(HttpClient);

  getUsuarios(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(this.apiUrl);
  }

  updateUser(user: Usuario): Observable<Usuario> {
    console.log('Updating user:', user); // Log para verificar la actualización
    return this._http.put<Usuario>(`${this.apiUrl}/${user.id}`, user);
  }}