import { Component, input, output } from '@angular/core';
import { Produit } from '../produit.model';

@Component({
  imports: [],
  selector: 'app-produit-card',
  styleUrl: './produit-card.scss',
  templateUrl: './produit-card.html',
})
export class ProduitCard {
  produit = input.required<Produit>();
  ajoute = output<Produit>();
  ajouterAuPanier() {
    this.ajoute.emit(this.produit());
  }
}
