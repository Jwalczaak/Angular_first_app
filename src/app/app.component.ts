import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  username = '';

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
  onResetValueUsername() {
    this.username = '';
  }
}
