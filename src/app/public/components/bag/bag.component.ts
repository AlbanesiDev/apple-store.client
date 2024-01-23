import { AfterViewInit, ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { BagInterface } from '../../models/bag.interface';
import { BagService } from '../../services/bag.service';
import { HeaderService } from '../../services/header.service';


@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagComponent implements AfterViewInit {
  public bagItems: BagInterface[] = [];
  public bagItemsCount: number = 0;
  public idProduct: number = 0;

  constructor(
    private bagService: BagService,
    private renderer: Renderer2,
    public headerService: HeaderService,
  ) {
    this.bagService.bagItemsCount$.subscribe((count) => {
      this.bagItemsCount = count;
    });
    this.bagItems = this.bagService.getBag();
  }

  public closeBag() {
    this.headerService.closeBag();
  }
  public removeToBag(idProduct: number, modelPorduct: string) {
    this.bagService.removeToBag(idProduct, modelPorduct);
  }
  public ngAfterViewInit() {
    this.applyMarginStyles();
    const bagBodyElement = document.querySelector('.bag__body');
    if (bagBodyElement) {
      const observer = new MutationObserver((mutationsList) => {
        this.applyMarginStyles();
      });
      observer.observe(bagBodyElement, { childList: true, subtree: true });
    }
  }
  private applyMarginStyles() {
    const itemElements = document.querySelectorAll('.bag__body .item');
    if (itemElements.length >= 3) {
      itemElements.forEach((item: Element) => {
        const htmlElementItem = item as HTMLElement;
        if (htmlElementItem) {
          this.renderer.setStyle(htmlElementItem, 'margin-right', '0.5rem');
        }
      });
    } else {
      itemElements.forEach((item: Element) => {
        const htmlElementItem = item as HTMLElement;
        if (htmlElementItem) {
          this.renderer.setStyle(htmlElementItem, 'margin-right', '0');
        }
      });
    }
  }
}
