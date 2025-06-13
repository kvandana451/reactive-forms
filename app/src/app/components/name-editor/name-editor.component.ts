import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.scss',
})
export class NameEditorComponent {
  name = new FormControl('Vandana');
  designation = new FormControl('Junior Angular Developer');
  desg: any = '';
  country = new FormControl();
  ngOnInit() {
    this.designation.valueChanges.subscribe((value: string | null) => {
      console.log(value);
      this.desg = value;
    });
  }
}
