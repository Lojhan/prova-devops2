import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseURL = 'http://localhost:3000/products'

  products: Product[] = []

  public async addProduct(product: Product) {
    delete product.id
    await this.http.post(this.baseURL, product).toPromise()
    return this.products
  }

  public async removeProduct(product: Product) {
    await this.http.delete(`${this.baseURL}/${product.id}`).toPromise()

    return this.products
  }

  public async listProducts() {
    let products = await this.http.get<Product[]>(this.baseURL).toPromise()
    products.sort((a, b) => a.id - b.id)
    this.products = products
    return this.products
  }

  public async editProduct(product: Product, oldProduct: Product) {
    await this.http.patch(`${this.baseURL}/${product.id}`, product).toPromise()
    return this.products
  }

  constructor(
    private http: HttpClient
  ) {}
}
