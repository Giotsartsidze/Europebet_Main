import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopUpService } from 'src/app/shared/Popup.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  show : boolean = false;
  constructor(private shared: PopUpService, 
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  public registrationForm !: FormGroup;
  ngOnInit(): void {
    this.shared.getRegInModalStatus()
    .subscribe(res => this.show = res);

    this.registrationForm = this.formBuilder.group({
      userName:['',[Validators.required, Validators.minLength(6)]],
      mobileNumber:['',[Validators.required, Validators.minLength(9)]],
      email:['',[Validators.required, Validators.email]],  
      password:['',[Validators.required, Validators.minLength(8)]]
    })
  }


  closeRegPopup(){
    this.shared.closeReg();
  }

  register(){
   
      this.http.post<any>('https://json-server.ede.local/testProjectCustomers',this.registrationForm.value)
        .subscribe(res=>{
          alert('register sucsessfull');
          this.registrationForm.reset();
          
        },err=>
          alert('something went wrong')
          )
          this.closeRegPopup();
        }
      }

      
    
  

