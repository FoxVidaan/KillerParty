import { Injectable } from '@angular/core';
import { KILLERS_NAME } from '../../data/killersData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KillersService {

  constructor() { }

  getRandomKillers(count: number = 5): string {
    const random = Math.floor(Math.random() * (KILLERS_NAME.length + 1));
    return KILLERS_NAME[random]
  }
}
