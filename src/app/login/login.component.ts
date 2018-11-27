import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service"
import { User } from "../models/user"
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token = ""
  loginForm: FormGroup
  submitted = false

  constructor(private _fb: FormBuilder, private _login: UserService) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: "",
      password: ""
    })
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
  }
  console.log(this.loginForm.value)
  this._login.signIn(this.loginForm.value).subscribe((res: any) => console.log(res))
  }

}
