import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo("angularapp/components/footer")(FooterComponent);
