import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    model: any = {};
    //loggedIn = false;   
    //currentUser$: Observable<User | null> = of(null);

    constructor(public accountService: AccountService){
      
    }

    ngOnInit(): void {
      //this.getCurrentUser();
      //this.currentUser$ = this.accountService.currentUser$;
    }

    // getCurrentUser() {
    //   console.log('nav ngonit getcurrentuser');
    //   this.accountService.currentUser$.subscribe({
    //     next: user => {
    //       console.log(user);
    //       this.loggedIn = !!user;
    //       console.log(this.loggedIn);
    //     },
    //     error: error => console.log(error)
    // })
    // }

    login() {
      console.log(this.model);
      this.accountService.login(this.model).subscribe({
        next: response => {
          console.log(response);
          //this.loggedIn = true;
        },
        error: error => (console.log(error))
      });
    }
    logout() {
      this.accountService.logout();
      //this.loggedIn = false;

    }
}
