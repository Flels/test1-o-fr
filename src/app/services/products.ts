import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class Products {
  private http = inject(HttpClient);

  public getAllProducts() {
    return this.http.get('http://localhost:3001/products');
  }

  public getProductDetail(id: number) {
    return this.http.get(`http://localhost:3001/products/${id}`);
  }
}
