import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class NavComponent implements OnInit, OnDestroy {

  model: any = {};
  isLoading = false;
  loadSub: Subscription;

  constructor(public accountService: AccountService,
    private router: Router,
    private toast: ToastrService,
    public loadingService: LoaderService) { }


  ngOnInit(): void {
    this.getIsLoading();
  }
  ngOnDestroy(): void {
    if (this.loadSub) {
      this.loadSub.unsubscribe();
    }
  }

  getIsLoading() {
    this.loadSub = this.loadingService.isLoading$.subscribe(val => {
      this.isLoading = val
    })
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
