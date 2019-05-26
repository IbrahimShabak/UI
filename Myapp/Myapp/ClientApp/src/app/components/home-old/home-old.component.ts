// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'homeold',
  templateUrl: './home-old.component.html',
  styleUrls: ['./home-old.component.scss'],
  animations: [fadeInOut]
})
export class homeoldComponent {
  constructor(public configurations: ConfigurationService) {
  }
}
