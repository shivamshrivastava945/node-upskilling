import { CreateProductDto } from '@/dtos/products.dto';
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
    
    public getProcuctById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const productId = Number(req.params.id);
          const findOneProductData: Product = await this.productService.findProductById(productId);
    
          res.status(200).json({ data: findOneProductData, message: 'findOne' });
        } catch (error) {
          next(error);
        }
      };

      public createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const productData: CreateProductDto = req.body;
      const createProductData: Product = await this.productService.createProduct(productData);

      res.status(201).json({ data: createProductData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;