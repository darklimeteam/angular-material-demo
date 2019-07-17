import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      {
        id: 0, authorName: 'Cat', groupName: 'Animal life', title: 'Lemur\'s happy face',
        text: 'Don’t tell me to smile; this IS my happy face!', imageSrc: '../../assets/1Lemur-1024x683.jpg',
        comments: [{ id: 0, parentId: -1, text: 'What would be a sad one?' }, { id: 1, parentId: 0, text: 'Just add some tears' },
        { id: 2, parentId: -1, text: 'poor lemur' }]
      },
      {
        id: 11, authorName: 'Cat', groupName: 'Animal life', title: 'Dog morning',
        text: 'Fetch me my slippers, human! And where’s my coffee?', imageSrc: '../../assets/2Dog.jpg'
      },
      {
        id: 12, authorName: 'Cat', groupName: 'Animal life', title: 'No social media',
        text: 'These are the eyes of someone who has spent too many hours on social media. I just can’t look away. Hold me.',
        imageSrc: '../../assets/3Cat.jpg'
      },
      {
        id: 13, authorName: 'Cat', groupName: 'Animal life', title: 'Pencil neck',
        text: '“My boss says I’m head and shoulders above the competition. Of course, I work with chimps and rhinos so…”',
        imageSrc: '../../assets/4Giraffe.jpg'
      },
    ];
    return { posts };
  }
}

// https://www.rd.com/advice/funny-animal-pictures/
