import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth.service';
import { PopUpService } from 'src/app/shared/Popup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  show: boolean = false;
  constructor(
    private shared: PopUpService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {}

  public registrationForm!: FormGroup;

  ngOnInit(): void {
    this.shared.getRegInModalStatus().subscribe((res) => {
      this.show = res;
    });

    this.registrationForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  closeRegPopup() {
    this.shared.closeReg();
    this.registrationForm.reset();
  }
  showLoginPopup() {
    this.shared.showLogIn();
    this.shared.closeReg();
  }

  checkuserNamemail() {
    this.auth.checkUsernameEmail().subscribe((res) => {
      let usernameEmail = res.find(
        (a: any) =>
          a.userName === this.registrationForm.value.userName ||
          a.email === this.registrationForm.value.email ||
          a.mobileNumber === this.registrationForm.value.mobileNumber
      );
      console.log(usernameEmail);
      if (!usernameEmail) {
        this.auth
          .registerUser(this.registrationForm.value)
          .subscribe((response) => {
            console.log(response);
            this.registrationForm.reset();
          });
        this.closeRegPopup();
        this.showLoginPopup();
      } else {
        this.registrationForm.controls['userName'].setErrors({
          taken: true,
        });
      }
    });
  }
}

// register() {
//   this.auth.registerUser(this.registrationForm.value).subscribe(
//     (res) => {
//       console.log(res);

//       this.registrationForm.reset();
//     },
//     (err) => alert('something went wrong')
//   );
//   this.closeRegPopup();
// }

// emailNotAllowed(control: FormControl): Promise<any> | Observable<any> {
//   const response = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (control.value === 'g@gmail.com ') {
//         resolve({ emailNotAllowed: true });
//       } else {
//         resolve(null);
//       }
//     }, 2000);
//   });
//   return response;
// }

// userNameNotAllowed(control: FormControl): Promise<any> | Observable<any> {
//   const response = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (control.value === 'giorgi') {
//         resolve({ userNameNotAllowed: true });
//       } else {
//         resolve(null);
//       }
//     }, 2000);
//   });
//   return response;
// }
