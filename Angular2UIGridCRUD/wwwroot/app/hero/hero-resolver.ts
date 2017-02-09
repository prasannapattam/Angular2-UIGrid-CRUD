import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { HeroService } from "./hero.service";
import { ServiceDocument } from "../framework/service-document";
import { Hero } from "./hero";

@Injectable()
export class HeroResolver implements Resolve<ServiceDocument<Hero>> {
    constructor(private service: HeroService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ServiceDocument<Hero>> {
        let id: number = route.params["id"];
        return this.service.view(id);
    }
}
