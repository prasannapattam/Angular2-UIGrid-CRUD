import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "router-link",
    template: `<a href="#" (click)="navigateTo($event)"><ng-content></ng-content></a><br />`
})
export class RouterLinkComponent {

    constructor(private router: Router ) { }

    @Input() href: string;

    navigateTo($event): void {
        $event.preventDefault();

        // checking whether this url routed and invisible, then route to dummy and then reroute
        // angular2 router does not have force reload like ui-router
        if (this.router.url == this.href) {
            this.router.navigateByUrl("#", { skipLocationChange: true });
        }

        // navigating to the url
        this.router.navigateByUrl(this.href);
    }
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
