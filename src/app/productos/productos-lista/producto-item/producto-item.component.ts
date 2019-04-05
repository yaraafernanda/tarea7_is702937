import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../Producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  @Input() producto: Producto;

  constructor() { }

  ngOnInit() {
  }

}
