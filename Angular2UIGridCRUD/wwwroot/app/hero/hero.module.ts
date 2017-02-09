import { NgModule } from "@angular/core";
import { FrameworkModule } from "../framework/framework.module";

import { HeroRoutingModule } from "./hero-routing.module";

import { HeroListComponent } from "./hero-list.component";
import { HeroComponent } from "./hero.component";

import { HeroService } from "./hero.service";
import { HeroResolver } from "./hero-resolver";

@NgModule({
    imports: [
        FrameworkModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroComponent
    ],
    providers: [
        HeroService,
        HeroResolver
    ]
})
export class HeroModule {
}
