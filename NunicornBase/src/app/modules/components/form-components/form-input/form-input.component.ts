import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from 'ng2-simple-forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Input() className: string;
  @Input() formGroup: FormGroup;
  @Input() formElement: FormElement;

  constructor() { }

  ngOnInit() {
  }

}
