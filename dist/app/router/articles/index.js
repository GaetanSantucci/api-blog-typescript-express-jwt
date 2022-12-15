// ~ ROUTER CONFIG ~ //
import { Router } from 'express';
const router = Router();
import { getAllArticles, getArticleById } from '../../controller/articles.js';
router.get('/articles', getAllArticles);
router.get('/articles/:id', getArticleById);
export { router };
