import { Component } from '@angular/core';
import { HeaderService } from './service/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  constructor(
    public headerService: HeaderService
  ) { }
}
