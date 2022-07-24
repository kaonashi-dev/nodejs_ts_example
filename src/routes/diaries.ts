import express from 'express';
import diaryController from '../controller/diary_controller';

const router = express.Router();

router.get('/', diaryController.getAll);

router.get('/:id',diaryController.getById);

router.post('/', diaryController.addDiary);

export default router;