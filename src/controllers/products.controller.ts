import { Product } from '@/interfaces/products.interface';
import ProductService from '@/services/products.service';
import { NextFunction, Request, Response } from 'express';

class ProductsController {

    public productService = new ProductService();

    public getProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const allProductsData: Product[] = await this.productService.findAllProducts();

            res.status(200).json({ data: allProductsData, message: 'findAll' });

        } catch (error) {
            next(error);
        }
    }

}

export default ProductsController;