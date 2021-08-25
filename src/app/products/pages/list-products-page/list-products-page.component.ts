import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/core/services/products/product.service';

@Component({
  selector: 'app-list-products-page',
  templateUrl: './list-products-page.component.html',
  styleUrls: ['./list-products-page.component.css']
})
export class ListProductsPageComponent implements OnInit {

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.list().subscribe(console.log);
  }
}
