import { Request, Response } from "express";
import authService from "../services/auth_service";

export default new class AuthController {

   constructor() { }

   register(_: Request, res: Response): void {
      const data = authService.register();
      res.send(data);
   }

   login(_: Request, res: Response): void {
      const data = authService.login();
      res.send(data);
   }
}