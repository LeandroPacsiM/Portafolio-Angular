import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.style.overflow = 'auto';
  }

  protected readonly sobreMi = signal({
    nombre: 'Leandro Pacsi',
    github: 'https://github.com/LeandroPacsiM',
    linkedin: 'https://www.linkedin.com/in/leandropacsi27/',
    youtube: 'https://youtube.com/@leandropacsi7703'
  });
}
