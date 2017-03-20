import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "router-link",
    template: `<a routerLink="{{href}}"><ng-content></ng-content></a><br />`
})
export class RouterLinkComponent {

    constructor(private router: Router) { }

    @Input() href: string;
}

import { downgradeComponent } from "@angular/upgrade/static";

angular.module("ng2uigridcrud")
    .directive(
    "routerLink",
    downgradeComponent({
        component: RouterLinkComponent,
        inputs: ['href']
    }) as angular.IDirectiveFactory
    );
