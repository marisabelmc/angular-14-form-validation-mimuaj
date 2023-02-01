import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  legalAgeValidator,
  validDNIValidator,
} from '../app/examplecustomvalidation';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css'],
})
export class ExerciseOneComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  name = 'dd';
  email = 'jklj@caser.com';
  birthDate = '20/02/1994';
  age = '22';
  dniExpiryDate = '15/05/2028';

  formExercise: FormGroup = this._formBuilder.group({
    name: [this.name, [Validators.required, Validators.pattern('^[A-Za-z]*$')]],
    email: [this.email, Validators.pattern(/@caser.com$/)],
    birthDate: [this.birthDate, legalAgeValidator()],
    age: [],
    dniExpiryDate: [this.dniExpiryDate, validDNIValidator()],
  });

  ngOnInit() {}
}
