import { Component } from '@angular/core';
import {DrawerService} from './services/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly title = 'isi-test';

  constructor(
    private carForm: DrawerService,
  ) {}

}
