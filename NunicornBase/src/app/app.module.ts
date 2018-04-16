import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { PagebaseComponent } from './pages/pagebase/pagebase.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './modules/components/shared/header/header.component';
import { SimpleFormsModule } from 'ng2-simple-forms';
import { UserService } from './services/user.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSettings } from './app.settings';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { UserProfileRoutingModule } from './modules/user-profile/user-profile-routing.module';
import { ComponentsModule } from './modules/components/components.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { MeetingNotesModule } from './modules/meeting-notes/meeting-notes.module';
import { MeetingNotesRoutingModule } from './modules/meeting-notes/meeting-notes-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PagebaseComponent,
    HeaderComponent,
    HomePageComponent,
    LogoutPageComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    UserProfileModule,
    UserProfileRoutingModule,
    MeetingNotesModule,
    MeetingNotesRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: AppSettings.XSRF_COOKIE_NAME,
      headerName: AppSettings.XSRF_HEADER_NAME,
    }),
    SimpleFormsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    PagebaseComponent,
    HeaderComponent,
    HomePageComponent,
    LogoutPageComponent
  ],
  providers: [
    HttpService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
