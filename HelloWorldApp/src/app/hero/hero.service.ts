import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes() {
    return HEROES;
  }
}
