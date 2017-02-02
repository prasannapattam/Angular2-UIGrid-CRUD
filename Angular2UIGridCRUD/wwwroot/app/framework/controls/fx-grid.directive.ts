export const fxGrid: ng.IComponentOptions = {
    bindings: {
        gridOptions: "<"
    },
    template: `<div ui-grid="$ctrl.gridOptions"></div>`
}

angular.module("ng2uigridcrud").component("fxGrid", fxGrid);

import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

@Directive({
    selector: "fx-grid"
})
export class FxGridDirective extends UpgradeComponent {
    @Input() gridOptions: any;

    constructor(elementRef: ElementRef, injector: Injector) {
        super("fxGrid", elementRef, injector);
    }
}