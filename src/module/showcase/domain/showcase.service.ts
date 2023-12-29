import { Injectable } from '@nestjs/common';
import Logger from 'src/support/logger/logger';

@Injectable()
export class ShowcaseService {
  private logger: Logger;

  constructor() {
    this.logger = new Logger('ShowcaseService');
  }

  async simulateSlowQuery() {
    setTimeout(() => {
      this.logger.error('Showcase service timeout!');
    }, 500);
  }
}
