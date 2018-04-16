import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverCardComponent } from './hover-card/hover-card.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CardComponent } from './presentation-wrappers/card/card.component';
import { TabSetComponent } from './tab-set/tab-set.component';
import { FormInputComponent } from './form-components/form-input/form-input.component';
import { UnauthorisedBannerComponent } from './unauthorised-banner/unauthorised-banner.component';
import { FormSectionComponent } from './form-components/form-section/form-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormsModule } from 'ng2-simple-forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SimpleFormsModule
  ],
  declarations: [
    HoverCardComponent,
    CardComponent,
    LoadingSpinnerComponent,
    UnauthorisedBannerComponent,
    FormInputComponent,
    FormSectionComponent,
    TabSetComponent,
    LoginComponent
  ],
  exports: [
    HoverCardComponent,
    CardComponent,
    LoadingSpinnerComponent,
    UnauthorisedBannerComponent,
    FormInputComponent,
    FormSectionComponent,
    TabSetComponent,
    LoginComponent
  ]
})
export class ComponentsModule { }
