import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-label',
  templateUrl: './icon-label.component.html',
  styleUrls: ['./icon-label.component.sass']
})
export class IconLabelComponent implements OnInit {

  @Input() icon: string;
  @Input() badge: string;

  constructor() { }

  ngOnInit() {
  }

}
