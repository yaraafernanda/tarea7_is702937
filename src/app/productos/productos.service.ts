import { Injectable } from '@angular/core';
import { Producto } from './Producto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cambiaDato = new Subject<Producto[]>();
  private lastId = 1;

  private productos: Producto[] = [
    new Producto(1, 'Zbook', 'HP', 'Laptop', 15000, 8),
    new Producto(2, 'Galaxy S10', 'Samsung', 'Celular', 24000, 30),
    new Producto(3, 'Pantalla 32 pulgadas', 'LG', 'Pantalla', 5000, 25),
    new Producto(4, 'INSPIRON 3467', 'Dell', 'Laptop', 12500, 26),
    new Producto(5, 'iPhone XR', 'Apple', 'Celular', 19500, 6),
    new Producto(6, 'Pantalla 43 pulgadas', 'Sony', 'Pantalla', 11000, 37),
  ];

  private cart: Producto[] = [];

  constructor() { }

  getNextId(): number {
    return this.lastId;
  }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  getCart(): Producto[] {
    return this.cart.slice();
  }

  addToCart(producto: Producto) {
    producto.id = this.lastId;
    this.cart.push(Object.assign({}, producto));
    this.lastId++;
  }

  deleteFromCart(id: number): boolean {
    const pos = this.cart.findIndex(p => p.id === id);
    if (pos >= 0) {
      console.log('producto borrado id:' + id);
      this.cart.splice(pos, 1);
      return true;
    }
    return false;
  }

}
