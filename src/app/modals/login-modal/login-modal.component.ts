import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PopUpService } from 'src/app/shared/Popup.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  show: boolean = false;

  constructor(
    private shared: PopUpService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {}

  public loginForm!: FormGroup;
  ngOnInit(): void {
    this.shared.getLogInModalStatus().subscribe((res) => (this.show = res));

    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  closeLoginPopup() {
    this.shared.closeLogIn();
    this.loginForm.reset();
  }

  showRegPopup() {
    this.shared.showReg();
    this.shared.closeLogIn();
  }

  login() {
    this.auth.logInUser().subscribe(
      (res) => {
        let loginUser = res.find(
          (a: any) =>
            a.userName === this.loginForm.value.userName &&
            a.password === this.loginForm.value.password
        );
        if (loginUser) {
          localStorage.setItem('token', JSON.stringify(loginUser));
          this.closeLoginPopup();
        } else {
          alert('user nor found');
        }
      },

      (err) => {
        alert('something went wrong');
      }
    );
  }
}
