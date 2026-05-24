import { Component, input, signal, computed } from '@angular/core';
import { Captura } from '../proyecto-card/proyecto-card';

@Component({
  selector: 'app-carrusel-capturas',
  imports: [],
  templateUrl: './carrusel-capturas.html',
  styleUrl: './carrusel-capturas.css',
})
export class CarruselCapturas {
  capturas = input.required<Captura[]>();

  protected readonly activeIndex = signal(0);

  protected readonly total = computed(() => this.capturas().length);

  protected readonly capturaActual = computed(() => this.capturas()[this.activeIndex()]);

  protected prev() {
    this.activeIndex.update(i => (i === 0 ? this.total() - 1 : i - 1));
  }

  protected next() {
    this.activeIndex.update(i => (i === this.total() - 1 ? 0 : i + 1));
  }

  protected irA(index: number) {
    this.activeIndex.set(index);
  }
}
