import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Hero } from "./hero";

import { Observable } from "rxjs/Observable";

@Injectable()
export class HeroService {
    private heroesUrl = "http://localhost:53020/app/heroes";  // web api url

    constructor(private http: Http) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
            .map((response: Response) => response.json() as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: Response | any): any {
        // in a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body: any = error.json() || "";
            const err: any = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}