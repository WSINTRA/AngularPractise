import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SailsService {
  //opiniated framework wants me to use HttpClient ?
  //TODO: Change fetch method to the expected HttpClient
  constructor() { }

  private API_URL: string = "http://localhost:1337";
  //Learning that Angular uses observables for persisting variables across the app
  //isLoggedIn() is called from landing-page
  //which in turn returns the observable of the isLoginSubject
  //it is observing if there is a token in local storage
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  private hasToken(): boolean {
    if (localStorage['access_token']) {
      return true
    }
    return false;
  }
  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
  ////
  private JSONtoken: any;
  public userDataResponse: any;
  ///
  watchedUserData = new BehaviorSubject<any>(this.hasUserData());
  private hasUserData(): any {
    return this.userDataResponse;
  }
  userData(): Observable<any> {
    return this.watchedUserData.asObservable();
  }

  /////////////////////////////////////////////////////////////
  //Functions for interacting with backend
  /////////////////////////////////////////////////////////////
  //Call made to the backend if a user token is available
  getCurrentUserData() {
    fetch(this.API_URL + '/recipes', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        //Custom header created in the Sails backend
        'authorization': localStorage.getItem('access_token')
      }
    }).then(res => (res.json())).then(returnData => {
      //userDataResponse uses the localStorage username
      this.userDataResponse = { 'user': localStorage.getItem('username'), 'recipes': returnData }
      // console.log(returnData)
      this.watchedUserData.next(this.userDataResponse)
    });
  }

  //////////////////////////////////////////////
  //Login Function using fetch is called from login component as a service
  ///////////////////////////////////////////////
  userLogin(username: string, password: string) {
    //Create a data object for name and password to send to backend
    let data = { 'name': username, 'password': password };
    //Communicate with server or error out
    try {
      //Send a login request to the local server and store the JSON webtoken
      fetch(this.API_URL + '/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        //Check that the server had any errors   
      }).then(res => res.json()).catch(err => {
        alert("Invalid username or password")
      }
      )
        .then(serverResponse => {
          //Save response as token and user details including the recipes associated with user
          this.manageUserToken(serverResponse)
        })
    }
    catch (error) {
      alert(error)
    }
  }
  /////////////////////////////////////////
  //Simple logout function
  ////////////////////////////
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    this.isLoginSubject.next(false);
  }
  ////////////////////////////////////////////
  // User signup function
  // TODO: Fix this becasue it is not DRY, too much repeated code from login
  /////////////////////////////////
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
            return alert("User already exists, or we had an internal server error, try again with a different name")
          }
          this.manageUserToken(serverResponse)
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  manageUserToken(serverResponse) {
    this.JSONtoken = serverResponse.token;
    //Store token in localStorage, probably not the best but will work for now
    localStorage.setItem('access_token', this.JSONtoken);
    localStorage.setItem('username', serverResponse.user.name);
    this.isLoginSubject.next(true);
    //Set the data to Observable
    this.userDataResponse = { 'user': serverResponse.user.name, 'recipes': serverResponse.recipes }
    this.watchedUserData.next(this.userDataResponse)
  }
  /////////////////////////////////////////////
  //Functions for recipe
  ////////////////////////////////////////////
  saveNewRecipesToUser(recipeObject) {
    // console.log(recipeObject);
    //Create a new post request 
    fetch(this.API_URL + "/recipes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${localStorage.getItem('access_token')}`
      },
      body: recipeObject,
      //TODO: add this to the currentUser recipes array
    }).then(res => (res.json())).then(returnValue => {
      let username = localStorage.getItem('username')
      this.userDataResponse.recipes.push(returnValue)
      // this.userDataResponse = { 'user': username, 'recipes': returnValue }
      this.watchedUserData.next(this.userDataResponse)
      console.log(returnValue)
    }
    )
  }


}
