import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Tour of Heroes';
  	leftTitle = 'Hero';
	name = 'Julien';
	location = '1 rue de France';
	law = 'L\'utilisation de ce site entraîne votre acceptation des Conditions Générales d’Utilisation et de la Politique des Données Personnelles et des Cookies.';
	right = '© 2017 Website. Tous droits réservés.';
}