import { ProductProps } from '@/utils/data/products';
import { ProductCartProps } from '../cart-store';

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find((p) => p.id === newProduct.id);

  if (existingProduct) {
    return products.map((product) => {
      if (product.id === existingProduct.id) {
        return {
          ...product,
          quantity: existingProduct.quantity + 1,
        };
      }

      return product;
    });
  }

  return [...products, { ...newProduct, quantity: 1 }];
}
