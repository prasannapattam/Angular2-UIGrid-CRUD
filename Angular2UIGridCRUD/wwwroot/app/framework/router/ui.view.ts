export const uiView: ng.IComponentOptions = {
    template: `<ui-view></ui-view>`
}

angular.module("fxRouter").component("fxView", uiView);

import { Directive, ElementRef, Injector } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

@Directive({
    selector: "ui-view"
})
export class UIViewDirective extends UpgradeComponent {

    constructor(elementRef: ElementRef, injector: Injector) {
        super("fxView", elementRef, injector);
    }
}
