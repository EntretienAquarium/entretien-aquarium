
import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Entretien Aquarium</h1>
      <p style={{ textAlign: "center" }}>
        Entretien d’aquariums à domicile et en entreprise
      </p>
      <section style={{ marginTop: "2rem" }}>
        <h2>Prestations</h2>
        <ul>
          <li>Nettoyage vitre, sol, décor</li>
          <li>Entretien des plantes et filtres</li>
          <li>Contrôle de l’eau (pH, nitrites, etc.)</li>
          <li>Changement partiel ou complet d’eau</li>
          <li>Mise en route de nouveaux aquariums</li>
        </ul>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h2>Tarifs par passage</h2>
        <ul>
          <li>&lt;100 L : 29 €</li>
          <li>100–250 L : 49 €</li>
          <li>250–500 L : 69 €</li>
          <li>&gt;500 L : sur devis</li>
          <li><i>+ Déplacement : Paris 10 €, Banlieue 15–20 €</i></li>
        </ul>
      </section>
    </div>
  );
}
