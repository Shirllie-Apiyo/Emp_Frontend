import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(public router: Router) {

    }// end constructor
    getToken() {
        return localStorage.getItem("access_token");
    }
    get isLoggedIn(): Boolean {
        let authToken = localStorage.getItem("access_token");
        return (authToken !== null) ? true : false
    }
    doLogout() {
        let removeToken = localStorage.removeItem("access_token");
        if (removeToken == null) {
            this.router.navigate(['signin'])
        }
        else {

        }
    }
}// end auth