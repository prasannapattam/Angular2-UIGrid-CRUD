import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { UpgradeModule } from "@angular/upgrade/static";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import "./rxjs-operators";
import "hammerjs";

import { FxGridDirective } from "./controls/fx-grid.directive";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UpgradeModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot()
    ],
    declarations: [
        FxGridDirective
    ],
    exports: [
        BrowserModule,
        HttpModule,
        UpgradeModule,
        MaterialModule,
        FlexLayoutModule,
        FxGridDirective
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class FrameworkModule {}
