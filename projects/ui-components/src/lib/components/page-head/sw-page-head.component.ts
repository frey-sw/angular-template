import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sw-page-head',
  templateUrl: './sw-page-head.component.html',
  styleUrls: ['./sw-page-head.component.scss'],
})
export class SwPageHeadComponent {
  @Input() fixed = false;

  @Input() icon = '';

  @Input() editIconLabel = '';

  @Input() editIcon: any;

  @Input() title = '';

  @Input() subtitle = '';

  @Input() subtitleIcon = '';

  @Input() inputLabel = '';

  @Input() inputFormControl: FormControl;

  constructor() {
    this.inputFormControl = new FormControl('');
  }
}
