import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { UserProfileAddressPageComponent } from './pages/user-profile-address-page/user-profile-address-page.component';
import { UserProfileSettingsPageComponent } from './pages/user-profile-settings-page/user-profile-settings-page.component';
import { UserProfileDetailsPageComponent } from './pages/user-profile-details-page/user-profile-details-page.component';
import { UserProfileEmploymentPageComponent } from './pages/user-profile-employment-page/user-profile-employment-page.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileAvatarSectionComponent } from './components/user-profile-avatar-section/user-profile-avatar-section.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserProfilePageComponent,
    UserProfileAddressPageComponent,
    UserProfileSettingsPageComponent,
    UserProfileDetailsPageComponent,
    UserProfileEmploymentPageComponent,
    UserProfileAvatarSectionComponent
  ]
})
export class UserProfileModule { }
