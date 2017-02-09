import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroListComponent } from "./hero-list.component";
import { HeroComponent } from "./hero.component";
import { HeroResolver } from "./hero-resolver";

const heroRoutes: Routes = [
    {
        path: "hero",
        children: [
            { path: "", component: HeroListComponent },
            {
                path: ":id",
                component: HeroComponent,
                resolve: {
                    serviceDocument: HeroResolver
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroRoutes)
    ]
})
export class HeroRoutingModule { }
