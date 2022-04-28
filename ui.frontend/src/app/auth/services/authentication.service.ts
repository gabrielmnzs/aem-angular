import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from "./local-storage.service";

const URL_API = 'http://localhost:3000/logins';

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  setUser(user: any) {
    this.localStorageService.set('user', user);
  }

  authenticate(login: string, password: string) {
    const params = {
      login,
      password,
    };

    return this.http.get<any>(`${URL_API}`, { params });
  }
}
