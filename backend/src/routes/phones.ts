import { Router } from 'express';
import { allowedMethods } from '../middlewere/error';

import { deletePhoneView, getPhonesView, postPhonesView } from '../views/phones';
import { HTTPVerbs } from '../types/common';
import { phoneValidator } from '../middlewere/validators';

const phonesRouter = Router();
phonesRouter.use(allowedMethods([HTTPVerbs.GET, HTTPVerbs.POST, HTTPVerbs.DELETE]));
phonesRouter.get('/', getPhonesView);
phonesRouter.post('/', phoneValidator(false), postPhonesView);
phonesRouter.use(allowedMethods([HTTPVerbs.DELETE]));
phonesRouter.delete('/:id', deletePhoneView);

export default phonesRouter;
