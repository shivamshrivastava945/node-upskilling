import express from 'express';
import { NODE_ENV, PORT} from '@config';
import { Routes } from './interfaces/routes.interface';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();

    }


    public listen() {
        this.app.listen(this.port, () => {
            console.log(`======= ENV: ${this.env} =======`);
            console.log(`App listening on the port ${this.port}`);
        })
    }

    public getServer() {
        return this.app;
    }
    private initializeSwagger() {
        const options = {
          swaggerDefinition: {
            info: {
              title: 'REST API',
              version: '1.0.0',
              description: 'Example docs',
            },
          },
          apis: ['swagger.yaml'],
        };
    
        const specs = swaggerJSDoc(options);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
      }
    
    private initializeMiddlewares() {
        this.app.use(express.json());
    }
    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
          this.app.use('/', route.router);
        });
      }
}

export default App;