import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, OnInit } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.scss"],
})
export class ClockComponent implements OnInit {
  date: Date;
  subscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.date = new Date();
    // this.subscription = timer(0, 1000)
    //   .pipe(
    //     map(() => new Date()),
    //     share()
    //   )
    //   .subscribe((time) => {
    //     this.date = time;
    //   });
  }
}
MapTo("angularapp/components/clock")(ClockComponent);
