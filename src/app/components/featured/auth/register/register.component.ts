import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';
import { MyFormValidators } from 'src/app/validators/form.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  submitted!: boolean;

  registerForm = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5)
      
    ]),
    confirmPassword: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ])
  },
  [MyFormValidators.matchValidator('password','confirmPassword')]
  )

  constructor(
    private router: Router,
    public modalService: ModalService,
    private userService: UserService,
    public errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.modalService.open()
  }

  onSubmit() {

    if (this.registerForm.invalid) {
      this.registerForm.get('username')?.markAsTouched();
      this.registerForm.get('password')?.markAsTouched();
      this.registerForm.get('confirmPassword')?.markAsTouched();
      return;
    }

     this.submitted = true;

    this.userService.createUser(
      {
        username: this.registerForm.value.username!,
        password: this.registerForm.value.password!
      }
    )
      .subscribe({
        next: () => {
          this.registerForm.reset();
          this.submitted = false;
          this.modalService.close();
          this.goToLogin();
        },
        error: () => {
          this.registerForm.reset();
          this.submitted = false;
        },
        complete: () => {
          console.log('done');
        }
      })
  }

  goToLogin() {
    this.router.navigate(['/auth'])
  }

  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }

  ngOnDestroy(){
    this.registerForm.reset();
  }
}
