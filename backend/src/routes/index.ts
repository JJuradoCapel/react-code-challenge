import express, { Router } from 'express';
import { allowedMethods } from '../middlewere/error';

import { HTTPVerbs } from '../types/common';
import phonesRouter from './phones';

const rootRouter = Router();
rootRouter.use('/', allowedMethods([HTTPVerbs.GET]));
rootRouter.get('/', (_, res) => res.status(200).send('OK'));
rootRouter.use('/phones', phonesRouter);
rootRouter.use('/images', express.static('images'));

export default rootRouter;
