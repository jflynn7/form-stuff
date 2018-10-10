import { Component, Input, OnInit } from '@angular/core';
import { FormDetails, FormElement } from 'ng2-simple-forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {

  @Input() className: string;

  // Standard Forms
  @Input() formDetails: FormDetails;
  @Input() formElementList: string[];

  // Array Forms
  @Input() formGroup: FormGroup;
  @Input() formElements: FormElement[];

  @Input() isArrayForm = false;

  constructor() { }

  ngOnInit() {
  }

}
