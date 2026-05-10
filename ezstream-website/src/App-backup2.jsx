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
            <img src="/images/netflix.png.png" alt="Netflix FR" className="channel-thumb" />
            <div className="channel-info">
              <div className="channel-name">Netflix FR</div>
              <div className="channel-desc">Films & Séries</div>
            </div>
          </div>
          <div className="channel-card">
            <img src="/images/skysport.png.png" alt="Sky Sports" className="channel-thumb" />
            <div className="channel-info">
              <div className="channel-name">Sky Sports</div>
              <div className="channel-desc">Sports Britanniques</div>
            </div>
          </div>
          <div className="channel-card">
            <img src="/images/mbc.png.png" alt="MBC Drama" className="channel-thumb" />
            <div className="channel-info">
              <div className="channel-name">MBC Drama</div>
              <div className="channel-desc">Séries Arabes</div>
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
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">EZ<em>TV</em></div>
          <p>© 2025 EZTV. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
