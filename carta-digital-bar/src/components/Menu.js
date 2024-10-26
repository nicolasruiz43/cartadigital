import React from 'react';
import { FaCocktail, FaBeer, FaGlassWhiskey, FaHamburger, FaCoffee, FaGamepad } from 'react-icons/fa';

function Menu() {
  return (
    <main className="menu">
      <section className="section">
        <h2><FaCocktail /> Cócteles</h2>
        <ul>
          <li>Mojito - <strong>$8</strong></li>
          <li>Margarita - <strong>$7</strong></li>
          <li>Daiquiri - <strong>$7</strong></li>
        </ul>
      </section>
      <section className="section">
        <h2><FaBeer /> Cervezas</h2>
        <ul>
          <li>Cerveza rubia - <strong>$5</strong></li>
          <li>Cerveza negra - <strong>$6</strong></li>
          <li>Cerveza artesanal - <strong>$7</strong></li>
        </ul>
      </section>
      <section className="section">
        <h2><FaGlassWhiskey /> Whisky</h2>
        <ul>
          <li>Whisky escocés - <strong>$10</strong></li>
          <li>Whisky irlandés - <strong>$12</strong></li>
        </ul>
      </section>
      <section className="section">
        <h2><FaHamburger /> Comidas</h2>
        <ul>
          <li>Hamburguesa - <strong>$10</strong></li>
          <li>Papas fritas - <strong>$4</strong></li>
          <li>Pizza - <strong>$12</strong></li>
          <li>Maní - <strong>$3</strong></li>
          <li>Palitos salados - <strong>$2</strong></li>
        </ul>
      </section>
      <section className="section">
        <h2><FaCoffee /> Cafetería</h2>
        <ul>
          <li>Café - <strong>$3</strong></li>
          <li>Café con leche - <strong>$4</strong></li>
        </ul>
      </section>
      <section className="section">
        <h2><FaGamepad /> Billar</h2>
        <ul>
          <li>Por hora - <strong>$15</strong></li>
          <li>Media hora - <strong>$8</strong></li>
        </ul>
      </section>
    </main>
  );
}

export default Menu;
