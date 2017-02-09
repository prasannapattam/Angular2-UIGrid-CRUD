import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ServiceDocument } from "../framework/service-document";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { GridOptions } from "../framework/controls/grid-options";


@Component({
    selector: "heroes",
    templateUrl: "app/hero/hero-list.component.html"
})
export class HeroListComponent implements OnInit  {
    gridOptions: GridOptions;

    constructor(private service: HeroService, private router: Router) {
        this.gridOptions = { 
            appScopeProvider: this,
            columnDefs: [
                { name: "id" },
                { name: "name" },
                { name: "team" },
                { name: "group" },
                { name: "Action", field: "id", cellTemplate: `<a href="/hero" ng-click="grid.appScope.navigate($event, row.entity)">edit</a>` }
            ]
        }
    }

    ngOnInit(): void {
        this.service
            .list()
            .subscribe(() => this.gridOptions.data = this.service.serviceDocument.dataList);
    }

    navigate($event: any, hero: Hero): void {
        $event.preventDefault();
        this.router.navigate(["/hero", hero.id]);
    }
}
