import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "router-link",
    template: `<a href="#" (click)="navigateTo($event)"><ng-content></ng-content></a><br />`
})
export class RouterLinkComponent {

    constructor(private router: Router ) { }

    @Input() href: string;

    navigateTo($event: MouseEvent): void {
        $event.preventDefault();

        // checking whether this url routed and hidden, then route to dummy and then reroute
        // angular2 router does not have force reload like ui-router hence this workaround
        if (this.router.url == this.href) {
            this.router.navigateByUrl("#", { skipLocationChange: true });
            setTimeout(() => this.router.navigateByUrl(this.href));
        }
        else {
            // navigating to the url
            this.router.navigateByUrl(this.href);
        }
    }
}

import { downgradeComponent } from "@angular/upgrade/static";

angular.module("fxRouter").directive("routerLink",
    downgradeComponent({ component: RouterLinkComponent, inputs: ['href']}) as angular.IDirectiveFactory
);
