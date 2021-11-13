import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    // this.messageService.add('HeroService: fetched heroes')
    console.log('heroes==>', heroes);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h =>h.id === id)!;
    this.messageService.add(`heroService: fetched hero is : ${id}`);
    return of(hero)
  }
}