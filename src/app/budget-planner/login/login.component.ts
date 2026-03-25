import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar } from '@angular/material/snack-bar'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
      horizontalPosition: 'end',
      verticalPosition: 'top'
    }
  }
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: any;
  registerForm!: FormGroup;
  activeForm: 'login' | 'register' = 'login';

  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private toastr: ToastrService
  ) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })

    this.registerForm = this.fb.group({
      userNamr: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  login() {
//     this.snackBar.dismiss(); // close previous
// this.snackBar.open('Top Left Message', 'Close', {
//   duration: 3000,
//   horizontalPosition: 'start',
//   verticalPosition: 'top'
// });
 this.toastr.success('Saved successfully!', 'Success');
    if (this.loginForm.valid) {
      this.router.navigate(['/budget-planner/dashboard'])
    }
    else {

      this.snackBar.open("Invalid Email Or Password", 'Close', { duration: 3000 })
    }
  }

  register() {
    if (this.registerForm.valid) {
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    }
    else {

      this.snackBar.open("Please fill the all fields correctly", 'Close', { duration: 3000 })
    }
  }
  toggleForm(val: any) {
    this.activeForm = val;

  }
}
