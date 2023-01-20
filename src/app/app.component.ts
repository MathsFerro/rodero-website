import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rodero-web';
  
  constructor() {
    AOS.init();
  }
}
// ANIM https://michalsnik.github.io/aos/