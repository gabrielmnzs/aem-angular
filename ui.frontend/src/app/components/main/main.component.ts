import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo("angularapp/components/main")(MainComponent);
