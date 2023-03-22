import { Product } from "@/interfaces/products.interface";
import productModel from "@/models/products.model";
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';


class ProductService {
    public products = productModel;

    public async findAllProducts() : Promise<Product[]> {
        const products: Product[] = this.products;
        return products;
    }
    
  public async findProductById(productId: number): Promise<Product> {
    const findProduct: Product|undefined = this.products.find(product => product.product_id === productId);
    if (!findProduct) throw new HttpException(409, "Product doesn't exist");

    return findProduct;
  }

  public async createProduct(productData: Product): Promise<Product> {
    if (isEmpty(productData)) throw new HttpException(400, "Product Data is empty");

    const findProduct: Product|undefined = this.products.find(user => user.product_name === productData.product_name);
    if (findProduct) throw new HttpException(409, `This product ${productData.product_name} already exists`);

    const createProductData: Product = {...productData};
    this.products = [...this.products, createProductData];

    return createProductData;
  }
}

export default ProductService;