import { Component, inject, OnInit, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { Products } from '../../services/products';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    MatToolbarModule,
    MatCardModule,
    RouterLink
  ],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  private productsService = inject(Products);
  public products = signal<any>([]);

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products.set(data);
      console.log(this.products());
    })    
  }
}
