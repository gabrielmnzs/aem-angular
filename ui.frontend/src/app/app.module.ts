import { HttpClientModule } from "@angular/common/http";
import { SpaAngularEditableComponentsModule } from "@adobe/aem-angular-editable-components";
import { APP_BASE_HREF } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import "./components/import-components";
import { ModelManagerService } from "./components/model-manager.service";
import { PageComponent } from "./components/page/page.component";

import { AemAngularCoreWcmComponentsTabsV1 } from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";
import { AemAngularCoreWcmComponentsTitleV2 } from "@adobe/aem-core-components-angular-base/authoring/title/v2";
import { AemAngularCoreWcmComponentsBreadCrumbV2 } from "@adobe/aem-core-components-angular-base/layout/breadcrumb/v2";
import { AemAngularCoreWcmComponentsNavigationV1 } from "@adobe/aem-core-components-angular-base/layout/navigation/v1";
import { AemAngularCoreWcmComponentsButtonV1 } from "@adobe/aem-core-components-angular-base/authoring/button/v1";
import { AemAngularCoreWcmComponentsImageV2 } from "@adobe/aem-core-components-angular-base/authoring/image/v2";
import { AemAngularCoreWcmComponentsDownloadV1 } from "@adobe/aem-core-components-angular-base/authoring/download/v1";
import { AemAngularCoreWcmComponentsListV2 } from "@adobe/aem-core-components-angular-base/authoring/list/v2";
import { AemAngularCoreWcmComponentsSeparatorV1 } from "@adobe/aem-core-components-angular-base/authoring/separator/v1";
import { AemAngularCoreWcmComponentsAccordionV1 } from "@adobe/aem-core-components-angular-spa/containers/accordion/v1";
import { AemAngularCoreWcmComponentsLanguageNavigationV1 } from "@adobe/aem-core-components-angular-base/layout/language-navigation/v1";

import { TextComponent } from "./components/text/text.component";
import { LoginComponent } from "./components/login/login.component";
import { ClockComponent } from "./components/clock/clock.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MainComponent } from './components/main/main.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpaAngularEditableComponentsModule,
    AppRoutingModule,
    AemAngularCoreWcmComponentsTabsV1,
    AemAngularCoreWcmComponentsTitleV2,
    AemAngularCoreWcmComponentsBreadCrumbV2,
    AemAngularCoreWcmComponentsNavigationV1,
    AemAngularCoreWcmComponentsButtonV1,
    AemAngularCoreWcmComponentsImageV2,
    AemAngularCoreWcmComponentsDownloadV1,
    AemAngularCoreWcmComponentsListV2,
    AemAngularCoreWcmComponentsAccordionV1,
    AemAngularCoreWcmComponentsSeparatorV1,
    AemAngularCoreWcmComponentsLanguageNavigationV1,
  ],
  providers: [
    ModelManagerService,
    { provide: APP_BASE_HREF, useValue: "/" },
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ],
  declarations: [
    AppComponent,
    PageComponent,
    TextComponent,
    LoginComponent,
    ClockComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  entryComponents: [
    PageComponent,
    TextComponent,
    LoginComponent,
    ClockComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
