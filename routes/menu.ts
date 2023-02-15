import express from 'express';
import menuHandler from './handler/menu';
const router = express.Router();

router.get('/', menuHandler.getMenus);
router.get('/:menuId', menuHandler.getMenu);
router.post('/', menuHandler.createMenu);
router.patch('/:menuId', menuHandler.updateMenu);
router.delete('/:menuId', menuHandler.deleteMenu);

export default router;
