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

import { FxRouterModule } from "./route/fx.router.module";

import { FxGridDirective } from "./controls/fx-grid.directive";
import { FxInputComponent } from "./controls/fx-input.component";
import { FxButtonListComponent } from "./controls/fx-button-list.component";

// route related
import { RouterLinkComponent } from "./route/router.link";
import { UIViewDirective } from "./route/ui.view";

import { InjectorService } from "./injector.service";

import { ServiceDocument } from "./serviceDocument/service-document";
import { Page } from "./serviceDocument/page";
import { PageAction } from "./serviceDocument/pageAction";

let exportImportModules: any[] = [
    BrowserModule,
    UpgradeModule,
    RouterModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FxRouterModule
];

let exportDeclarations: any[] = [
    FxGridDirective,
    FxInputComponent,
    FxButtonListComponent,
];


@NgModule({
    imports: exportImportModules,
    declarations: exportDeclarations,
    exports: exportImportModules.concat(exportDeclarations),
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
