import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products-info-page',
  templateUrl: './products-info-page.component.html',
  styleUrls: ['./products-info-page.component.scss']
})
export class ProductsInfoPageComponent implements OnInit {

  products!: Array<Product>;
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = this.products.find(product => product.id === productIdFromRoute);
  }


}
