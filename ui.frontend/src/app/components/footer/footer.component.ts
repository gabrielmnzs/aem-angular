import { MapTo } from "@adobe/aem-angular-editable-components";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { interval, Observable, Subscription } from "rxjs";
import { finalize, map, take } from "rxjs/operators";
import { LocalStorageService } from "src/app/auth/services/local-storage.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  startAt: number = 180;
  timer: number;
  reset = false;
  subscription: Subscription;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.startTimer();
  }

  keepBrowsing(): void {
    this.reset = true;
    this.stopTimer();
    this.startTimer();
  }

  logout(): void {
    this.stopTimer();
    this.router.navigate(["/content/angularapp/us/en/login.html"]);
  }

  // Timer
  startTimer() {
    const time: Observable<number> = interval(1000);

    this.timer = this.startAt;
    this.changeDetector.detectChanges();

    this.subscription = time
      .pipe(
        take(this.startAt),
        map((v) => this.startAt - (v + 1)),
        finalize(() => {
          if (!this.reset) {
            this.stopTimer();
            this.localStorageService.deleteAll();
            this.router.navigate(["/content/angularapp/us/en/login.html"]);
          }
        })
      )
      .subscribe((value) => {
        this.reset = false;
        this.timer = value;
        this.changeDetector.detectChanges();
      });
  }

  stopTimer() {
    this.subscription.unsubscribe();
  }
}
MapTo("angularapp/components/footer")(FooterComponent);
