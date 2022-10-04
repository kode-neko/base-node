import { Router } from 'express';
import {
  getExample, getChangeLang, getTemplate, getSubject,
} from '../controller';

const router = Router();

router.get('/', getExample);
router.get('/changeLang', getChangeLang);
router.get('/tpl', getTemplate);
router.get('/dev', getSubject);

export default router;
