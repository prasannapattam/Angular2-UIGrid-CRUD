import { FormGroup, FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Http, Response, RequestOptions, URLSearchParams } from "@angular/http";
import { InjectorService } from "../injector.service";

import { Page } from "./page";
import { PageAction } from "./pageAction";

export class ServiceDocument<TDataModel> {
    dataModel: TDataModel;
    dataList: TDataModel[];
    domainData: any;
    page: Page;
    profileForm: FormGroup;
  
    private http: Http;

    constructor() {
        this.http = InjectorService.injector.get(Http);
    }

    initialize(json: any): ServiceDocument<TDataModel> {
        Object.assign(this, json);
        this.profileForm = this.getFormGroup();    
        return this;
    }

    private getFormGroup(): FormGroup {
        let controls: any = {};
        Object.keys(this.dataModel).forEach((field: string) => {
            controls[field] = new FormControl(this.dataModel[field]);
        });

        controls["currentAction"] = new FormControl();

        return new FormGroup(controls);
    }

    list(url: string, search?: any): Observable<ServiceDocument<TDataModel[]>> {
        return this.http.post(url, search)
            .map((response: Response) => this.initialize(response.json()))
            .catch(this.handleError);
    }

    view(url: string, search?: URLSearchParams): Observable<ServiceDocument<TDataModel>> {

        let options: RequestOptions = new RequestOptions();
        if (search !== undefined) {
            options.search = search;
        }

        return this.http.get(url, options)
            .map((response: Response) => this.initialize(response.json()))           
            .catch(this.handleError);
    }

    save(url: string): Observable<ServiceDocument<TDataModel>> {
        this.dataModel = this.profileForm.value;
        
        return this.http.post(url, { dataModel: this.dataModel, page: { currentAction: this.dataModel["currentAction"] } })
            .map((response: Response) => this.initialize(response.json()))
    }

    private handleError(error: Response | any): any {
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
