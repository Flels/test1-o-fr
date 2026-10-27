import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';

@Component({
  imports: [RouterLink],
  selector: 'app-product-details',
  styleUrl: './product-details.scss',
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  private route = inject(ActivatedRoute);
  productId = this.route.snapshot.paramMap.get('id');

  private productService = inject(Products);

  constructor() {
    console.log(this.productId);
  }

  ngOnInit(): void {
    this.productService.getProductDetail(this.productId as any).subscribe((data) => {
      console.log(data);
    })
  }
}
