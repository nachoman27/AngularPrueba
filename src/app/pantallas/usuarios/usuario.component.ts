import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../shared/servicios/usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../../shared/modelo/usuario';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {
  title = 'Nacho';
  usuarios: Usuario[] = [];
  private readonly usuarioService = inject(UsuarioService);
  private usuariosSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.usuariosSubscription = this.usuarioService.getUsuarios().subscribe(
      usuariosObs => {
        console.log(usuariosObs);
        this.usuarios = usuariosObs;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.usuariosSubscription) {
      this.usuariosSubscription.unsubscribe();
    }
  }
  editUsuario(usuario: any) {
    console.log('Editar usuario:', usuario);
  }
}



