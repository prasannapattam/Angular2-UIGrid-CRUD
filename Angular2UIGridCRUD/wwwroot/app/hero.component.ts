import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ServiceDocument } from "./framework/service-document";
import { Hero } from "./hero";

@Component({
    selector: "hero",
    templateUrl: "app/hero.component.html"
})
export class HeroComponent implements OnInit {
    name: string;
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { serviceDocument: ServiceDocument<Hero> }) => {
                this.name = data.serviceDocument.data.name;
           });
    }
}
