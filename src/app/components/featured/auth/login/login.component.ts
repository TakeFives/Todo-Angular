import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted!: boolean;

  loginForm = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    public modalService: ModalService,
    public errorService: ErrorService
  ) { }


  ngOnInit(): void {
    this.modalService.open();
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    this.submitted = true;

    return this.authService.login({
      username: this.loginForm.value.username!,
      password: this.loginForm.value.password!,
    })
      .subscribe({
        next: () => {
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
          this.modalService.close();
          this.submitted = false;
        },
        error: () => {
          this.loginForm.reset();
          this.submitted = false;
        },
        complete: () => console.log('done'),
      })
  }

}
