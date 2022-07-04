import { Diary } from "../types";
import DiaryModel from "../models/diary_model";

export default new class DiaryService {

   constructor() { }

   getAll(): Array<Diary> {
      const response = DiaryModel.getAll();
      return response;
   }
}