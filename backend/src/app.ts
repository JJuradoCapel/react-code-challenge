import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { error404Middleware, error500Middleware } from './middlewere/error';
import phonesRouter from './routes/phones';

const app = express();

app.use(helmet());
app.use(cors());
app.use('/phones', phonesRouter);
app.use(error404Middleware);
app.use(error500Middleware);

export default app;
