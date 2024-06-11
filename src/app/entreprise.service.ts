import { Injectable } from '@angular/core';
import { Entreprise } from './entreprise';

@Injectable({
  providedIn: 'root'
})

export class EntrepriseService {
  constructor() {}
  async getEntreprise(): Promise<Entreprise[]> {
    let url = `https://recherche-entreprises.api.gouv.fr/search?q=&categorie_entreprise=PME%2CETI&minimal=true`
    const data = await fetch(url);
    let result = await data.json()
    // console.log(result)
    return (result.results) ?? [];
  }
  async getFilteredEntreprise(text : String): Promise<Entreprise[]> {
    let url = `https://recherche-entreprises.api.gouv.fr/search?q=${text}&categorie_entreprise=PME%2CETI&minimal=true`
    // console.log(url)
    const data = await fetch(url);
    let result = await data.json()
    // console.log(result)
    return (result.results) ?? [];
  }
}

