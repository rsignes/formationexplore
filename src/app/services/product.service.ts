import { Injectable } from '@angular/core';
import { ProductData } from '../models/product-data.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  get productDatas(): ProductData[] {
    return this._productDatas;
  }

  private _productDatas: ProductData[] = [
    {
      id: '0',
      name: 'Sac en tissu',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      description: 'Description du joli sac en cuir',
      price: 20,
    },
    {
      id: '1',
      name: 'Robe en soie',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      description: 'Robe blanche et doree ou bleue et noire',
      price: 70,
    },
    {
      id: '2',
      name: 'Gameboy color',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      description: 'Tres bon etat',
      price: 45,
    },
  ];

  constructor() {}
}