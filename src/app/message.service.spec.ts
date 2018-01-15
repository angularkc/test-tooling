import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should append when message is added', inject([MessageService], (service: MessageService) => {
    service.add('Hero Added');
    expect(service.messages.length).toEqual(1);
  }));

  it('should clear when message is cleared', inject([MessageService], (service: MessageService) => {
    service.add('Hero Added');
    service.clear();
    expect(service.messages.length).toEqual(0);
  }));
});
