import ProductsController from "@/controllers/products.controller";
import { Routes } from "@/interfaces/routes.interface";
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

   }
}

export default ProductsRoutes;