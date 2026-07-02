import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Captura {
  url: string;
  descripcion: string;
}

export interface Proyecto {
  titulo: string;
  descripcion: string;
  slug: string;
  linkGithub: string;
  linkDemo?: string;
  tecnologias: string[];
  capturas: Captura[];
  enDesarrollo?: boolean;
}

@Component({
  selector: 'app-proyecto-card',
  imports: [RouterLink],
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.css'
})
export class ProyectoCard {
  data = input.required<Proyecto>();
}
