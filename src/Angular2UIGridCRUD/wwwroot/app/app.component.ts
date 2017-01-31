import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  template: `<a routerLink="/heroes">Heroes</a><br />
<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.navigate(["/heroes"]);
    }

}

import { downgradeComponent } from "@angular/upgrade/static";

angular.module("ng2uigridcrud")
    .directive(
        "myApp",
        downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory
    );

