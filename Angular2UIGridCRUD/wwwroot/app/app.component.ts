import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "root-app",
  templateUrl: "app/app.component.html"
})
export class AppComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        //this.router.navigate(["/hero"]);
        this.router.navigate(["/hero", "7"]);
    }

}

import { downgradeComponent } from "@angular/upgrade/static";

angular.module("ng2uigridcrud")
    .directive(
        "rootApp",
        downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory
    );

