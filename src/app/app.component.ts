import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'homework05';
  productForm!: FormGroup;
  
  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      image: new FormControl(
        'http://code.slicecrowd.com/labs/4/images/t-shirt.png'
      ),
    });
  }
  productList: Item[] = [
    {
      id: Date.now(),
      name: 'DC x LW Love Varsity Jacket',
      price: 120,
      brand: 'Yeezy',
      image: 'https://bizweb.dktcdn.net/100/369/010/products/1-5.jpg?v=1686560543000',
    },
  ];
  addProduct(newItem: Item) {
    this.productList.push(newItem);
    // console.log(newItem);
  }
  delete(value: number) {
    const index = this.productList.findIndex(item => item.id == value);
    if (index !== -1) {
      this.productList.splice(index, 1);
    }
  }
}
