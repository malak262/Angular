import { computed, Injectable, signal } from "@angular/core";
import { Produit } from "./produit.model";

@Injectable({ providedIn: 'root'})
export class PanierService {
    readonly articles = signal<Produit[]>([]);
    readonly nombre = computed(
         () => this.articles().length);
    readonly total = computed(
         () => this.articles().reduce(
            (somme, p) => somme + p.prix,0
         ));
    ajouter(produit: Produit) {
        this.articles.update(liste => [...liste, produit]);
    }
    vider() {
    this.articles.set([]);
}
}