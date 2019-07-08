import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  cursos;
  p: number = 1;

  constructor(private datosService: DatosService) {
    this.cursos = this.datosService.obtenerCatalogo();
  }

  ngOnInit() {
  }
}