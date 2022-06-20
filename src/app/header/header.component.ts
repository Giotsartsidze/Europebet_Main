import { Component, OnInit } from '@angular/core';
import { PopUpService } from '../shared/Popup.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private shared: PopUpService) { }

  
  ngOnInit(): void {
    
  }
  showLoginPopup(){
    this.shared.showLogIn();
  }

  showRegPopup(){
    this.shared.showReg();
  }
 

  
}
