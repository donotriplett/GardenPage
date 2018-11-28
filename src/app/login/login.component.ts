import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service"
import { FormBuilder, FormGroup } from "@angular/forms"
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  token = ""
  loginForm: FormGroup

  constructor(private _fb: FormBuilder, private _login: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: "",
      password: ""
    })
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
  }
  this._login.signIn(this.loginForm.value).subscribe((res: any) => {this.token = res.token; localStorage.setItem("token", this.token); this.router.navigate(["/", "shop"])})
  }
}
