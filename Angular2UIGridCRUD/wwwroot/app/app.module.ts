import { NgModule } from "@angular/core";
import { FrameworkModule } from "./framework/framework.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeroModule } from "./hero/hero.module";

@NgModule({
    imports: [
        FrameworkModule,
        AppRoutingModule,
        HeroModule
    ],
    declarations: [
        AppComponent
    ],
    entryComponents: [
        AppComponent
    ]
})
export class AppModule {
    ngDoBootstrap(): void { }
}
