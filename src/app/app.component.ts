import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passWordValidator } from './password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-15-ReactiveForm-ConfirmPassword-Validation';


  finalValue: any = {};
  profileFormSubmitted:boolean = false;

 constructor() {  }
  profileForm = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.minLength(6)]),
    passWord:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPwd:new FormControl('',[Validators.required] )
  }, [passWordValidator("passWord","confirmPwd")])

  get f () {
    return this.profileForm.controls;
  }

onSubmit() {
  this.profileFormSubmitted = true;
  if(this.profileForm.valid) {
    this.finalValue = {
      userName:this.profileForm.get('userName')?.value,
      passWord:this.profileForm.get('passWord')?.value,
      confirmPwd:this.profileForm.get('confirmPwd')?.value
    }
    console.log('final form output==>',this.finalValue);
  }
  
}
  

}




