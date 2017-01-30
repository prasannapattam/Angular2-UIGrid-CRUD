import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `<heroes></heroes>`,
})
export class AppComponent  { }

import { downgradeComponent } from "@angular/upgrade/static";

angular.module("ng2uigrid")
    .directive(
    "myApp",
    downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory
    );

