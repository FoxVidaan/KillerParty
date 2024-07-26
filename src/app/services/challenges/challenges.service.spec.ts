import { TestBed } from '@angular/core/testing';

import { ChallengesService } from './challenges.service';
import { KILLER_CHALLENGES } from '../../data/killerChallenges';

describe('ChallengesService', () => {
  let service: ChallengesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 5 random challenges', (done: DoneFn) => {
    service.getRandomChallenges().subscribe(challenges => {
      expect(challenges.length).toBe(5);
      challenges.forEach(challenge => {
        expect(KILLER_CHALLENGES).toContain(jasmine.objectContaining(challenge));
      });
      done();
    });
  });
});
