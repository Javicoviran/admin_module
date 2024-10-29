import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './error.component.html',
  styles: ``,
})
export class ErrorComponent {
  reloadPage() {
    window.location.reload();
  }
}
