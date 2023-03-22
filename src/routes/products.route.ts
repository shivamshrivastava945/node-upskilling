import ProductsController from "@/controllers/products.controller";
import { CreateProductDto } from "@/dtos/products.dto";
import { Routes } from "@/interfaces/routes.interface";
import validationMiddleware from "@/middlewares/validation.middleware";
import { Router } from "express";

class ProductsRoutes implements Routes {
   public path = '/products';
   public router = Router();

   public productsController = new ProductsController();

   constructor() {
    this.initializeRoutes();
   }
   private initializeRoutes() {
    this.router.get(`${this.path}`, this.productsController.getProducts);
    this.router.get(`${this.path}`, this.productsController.getProcuctById);
    this.router.post(`${this.path}`, validationMiddleware(CreateProductDto, 'body'), this.productsController.createProduct);


   }
}

export default ProductsRoutes;