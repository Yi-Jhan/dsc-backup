import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Page not found!
    </p>
  `,
  styles: []
})
export class ErrorComponent {

}
