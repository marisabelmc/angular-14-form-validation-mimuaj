import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../app/examplecustomvalidation';

@Component({
  selector: 'app-example-reactive-form',
  templateUrl: './example-reactive-form.component.html',
  styleUrls: ['./example-reactive-form.component.css'],
})
export class ExampleReactiveFormComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  name = 'Nombre de BOB';
  maxLength = 10;

  formExample: FormGroup = this._formBuilder.group({
    name: [this.name, [Validators.required, forbiddenNameValidator(/bob/i)]],
    age: ['33'],
    email: ['johndoe@email.com'],
  });

  ngOnInit(): void {}
}
