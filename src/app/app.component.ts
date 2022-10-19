import { Component } from '@angular/core';
import { DarkModeToggle } from './components/dark-mode-toggle.component';

/////////////Darkmode
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce Client';


//Darkmodeng
 darkMode= false;
  detectColorScheme(){
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark').matches){
      this.darkMode=true;
      document.documentElement.setAttribute('data-theme',this.darkMode? 'dark':'light');
    }
  }
  toggleTheme(){
    this.darkMode= !this.darkMode;
    document.documentElement.setAttribute('data-theme',this.darkMode? 'dark':'light');
  }


}
