import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const languages = {
    fr: { flag: 'FR', code: 'FR', name: 'Français' },
    en: { flag: 'GB', code: 'EN', name: 'English' },
    ar: { flag: 'SA', code: 'AR', name: 'Arabe' },
    de: { flag: 'DE', code: 'DE', name: 'Deutsch' },
    es: { flag: 'ES', code: 'ES', name: 'Español' }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  // Convert country codes to emoji flags with fallback
  const getFlagEmoji = (countryCode) => {
    try {
      const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
      return String.fromCodePoint(...codePoints);
    } catch (error) {
      // Fallback to text code if emoji fails
      return countryCode;
    }
  };

  // Check if emoji flags are supported
  const [supportsEmojiFlags, setSupportsEmojiFlags] = useState(true);

  useEffect(() => {
    // Test emoji support by checking if a flag emoji renders correctly
    const testFlag = getFlagEmoji('FR');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '16px system-ui';
    const textWidth = ctx.measureText(testFlag).width;
    const expectedWidth = ctx.measureText('XX').width;
    
    // If the flag emoji renders as two separate characters, it's not supported
    if (textWidth <= expectedWidth * 1.5) {
      setSupportsEmojiFlags(false);
    }
  }, []);

  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <a href="#hero" className="nav-logo">
            <img src="/images/logo.png" alt="EZTV" />
          </a>
          
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#channels">Chaînes</a></li>
            <li><a href="#pricing">Tarifs</a></li>
            <li><a href="#devices">Appareils</a></li>
            <li><a href="#testimonials">Témoignages</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#payment-methods">Paiement</a></li>
          </ul>
          
          <a 
            href="https://wa.me/2123456789?text=Bonjour%20je%20souhaite%20commencer%20mon%20essai%20gratuit%20EZTV%20pour%2024%20heures" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-cta"
          >
            ESSAI GRATUIT
          </a>
          
          <div className="nav-menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? '×' : ' '}
          </div>
          
          <div className="language-selector">
            <button className="language-btn" onClick={toggleLanguageDropdown}>
              <span className={`flag-icon ${!supportsEmojiFlags ? 'text-flag' : ''}`}>
                {supportsEmojiFlags ? getFlagEmoji(languages[currentLanguage].flag) : languages[currentLanguage].flag}
              </span>
              <span>{languages[currentLanguage].code}</span>
            </button>
            
            <div className={`language-dropdown ${isLanguageDropdownOpen ? 'active' : ''}`}>
              {Object.entries(languages).map(([lang, { flag, code, name }]) => (
                <div 
                  key={lang}
                  className={`language-option ${currentLanguage === lang ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang)}
                >
                  <span className={`flag-icon ${!supportsEmojiFlags ? 'text-flag' : ''}`}>
                    {supportsEmojiFlags ? getFlagEmoji(flag) : flag}
                  </span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
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
            <img src="/images/bein.png" alt="beIN Sports" className="channel-thumb" />
            <div className="channel-info">
              <div className="channel-name">beIN Sports</div>
              <div className="channel-desc">Football, Tennis, F1, NBA</div>
            </div>
          </div>
          <div className="channel-card">
            <img src="/images/espn.png" alt="ESPN" className="channel-thumb" />
            <div className="channel-info">
              <div className="channel-name">ESPN</div>
              <div className="channel-desc">Sports Américains</div>
            </div>
          </div>
          <div className="channel-card">
            <img src="/images/netflix.png" alt="Netflix FR" className="channel-thumb" />
            <div className="channel-info">
              <div className="channel-name">Netflix FR</div>
              <div className="channel-desc">Films & Séries</div>
            </div>
          </div>
          <div className="channel-card">
            <img src="/images/skysport.png" alt="Sky Sports" className="channel-thumb" />
            <div className="channel-info">
              <div className="channel-name">Sky Sports</div>
              <div className="channel-desc">Sports Britanniques</div>
            </div>
          </div>
          <div className="channel-card">
            <img src="/images/mbc.png" alt="MBC Drama" className="channel-thumb" />
            <div className="channel-info">
              <div className="channel-name">MBC Drama</div>
              <div className="channel-desc">Séries Arabes</div>
            </div>
          </div>
          <div className="channel-card">
            <img src="/images/fox.png" alt="Fox" className="channel-thumb" />
            <div className="channel-info">
              <div className="channel-name">Fox</div>
              <div className="channel-desc">Divertissement US</div>
            </div>
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
