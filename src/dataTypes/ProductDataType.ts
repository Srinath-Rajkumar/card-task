export interface ProductType {
  productName: string;
  productDetails: string;
  originalPrice: number;
  offerPrice: number;
  productTag: string;
  productImage: string;
}

export interface ProductListType {
  productList: ProductType[];
}