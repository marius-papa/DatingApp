
import { Component, OnInit } from '@angular/core';
import { User } from './_models/User'
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: any

  constructor(
    private accountService: AccountService) { }

  ngOnInit(): void {

    this.setCurrentUser()

  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

}
// http-server -p 4200 -S -C D:/Marius/ssl/server.crt  -K D:/Marius/ssl/server.key