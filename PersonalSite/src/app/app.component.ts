import { Component } from '@angular/core';
import { projects } from '../app/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Julian M. Rice';
  projects = projects
}
