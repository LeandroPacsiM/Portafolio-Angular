import { Injectable, signal } from '@angular/core';
import { Proyecto } from '../components/proyecto-card/proyecto-card';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private img(path: string): string {
    const base = document.querySelector('base')?.getAttribute('href') || '/';
    const cleanBase = base.replace(/\/$/, '');
    return `${cleanBase}${path}`;
  }

  private readonly proyectos = signal<Proyecto[]>([
    {
      titulo: 'Plataforma de Expediciones Turísticas',
      descripcion: 'Plataforma web de reservas para expediciones turísticas que permite a los usuarios explorar viajes, visualizar itinerarios y elegir fechas disponibles. Resuelve problemas comunes en la gestión de turismo como la falta de control de cupos y la sobreventa',
      slug: 'plataforma-expediciones',
      linkGithub: 'https://github.com/LeandroPacsiM/Herramientas-Seccion-Grupo-06-API/tree/feature/leandro-pacsi',
      linkDemo: 'https://herramientas-seccion-grupo-06.vercel.app/',
      tecnologias: [
        { nombre: 'Spring Boot', color: '#6DB33F' },
        { nombre: 'Spring Security', color: '#6DB33F' },
        { nombre: 'React', color: '#61DBFB' },
        { nombre: 'PostgreSQL', color: '#336791' },
        { nombre: 'Supabase', color: '#3ECF8E' },
        { nombre: 'Stripe', color: '#635BFF' },
        { nombre: 'Render', color: '#46E3B7' },
        { nombre: 'Vercel', color: '#AAAAAA' },
        { nombre: 'CI/CD', color: '#22C55E' }
      ],
      capturas: [
        { url: this.img('/screenshots/PaginaPrincipal.png'), descripcion: 'Página principal con hero y navegación del sistema' },
        { url: this.img('/screenshots/IniciarSesion.png'), descripcion: 'Formulario de inicio de sesión con autenticación de usuarios' },
        { url: this.img('/screenshots/Expediciones.png'), descripcion: 'Listado de expediciones turísticas disponibles para reservar' },
        { url: this.img('/screenshots/CatalogoDeExpediciones.png'), descripcion: 'Catálogo completo de expediciones con filtros de búsqueda' },
        { url: this.img('/screenshots/CrearExpedicion.png'), descripcion: 'Formulario para la creación de nuevas expediciones' },
        { url: this.img('/screenshots/DashboardAdmin.png'), descripcion: 'Dashboard de administración con métricas del sistema' },
        { url: this.img('/screenshots/DetallesDeExpedicionYCompraDeExpedicion.png'), descripcion: 'Detalle de expedición y flujo completo de compra' },
        { url: this.img('/screenshots/MisReservas.png'), descripcion: 'Panel de reservas del usuario con estado de cada una' }
      ]
    },
    {
      enDesarrollo: true,
      titulo: 'Sistema de Ventas',
      descripcion: 'API REST segura para gestión de inventario y facturación. Autenticación dual (tradicional con BCrypt + OAuth2 con Google) y control de acceso por roles.',
      slug: 'sistema-ventas',
      linkGithub: 'https://github.com/LeandroPacsiM/Sistema-de-Ventas',
      tecnologias: [
        { nombre: 'Java', color: '#ED8B00' },
        { nombre: 'OAuth2', color: '#EB5424' },
        { nombre: 'PostgreSQL', color: '#336791' },
        { nombre: 'Spring Boot', color: '#6DB33F' },
        { nombre: 'Spring Security', color: '#6DB33F' }
      ],
      capturas: [
        { url: this.img('/screenshots/Imagen1.png'), descripcion: 'Pantalla principal de la plataforma con el listado de expediciones disponibles' },
        { url: this.img('/screenshots/Imagen2.png'), descripcion: 'Vista del dashboard de administración con métricas y reservas activas' },
        { url: this.img('/screenshots/Imagen3.png'), descripcion: 'Detalle del código fuente mostrando la arquitectura del backen y los controladores REST' }
      ]
    }
  ]);

  getProyectos() {
    return this.proyectos;
  }

  getProyectoBySlug(slug: string) {
    return this.proyectos().find(p => p.slug === slug) ?? null;
  }
}
