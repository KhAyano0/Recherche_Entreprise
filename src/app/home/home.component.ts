import {  Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import { Entreprise } from '../entreprise';
import { EntrepriseComponent } from '../entreprise/entreprise.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent,RouterOutlet,CommonModule,EntrepriseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent {
  @Input() entrepriseFilteredList!: Entreprise[];

}
