import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopUpService } from 'src/app/shared/Popup.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  show: boolean = false;

  constructor(private shared: PopUpService,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  public loginForm !: FormGroup;
  ngOnInit(): void {
    this.shared.getLogInModalStatus()
    .subscribe(res => this.show = res);

    this.loginForm = this.formBuilder.group({
      userName:['', [Validators.required, Validators.minLength(6)]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  closeLoginPopup(){
    this.shared.closeLogIn()
  }

  showRegPopup(){
    this.shared.showReg();
  }

  login(){
    this.http.get<any>("https://json-server.ede.local/testProjectCustomers")
    .subscribe(res=>{
      const user = res.find((a: any)=>{
        return a.userName === this.loginForm.value.userName && 
                a.password === this.loginForm.value.password
      });
      if(user){
        alert('login successfull');
        this.loginForm.reset();
        // this.router.navigate(['']);
      }else{
        alert('user nor found')
      }
    },err=>{
      alert('something went wrong')
    })

    this.closeLoginPopup();
  }
  
}
