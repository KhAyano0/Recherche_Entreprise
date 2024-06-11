import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Entreprise } from '../entreprise';

@Component({
  selector: 'app-entreprise',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,CommonModule],
  templateUrl: './entreprise.component.html',
  styleUrl: './entreprise.component.css'
})
export class EntrepriseComponent {
  @Input() entreprise!: Entreprise;

}
