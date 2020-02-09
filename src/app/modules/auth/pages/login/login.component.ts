import { AuthService } from './../../../../core/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  selector: 'app-login-page'
})

export class AppLoginComponent {
  form: FormGroup;
  returnToUrl: string;
  formSubmitted: boolean;
  wait: boolean;
  error: any;

  faExclamationTriangleIcon = faExclamationTriangle;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.authService.logout();

    this.returnToUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get fc() { return this.form.controls; }

  onSubmit() {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    this.wait = true;
    this.authService.login(this.fc.username.value, this.fc.password.value)
      .pipe(first())
      .subscribe(
        () => {
          this.returnToUrl ?
            this.router.navigate([this.returnToUrl]) :
            this.router.navigate(['home']);
        },
        error => {
          console.error(error);
          this.error = error;
          this.wait = false;
        });
  }
}
