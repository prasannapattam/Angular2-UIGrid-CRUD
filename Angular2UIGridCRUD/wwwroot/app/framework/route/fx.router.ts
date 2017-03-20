import { Component, OnInit, Inject } from "@angular/core";
import { Router, NavigationStart, NavigationCancel } from "@angular/router";
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

    constructor(private router: Router, @Inject("$rootScope") private $rootScope: any, private location:Location) {
        let self = this;

        // UI-Router change events
        $rootScope.$on("$stateChangeSuccess",
            (evt: ng.IAngularEvent, toState: ng.ui.IState, toParams: ng.ui.IStateParamsService,
                fromState: ng.ui.IState, fromParams: ng.ui.IStateParamsService) : void => {
                this.ng2Route = false;
                
            });

        // Ng2 Router change event
        router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                this.ng2Route = true;
            });

        $rootScope.$on("$locationChangeStart",
            (evt: ng.IAngularEvent, newUrl: string, oldUrl: string,
                newState: ng.ui.IState, 
                oldState : ng.ui.IState): void => {
               // debugger;

            });

        //location.subscribe(val => {
        //    console.log(val);
        //    debugger;
        //});
    }
}

import { downgradeComponent } from "@angular/upgrade/static";

angular.module("ng2uigridcrud")
    .directive(
    "fxRouter",
    downgradeComponent({ component: FxRouterComponent }) as angular.IDirectiveFactory
);
