import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weartherApiUrl = "http://api.weatherapi.com/v1";
  private apiKey = "003875452ea74cc99b9204437220305";

  constructor(private http: HttpClient) { }

  getLocalWeather(city = 'Vila Velha') {
    return this.http.get(`${this.weartherApiUrl}/current.json?key=${this.apiKey}&q=${city}`);
  }
}
