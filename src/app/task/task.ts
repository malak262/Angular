import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { TitleColorPipe } from '../pipes/title-color-pipe';

@Component({
  selector: 'app-task',
  imports: [DatePipe, UpperCasePipe, TitleColorPipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {

  tasks = [
    {
      id: 1,
      title: 'Lire Angular',
      dueDate: '2026-11-15'
    },
    {
      id: 2,
      title: 'Installer le CLI',
      dueDate: '2026-11-16'
    },
    {
      id: 3,
      title: ' TaskFlow',
      dueDate: '2026-11-17'
    }
  ];

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}