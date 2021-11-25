import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Product from './Models/Product';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testesBdd';
  products: Product[];

  itemForm = this.formBuilder.group({
    name: '',
    value: '',
    description: '',
    id: 0
  });

  editing = false
  editingProduct = {} as Product

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  async ngOnInit() {
    await this.syncProducts()
  }

  async syncProducts() {
    this.products = await this.cartService.listProducts()
  }

  startEditing(product: Product) {
    this.itemForm.setValue({
      name: product.name,
      description: product.description,
      value: product.price,
      id: product.id
    })
    this.editingProduct = product
    this.editing = true
  }

  async onSubmit() {
    const { name, value, description, id } = this.itemForm.value
    await this.cartService[this.editing ? 'editProduct' : 'addProduct'](new Product(name, value, description, id), this.editingProduct)
    this.itemForm.reset()
    this.editing && (this.editing = false)
    await this.syncProducts()
  }

  async remove(product: Product) {
    this.products = await this.cartService.removeProduct(product)
    await this.syncProducts()
  }


}
