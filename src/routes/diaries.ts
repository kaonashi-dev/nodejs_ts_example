import express from 'express';
import DiaryService from '../services/diary_service';

const router = express.Router();

router.get('/', (_, res) => {
   console.log('Fetching all');
   const response = DiaryService.getAll();
   res.send(response);
});

router.post('/', (_, res) => {
   res.send('Saving a diary');
});

export default router;