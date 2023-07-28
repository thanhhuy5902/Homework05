import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor() {}
 
  @Input('productList')
  productList!: Item[];
  @Output() newItemEvent = new EventEmitter<number>();
  delete(value: number){
    this.newItemEvent.emit(value);
  }
}
