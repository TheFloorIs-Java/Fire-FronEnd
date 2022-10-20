import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  constructor(private authService: AuthService) {
    this.getUserInfo();
  }

  ngOnInit(): void {
    //showing product purchase details
    //showing cart items
  }

  getUserInfo(){
    this.authService.getUserInfo().subscribe(data => {
      this.user = data;
    })
  }

}
