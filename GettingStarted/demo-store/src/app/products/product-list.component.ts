import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'gds-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})

export class ProductListComponent implements OnInit{
  title: string = 'Products List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: any;

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[] = [];

  constructor(private service: ProductService) {
  }

  onRatingClick(message: string):void{
    this.title = 'Product List ' + message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filteredBy: string): IProduct[] {
    filteredBy = filteredBy.toLocaleLowerCase();

    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().lastIndexOf(filteredBy) !== -1);
  }

  ngOnInit(): void{
    this.service.getProducts().subscribe(
      product => {
        this.products = product;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error 
    );
    
  }
}