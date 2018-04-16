import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover-card',
  templateUrl: './hover-card.component.html',
  styleUrls: ['./hover-card.component.scss']
})
export class HoverCardComponent implements OnInit {

  @Input() cardTitle: string = 'Card Title';

  hovered: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  hover(isHovered: boolean) {
    this.hovered = isHovered;
  }


}
