import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { PageAction } from "../serviceDocument/pageAction";

@Component({
    selector: "fx-button-list",
    template: `<button *ngFor="let action of pageActions" md-raised-button (click)="setAction(action.id)">{{action.name}}</button>&nbsp;&nbsp;`
})
export class FxButtonListComponent {
    @Input() pageActions: PageAction[];
    @Input() formGroup: FormGroup;

    setAction(id: string): boolean {
        this.formGroup.controls["currentAction"].setValue(id);
        return true;
    }
}
