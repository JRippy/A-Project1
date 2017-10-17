import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './property/hero';
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

	private heroesUrl = 'api/heroes';  // URL to web api

	constructor(private http: Http) { }

	getHeroes(): Promise<Hero[]> {

	var response;
	var response2 = {"test": 2};
	
	this.http.get(this.heroesUrl)
				 .toPromise()
				 .then(response => response.json().data as Hero[]);
	
	console.log(JSON.stringify(response))
	console.log(this.http.get(this.heroesUrl).toPromise())
	
	  return this.http.get(this.heroesUrl)
				 .toPromise()
				 .then(response => response.json().data as Hero[])
				 .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
	
	getHeroesSlowly(): Promise<Hero[]> {
	  return new Promise(resolve => {
		// Simulate server latency with 2 second delay
		setTimeout(() => resolve(this.getHeroes()), 2000);
	  });
	}
	
	getHero(id: number): Promise<Hero> {
	  return this.getHeroes()
				 .then(heroes => heroes.find(hero => hero.id === id));
	}
}