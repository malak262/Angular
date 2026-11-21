import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import { Task } from './task/task';
import { Catalogue } from './catalogue/catalogue';

@Component({
  imports: [RouterOutlet, Header, Task, Catalogue],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('taskflow');
}
