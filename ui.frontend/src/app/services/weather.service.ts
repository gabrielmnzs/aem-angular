import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "../auth/services/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private weartherApiUrl = "http://api.weatherapi.com/v1";
  private apiKey = "003875452ea74cc99b9204437220305";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  getLocalWeather() {
    const coordinates = this.localStorageService.get("user")?.local;
    const city = "vila velha";

    return this.http.get(
      `${this.weartherApiUrl}/current.json?key=${this.apiKey}&q=${coordinates ?? city}`
    );
  }
}
