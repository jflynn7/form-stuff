import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2,
  ViewChild
} from '@angular/core';
import { AppSettings } from '../../../../app.settings';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input() padding: number = AppSettings.DEFAULT_CARD_PADDING;
  @Input() margin: number = AppSettings.DEFAULT_CARD_MARGIN;
  @Input() titleFontSize: number = AppSettings.DEFAULT_CARD_TITLE_FONT_SIZE;

  @Input() cardTitle: string;

  // Default options
  @Input() cardOptions: CardOptions = { hasClose: false, hasEdit: false, background: '#fff'};

  @ViewChild('cardWrapper') cardWrapper: ElementRef;

  @Output() closeEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() editEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.setPaddingAndMargin();
    this.renderer2.setStyle(this.cardWrapper.nativeElement, 'background-color', this.cardOptions.background);
  }

  setPaddingAndMargin() {
    this.renderer2.setStyle(this.cardWrapper.nativeElement, 'padding', `${this.padding}px`);
    this.renderer2.setStyle(this.cardWrapper.nativeElement, 'margin', `${this.margin}px 0`);
  }

  close() {
    this.closeEmitter.emit(true);
  }

  edit() {
    this.editEmitter.emit(true);
  }

}

export interface CardOptions {
  hasClose?: boolean;
  background?: string;
  hasEdit?: boolean;
  hoverClass?: string;
}
