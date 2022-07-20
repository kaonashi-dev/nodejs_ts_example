import diaryData from '../data/diaries.json';
import { Diary } from '../types';

export default new class DiaryModel {

   private diaries: Array<Diary>;

   constructor() {
      this.diaries = diaryData as Array<Diary>;
   }

   getAll(): Array<Diary> {
      return this.diaries;
   }

   getById(id: number): Diary | undefined {
      const entry = this.diaries.find(item => item.id === id);
      return entry;
   }

   add(diary: Diary) {
      this.diaries.push(diary);
   }
}