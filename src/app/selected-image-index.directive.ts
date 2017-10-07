import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[selectedImageIndex]',
  exportAs: 'selectedImageIndex'
})
export class SelectedImageIndexDirective {
  @Input() index: number;
  constructor() { }

}
