import { NgModule } from "@angular/core";
import { FrameworkModule } from "./framework/framework.module";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes.component";
import { HeroComponent } from "./hero.component";

import { HeroService } from "./hero.service";
import { HeroResolver } from "./hero-resolver";


@NgModule({
    imports: [
        FrameworkModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroComponent
    ],
    providers: [
        HeroService,
        HeroResolver
    ],
    entryComponents: [
        AppComponent
    ]
})
export class AppModule {
    ngDoBootstrap(): void { }
}
