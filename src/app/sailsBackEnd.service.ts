import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SailsService {
  //opiniated framework wants me to use HttpClient ?
  constructor() { }
  private API_URL: string = "http://localhost:1337";
  //Learning that Angular uses observables for persisting variables across the app
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  private hasToken(): boolean {
    if (localStorage['access_token']) {
      return true
    }
    return false;
  }
  //Method for checking if a user is already logged in
  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  ////
  public JSONtoken: any;
  public RecipeWithSteps: any;
  //Login Function using fetch is called from login component as a service
  userLogin(username, password) {
    //Create a data object for name and password to send to backend
    let data = { 'name': username, 'password': password }
    //Communicate with server or error out
    try {
      //Send a login request to the local server and store the JSON webtoken
      fetch(this.API_URL + '/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(serverResponse => {
          //Check that the server had any errors
          if (serverResponse.err) {
            return alert("Invalid username of password")
          }
          //Save response as token and user details including the recipes associated with user
          //FIGURE THIS OUT
          //Store token in localStorage, probably not the best but will work for now
          this.JSONtoken = serverResponse.token;
          localStorage.setItem('access_token', this.JSONtoken);
          this.isLoginSubject.next(true);
        })
    }
    catch (err) {
      console.log(err)
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isLoginSubject.next(false);
  }
  //TODO: Fix this becasue it is not DRY, too much repeated code from login
  userSignup(username, password) {
    let data = { 'name': username, 'password': password }
    try {
      //Send a signUp request to the local server and store the JSON webtoken
      fetch(this.API_URL + '/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(serverResponse => {
          //Check that the server had any errors
          //TODO: Make this a better error message
          if (serverResponse.err) {
            return alert("There was an error")
          }
          this.JSONtoken = serverResponse.token;
          //Store token in localStorage, probably not the best but will work for now
          localStorage.setItem('access_token', this.JSONtoken);
          this.isLoginSubject.next(true);
        })

    }
    catch (err) {
      console.log(err)
    }

  }


}
