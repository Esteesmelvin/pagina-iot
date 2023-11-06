import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagina-iot';
  dato1: string = '0,1';
  dato2: string = 'Frecuencia'+'Hz';
  dato3: string = 'Minutos';
}
