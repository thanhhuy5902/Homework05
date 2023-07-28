import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{Item} from '../../models/item.model'
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Item>();
  productForm!: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      image: new FormControl(
        'https://bizweb.dktcdn.net/100/369/010/products/1-5.jpg?v=1686560543000'
      ),
    });
  }
 
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog() {
    Animation 
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }

  addProduct(value: Item) {
    this.newItemEvent.emit(value);
    console.log(value);
  }
}
