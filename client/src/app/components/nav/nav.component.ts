import { Component, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { AccountService } from '../../_services/account.service';
import { User } from '../../_models/User'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../_services/loader.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};


  constructor(public accountService: AccountService,
    private router: Router,
    private toast: ToastrService,
    public loadingService: LoaderService) { }

  ngOnInit(): void {

  }



  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/members')

    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }



}
