import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/services/products/product.service';

@Component({
  selector: 'app-product-sticker',
  templateUrl: './product-sticker.component.html',
  styleUrls: ['./product-sticker.component.css']
})
export class ProductStickerComponent {
  @Input() product!: Product;
}
