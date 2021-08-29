import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/services/products/product.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
}
