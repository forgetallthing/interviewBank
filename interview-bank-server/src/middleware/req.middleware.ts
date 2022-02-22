import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ReqMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method == 'GET' && req.query.param)
      req.query = JSON.parse(req.query.param as string);
    if (req.method == 'POST' && req.body.param)
      req.body = JSON.parse(req.body.param);
    next();
  }
}
