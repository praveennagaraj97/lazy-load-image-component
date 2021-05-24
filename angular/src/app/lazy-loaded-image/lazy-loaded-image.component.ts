import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lazy-loaded-image',
  templateUrl: 'lazy-loaded-image.component.html',
  styleUrls: ['lazy-loaded-image.component.scss'],
})
export class LazyLoadedImageComponent implements AfterViewInit {
  @Input() imageSrc: string;
  @Input() imageWidth: number;
  @Input() imageHeight: number;
  imageLoaded = false;

  @ViewChild('imageTag') imageElement: ElementRef;

  constructor(private renderer: Renderer2, private ngZone: NgZone) {}

  ngAfterViewInit() {
    const { nativeElement } = this.imageElement;
    if (nativeElement instanceof HTMLImageElement) {
      this.imageLoaded = false;
      this.renderer.setStyle(nativeElement, 'display', 'none');
    }
  }

  // Helpers
  imageLoadedEvent = () => {
    this.ngZone.run(() => (this.imageLoaded = true));
    this.imageLoaded = true;
    this.renderer.setStyle(this.imageElement.nativeElement, 'display', 'block');
  };
}
