import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, UrlHandlingStrategy } from "@angular/router";

import { FxRouterComponent } from "./fx.router";
import { RouterLinkComponent } from "./router.link";
import { UIViewDirective } from "./ui.view";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        FxRouterComponent,
        RouterLinkComponent,
        UIViewDirective
    ],
    exports: [
        FxRouterComponent,
        RouterLinkComponent,
        UIViewDirective
    ],
    providers: [
        { provide: '$state', useFactory: (i) => i.get('$state'), deps: ['$injector'] }
    ],
    entryComponents: [
        FxRouterComponent,
        RouterLinkComponent
    ]
})
export class FxRouterModule {
}
