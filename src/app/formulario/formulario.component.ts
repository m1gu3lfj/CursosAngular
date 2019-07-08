import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  activo: boolean;
  profesores: string[];
  titulo: string;
  niveles: string[];
  horas: number[];

  constructor(private datosService: DatosService) { 
    this.activo = false;
    this.profesores = ["Sergio Martín", "Daniel López", "Eduardo García", "Joaquín Rodriguez"];
    this.titulo = "";
    this.niveles = ["Básico", "Intermedio", "Avanzado"];
    this.horas = [5,10,25,50,100,150,200,400];
  }

  ngOnInit() {
  }

  anadirCurso(act, pro, tit, niv, hor){
    let curso = {activo:act.checked, profesor:pro.value, titulo:tit.value, nivel:niv.value, horas:hor.value};
    this.datosService.anadirAlCatalogo(curso);
    window.alert("Se ha añadido el curso " + curso.titulo + " de " + curso.profesor);
  }
}