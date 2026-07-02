import { Component, signal } from '@angular/core';
import { ProyectoCard } from '../proyecto-card/proyecto-card';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-inicio',
  imports: [ProyectoCard],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  protected readonly sobreMi = signal({
    nombre: 'Leandro Pacsi',
    titulo: 'Desarrollador Backend - Java & Spring Boot',
    descripcion: 'Desarrollador Backend especializado en la construcción de APIs REST robustas, escalables y seguras utilizando Java y Spring Boot. Me apasiona diseñar arquitecturas limpias, optimizar la persistencia de datos con JPA/Hibernate y garantizar la seguridad de los sistemas implementando soluciones modernas como JWT y Spring Security.\n\nActualmente curso el séptimo ciclo de la carrera de Ingeniería de Software. Combino mi formación académica con un enfoque práctico y autodidacta, manteniéndome al día con herramientas esenciales como Docker, Git y bases de datos SQL. Mi objetivo es integrarme a un equipo dinámico como practicante o desarrollador junior, donde pueda aportar valor inmediato y seguir evolucionando mis habilidades técnicas.',
    tecnologias: [
      { nombre: 'Spring Boot', color: '#6DB33F' },
      { nombre: 'Spring Data', color: '#6DB33F' },
      { nombre: 'Spring Security', color: '#6DB33F' },
      { nombre: 'Java', color: '#ED8B00' },
      { nombre: 'Angular', color: '#DD0031' },
      { nombre: 'React + Vite', color: '#61DBFB' },
      { nombre: 'Figma', color: '#1ABCFE' },
      { nombre: 'JUnit', color: '#5F7389' },
      { nombre: 'PostgreSQL', color: '#336791' },
      { nombre: 'Supabase', color: '#3ECF8E' },
      { nombre: 'Stripe', color: '#635BFF' },
      { nombre: 'Render', color: '#46E3B7' },
      { nombre: 'Vercel', color: '#AAAAAA' },
      { nombre: 'CI/CD', color: '#22C55E' },
      { nombre: 'H2', color: '#052B5C' },
      { nombre: 'SQL', color: '#336791' },
      { nombre: 'Docker', color: '#2496ED' },
      { nombre: 'Git', color: '#F05032' },
      { nombre: 'OpenCode', color: '#6C5CE7' },
      { nombre: 'VSCODE', color: '#007ACC' },
      { nombre: 'TypeScript', color: '#3178C6' },
      { nombre: 'Lombok', color: '#7F52FF' },
      { nombre: 'Swagger', color: '#85EA2D' }
    ],
    github: 'https://github.com/LeandroPacsiM',
    linkedin: 'https://www.linkedin.com/in/leandropacsi27/',
    email: 'leandropacsi27@gmail.com',
  });

  protected readonly proyectos;

  constructor(private proyectoService: ProyectoService) {
    this.proyectos = this.proyectoService.getProyectos();
  }
}
