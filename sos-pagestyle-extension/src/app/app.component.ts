import { Component } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  location = '';
  selectedFont:string = '';
  fontList:string[] = [
    'Roboto',
    'Lato',
    'Poppins',
    'Barlow',
    'Oxygen',
    'Arimo',
    'Bebas Neue',
    'Lobster',
    'Patua One',
    'Arial',
    'Arial Black',
    'Comic Sans MS',
    'Courier',
  ];
  styleList:string[] = ['bold'];

  constructor() {
    this.location = window.location.hostname;
  }

  onInit() {
    /* disable-typescript */
    chrome.tabs[0].
  }

  fontChangeHandler(e:Event) {
    console.log(e);
    
  }
}
