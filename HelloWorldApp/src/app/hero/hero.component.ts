import { Component } from '@angular/core';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heros: Hero[];
  constructor(private heroService: HeroService ){
    this.heros = this.heroService.getHeroes();
  }
}
