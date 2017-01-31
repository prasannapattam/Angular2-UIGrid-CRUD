import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Hero } from "./hero";

@Component({
    selector: "hero",
    template: `<h1>Hero: {{name}}</h1>`,
})
export class HeroComponent implements OnInit {
    name: string = "Prasanna";
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data
            .subscribe((data: { hero: Hero }) => {
                this.name = data.hero.name;
           });
    }
}
