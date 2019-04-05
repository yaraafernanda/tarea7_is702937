import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../Producto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  productos: Producto[];
  subscript: Subscription;
  carrito = this.router.url === '/carrito' ? true : false;

  constructor(private productoService: ProductosService,
              private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    if (this.carrito) {

    } else {
      this.productos = this.productoService.getProductos();
      this.subscript = this.productoService.cambiaDato
      .subscribe(
        (arregloProductos: Producto[]) => {
          this.productos = arregloProductos;
        }
      );
    }
  }

  agregar(producto: Producto) {
    this.productoService.addToCart(producto);
  }

  borrar(id: number) {
    this.productoService.deleteFromCart(id);
  }

}
