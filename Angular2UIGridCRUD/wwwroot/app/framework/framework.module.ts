import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";

import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule }   from '@angular/forms';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import "./rxjs-operators";
import "hammerjs";

import { FxGridDirective } from "./controls/fx-grid.directive";
import { FxInputComponent } from "./controls/fx-input.component";
import { ServiceDocument } from "./service-document";
import { InjectorService } from "./injector.service";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        RouterModule,
        HttpModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot()
    ],
    declarations: [
        FxGridDirective,
        FxInputComponent
    ],
    exports: [
        BrowserModule,
        UpgradeModule,
        RouterModule,
        HttpModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        FxGridDirective,
        FxInputComponent
    ],
    providers: [
        ServiceDocument
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class FrameworkModule {
    constructor(private injector: Injector) {
        InjectorService.injector = injector;
    }
}
