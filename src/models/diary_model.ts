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
}