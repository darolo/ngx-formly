import { Component } from '@angular/core';
import { FieldType } from '../field.type';

@Component({
  selector: 'formly-field-textarea',
  template: `
    <textarea [id]="id" name="{{key}}" [formControl]="formControl" cols="{{templateOptions.cols}}"
      rows="{{templateOptions.rows}}" class="form-control"
      [formlyAttributes]="templateOptions">
    </textarea>
  `,
})
export class FormlyFieldTextArea extends FieldType {
}