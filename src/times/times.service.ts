import { Injectable } from '@nestjs/common';

@Injectable()
export class TimesService {
  TimeSave(): string {
    return 'This action returns all times';
  }
}
