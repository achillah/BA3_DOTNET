import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  baseServerUrl = "https://localhost:44331/api/";

  jwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }


  registerUser(user: Array<String>){
    return  this.http.post(
      this.baseServerUrl + "User/CreateUser",
      {
        FirstName: user[0],
        LastName: user[1],
        Email: user[2],
        Password: user[3]
      },
        {
          responseType: 'text'
        }
    
    );
  }

  loginUser(logInfo: Array<string>){
    return this.http.post(this.baseServerUrl + "User/LoginUser", 
      {
        Email: logInfo[0],
        Password: logInfo[1]
      },
      {
        responseType: 'text'
      } 
    
    );
  }

  setToken(token: string){
    localStorage.setItem("access_token", token);
    this.loadCurrentUser();
  }

  loadCurrentUser(){
      const token = localStorage.getItem("access_token");
      const userInfo = token != null ?this.jwtHelperService.decodeToken(token): null;
  
      const data = userInfo ? {
        id: userInfo.id,
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        email: userInfo.email
      } : null;
      this.currentUser.next(data);
    }

    removeToken(){
      localStorage.removeItem("access_token");
    }

}
