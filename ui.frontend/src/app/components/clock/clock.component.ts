import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.scss"],
})
export class ClockComponent implements OnInit {
  date: Date;

  constructor() {}

  ngOnInit(): void {
    this.date = new Date();
  }
}
MapTo("angularapp/components/clock")(ClockComponent);
