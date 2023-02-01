import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExampleReactiveFormComponent } from '../example-reactive-form/example-reactive-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, ExampleReactiveFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
