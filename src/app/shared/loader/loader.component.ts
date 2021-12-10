import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

export type LoaderSize = 'xl' | 'sm' | 'inline';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None, // tslint:disable-line
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit {

  @Input() size?: LoaderSize;

  @HostBinding('attr.class') css = 'loader';

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    // Updates the host class based on selected size.
    if (this.size) {
      this.css += '-' + this.size;
    }
    this.changeDetector.detectChanges();
  }
}
