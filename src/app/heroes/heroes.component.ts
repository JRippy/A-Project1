import { Hero } from '../property/hero';
import { HeroService } from '../hero.service';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	leftTitle = 'Hero';
	name = 'Julien';
	selectedHero: Hero;
	heroes: Hero[];
	
	constructor(
	private heroService: HeroService,
	private router: Router) 
	{}
	
	getHeroes(): void {
	  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	};
	
	gotoDetail(): void {
	  this.router.navigate(['/detail', this.selectedHero.id]);
	}	
	
	ngOnInit(): void {
	  this.getHeroes();
	}
  
}
