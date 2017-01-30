export const ntGrid: ng.IComponentOptions = {
    bindings: {
        gridOptions: "<"
    },
    template: `<div ui-grid="$ctrl.gridOptions"></div>`
}

angular.module("ng2uigrid").component("ntGrid", ntGrid);

import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

@Directive({
    selector: "nt-grid"
})
export class NtGridDirective extends UpgradeComponent {
    @Input() gridOptions: any;

    constructor(elementRef: ElementRef, injector: Injector) {
        super("ntGrid", elementRef, injector);
    }
}