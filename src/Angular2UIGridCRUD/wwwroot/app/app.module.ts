import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { UpgradeModule } from "@angular/upgrade/static";
import "./rxjs-operators";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes.component";
import { HeroComponent } from "./hero.component";

import { HeroService } from "./hero.service";
import { HeroResolver } from "./hero-resolver";

import { NtGridDirective } from "./nt-grid.directive";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UpgradeModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent, 
        HeroComponent,
        NtGridDirective
    ],
    providers: [
        HeroService,
        HeroResolver
    ],
    entryComponents: [
        AppComponent,
        HeroesComponent,
        HeroComponent
    ],
    schemas: [
       CUSTOM_ELEMENTS_SCHEMA 
    ] 
})
export class AppModule {
    ngDoBootstrap(): void {
    }
}
