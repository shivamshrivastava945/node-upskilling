import request from 'supertest';
import App from '@/app';
import { Product } from '@interfaces/products.interface';
import productModel from '@models/products.model';
import ProductsRoutes from '@routes/products.route';

afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
  });

  describe('Testing Products', () => {
    describe('[GET] /products', () => {
        it('response statusCode 200 / findAll', () => {
          const findProduct: Product[] = productModel;
          const productsRoutes = new ProductsRoutes();
          const app = new App([productsRoutes]);
    
          return request(app.getServer()).get(`${productsRoutes.path}`).expect(200, { data: findProduct, message: 'findAll' });
        });
      });

      describe('[GET] /products/:id', () => {
        it('response statusCode 200 / findOne', () => {
          const productId = 101;
          const findProduct: Product | undefined = productModel.find(product => product.product_id === productId);
          const productsRoutes = new ProductsRoutes();
          const app = new App([productsRoutes]);
    
          return request(app.getServer()).get(`${productsRoutes.path}/${productId}`).expect(200, { data: findProduct, message: 'findOne' });
        });
      });
  })