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
    tecnologias: ['Spring Boot', 'Java', 'Angular', 'React + Vite', 'Figma', 'JUnit', 'MySQL', 'H2', 'SQL', 'Docker', 'Git', 'OpenCode', 'VSCODE', 'TypeScript', 'Spring Data', 'Spring Security', 'Lombok', 'Swagger'],
    github: 'https://github.com/LeandroPacsiM',
    linkedin: 'https://www.linkedin.com/in/leandropacsi27/',
    email: 'leandropacsi27@gmail.com',
    youtube: 'https://youtube.com/@leandropacsi7703'
  });

  protected readonly proyectos;

  constructor(private proyectoService: ProyectoService) {
    this.proyectos = this.proyectoService.getProyectos();
  }
}
