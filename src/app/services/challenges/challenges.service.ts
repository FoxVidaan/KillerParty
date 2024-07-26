import { Injectable } from '@angular/core';
import { KILLER_CHALLENGES } from '../../data/killerChallenges';
import { ChallengeInterface } from '../../models/ChallengeInterface';
import { type Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor() { }

  getRandomChallenges(count: number = 5): ChallengeInterface[] {
    const shuffled = this.shuffleChallenges(KILLER_CHALLENGES);
    const selectedChallenges = shuffled.slice(0, count);
    return selectedChallenges;
  }

  private shuffleChallenges(challenges: ChallengeInterface[]): ChallengeInterface[] {
    for (let i = challenges.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [challenges[i], challenges[random]] = [challenges[random], challenges[i]];
    }
    return challenges;
  }
}
