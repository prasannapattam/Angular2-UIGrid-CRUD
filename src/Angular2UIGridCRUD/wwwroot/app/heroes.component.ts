import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ServiceDocument } from "./framework/service-document";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { GridOptions } from "./grid-options";


@Component({
    selector: "heroes",
    templateUrl: "app/heroes.component.html"
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
            { name: "Action", field: "id", cellTemplate: `<a href="/hero" ng-click="grid.appScope.navigate($event, row.entity)">edit</a>` }
        ];

        this.gridOptions.appScopeProvider = this;
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((serviceDocument: ServiceDocument<Hero[]>) => this.gridOptions.data = serviceDocument.data);
    }

    navigate($event: any, hero: Hero): void {
        $event.preventDefault();
        this.router.navigate(["/hero", hero.id]);
    }
}
