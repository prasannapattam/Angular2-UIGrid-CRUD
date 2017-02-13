import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Response, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { ServiceDocument } from "../framework/servicedocument/service-document";
import { Hero } from "./hero";

@Injectable()
export class HeroService {
    serviceDocument: ServiceDocument<Hero> = new ServiceDocument<Hero>();

    constructor(private http: Http, private router: Router) { }

    list(): Observable<ServiceDocument<Hero[]>> {
        return this.serviceDocument.list("/api/hero/list");
    }

    view(id: number): Observable<ServiceDocument<Hero>> {
        return this.serviceDocument.view("/api/hero/view", new URLSearchParams("id=" + id));
    }

    save() {
        this.serviceDocument.save("/api/hero/save")
            .subscribe(() => {
                this.router.navigate(["/hero"]);
            });
    }
}