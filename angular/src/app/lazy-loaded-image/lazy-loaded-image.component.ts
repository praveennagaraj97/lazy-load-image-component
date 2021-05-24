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
  startLoading = false;

  private observer: IntersectionObserver;

  @ViewChild('imageTag') imageElement: ElementRef;
  @ViewChild('loadableref') loadableRef: ElementRef;

  constructor(private renderer: Renderer2, private ngZone: NgZone) {
    this.observer = new IntersectionObserver(
      this.intersectionObserverCallBack,
      {
        threshold: 0.7,
      }
    );
  }

  ngAfterViewInit() {
    const { nativeElement } = this.imageElement;
    if (nativeElement instanceof HTMLImageElement) {
      this.imageLoaded = false;
      this.renderer.setStyle(nativeElement, 'display', 'none');
    }
    this.observer.observe(this.loadableRef.nativeElement);
  }

  // Helpers
  imageLoadedEvent = () => {
    this.ngZone.run(() => {
      this.imageLoaded = true;
    });
    this.imageLoaded = true;
    this.renderer.setStyle(this.imageElement.nativeElement, 'display', 'block');
  };

  private intersectionObserverCallBack = (
    entries: IntersectionObserverEntry[]
  ) => {
    if (!this.startLoading && entries[0].isIntersecting) {
      this.startLoading = true;
    }
  };
}
