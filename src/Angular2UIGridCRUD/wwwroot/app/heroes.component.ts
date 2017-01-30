import { Component } from "@angular/core";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";


@Component({
    selector: "heroes",
    templateUrl: "/app/heroes.component.html"
})
export class HeroesComponent {
    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes: Hero[]) => this.heroes = heroes);
    }
}
