import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/Services/authentication.service';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  currentUser$: Observable<User | null>;

  constructor(private router: Router, public auth: AuthenticationService) {
    this.currentUser$ = this.auth.currentUser$;
    console.log(this.currentUser$)
     
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logout().subscribe(
      () => {
        sessionStorage.clear();
        this.router.navigateByUrl('/Auth/login');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  

  login() {
    this.router.navigateByUrl('/Auth/login');
  }
}
