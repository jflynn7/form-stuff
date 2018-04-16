import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { UserProfileSettingsPageComponent } from './pages/user-profile-settings-page/user-profile-settings-page.component';
import { UserProfileAddressPageComponent } from './pages/user-profile-address-page/user-profile-address-page.component';
import { UserProfileEmploymentPageComponent } from './pages/user-profile-employment-page/user-profile-employment-page.component';
import { UserProfileDetailsPageComponent } from './pages/user-profile-details-page/user-profile-details-page.component';

const routes: Routes = [
  {
    path: 'user-profile-home',
    component: UserProfilePageComponent
  },
  {
    path: 'user-profile-settings',
    component: UserProfileSettingsPageComponent
  },
  {
    path: 'user-profile-addresses',
    component: UserProfileAddressPageComponent
  },
  {
    path: 'user-profile-employment',
    component: UserProfileEmploymentPageComponent
  },
  {
    path: 'user-profile-home',
    component: UserProfilePageComponent
  },
  {
    path: 'user-profile-details',
    component: UserProfileDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
