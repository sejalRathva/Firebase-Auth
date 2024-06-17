import { Injectable } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { updateProfile } from 'firebase/auth';

import { BehaviorSubject, Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;

  
  constructor(private auth: Auth) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  setCurrentUser(user: User | null): void {
    this.currentUserSubject.next(user);
  }
  
  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password))
  }

  signUp(name: string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({user}) => updateProfile(user,{displayName: name}))
    );
}

  logout() {
    return from(this.auth.signOut());
  }
   
}
