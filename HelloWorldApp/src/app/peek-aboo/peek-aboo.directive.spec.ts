import { PeekABooDirective } from './peek-aboo.directive';

import { LoggerService } from '../logger.service';

describe('PeekABooDirective', () => {
  it('should create an instance', () => {
    const directive = new PeekABooDirective(new LoggerService());
    expect(directive).toBeTruthy();
  });
});
