import { Component } from '@angular/core';
import { NameEditorComponent } from './components/name-editor/name-editor.component';

@Component({
  selector: 'app-root',
  imports: [NameEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
