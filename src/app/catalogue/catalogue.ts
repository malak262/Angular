import { Component, inject, signal } from '@angular/core';
import { Produit } from '../produit.model';
import { ProduitCard } from '../produit-card/produit-card';
import { PanierService } from '../panier.service';

@Component({
  imports: [ProduitCard],
  selector: 'app-catalogue',
  styleUrl: './catalogue.scss',
  templateUrl: './catalogue.html',
})
export class Catalogue {
  panier = inject(PanierService);
  produits = signal<Produit[]>([
    { id: 1, nom: 'Casque audio', prix: 249 },
    { id: 2, nom: 'Souris sans fil', prix: 89 },
    { id: 3, nom: 'Clavier mécanique', prix: 399 },
    { id: 4, nom: 'Tapis de souris', prix: 49 }
  ]);

  ajouterProduit(produit: Produit){
    this.panier.ajouter(produit);
  }
}
