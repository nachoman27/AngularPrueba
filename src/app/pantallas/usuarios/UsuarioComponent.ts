import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../shared/servicios/usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../../shared/modelo/usuario';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {
  usuarios: Usuario[] = [];
  selectedUser: Usuario | null = null;
  isEditing: boolean = false;
  private usuariosSubscription: Subscription | undefined;

  constructor(private usuarioService: UsuarioService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usuariosSubscription = this.usuarioService.getUsuarios().subscribe(
      usuariosObs => {
        console.log('Usuarios cargados:', usuariosObs);
        this.usuarios = usuariosObs;
        this.cdr.detectChanges(); // Forzar la detección de cambios
      },
      error => {
        console.error('Error loading users:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.usuariosSubscription) {
      this.usuariosSubscription.unsubscribe();
    }
  }

  editUser(user: Usuario): void {
    console.log('Edit user called', user);
    this.selectedUser = { ...user };
    this.isEditing = true;
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  closeForm(): void {
    console.log('Close form called');
    this.isEditing = false;
    this.selectedUser = null;
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  saveUser(): void {
    if (this.selectedUser) {
      console.log('Saving user:', this.selectedUser);
      this.usuarioService.updateUser(this.selectedUser).subscribe(
        updatedUser => {
          console.log('User updated successfully:', updatedUser);
          // Actualizar la lista de usuarios localmente
          const index = this.usuarios.findIndex(u => u.id === updatedUser.id);
          if (index !== -1) {
            this.usuarios[index] = updatedUser;
          }
          this.isEditing = false;
          this.selectedUser = null;
          this.cdr.detectChanges(); // Forzar la detección de cambios
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

  trackByUsuario(index: number, usuario: Usuario): string {
    return usuario.id;
  }
}