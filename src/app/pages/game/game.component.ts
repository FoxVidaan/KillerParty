import { Component } from '@angular/core';
import { ChallengeInterface } from '../../models/ChallengeInterface';
import { ChallengesService } from '../../services/challenges/challenges.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  playerName: string = 'Name';
  challenges: ChallengeInterface[] = [];
  iterator: number = 0;

  constructor(private challengeService: ChallengesService) {}

  ngOnInit(): void {
    this.challengeService
      .getRandomChallenges()
      .subscribe(
        (challenges: ChallengeInterface[]) => (this.challenges = challenges)
      );
  }


  
  showPrevious = () => {
    if (this.iterator > 0) this.iterator--;
  };

  showNext = () => {
    if (this.iterator < this.challenges.length - 1) this.iterator++;
  };
}
