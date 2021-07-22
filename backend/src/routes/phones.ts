import { Router } from 'express';
import { allowedMethods } from '../middlewere/error';

import { getPhonesView } from '../views/phones';
import { HTTPVerbs } from '../types/common';

const phonesRouter = Router();
phonesRouter.use(allowedMethods([HTTPVerbs.GET]));
phonesRouter.get('/', getPhonesView);

export default phonesRouter;
