import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProyectoService } from '../../services/proyecto.service';
import { CarruselCapturas } from '../carrusel-capturas/carrusel-capturas';

@Component({
  selector: 'app-proyecto-detalle',
  imports: [RouterLink, CarruselCapturas],
  templateUrl: './proyecto-detalle.html',
  styleUrl: './proyecto-detalle.css',
})
export class ProyectoDetalle {
  slug = input.required<string>();

  protected readonly proyecto = computed(() =>
    this.proyectoService.getProyectoBySlug(this.slug())
  );

  protected readonly tieneCapturas = computed(() =>
    this.proyecto() ? this.proyecto()!.capturas.length > 0 : false
  );

  constructor(private proyectoService: ProyectoService) {}
}
