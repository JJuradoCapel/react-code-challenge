import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import { error404Middleware, error500Middleware } from './middlewere/error';
import rootRoutes from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(fileUpload());

app.use('/', rootRoutes);

app.use(error404Middleware);
app.use(error500Middleware);

export default app;
