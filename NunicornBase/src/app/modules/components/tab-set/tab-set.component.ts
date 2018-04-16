import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-set',
  templateUrl: './tab-set.component.html',
  styleUrls: ['./tab-set.component.scss']
})
export class TabSetComponent implements OnInit {

  @Input() tabItems: TabSetItem[];
  @Input() activeTabTitle: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isActive(title: string) {
    return this.activeTabTitle === title;
  }

  getColumnWidth() {
    return 12 / this.tabItems.length;
  }

  tabClicked(tabItem: TabSetItem) {
    this.router.navigate([tabItem.route]);
  }

}

export interface TabSetItem {
  title?: string;
  route?: string;
  action?: Function;
}
