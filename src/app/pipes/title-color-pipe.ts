import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleColor',
  standalone: true
})
export class TitleColorPipe implements PipeTransform {

  transform(title: string): string {
    if (title.length > 10) {
      return 'red';
    } else {
      return 'green';
    }
  }
}