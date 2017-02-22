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
import { FxButtonListComponent } from "./controls/fx-button-list.component";

import { InjectorService } from "./injector.service";

import { ServiceDocument } from "./serviceDocument/service-document";
import { Page } from "./serviceDocument/page";
import { PageAction } from "./serviceDocument/pageAction";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        RouterModule,
        HttpModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        FlexLayoutModule
    ],
    declarations: [
        FxGridDirective,
        FxInputComponent,
        FxButtonListComponent
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
        FxInputComponent,
        FxButtonListComponent
    ],
    providers: [
        ServiceDocument,
        Page,
        PageAction
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
