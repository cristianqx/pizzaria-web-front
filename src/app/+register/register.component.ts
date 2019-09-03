import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private userService : UserService,
    private router : Router, 
    private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit(){
    //this.userService.esqueciSenha(this.loginForm.value);
    this.router.navigate(['']);
  }

}
