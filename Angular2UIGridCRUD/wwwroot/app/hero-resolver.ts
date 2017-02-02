import { Injectable } from "@angular/core";
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from "@angular/router";

import { Observable } from "rxjs/Observable";

import { HeroService } from "./hero.service";
import { ServiceDocument } from "./framework/service-document";
import { Hero } from "./hero";

@Injectable()
export class HeroResolver implements Resolve<ServiceDocument<Hero>> {
    constructor(private service: HeroService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceDocument<Hero>> {
        let id: number = route.params["id"];
        return this.service.getHero(id);
    }
}
