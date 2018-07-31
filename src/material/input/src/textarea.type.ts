import { Component } from '@angular/core';
import { FormlyFieldInput } from './input.type';

@Component({
  selector: 'formly-field-mat-textarea',
  template: `
    <textarea matInput
      [id]="id"
      [formControl]="formControl"
      [errorStateMatcher]="errorStateMatcher"
      [cols]="to.cols"
      [rows]="to.rows"
      [placeholder]="to.placeholder"
      [formlyAttributes]="field">
    </textarea>
  `,
})
export class FormlyFieldTextArea extends FormlyFieldInput {
}
