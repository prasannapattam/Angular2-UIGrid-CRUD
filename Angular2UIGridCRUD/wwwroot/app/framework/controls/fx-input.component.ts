import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "fx-input",
    template: `
<md-input-container [formGroup]="formGroup">
  <input mdInput placeholder="{{placeholder}}" formControlName="{{controlName}}">
</md-input-container>
`
})
export class FxInputComponent  {
    @Input() controlName: string;
    @Input() placeholder: string;
    @Input() formGroup: FormGroup;
}
