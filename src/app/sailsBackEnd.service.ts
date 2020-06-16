import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SailsService {
  //opiniated framework wants me to use HttpClient ?
  constructor(private _http: HttpClient) { }

  private API_URL: string = "http://localhost:1337";

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
          console.log(serverResponse)

        })
    }
    catch (err) {
      console.log(err)
    }
  }

}
