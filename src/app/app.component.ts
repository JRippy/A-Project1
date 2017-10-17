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
	law = 'L\'utilisation de ce site entra�ne votre acceptation des Conditions G�n�rales d�Utilisation et de la Politique des Donn�es Personnelles et des Cookies.';
	right = '� 2017 Website. Tous droits r�serv�s.';
}