import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
MapTo("angularapp/components/weather")(WeatherComponent);
