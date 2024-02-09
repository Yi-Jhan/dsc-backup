import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-no-privilege',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      You do not have permission to access this page.
    </p>
  `,
  styles: [
  ]
})
export class NoPrivilegeComponent {

}
