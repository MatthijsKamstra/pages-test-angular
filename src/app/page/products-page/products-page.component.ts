import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../service/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products!: Array<Product>;
  selectedProduct!: Product;

  constructor(public productService: ProductService) { }

  public selectContact(contact: Product) {
    this.selectedProduct = contact;
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }


}
