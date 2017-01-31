import { Injectable } from "@angular/core";
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from "@angular/router";

import { Observable } from "rxjs/Observable";

import { HeroService } from "./hero.service";
import { Hero } from "./hero";

@Injectable()
export class HeroResolver implements Resolve<Hero> {
    constructor(private service: HeroService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> {
        let id = route.params["id"];
        return this.service.getHero(id);
    }
}
