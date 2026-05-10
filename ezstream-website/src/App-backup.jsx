import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <img src="/images/logo.png" alt="EZTV" />
          </a>
          <ul className="nav-links">
            <li><a href="#channels">Chaînes</a></li>
            <li><a href="#pricing">Tarifs</a></li>
            <li><a href="#devices">Appareils</a></li>
            <li><a href="#testimonials">Témoignages</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="#" className="nav-cta">ESSAI GRATUIT</a>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="live-dot"></span>
            Service Premium IPTV
          </div>
          <h1>
            REGARDEZ
            <span className="line2">TOUT,</span>
            PARTOUT.
          </h1>
          <p className="hero-sub">+32 000 Chaînes · HD & 4K · 160 000+ Films</p>
          <p className="hero-desc">
            EZTV vous offre l'accès au meilleur contenu mondial 
            sports en direct, films récents, séries, actualités 
            sur tous vos appareils. Qualité HD/4K garantie, sans coupures.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn-primary">Essai Gratuit 24h</a>
            <a href="#pricing" className="btn-outline">Voir les Tarifs</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">32K+</div>
              <div className="lbl">Chaînes Live</div>
            </div>
            <div className="hero-stat">
              <div className="num">160K+</div>
              <div className="lbl">Films & Séries</div>
            </div>
            <div className="hero-stat">
              <div className="num">99.9%</div>
              <div className="lbl">Disponibilité</div>
            </div>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="features">
        <div className="features-header">
          <div>
            <p className="section-label">Pourquoi EZTV</p>
            <h2 className="section-title">L'EXPÉRIENCE<br/>IPTV ULTIME</h2>
          </div>
          <p className="section-desc">
            Une technologie de streaming de pointe conçue pour un divertissement sans compromis, 
            à toute heure, sur tous vos écrans.
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"> </div>
            <h3>32 000+ Chaînes</h3>
            <p>Accédez à toutes les chaînes du Maroc, du Monde Arabe, de l'Europe et du monde entier. Sports, news, divertissement, kids  tout y est.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"> </div>
            <h3>160 000+ VOD</h3>
            <p>Bibliothèque immense de films récents, séries populaires, documentaires et contenus exclusifs en streaming à la demande.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"> </div>
            <h3>Serveurs Ultra-Rapides</h3>
            <p>Infrastructure haute performance avec des serveurs distribués globalement pour garantir aucun buffering, même en 4K.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"> </div>
            <h3>100% Sécurisé</h3>
            <p>Connexions chiffrées, paiements sécurisés et confidentialité totale de vos données. Votre vie privée est notre priorité.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"> </div>
            <h3>Multi-Appareils</h3>
            <p>Compatible Smart TV, Android, iOS, PC, Fire Stick, MAG Box, Apple TV et bien plus. Regardez sur tout ce que vous possédez.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"> </div>
            <h3>Support 24/7</h3>
            <p>Notre équipe est disponible à toute heure pour vous assister. Activation instantanée et assistance technique réactive.</p>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="channels">
        <div className="channels-header">
          <p className="section-label">Catalogue</p>
          <h2 className="section-title">DES MILLIERS<br/>DE CHAÎNES</h2>
          <div className="channel-cats">
            <button className="cat-btn active">Toutes</button>
            <button className="cat-btn">Maroc & Maghreb </button>
            <button className="cat-btn">Monde Arabe </button>
            <button className="cat-btn">Europe </button>
            <button className="cat-btn">Sports </button>
            <button className="cat-btn">Cinéma </button>
            <button className="cat-btn">News </button>
          </div>
        </div>

        <div className="channels-flags">
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            Maroc
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            Arabie Saoudite
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            Émirats
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            France
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            Royaume-Uni
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            Allemagne
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            Espagne
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            Italie
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            Turquie
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            USA
          </div>
          <div className="flag-badge">
            <span style={{fontSize: '14px'}}> </span>
            Brésil
          </div>
          <div className="flag-badge">+ 150 Pays</div>
        </div>

        <div className="channels-categories">
          <div className="category-section">
            <h3 className="category-title">Chaînes Sportives</h3>
            <div className="channel-grid">
              <div className="channel-card">
                <img src="/images/bein.png.png" alt="beIN Sports" className="channel-thumb" />
                <div className="channel-info">
                  <div className="channel-name">beIN Sports</div>
                  <div className="channel-desc">Football, Tennis, F1, NBA</div>
                </div>
              </div>
              <div className="channel-card">
                <img src="/images/espn.png.png" alt="ESPN" className="channel-thumb" />
                <div className="channel-info">
                  <div className="channel-name">ESPN</div>
                  <div className="channel-desc">Sports Américains</div>
                </div>
              </div>
              <div className="channel-card">
                <img src="/images/skysport.png.png" alt="Sky Sports" className="channel-thumb" />
                <div className="channel-info">
                  <div className="channel-name">Sky Sports</div>
                  <div className="channel-desc">Sports Britanniques</div>
                </div>
              </div>
            </div>
          </div>

          <div className="category-section">
            <h3 className="category-title">Chaînes Divertissement</h3>
            <div className="channel-grid">
              <div className="channel-card">
                <img src="/images/mbc.png.png" alt="MBC Drama" className="channel-thumb" />
                <div className="channel-info">
                  <div className="channel-name">MBC Drama</div>
                  <div className="channel-desc">Séries Arabes</div>
                </div>
              </div>
              <div className="channel-card">
                <img src="/images/netflix.png.png" alt="Netflix FR" className="channel-thumb" />
                <div className="channel-info">
                  <div className="channel-name">Netflix FR</div>
                  <div className="channel-desc">Films & Séries</div>
                </div>
              </div>
              <div className="channel-card">
                <img src="/images/fox.png.png" alt="Fox" className="channel-thumb" />
                <div className="channel-info">
                  <div className="channel-name">Fox</div>
                  <div className="channel-desc">Divertissement US</div>
                </div>
              </div>
            </div>
          </div>

          <div className="category-section">
            <h3 className="category-title">Chaînes Actualités</h3>
            <div className="channel-grid">
              <div className="channel-card">
                <img src="/images/aljazzera.png.png" alt="Al Jazeera" className="channel-thumb" />
                <div className="channel-info">
                  <div className="channel-name">Al Jazeera</div>
                  <div className="channel-desc">Actualités 24/7</div>
                </div>
              </div>
              <div className="channel-card">
                <img src="/images/tf1.png.png" alt="TF1" className="channel-thumb" />
                <div className="channel-info">
                  <div className="channel-name">TF1</div>
                  <div className="channel-desc">Chaîne Française</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="channels-count">
          <div className="count-item">
            <div className="n">32,000+</div>
            <div className="l">Chaînes Live</div>
          </div>
          <div className="count-item">
            <div className="n">160,000+</div>
            <div className="l">Films & VOD</div>
          </div>
          <div className="count-item">
            <div className="n">4K</div>
            <div className="l">Qualité Max</div>
          </div>
          <div className="count-item">
            <div className="n">150+</div>
            <div className="l">Pays Couverts</div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="pricing-header">
          <p className="section-label">Abonnements</p>
          <h2 className="section-title">TARIFS SIMPLES<br/>& TRANSPARENTS</h2>
        </div>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-duration">1 Mois</div>
            <div className="price-amount">¤9.99</div>
            <div className="price-period">/ mois</div>
            <ul className="price-features">
              <li>32 000+ Chaînes Live</li>
              <li>160 000+ Films & VOD</li>
              <li>Qualité HD & 4K</li>
              <li>Support 24/7</li>
            </ul>
            <a href="#" className="btn-outline">Commander</a>
          </div>
          <div className="price-card featured">
            <div className="price-badge"> Meilleure Offre</div>
            <div className="price-duration">12 Mois</div>
            <div className="price-amount">¤39.99</div>
            <div className="price-period">/ an · économisez 50%</div>
            <ul className="price-features">
              <li>32 000+ Chaînes Live</li>
              <li>160 000+ Films & VOD</li>
              <li>Qualité HD & 4K</li>
              <li>2 Connexions simultanées</li>
              <li>Support 24/7 Prioritaire</li>
            </ul>
            <a href="#" className="btn-primary">Commander</a>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="devices">
        <div className="devices-wrapper">
          <div>
            <p className="section-label">Compatibilité</p>
            <h2 className="section-title">TOUS VOS<br/>APPAREILS</h2>
            <p className="section-desc" style={{marginBottom:'40px'}}>
              EZTV fonctionne sur l'ensemble de vos appareils connectés. 
              Une seule souscription, une liberté totale.
            </p>
            <a href="#pricing" className="btn-primary">Commencer Maintenant</a>
          </div>
          
          <div className="devices-grid">
            <div className="device-card">
              <span className="device-icon">
                <img src="/images/smart.png.png" alt="Smart TV" />
              </span>
              <p>Smart TV</p>
            </div>
            <div className="device-card">
              <span className="device-icon">
                <img src="/images/andrios.png.png" alt="Android & iOS" />
              </span>
              <p>Android & iOS</p>
            </div>
            <div className="device-card">
              <span className="device-icon">
                <img src="/images/winmac.png.png" alt="PC & Mac" />
              </span>
              <p>PC & Mac</p>
            </div>
            <div className="device-card">
              <span className="device-icon">
                <img src="/images/fire.png.png" alt="Fire Stick" />
              </span>
              <p>Fire Stick</p>
            </div>
            <div className="device-card">
              <span className="device-icon">
                <img src="/images/console.png.png" alt="Consoles" />
              </span>
              <p>Consoles</p>
            </div>
            <div className="device-card">
              <span className="device-icon">
                <img src="/images/mag.png.png" alt="MAG Box" />
              </span>
              <p>MAG Box</p>
            </div>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="payment-methods">
        <div className="payment-header">
          <p className="section-label">Paiement</p>
          <h2 className="section-title">MÉTHODES DE<br/>PAIEMENT</h2>
          <p className="section-desc">
            Nous acceptons toutes les méthodes de paiement sécurisées pour votre commodité.
          </p>
        </div>
        
        <div className="payment-grid">
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/crypto.png" alt="Crypto" />
            </div>
            <h3 className="payment-title">Crypto</h3>
            <p className="payment-desc">Bitcoin, Ethereum, USDT, Litecoin</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/paypal.png" alt="PayPal" />
            </div>
            <h3 className="payment-title">PayPal</h3>
            <p className="payment-desc">Paiement en ligne sécurisé</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/wise.png" alt="Wise" />
            </div>
            <h3 className="payment-title">Wise</h3>
            <p className="payment-desc">Transferts internationaux</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/bank.png" alt="Bank Transfer" />
            </div>
            <h3 className="payment-title">Bank Transfer</h3>
            <p className="payment-desc">Virement bancaire direct</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/skrill.png" alt="Skrill" />
            </div>
            <h3 className="payment-title">Skrill</h3>
            <p className="payment-desc">Portefeuille électronique</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/western.png" alt="Western Union" />
            </div>
            <h3 className="payment-title">Western Union</h3>
            <p className="payment-desc">Transfert d'argent mondial</p>
          </div>
        </div>
        
        <div className="payment-security">
          <div className="security-icon"></div>
          <div className="security-info">
            <h3 className="security-title">100% Sécurisé</h3>
            <p className="security-desc">
              Toutes les transactions sont cryptées et protégées. 
              Votre sécurité est notre priorité absolue.
            </p>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="testimonials">
        <p className="section-label">Avis Clients</p>
        <h2 className="section-title">ILS NOUS<br/>FONT CONFIANCE</h2>
        
        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-stars">?????</div>
            <p className="testi-text">
              "Franchement le meilleur service IPTV que j'ai utilisé. Qualité impeccable, zéro coupure et les chaînes marocaines sont toutes là. Je recommande à 100%."
            </p>
            <div className="testi-author">
              <div className="testi-avatar">K</div>
              <div>
                <div className="testi-name">Karim B.</div>
                <div className="testi-loc">Casablanca, Maroc</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">?????</div>
            <p className="testi-text">
              "J'utilise EZTV depuis 8 mois. Les matchs de foot en 4K c'est une autre dimension ! Le support répond rapidement et l'activation est instantanée."
            </p>
            <div className="testi-author">
              <div className="testi-avatar">S</div>
              <div>
                <div className="testi-name">Samir L.</div>
                <div className="testi-loc">Lyon, France</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">?????</div>
            <p className="testi-text">
              "Parfait pour toute la famille. Les enfants ont leurs chaînes, mon mari suit les sports, moi les séries turques. Tout fonctionne parfaitement sur notre TV."
            </p>
            <div className="testi-author">
              <div className="testi-avatar">F</div>
              <div>
                <div className="testi-name">Fatima R.</div>
                <div className="testi-loc">Tanger, Maroc</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="faq">
        <div className="faq-wrapper">
          <div>
            <p className="section-label">Questions fréquentes</p>
            <h2 className="section-title">VOUS AVEZ<br/>DES QUESTIONS ?</h2>
            <p className="section-desc" style={{marginBottom:'32px'}}>
              Tout ce que vous devez savoir avant de vous abonner. 
              Vous ne trouvez pas votre réponse ? Contactez notre support 24/7.
            </p>
            <a href="#" className="btn-primary">Contacter le Support</a>
          </div>
          
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-q">Qu'est-ce que l'IPTV ?</div>
              <div className="faq-a">
                L'IPTV (Internet Protocol Television) est un service qui permet de diffuser des contenus télévisés via Internet. Contrairement aux abonnements câble ou satellite, vous accédez aux chaînes directement depuis votre connexion internet.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Comment activer mon abonnement ?</div>
              <div className="faq-a">
                Après votre paiement, vous recevez vos identifiants par email en quelques minutes. Vous pouvez ensuite les saisir dans votre application IPTV préférée (IPTV Smarters, TiviMate, etc.) et commencer à regarder immédiatement.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Sur combien d'appareils puis-je utiliser mon abonnement ?</div>
              <div className="faq-a">
                Les abonnements 1, 3 et 6 mois incluent 1 connexion simultanée. L'abonnement annuel inclut 2 connexions simultanées. Vous pouvez installer l'application sur autant d'appareils que vous voulez, mais seule la connexion simultanée est limitée.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Quelle connexion internet est recommandée ?</div>
              <div className="faq-a">
                Pour une qualité HD, une connexion de 10 Mbps est suffisante. Pour la 4K, nous recommandons 25 Mbps ou plus. Plus votre connexion est stable, meilleure sera votre expérience de streaming.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">L'essai gratuit est-il vraiment sans engagement ?</div>
              <div className="faq-a">
                Oui, totalement. L'essai de 24 heures vous donne accès complet à toutes nos chaînes et notre catalogue VOD. Aucune carte de crédit n'est requise. Vous décidez librement de vous abonner ensuite.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Quels modes de paiement acceptez-vous ?</div>
              <div className="faq-a">
                Nous acceptons PayPal, virement bancaire, crypto-monnaies (Bitcoin, USDT), Western Union et CashPlus. Tous les paiements sont sécurisés et traités instantanément.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>PRÊT À COMMENCER ?</h2>
        <p>
          Essayez EZTV gratuitement pendant 24 heures. 
          Aucune carte de crédit requise.
        </p>
        <a href="#pricing" className="btn-white">Essai Gratuit Maintenant</a>
      </div>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">EZ<em>TV</em></div>
            <p>
              Le service IPTV premium pour tous ceux qui veulent profiter du meilleur 
              contenu mondial sans compromis sur la qualité.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Service</h4>
            <ul>
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#channels">Chaînes</a></li>
              <li><a href="#pricing">Tarifs</a></li>
              <li><a href="#devices">Appareils</a></li>
              <li><a href="#pricing">Essai Gratuit</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Centre d'aide</a></li>
              <li><a href="#">Installation</a></li>
              <li><a href="#">Tutoriels</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@eztv.tv">support@eztv.tv</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Telegram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p> 2025 <span>EZTV</span>. Tous droits réservés.</p>
          <p>
            <a href="#" style={{color:'#888', textDecoration:'none', marginRight:'24px'}}>Confidentialité</a>
            <a href="#" style={{color:'#888', textDecoration:'none'}}>Conditions d'utilisation</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
