import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product> = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      img: 'https://picsum.photos/seed/phonexl/200/300'
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      img: 'https://picsum.photos/seed/phonemini/200/300',
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: 'More info',
      img: 'https://picsum.photos/seed/phonestandaard/200/300',
    }
  ];


  constructor() { }

  public getProducts(): Array<Product> {
    return this.products;
  }
  public createProduct(product: Product) {
    this.products.push(product);
  }

}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}


