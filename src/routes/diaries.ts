import express from 'express';
import diaryService from '../services/diary_service';

const router = express.Router();

router.get('/', (_, res) => {
   console.log('Fetching all');
   const response = diaryService.getAll();
   res.send(response);
});

router.get('/:id', (req, res) => {
   console.log('Fetching item by id');

   const id = Number(req.params.id);
   const entry = diaryService.getById(id);

   const response = entry ?? {};
   res.send(response);
});

router.post('/', (req, res) => {

   const { date, weather, visibility, comment } = req.body;

   const newDiary = diaryService.addDiary({
      date, weather, visibility, comment
   });

   res.json(newDiary);
});

export default router;