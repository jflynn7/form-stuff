import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ElementOption, Elements, FormDetails, SimpleFormBuilder as builder, Styles } from 'ng2-simple-forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormDetails;
  forgottenPasswordForm: FormDetails;

  isLogin: boolean = true;

  @Output() loginEmitter: EventEmitter<LoginRequest> = new EventEmitter<LoginRequest>();
  @Output() forgottenPasswordEmitter: EventEmitter<ForgottenPasswordRequest> = new EventEmitter<ForgottenPasswordRequest>();

  constructor() { }

  ngOnInit() {

    // Login Form
    this.loginForm = builder.toFormDetails([
      builder.createElement(Elements.Text, 'Username')
        .setStyle(Styles.ElementLabel, 'input-label')
        .setStyle(Styles.ElementInput, 'input-field'),
      builder.createElement(Elements.Password, 'Password')
        .setStyle(Styles.ElementLabel, 'input-label')
        .setStyle(Styles.ElementInput, 'input-field'),
      builder.createElement(Elements.Checkbox, '', { inputId: 'rememberMe', options: [
        new ElementOption({
          display: 'Remember Me?',
          value: 'rememberMe'
        })
        ]})
        .setStyle(Styles.Fieldset, 'rememberMe')
        .setStyle(Styles.OptionLabel, 'option-label')
    ]).setGlobalStyle(Styles.ElementWrapper, 'login-form');

    // Forgotten Password Form
    this.forgottenPasswordForm = builder.toFormDetails([
      builder.createElement(Elements.Text, 'Username')
        .setStyle(Styles.ElementLabel, 'input-label')
        .setStyle(Styles.ElementInput, 'input-field'),
    ]).setGlobalStyle(Styles.ElementWrapper, 'login-form');

  }

  toggleFormDisplay() {
    this.isLogin = !this.isLogin;
  }

  login() {
    const request = <LoginRequest> {
      username: this.loginForm.formGroup.get('username').value,
      password: this.loginForm.formGroup.get('password').value,
      rememberMe: (<{rememberMe: boolean}>this.loginForm.formGroup.get('rememberMe').value).rememberMe
    };
    this.loginEmitter.emit(request);
  }

  submitPasswordRequest() {
    const request = <ForgottenPasswordRequest> {
      username: this.forgottenPasswordForm.formGroup.get('username').value
    };
    this.forgottenPasswordEmitter.emit(request);
  }

}

export interface LoginRequest {
  username?: string;
  password?: string;
  rememberMe?: boolean;
}

export interface ForgottenPasswordRequest {
  username?: string;
}
