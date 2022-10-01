import { Router } from 'express';
import { getExample, getTemplate } from '../controller';

const router = Router();

router.get('/', getExample);
router.get('/tpl', getTemplate);

export default router;
