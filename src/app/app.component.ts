import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntrepriseService } from './entreprise.service';
import { Entreprise } from './entreprise';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Recherche d`Entreprise';
  entrepriseList: Entreprise[] = [];
  entrepriseFilteredList: Entreprise[] = [];
  entrepriseService: EntrepriseService = inject(EntrepriseService);
  constructor() {
    this.entrepriseService
      .getEntreprise()
      .then((entrepriseList: Entreprise[]) => {
        this.entrepriseList = entrepriseList;
        this.entrepriseFilteredList = entrepriseList;
        console.log("ok")
        console.log(this.entrepriseFilteredList)
      });
  }
  filterResults(text: String) {
    if (!text) this.entrepriseFilteredList = this.entrepriseList;
    this.entrepriseService
      .getFilteredEntreprise(text)
      .then((entrepriseList: Entreprise[]) => {
        this.entrepriseFilteredList = entrepriseList;
      });
  }
}
