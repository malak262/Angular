import {
  Component,
  signal,
  computed,
  effect
} from '@angular/core';

import { DatePipe, UpperCasePipe } from '@angular/common';
import { TitleColorPipe } from '../pipes/title-color-pipe';

interface TaskItem {
  id: number;
  title: string;
  dueDate: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, TitleColorPipe],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {

  tasks = signal<TaskItem[]>([
    {
      id: 1,
      title: 'Lire Angular',
      dueDate: '2026-11-21',
      completed: false
    },
    {
      id: 2,
      title: 'Installer CLI',
      dueDate: '2026-11-22',
      completed: true
    },
    {
      id: 3,
      title: 'Créer TaskFlow',
      dueDate: '2026-11-23',
      completed: false
    }
  ]);

  newTask = signal('');

  availableTasks = computed(() =>
    this.tasks().filter(task => !task.completed)
  );

  emptyStock = computed(() =>
    this.availableTasks().length === 0
  );

  all = computed(() => this.tasks().length);

  constructor() {
    effect(() => {
      console.log(
        'Tâches disponibles :',
        this.availableTasks()
      );
    });
  }

  addTask() {
    const title = this.newTask().trim();

    if (!title) return;

    this.tasks.update(tasks => [
      ...tasks,
      {
        id: Date.now(),
        title: title,
        dueDate: new Date().toISOString().slice(0, 10),
        completed: false
      }
    ]);

    this.newTask.set('');
  }

  emptyTasks() {
    this.tasks.set([]);
  }

  deleteTask(id: number) {
    this.tasks.update(tasks =>
      tasks.filter(task => task.id !== id)
    );
  }

  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }
}