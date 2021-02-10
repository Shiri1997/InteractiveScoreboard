import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private auth: AngularFireAuth ) { }
  ngOnInit(): void {
    this.buildLoginForm();
  }
  buildLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  loginUser(): void {
    const {email, password} = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email, password).then( user => {
      this.router.navigate(['']);
    });
  }
}
