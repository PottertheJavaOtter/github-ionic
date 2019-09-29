import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRedText]'
})
export class RedTextDirective implements OnChanges {

  @Input() numOfRepos: number;

  constructor(private el: ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.numOfRepos && this.numOfRepos > 1) {
      this.el.nativeElement.style.color = 'red';
    }
  }
}
