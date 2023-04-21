import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  onActualizacionSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    switch (value) {
      case 'actualizarMedico':
        this.navigateToUpdateMedico();
        break;
      case 'actualizarPaciente':
        this.navigateToUpdatePaciente();
        break;
      default:
        break;
    }
  }

  onBitacorasSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    switch (value) {
      case 'verBitacoraHistorial':
        this.navigateToBitacoraHistorial();
        break;
      case 'verBitacoraTraspaso':
        this.navigateToBitacoraTraspaso();
        break;
      default:
        break;
    }
  }

  onCreacionSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    switch (value) {
      case 'crearMedico':
        this.navigateToCreateMedico();
        break;
      case 'crearPaciente':
        this.navigateToCreatePaciente();
        break;
      default:
        break;
    }
  }

  onInventarioSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    switch (value) {
      case 'verInventarioMedicamento':
        this.navigateToInventarioMedicamento();
        break;
      case 'verInventarioMateriales':
        this.navigateToInventarioMateriales();
        break;
      case 'registrarInventarioMedicamento':
        this.navigateToInsertInventarioMedicamento();
        break;
      case 'registrarInventarioMateriales':
        this.navigateToInsertInventarioMateriales();
        break;
      default:
        break;
    }
  }

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
