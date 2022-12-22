import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'a-icon-btn',
  templateUrl: './a-icon-btn.component.html',
})
export class AIconBtnComponent {

  @Input() href!: string;
  @Input() matTooltip?: string;
  @Input() color: string = "black";
  @Input() icon!: IconProp;
}