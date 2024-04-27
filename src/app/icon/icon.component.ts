import { Component } from '@angular/core';
import { faArrowCircleRight, faArrowDown, faArrowUp, faCoffee} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdn, faAngular, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  standalone: true,
  imports: [FontAwesomeModule],
})

export class IconComponent {
    icons = [faArrowDown, faCoffee, faArrowUp, faAdn, faAngular, faReact, faVuejs, faArrowCircleRight];
    icon = this.icons[0];

  updateIcon() {
    setTimeout(()=>{
        const random = this.getRandom()
        this.icon = this.icons[random]
    }, 3000)
    
  }
  getRandom() {
    return Math.round(Math.random() * (this.icons.length-1 - 0) + 0);
 }
}