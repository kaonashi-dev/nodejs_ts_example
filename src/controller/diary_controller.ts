import { Request, Response } from "express";
import diaryService from "../services/diary_service";

export default new class DiaryController {

   constructor() { }

   getAll(_: Request, res: Response): void {
      const data = diaryService.getAll();
      res.send(data);
   }

   getById(req: Request, res: Response): void {
      const id = Number(req.params.id);
      const entry = diaryService.getById(id);
      res.send(entry);
   }

   addDiary(req: Request, res: Response): void {

      const { date, weather, visibility, comment } = req.body;

      const newDiary = diaryService.addDiary({
         date, weather, visibility, comment
      });

      res.json(newDiary);
   }
}