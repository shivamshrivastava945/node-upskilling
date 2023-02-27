import { Product } from '@/interfaces/products.interface';

const productModel: Product[] = [
  {
    product_id: 1,
    product_name: 'product1',
    pack: 'Pakage1',
    pack_size: 10,
    pack_price: 1500,
    status: true
  },
  {
    product_id: 2,
    product_name: 'product2',
    pack: 'Pakage2',
    pack_size: 20,
    pack_price: 36000,
    status: false
  },
  {
    product_id: 3,
    product_name: 'product3',
    pack: 'Pakage3',
    pack_size: 30,
    pack_price: 96500,
    status: true
  },
  {
    product_id: 4,
    product_name: 'product4',
    pack: 'Pakage4',
    pack_size: 40,
    pack_price: 42000,
    status: false
  },
];

export default productModel;