import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  cursos = [];

  constructor() { }

  anadirAlCatalogo(curso) {
    this.cursos.push(curso);
    this.cursos.sort(function(p1, p2){
      return p1.titulo.localeCompare(p2.titulo);
    })
  }

  obtenerCatalogo() {
    return this.cursos;
  }  
}