import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthMethods, AuthProviders} from "angularfire2";
import {Validators, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;

  constructor(public af: AngularFire, private _fb: FormBuilder) {
  }

  login(form: FormGroup) {
    if (form.value.email && form.value.password) {
      this.af.auth.login({
          email: form.value.email,
          password: form.value.password,
        },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        }).then(data => {});
    }

  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() {

    this.myForm = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
