import {Component, ContentChild, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./_au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit {

  @Input()
  icon:string;

  @ContentChild(InputRefDirective)
  input : InputRefDirective;

  constructor() { }

  ngAfterContentInit(){
    if (!this.input) {
      console.error('the au-fa-input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }
  ngOnInit() {
  }

  get classes() {

    const cssClasses = { };

    if(this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }
}
