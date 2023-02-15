import express, { Request, Response } from 'express';
import categoriesHandler from './handler/categories';
const router = express.Router();

router.get('/', categoriesHandler.getCategories);
router.get('/:categoryId', categoriesHandler.getCategory);
router.post('/', categoriesHandler.createCategory);
router.patch('/:categoryId', categoriesHandler.updateCategory);
router.delete('/:categoryId', categoriesHandler.deleteCategory);

export default router;
