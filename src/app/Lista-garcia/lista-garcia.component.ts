import { Component } from '@angular/core';
import { Alumno } from 'src/app/models';

@Component({
  selector: 'app-lista-garcia',
  templateUrl: './lista-garcia.component.html',
  styleUrls: ['./lista-garcia.component.css']
})
export class ListaGarciaComponent  {
  public alumnos: Alumno[] = [
    new Alumno(1, 'Juan', 'Roldan', 8, 7, 9 ),
    new Alumno(2, 'Ramiro', 'Perez', 7 , 5, 8),
    new Alumno(3, 'Julia', 'Alvarez', 2, 8, 4),
    new Alumno(4, 'Laura', 'Martinez', 7 , 7, 8),
    new Alumno(5, 'Marta', 'Lopez', 3, 5, 6 )
  ];



}
