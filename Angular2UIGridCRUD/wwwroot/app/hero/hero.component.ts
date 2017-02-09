import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ServiceDocument } from "../framework/service-document";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    selector: "hero",
    templateUrl: "app/hero/hero.component.html"
})
export class HeroComponent implements OnInit {
    serviceDocument: ServiceDocument<Hero>;

    constructor(private route: ActivatedRoute, public service: HeroService) { }

    ngOnInit(): void {
        this.serviceDocument = this.service.serviceDocument
        // getting data
        this.route.data
            .subscribe(() => this.serviceDocument = this.service.serviceDocument);
    }

    save(): void {
        this.service.save();
    }
}
