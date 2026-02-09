import express from 'express';
import * as controller from '../controllers/foodController.js';

const router = express.Router();

router.get('/foods', controller.getAll);
router.get('/foods/:id', controller.getById);
router.post('/foods', controller.create);
router.put('/foods/:id', controller.update);
router.delete('/foods/:id', controller.remove);

export default router;