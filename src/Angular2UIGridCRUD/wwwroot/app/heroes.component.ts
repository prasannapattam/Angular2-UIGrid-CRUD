import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { GridOptions } from "./grid-options";


@Component({
    selector: "heroes",
    templateUrl: "/app/heroes.component.html"
})
export class HeroesComponent implements OnInit  {
    gridOptions: GridOptions;

    constructor(private heroService: HeroService, private router: Router) {
        this.gridOptions = new GridOptions();

        this.gridOptions.columnDefs = [
            { name: "id" },
            { name: "name" },
            { name: "team" },
            { name: "group" },
            { name: "Edit", field: "id", cellTemplate: `<a href="/hero" ng-click="grid.appScope.navigate($event, row.entity)">edit</a>` }
        ];

        this.gridOptions.appScopeProvider = this;
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes: Hero[]) => this.gridOptions.data = heroes);
    }

    navigate($event: any, hero: Hero): void {
        $event.preventDefault();
        this.router.navigate(["/hero", hero.id]);
    }
}
