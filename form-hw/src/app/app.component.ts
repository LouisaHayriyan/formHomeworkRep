import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ageValidator, AgeValidatorDirective} from './age-validator.directive';
import {nameValidator} from './name-validator.directive';
import {mailValidator} from './mail-validator.directive';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSubmissionMessage = false;

  form = this.fb.group({
      name: ['', [Validators.required, nameValidator]],
      mail: ['', [Validators.required, mailValidator]],
      age: ['', [Validators.required, ageValidator]],
    }
  );

  constructor(private fb: FormBuilder) {
  }

  onSubmit(): void {
    this.showSubmissionMessage = true;
  }

}
