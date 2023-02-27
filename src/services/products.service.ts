import { Product } from "@/interfaces/products.interface";
import productModel from "@/models/products.model";

class ProductService {
    public products = productModel;

    public async findAllProducts() : Promise<Product[]> {
        const products: Product[] = this.products;
        return products;
    }
}

export default ProductService;