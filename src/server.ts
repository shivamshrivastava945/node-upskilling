import App from '@/app';
import UsersRoute from '@/routes/products.route';

const app = new App([new UsersRoute()]);

app.listen();