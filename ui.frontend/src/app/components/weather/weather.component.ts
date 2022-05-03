import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, OnInit } from "@angular/core";
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  location: any = "";
  icon: any = "";
  temperature: any = "";

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getLocalWeather().subscribe((data: any) => {
      this.location = `${data.location.name}, ${data.location.region}`;
      this.temperature = data.current.temp_c;
      this.icon = data.current.condition.icon;
    })
  }
}
MapTo("angularapp/components/weather")(WeatherComponent);
