import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenChargeComponent } from './pages/screen-charge/screen-charge.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,ScreenChargeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porfolio';
  loading = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 3000); // 3 segundos de carga
  }
}
