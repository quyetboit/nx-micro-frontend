import { Component, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { WebElementWrapperOption } from 'apps/shell/src/app/app.routes';

@Component({
  selector: 'app-web-element-wrapper',
  standalone: true,
  template: '',
})

export class WebElementWrapperComponent implements OnInit, OnDestroy {
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private element!: HTMLElement;

  async ngOnInit(): Promise<void> {
    const { loadRemoteBunder, selector } = this.route.snapshot.data as WebElementWrapperOption;
    await loadRemoteBunder();
    
    this.element = document.createElement(selector);
    this.elementRef.nativeElement.appendChild(this.element);
  }

  ngOnDestroy(): void {
    if (this.element) {
      this.elementRef.nativeElement.removeChild(this.element);
    }
  }
}