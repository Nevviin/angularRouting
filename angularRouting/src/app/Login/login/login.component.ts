import { Component, OnInit } from '@angular/core';
import {UserDetails} from '../../interfaces/user-details';
import {ApiService} from '../../api/api.service';
import {FormGroup, FormBuilder,Validators, FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userDetails:UserDetails|undefined;
 
  title = 'simpleLogin';
   form:FormGroup;
  submitted = false;
  constructor(
    private apiService:ApiService,
    private formBuilder:FormBuilder,
    private router:Router

  ){}

  ngOnInit() {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
}
get f() { return this.form.controls; }

  onSubmit()
  {
    console.log("submit is called on button click");
    console.log(this.f.username.value);
    var user = {  userName:this.f.username.value,
      password:this.f.password.value};
    this.submitted=true;
    this.apiService.signIn(user).subscribe((data:UserDetails)=>
    {
    this.userDetails= {...data};
    console.log(JSON.stringify(this.userDetails));
    this.router.navigate(['user-details']);
    }
    );
}
}
