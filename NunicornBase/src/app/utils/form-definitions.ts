import { SimpleFormBuilder as builder, Styles, Elements, FormElement, ElementOption } from 'ng2-simple-forms';
import { FormUtils } from './form-utils';

export class FormDefinitions {

  formUtils: FormUtils = new FormUtils();

  getUserProfileForm = (countryList: ElementOption[]) => {
    return [
      builder.createElement(Elements.Text, 'First Name', {inputId: 'firstName'}),
      builder.createElement(Elements.Text, 'Surname', {inputId: 'surname'}),
      builder.createElement(Elements.Datepicker, 'Date of Birth', {inputId: 'dateOfBirth'}),
      builder.createElement(Elements.Text, 'Mobile Telephone', {inputId: 'mobilePhoneNumber'}),
      builder.createElement(Elements.Text, 'Home Telephone', {inputId: 'homePhoneNumber'}),
      builder.createElement(Elements.Text, 'Occupation', {inputId: 'occupation'}),
      builder.createElement(Elements.Select, 'Gender', { inputId: 'gender', options: this.formUtils.getGenderOptions()}),
      builder.createElement(Elements.Text, 'Facebook', { inputId: 'facebookProfile'}),
      builder.createElement(Elements.Text, 'Twitter', { inputId: 'twitterProfile'}),
      builder.createElement(Elements.Text, 'LinkedIn', { inputId: 'linkedInProfile'}),
      builder.createElement(Elements.Text, 'Google+', { inputId: 'googlePlusProfile'}),
      builder.createElement(Elements.Select, 'Nationality', { inputId: 'nationality', options: countryList  }),
      builder.createElement(Elements.Select, 'Country of Residence', {inputId: 'countryOfResidence', options: countryList}),
      builder.createElement(Elements.FormArray, 'Addresses',
        { inputId: 'addresses',
                  formArrayControls: this.setStyles([
          builder.createElement(Elements.Text, 'House Number', {inputId: 'houseNumber'}),
          builder.createElement(Elements.Text, 'Street', {inputId: 'street'}),
          builder.createElement(Elements.Text, 'Town', {inputId: 'town'}),
          builder.createElement(Elements.Select, 'Country', {inputId: 'country', options: countryList}),
          builder.createElement(Elements.Text, 'Postcode', {inputId: 'postcode'})
        ]) })
    ];
  }

  setStyles = (formElements: FormElement[]): FormElement[] => {
    return formElements.map(element => {
      return element
        .setStyle(Styles.ElementWrapper, 'user-profile-form')
        .setStyle(Styles.ElementLabel, 'input-label')
        .setStyle(Styles.ElementInput, 'input-field');
    });
  }
}
