import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  title = 'TaskFlow';
  canDelete = false;
  rename() { this.title = 'Mes Taches'; }
  delete() { this.title = ''; }

}   

