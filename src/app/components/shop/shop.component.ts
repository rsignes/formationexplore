import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from 'src/app/models/product-data.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'explore-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  searchString = '';
  // productDatas: ProductData[] = [];
  productDatas$: Observable<ProductData[]> = this.productService.productDatas;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.productDatas.subscribe({
    //   next: (productDatas) => {
    //     this.productDatas = productDatas;
    //   },
    // });
  }

  handleAddToCart(productData: ProductData): void {
    console.log(productData);
  }
}
