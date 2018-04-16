import { ElementOption, FormDetails, FormElement, SimpleFormBuilder } from 'ng2-simple-forms';
import { FormArray, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { HttpService } from '../services/http.service';
import { AppSettings } from '../app.settings';
import { TransformationUtils } from './transformation-utils';

export class FormUtils {

  transformationUtils: TransformationUtils = new TransformationUtils();

  getArrayFormControls = (formKey: string, formDetails: FormDetails) => {
    return (<FormArray>formDetails.formGroup.get(formKey)).controls;
  }

  getArrayForm = (formKey: string, formDetails: FormDetails, initialData?: {}) => {
    if (initialData) {
      const formGroup: FormGroup = SimpleFormBuilder.toFormGroup(formDetails.get(formKey).formArrayControls);
      formGroup.patchValue(initialData);
      return formGroup;
    }
    return SimpleFormBuilder.toFormGroup(formDetails.get(formKey).formArrayControls);
  }

  getElements = (formDetails: FormDetails, formKey: string, elementIds: string[]) => {
    const elements: FormElement[] = [];
    elementIds.forEach(elementId => {
      elements.push(this.getArrayFormElement(formDetails, formKey, elementId));
    });
    console.log(elements);
    return elements;
  }

  getArrayFormElement = (formDetails: FormDetails, formKey: string, elementId: string) => {
    return formDetails.get(formKey).formArrayControls.find((element: FormElement) => {
      return element.inputId === elementId;
    });
  }

  getGenderOptions = () => {
    return [
      new ElementOption({
        value: 'Male',
        display: 'Male'
      }),
      new ElementOption({
        value: 'Female',
        display: 'Female'
      }),
      new ElementOption({
        value: 'Non-Binary',
        display: 'Non-Binary'
      })
    ];
  }

  getCountryOptions = (httpService: HttpService): Subject<ElementOption[]> => {
    const countryList: Subject<ElementOption[]> = new Subject();
    const elementOptions: ElementOption[] = [];
    httpService.doGet('https://restcountries.eu/rest/v2/all').subscribe((result: any[]) => {
      result.forEach(item => {
        elementOptions.push(new ElementOption({
          value: item.name,
          display: item.name
        }));
      });
      countryList.next(elementOptions);
    });
    return countryList;
  }

  addNewFormArrayItem = (formDetails: FormDetails, formKey: string) => {
    (formDetails.formGroup.get(formKey) as FormArray).push(this.getArrayForm(formKey, formDetails));
  }

  removeFormArrayItem(formDetails: FormDetails, key: string, index: number) {
    (formDetails.formGroup.get(key) as FormArray).removeAt(index);
  }

  updateForm(dataObject: {}, formDetails: FormDetails) {
    if (dataObject) {
      Object.keys(dataObject).forEach((key: string) => {
        if (formDetails.formGroup.get(key)) {
          // Deal with dates, so we can format them
          if (formDetails.get(key).type === 'date') {
            formDetails.formGroup.get(key).setValue(this.transformationUtils.toDate(dataObject[key], AppSettings.INPUT_DATE_FORMAT));
          } else if (formDetails.get(key).type === 'formArray') {
            this.updateFormArrayValues(dataObject, key, formDetails);
          } else {
            formDetails.formGroup.get(key).setValue(dataObject[key]);
          }
          formDetails.formGroup.get(key).markAsTouched();
        }
      });
    }
  }

  updateFormArrayValues(dataObject: {}, key: string, formDetails: FormDetails) {
    if (dataObject[key]) {
      dataObject[key].forEach((item: {}, index: number) => {
        (formDetails.formGroup.get('addresses') as FormArray).controls[index].patchValue(item);
        Object.keys((<FormGroup>(formDetails.formGroup.get('addresses') as FormArray).controls[index]).controls).forEach(controlKey => {
          (<FormGroup>(formDetails.formGroup.get('addresses') as FormArray).controls[index]).controls[controlKey].markAsTouched();
        });
        if ((formDetails.formGroup.get('addresses') as FormArray).controls.length < dataObject[key].length) {
          this.addNewFormArrayItem(formDetails, 'addresses');
        }
      });
    }
  }

  getValue(key: string, formDetails: FormDetails) {
    if (formDetails.formGroup.get(key)) {
      return formDetails.formGroup.get(key).value;
    }

    return null;
  }
}
