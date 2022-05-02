import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() imagePath: string;

  constructor() {}

  get hasImage() {
    return this.imagePath && this.imagePath.trim().length > 0;
}

  ngOnInit(): void {}
}
MapTo("angularapp/components/header")(HeaderComponent);
