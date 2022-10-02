import { Router } from 'express';
import { getExample, getChangeLang, getTemplate } from '../controller';

const router = Router();

router.get('/', getExample);
router.get('/changeLang', getChangeLang);
router.get('/tpl', getTemplate);

export default router;
