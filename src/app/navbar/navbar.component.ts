import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLogin() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  navigateToBitacoraHistorial() {
    this.router.navigate(['/bitacoraHistorial']);
  }

  navigateToBitacoraTraspaso() {
    this.router.navigate(['/bitacoraTraspaso']);
  }

  navigateToCreateIncidencia() {
    this.router.navigate(['/createIncidencia']);
  }

  navigateToCreateMedico() {
    this.router.navigate(['/createMedico']);
  }

  navigateToCreatePaciente() {
    this.router.navigate(['/createPaciente']);
  }

  navigateToUpdateMedico() {
    this.router.navigate(['/updateMedico']);
  }

  navigateToUpdatePaciente() {
    this.router.navigate(['/updatePaciente']);
  }

  navigateToInventarioMedicamento() {
    this.router.navigate(['/inventarioMedicamento']);
  }

  navigateToInventarioMateriales() {
    this.router.navigate(['/inventarioMateriales']);
  }

  navigateToInsertInventarioMedicamento() {
    this.router.navigate(['/insertInventarioMedicamento']);
  }

  navigateToInsertInventarioMateriales() {
    this.router.navigate(['/insertInventarioMaterial']);
  }

}
