import { Component, Input } from "@angular/core";

@Component({
    selector: "fx-input",
    template: `
<md-input-container [formGroup]="formGroup">
  <input md-input placeholder="{{placeholder}}" formControlName="{{controlName}}">
</md-input-container>
`
})
export class FxInputComponent  {
    @Input() controlName: string;
    @Input() placeholder: string;
    @Input() formGroup: string;
}
