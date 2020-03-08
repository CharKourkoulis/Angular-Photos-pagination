
import { Directive, ElementRef, Input } from '@angular/core';
import { isIP } from 'net';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private element: ElementRef) {}

  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
         this.element.nativeElement.classList.add(key);
      } else {
         this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
