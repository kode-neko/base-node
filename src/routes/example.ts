import { Router } from 'express';
import {
  getExample, getMain, getSection,
} from '../controller';

const router = Router();

router.get('/', getExample);
router.get('/main', getMain);
router.get('/section', getSection);

export default router;
