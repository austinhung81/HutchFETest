import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() message: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  small: boolean = false;
  medium: boolean = true;
  large: boolean = false;

  constructor() { }

  ngOnInit() {
    this.small = this.size === 'small';
    this.medium = this.size === 'medium';
    this.large = this.size === 'large';
  }

}
