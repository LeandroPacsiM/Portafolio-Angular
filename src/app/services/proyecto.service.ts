import { Injectable, signal } from '@angular/core';
import { Proyecto } from '../components/proyecto-card/proyecto-card';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private readonly proyectos = signal<Proyecto[]>([
    {
      titulo: 'Plataforma de Expediciones Turísticas',
      descripcion: 'Plataforma web de reservas para expediciones turísticas que permite a los usuarios explorar viajes, visualizar itinerarios y elegir fechas disponibles. Resuelve problemas comunes en la gestión de turismo como la falta de control de cupos y la sobreventa',
      slug: 'plataforma-expediciones',
      linkGithub: 'https://github.com/LeandroPacsiM/Herramientas-Seccion-Grupo-06-API/tree/feature/leandro-pacsi',
      linkDemo: 'https://ejemplo-plataforma.com',
      tecnologias: ['SpringBoot', 'Java', 'SpringSecurity', 'React', 'MySQL'],
      capturas: [
        { url: '/screenshots/PaginaPrincipal.png', descripcion: 'Página principal con hero y navegación del sistema' },
        { url: '/screenshots/IniciarSesion.png', descripcion: 'Formulario de inicio de sesión con autenticación de usuarios' },
        { url: '/screenshots/Expediciones.png', descripcion: 'Listado de expediciones turísticas disponibles para reservar' },
        { url: '/screenshots/CatalogoDeExpediciones.png', descripcion: 'Catálogo completo de expediciones con filtros de búsqueda' },
        { url: '/screenshots/CrearExpedicion.png', descripcion: 'Formulario para la creación de nuevas expediciones' },
        { url: '/screenshots/DashboardAdmin.png', descripcion: 'Dashboard de administración con métricas del sistema' },
        { url: '/screenshots/DetallesDeExpedicionYCompraDeExpedicion.png', descripcion: 'Detalle de expedición y flujo completo de compra' },
        { url: '/screenshots/MisReservas.png', descripcion: 'Panel de reservas del usuario con estado de cada una' }
      ],
      videoUrl: 'https://www.youtube.com/embed/TKOtr4qznbA?si=XiMoMxkdwTvVuE8k'
    },
    {
      enDesarrollo: true,
      titulo: 'Sistema de Ventas',
      descripcion: 'API REST segura para gestión de inventario y facturación. Autenticación dual (tradicional con BCrypt + OAuth2 con Google) y control de acceso por roles.',
      slug: 'sistema-ventas',
      linkGithub: 'https://github.com/LeandroPacsiM/Sistema-de-Ventas',
      tecnologias: ['Java', 'OAuth2', 'PostgreSQL', 'Spring Boot', 'Spring Security'],
      capturas: [
        { url: '/screenshots/Imagen1.png', descripcion: 'Pantalla principal de la plataforma con el listado de expediciones disponibles' },
        { url: '/screenshots/Imagen2.png', descripcion: 'Vista del dashboard de administración con métricas y reservas activas' },
        { url: '/screenshots/Imagen3.png', descripcion: 'Detalle del código fuente mostrando la arquitectura del backen y los controladores REST' }
      ],
      videoUrl: 'https://www.youtube.com/embed/TKOtr4qznbA?si=XiMoMxkdwTvVuE8k'
    }
  ]);

  getProyectos() {
    return this.proyectos;
  }

  getProyectoBySlug(slug: string) {
    return this.proyectos().find(p => p.slug === slug) ?? null;
  }
}
