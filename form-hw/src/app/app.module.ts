import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgeValidatorDirective } from './age-validator.directive';
import { NameValidatorDirective } from './name-validator.directive';
import { MailValidatorDirective } from './mail-validator.directive';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    AgeValidatorDirective,
    NameValidatorDirective,
    MailValidatorDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
