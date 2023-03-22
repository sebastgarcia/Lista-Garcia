import { Component, OnInit } from '@angular/core';
import { Usuario } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public usuarios: Usuario[] = [
    new Usuario(1, 'Naruto', 'Uzumaki', 'naruto@mail.com', 16),
    new Usuario(3, 'Sasuke', 'Uchiha', 'sasuke@mail.com', 16),
    new Usuario(4, 'Kakashi', 'Hatake', 'kakashi@mail.com', 16),
    new Usuario(5, 'Sakura', 'Haruno', 'sakura@mail.com', 29),
    new Usuario(6, 'Itachi', 'Uchiha', 'itachi@mail.com', 21),
  ];
  ngOnInit(): void {
    // Este es el ciclo de vida ON INIT (al inicializarse) del componente...
  }
}
