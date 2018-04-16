import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {
  ElementOption, Elements, FormDetails, FormElement, Properties,
  SimpleFormBuilder as builder
} from 'ng2-simple-forms';
import { UserService } from '../../services/user.service';
import { ForgottenPasswordRequest, LoginRequest } from '../../modules/components/login/login.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  form: FormDetails;
  addForm: FormDetails;

  loginForm: FormDetails;

  constructor(public userService: UserService) {
  }


  ngOnInit() {
    this.form = builder.toFormDetails(this.getFormElements());

    this.loginForm = builder.toFormDetails([
      builder.createElement(Elements.Text, 'Username'),
      builder.createElement(Elements.Password, 'Password')
    ]);

    this.addForm = builder.toFormDetails([
      builder.createElement(Elements.Select, 'Type')
        .setProperty(Properties.Required, true)
        .setProperty(Properties.ErrorText, 'This is a required field!')
        .setProperty(Properties.Options, [
          new ElementOption(
            {
              value: Elements.Text,
              display: 'Text'
            }
          ),
          new ElementOption(
            {
              value: Elements.Password,
              display: 'Password'
            }
          ),
          new ElementOption(
            {
              value: Elements.Range,
              display: 'Range'
            }
          ),
          new ElementOption(
            {
              value: 'date',
              display: 'Date'
            }
          )
        ]),

      builder.createElement(Elements.Text, 'Label')
        .setProperty(Properties.Required, true)
        .setProperty(Properties.ErrorText, 'This is a required field!'),
    ]);
  }

  addElement(element: FormElement) {
    const elements = this.getElements(this.form);
    elements.push(builder.createElement(element.type, element.label));
    this.form = builder.toFormDetails(elements);
    console.log(this.form);
  }

  logElement(value: any) {
    console.log(value);
  }

  getElements(formDetails: FormDetails) {
    return formDetails.elements.map((element: {inputId: string, element: FormElement }) => {
      return element.element;
    });
  }

  getFormElements() {
    return [
      builder.createElement('text', 'My Text Element')
        .setProperty(Properties.Required, true)
        .setProperty(Properties.ErrorText, 'This is a required field!'),

      builder.createElement('date', 'My Date Element')
        .setProperty(Properties.HelpText, 'Some dynamically set help text'),

      builder.createElement('select', 'My Select Element')
        .setProperty('options', [
          {
            display: 'Display 1',
            value: 'display1'
          },
          {
            display: 'Display 2',
            value: 'display2'
          },
          {
            display: 'Display 3',
            value: 'display3'
          }
        ])
    ];
  }

  login(loginDetails: LoginRequest) {
    this.userService.login(loginDetails);
  }

  forgotPassword(forgottenPasswordRequest: ForgottenPasswordRequest) {
    console.log(forgottenPasswordRequest);
  }

}
