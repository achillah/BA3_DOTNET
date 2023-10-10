import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  repeatPass: string = 'none';
  displayMsg: string = '';
  isAccountCreated: boolean = false;



  constructor(private authService: AuthService) {}

  registerForm = new FormGroup({

    firstname: new FormControl("", [
    Validators.required,
    Validators.minLength(2), 
    Validators.pattern("[a-zA-Z].*"),
    ]),
    lastname: new FormControl("", [
      Validators.required,
      Validators.minLength(2), 
      Validators.pattern("[a-zA-Z].*"),
    ]),
    email: new FormControl("", [Validators.required, 
    Validators.email]),

    pwd: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
    rpwd: new FormControl("")

  });

  registerSubmited(){
    if(this.PWD.value == this.RPWD.value){
      console.log(this.registerForm.valid);
      this.repeatPass = 'none'

      this.authService.registerUser([
          this.registerForm.value.firstname??'',
          this.registerForm.value.lastname??'',
          this.registerForm.value.email??'',
          this.registerForm.value.pwd ?? '',
 
      ]).subscribe(res =>{
        if (res == 'Success') {
          this.displayMsg= 'Account Created Successfully';
          this.isAccountCreated = true;
        }else if (res == 'Already Exist') {
          this.displayMsg= 'Account Already Exist.Re try';
          this.isAccountCreated = false;
        }else{
          this.displayMsg= 'Something went wrong';
          this.isAccountCreated = false;
        }
      })

    }else {

      this.repeatPass = 'inline'

    }
  }

  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl;

  }

  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl;

  }
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;

  }
  get PWD(): FormControl{
    return this.registerForm.get("pwd") as FormControl;

  }
  get RPWD(): FormControl{
    return this.registerForm.get("rpwd") as FormControl;

  }
}

