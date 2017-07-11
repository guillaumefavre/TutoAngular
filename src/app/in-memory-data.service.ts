import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const artistsDB = [
      { id: 1, name: 'Keyth Richards', speciality: 'guitar' },
      { id: 2, name: 'Angus Young', speciality: 'guitar'  },
      { id: 3, name: 'Slash', speciality: 'guitar'  },
      { id: 4, name: 'Mick Jagger', speciality: 'singing'  },
      { id: 5, name: 'Roger Waters', speciality: 'bass'  },
      { id: 6, name: 'Jimi Hendrix', speciality: 'guitar '  }
    ];
    return {artistsDB};
  }
}