import { Diary, newDiary } from "../types";
import diaryModel from "../models/diary_model";

export default new class DiaryService {

   constructor() { }

   getAll(): Array<Diary> {
      const response = diaryModel.getAll();
      return response;
   }

   getById(id: number): Diary | undefined {
      const entry = diaryModel.getById(id);
      return entry;
   }

   addDiary(newDiaryEntry: newDiary): Diary {
      const diaries = this.getAll();
      const newDiary = {
         id: Math.max(...diaries.map(d => d.id)) + 1,
         ...newDiaryEntry
      }
      diaryModel.add(newDiary);
      return newDiary;
   }
}