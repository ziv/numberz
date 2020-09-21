import { Component } from '@angular/core';
import {GameService} from './game.service';

@Component({
  selector: 'nmz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public readonly service: GameService) {
  }
}
