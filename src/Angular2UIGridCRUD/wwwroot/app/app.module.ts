import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { UpgradeModule } from "@angular/upgrade/static";
import "./rxjs-operators";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes.component";

import { HeroService } from "./hero.service";
import { NtGridDirective } from "./nt-grid.directive";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent, 
        NtGridDirective
    ],
    providers: [
        HeroService
    ],
    entryComponents: [
        AppComponent,
        HeroesComponent
    ],
    schemas: [
       CUSTOM_ELEMENTS_SCHEMA 
    ] 
})
export class AppModule {
    ngDoBootstrap(): void {
    }
}
