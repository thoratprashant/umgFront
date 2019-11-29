import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.scss']
})
export class DoctorSignupComponent implements OnInit {
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.step1 = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.step2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
    this.step3 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  }

}
