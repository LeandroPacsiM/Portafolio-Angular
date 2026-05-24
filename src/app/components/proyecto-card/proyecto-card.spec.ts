import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProyectoCard } from './proyecto-card';

describe('ProyectoCard', () => {
  let component: ProyectoCard;
  let fixture: ComponentFixture<ProyectoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoCard],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectoCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('data', {
      titulo: 'Test',
      descripcion: 'Test desc',
      slug: 'test',
      linkGithub: 'https://github.com/test',
      tecnologias: ['Angular']
    });
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
