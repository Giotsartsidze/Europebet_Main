import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginModalComponent } from '../modals/login-modal/login-modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  constructor(public auth: AuthService, private http: HttpClient) {}
  user: any;
  ngOnInit(): void {
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      // console.log(this.user, typeof this.user);
    }
  }
}
