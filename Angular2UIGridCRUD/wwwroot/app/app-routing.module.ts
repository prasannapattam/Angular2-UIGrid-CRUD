import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./heroes.component";
import { HeroComponent } from "./hero.component";
import { HeroResolver } from "./hero-resolver";

const appRoutes: Routes = [
    { path: "heroes", component: HeroesComponent },
    {
        path: "hero/:id",
        component: HeroComponent,
        resolve: {
            serviceDocument: HeroResolver
        }
    },
    { path: "", redirectTo: "/heroes", pathMatch: "full" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
