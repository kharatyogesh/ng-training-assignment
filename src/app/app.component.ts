import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './components/task-list-component/task-list-component.component';
import { TaskFormComponentComponent } from './components/task-form-component/task-form-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TaskListComponent,TaskFormComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
