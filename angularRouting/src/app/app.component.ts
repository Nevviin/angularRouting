import { Component } from '@angular/core';
import { ApiService } from './api';
import {FormGroup, FormBuilder,Validators, FormsModule} from '@angular/forms';
import {UserDetails} from './interfaces/user-details';
import {User} from './interfaces/user';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

