import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl('')
  })
  
    /**
     * This constructor is used to inject  AuthService and  Router
     * @param authService This is the first parameter to constructor method
     * @param router This is the second parameter to constructor method
     * @return Nothing.
     */
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

   /**
     * This method is used to make user logining by email and password
     * @return Nothing
     */
  onSubmit(): void {
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe(
      () => {
        this.authService.loggedIn=true;
      },
      (err) => console.log(err),
      () => this.router.navigate(['home'])
    );
  }

  /**
     * This method is used to navigate to register component
     * @return Nothing
   */
  register(): void {
    this.router.navigate(['register']);
  }

}
