import { Component, OnInit, Inject } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: "fx-router",
    template: `
        <div [hidden]="ng2Route"><ui-view></ui-view></div>
        <div [hidden]="!ng2Route"><router-outlet></router-outlet></div>
    `
})
export class FxRouterComponent {

    ng2Route: boolean = false;

    constructor(private router: Router, @Inject("$rootScope") private $rootScope: ng.IRootScopeService,
        private location: Location, @Inject("$state") private $state: ng.ui.IStateService) {
        let ng1Urls: string[] = []; // store ng1 urls. This is used in back button

        // UI-Router change events
        $rootScope.$on("$stateChangeSuccess", 
            (evt: ng.IAngularEvent, toState: ng.ui.IState, toParams: ng.ui.IStateParamsService): void => {
                this.ng2Route = false;
                let url: string = this.$state.href(toState, toParams);
                if (ng1Urls.indexOf(url) === -1) {
                    ng1Urls.push(url);
                }
        });

        // Ng2 Router change event
        router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(() => {
                this.ng2Route = true;
            });

        // user navigation using browser back for forward history buttons
        location.subscribe(val => {
            if (ng1Urls.indexOf(val.url) > -1) {
                this.ng2Route = false;
            }
            else {
                this.router.navigateByUrl(val.url, { skipLocationChange: true });
                this.ng2Route = true;
            }
        });
    }
}

import { downgradeComponent } from "@angular/upgrade/static";

angular.module("fxRouter").directive("fxRouter",
    downgradeComponent({ component: FxRouterComponent }) as angular.IDirectiveFactory
);
