import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 0, title: 'Zero', text: 'some text 1', imageSrc: '' },
      { id: 11, title: 'Mr. Nice', text: 'some text 1', imageSrc: '' },
      { id: 12, title: 'Narco', text: 'some text 1', imageSrc: '' },
      { id: 13, title: 'Bombasto', text: 'some text 1', imageSrc: '' },
      { id: 14, title: 'Celeritas', text: 'some text 1', imageSrc: '' },
      { id: 15, title: 'Magneta', text: 'some text 1', imageSrc: '' },
      { id: 16, title: 'RubberMan', text: 'some text 1', imageSrc: '' },
      { id: 17, title: 'Dynama', text: 'some text 1', imageSrc: '' },
      { id: 18, title: 'Dr IQ', text: 'some text 1', imageSrc: '' },
      { id: 19, title: 'Magma', text: 'some text 1', imageSrc: '' },
      { id: 20, title: 'Tornado', text: 'some text 1', imageSrc: ''  }
    ];
    return { posts };
  }
}
