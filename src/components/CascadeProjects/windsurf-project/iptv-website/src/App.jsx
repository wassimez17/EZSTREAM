import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { translations } from './translations.js';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [selectedDeviceCount, setSelectedDeviceCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('international');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const languages = {
    fr: { flag: '/images/flags/frflag.png', code: 'FR', name: 'Français' },
    en: { flag: '/images/flags/engflag.png', code: 'EN', name: 'English' },
    ar: { flag: '/images/flags/arflag.png', code: 'AR', name: 'Arabe' },
    de: { flag: '/images/flags/gerflag.png', code: 'DE', name: 'Deutsch' },
    es: { flag: '/images/flags/espflag.png', code: 'ES', name: 'Español' }
  };

  const t = translations[currentLanguage];

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date('2026-06-11T00:00:00').getTime(); // World Cup start date
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      console.log('Countdown difference:', difference);
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        console.log('Time calculated:', { days, hours, minutes, seconds });
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Dynamic pricing based on device count
  const getPricingTiers = () => {
    const basePricing = {
      1: { month: 9.99, quarter: 24.99, semester: 44.99, year: 79.99 },
      2: { month: 14.99, quarter: 34.99, semester: 64.99, year: 119.99 },
      3: { month: 19.99, quarter: 44.99, semester: 84.99, year: 159.99 }
    };
    return basePricing[selectedDeviceCount] || basePricing[1];
  };

  const pricingTiers = getPricingTiers();

  // Channel data structure
  const channelsData = {
    international: [
      { name: "RT", desc: "Russia Today", image: "/images/channels/rt.png.png" },
      { name: "Al Jazeera", desc: "Global News Network", image: "/images/channels/aljazeera.png.png" },
      { name: "France 24", desc: "French International News", image: "/images/channels/france24.png.png" },
      { name: "BBC World", desc: "International News", image: "/images/channels/bbc.png.png" },
      { name: "CNN", desc: "News & Current Affairs", image: "/images/channels/cnn.png.png" }
    ],
    kids: [
      { name: "Disney Channel", desc: "Family Entertainment", image: "/images/channels/disney.png.png" },
      { name: "Nickelodeon", desc: "Kids Programming", image: "/images/channels/nickelodeon.png.png" },
      { name: "Boomerang", desc: "Classic Cartoons", image: "/images/channels/boomerang.png.png" },
      { name: "Discovery", desc: "Educational Content", image: "/images/channels/discovery.png.png" }
    ],
    music: [
      { name: "MTV", desc: "Music Videos", image: "/images/channels/mtv.png.png" },
      { name: "VH1", desc: "Music Entertainment", image: "/images/channels/vh1.png.png" },
      { name: "Music TV", desc: "24/7 Music", image: "/images/channels/musictv.png.png" },
      { name: "Trace TV", desc: "Urban Music", image: "/images/channels/trace.png.png" },
      { name: "MCM", desc: "French Music Channel", image: "/images/channels/mcm.png.png" }
    ],
    euroNews: [
      { name: "Euronews", desc: "European News", image: "/images/channels/euronews.png.png" },
      { name: "BBC News", desc: "UK News Channel", image: "/images/channels/bbcnews.png.png" },
      { name: "Sky News", desc: "British News", image: "/images/channels/skynews.png.png" },
      { name: "Deutsche Welle", desc: "German News", image: "/images/channels/dw.png.png" },
      { name: "France Info", desc: "French News", image: "/images/channels/franceinfo.png.png" }
    ],
    euroEntertainment: [
      { name: "TF1", desc: "French Entertainment", image: "/images/channels/tf1.png.png" },
      { name: "ARTE", desc: "European Culture", image: "/images/channels/arte.png.png" },
      { name: "Channel 4", desc: "UK Entertainment", image: "/images/channels/channel4.png.png" },
      { name: "RAI", desc: "Italian TV", image: "/images/channels/rai.png.png" }
    ],
    euroSports: [
      { name: "Eurosport", desc: "European Sports", image: "/images/channels/eurosport.png.png" },
      { name: "Sky Sports", desc: "UK Sports", image: "/images/channels/skysport.png.png" },
      { name: "Premier League", desc: "Football Channel", image: "/images/channels/premierl.png.png" },
      { name: "La Liga TV", desc: "Spanish Football", image: "/images/channels/laliga.png.png" },
      { name: "Formula 1", desc: "Racing Channel", image: "/images/channels/f1.png.png" }
    ]
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

  const toggleFAQ = (index) => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems[index].classList.toggle('active');
  };

  const selectDeviceCount = (count, event) => {
    // Update state
    setSelectedDeviceCount(count);
    
    // Remove active class from all options
    const options = document.querySelectorAll('.device-option');
    options.forEach(option => option.classList.remove('active'));
    
    // Add active class to selected option
    if (event && event.currentTarget) {
      event.currentTarget.classList.add('active');
    }
    
    // Update selected count display
    const selectedCount = document.getElementById('selected-device-count');
    if (selectedCount) {
      selectedCount.textContent = count;
    }
    
    // Auto-scroll to first pricing card after selection
    setTimeout(() => {
      const firstPricingCard = document.querySelector('.pricing-packs-grid .pricing-card');
      if (firstPricingCard) {
        firstPricingCard.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 300);
  };

  const selectCategory = (category, event) => {
    setSelectedCategory(category);
    
    // Remove active class from all category buttons
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(button => button.classList.remove('active'));
    
    // Add active class to clicked button
    if (event && event.currentTarget) {
      event.currentTarget.classList.add('active');
    }
  };


  return (
    <div className={`App ${currentLanguage === 'ar' ? 'rtl' : ''}`}>
      {/* Desktop Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#hero" className="nav-logo">
            <img src="/images/logo.png" alt="EZSTREAM" />
          </a>
          
          <div className="nav-links">
            <a href="#hero" className="nav-link">Accueil</a>
            <a href="#pricing" className="nav-link">Tarifs</a>
            <a href="#devices" className="nav-link">Appareils</a>
            <a href="#payment-methods" className="nav-link">Paiements</a>
          </div>

          <div className="nav-right">
            <div className="language-selector">
              <button 
                className="language-button"
                onClick={toggleLanguageDropdown}
              >
                <img 
                  src={languages[currentLanguage].flag}
                  alt={`${languages[currentLanguage].name} flag`}
                  className="language-flag"
                />
                <span>{languages[currentLanguage].code}</span>
              </button>
              {isLanguageDropdownOpen && (
                <div className="language-dropdown">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      className={`language-option ${currentLanguage === code ? 'active' : ''}`}
                      onClick={() => changeLanguage(code)}
                    >
                      <img src={lang.flag} alt={`${lang.name} flag`} className="language-flag" />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="https://wa.me/212629415085?text=Bonjour%20je%20souhaite%20commencer%20mon%20essai%20gratuit%20EZSTREAM%20pour%2024%20heures" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-cta nav-cta-prominent"
            >
              ESSAI GRATUIT
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <div className="mobile-nav-container">
          <a href="#hero" className="mobile-nav-logo">
            <img src="/images/logo.png" alt="EZSTREAM" />
          </a>
          
          <a 
            href="https://wa.me/212629415085?text=Bonjour%20je%20souhaite%20commencer%20mon%20essai%20gratuit%20EZSTREAM%20pour%2024%20heures" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-nav-cta"
          >
            ESSAI GRATUIT
          </a>
        </div>
      </div>

      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="live-dot"></span>
            {t.hero.badge}
          </div>
          <h1>
            {t.hero.title}
            <span className="line2">{t.hero.title2},</span>
            {t.hero.title3}
          </h1>
          <p className="hero-sub">{t.hero.subtitle}</p>
          <p className="hero-desc">
            {t.hero.description}
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/212629415085?text=Bonjour%20je%20souhaite%20commencer%20mon%20essai%20gratuit%20EZSTREAM%20pour%2024%20heures" target="_blank" rel="noopener noreferrer" className="btn-primary btn-hero-main">{t.hero.freeTrial}</a>
            <a href="#pricing" className="btn-outline btn-hero-outline">{t.hero.seePricing}</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5l2 3 1.5-1.5L14 19h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="num">40,000+</div>
                <div className="lbl">Chaînes live</div>
              </div>
            </div>
            <div className="hero-stat">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="num">200,000+</div>
                <div className="lbl">Films & séries</div>
              </div>
            </div>
            <div className="hero-stat">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="num">100+</div>
                <div className="lbl">Pays</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="premium-experience">
        <div className="premium-content">
          <div className="premium-header">
            <p className="section-label">EXPÉRIENCE PREMIUM</p>
            <h2 className="section-title">Streaming de<br/>haute qualité</h2>
            <p className="section-desc">
              Découvrez l'expérience IPTV ultime avec des milliers de chaînes HD, 
              films et séries à la demande. Compatible avec tous vos appareils.
            </p>
          </div>
          
          <div className="premium-layout">
            <div className="tv-side">
              <div className="tv-container">
                <iframe
                  src="https://www.youtube.com/embed/teNh0Hv7P1c?autoplay=1&mute=1&loop=1&playlist=teNh0Hv7P1c&controls=0&showinfo=0&rel=0&iv_load_policy=3"
                  className="tv-video"
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="EZSTREAM Premium Streaming"
                />
                <div className="live-indicator">
                  <div className="live-dot"></div>
                  <div className="live-text">LIVE</div>
                </div>
              </div>
            </div>
            
            <div className="icons-side">
              <div className="premium-icon-text">
                <div className="premium-icon-small">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5l2 3 1.5-1.5L14 19h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
                  </svg>
                </div>
                <div className="premium-text">
                  <h3>32K+ Chaînes</h3>
                  <p>Chaînes du monde entier en HD et 4K</p>
                </div>
              </div>
              
              <div className="premium-icon-text">
                <div className="premium-icon-small">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                  </svg>
                </div>
                <div className="premium-text">
                  <h3>160K+ Films</h3>
                  <p>Bibliothèque VOD illimitée à jour</p>
                </div>
              </div>
              
              <div className="premium-icon-text">
                <div className="premium-icon-small">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-.99zM17 19H7V5h10v14z"/>
                  </svg>
                </div>
                <div className="premium-text">
                  <h3>Multi-Appareils</h3>
                  <p>Jusqu'à 5 appareils simultanément</p>
                </div>
              </div>
              
              <div className="premium-icon-text">
                <div className="premium-icon-small">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="premium-text">
                  <h3>Support 24/7</h3>
                  <p>Assistance technique disponible en permanence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="premium-cta">
            <h3>Commencez votre essai gratuit</h3>
            <p>24 heures d'accès complet sans engagement</p>
            <a href="#pricing" className="btn-primary btn-large">ESSAI GRATUIT</a>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="pricing">
        <div className="pricing-header">
          <p className="section-label">Tarifs</p>
          <h2 className="section-title">{t.pricing?.title || 'Nos Tarifs'}<br/>{t.pricing?.title2 || 'Choisissez votre abonnement'}</h2>
          <p className="section-desc">
            {t.pricing?.description || 'Découvrez nos offres adaptées à tous les besoins'}
          </p>
          <div className="device-selector">
            <label>Choisissez votre pack</label>
            <div className="device-cards">
              <div className={`device-card-option ${selectedDeviceCount === 1 ? 'active' : ''}`} onClick={() => setSelectedDeviceCount(1)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Silver</span>
                <small>- Pack individuel</small>
                <small>- accessible pour 1 appareil</small>
              </div>
              <div className={`device-card-option ${selectedDeviceCount === 2 ? 'active' : ''}`} onClick={() => setSelectedDeviceCount(2)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-6.91-1.01L12 2 9.09 8.23 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span>Gold</span>
                <small>- Pack couple ou petites familles</small>
                <small>- accessible pour 2 appareils</small>
              </div>
              <div className={`device-card-option ${selectedDeviceCount === 3 ? 'active' : ''}`} onClick={() => setSelectedDeviceCount(3)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4zm-5 0v14h4V5H9z"/>
                </svg>
                <span>Diamond</span>
                <small>- Pack premium familial</small>
                <small>- accesible pour 3 appareils ou plus</small>
              </div>
            </div>
          </div>
        </div>
        
        {/* 4 PACKS - Same Row */}
        <div className="pricing-packs-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>1 MOIS</h3>
              <div className="price">{pricingTiers.month}<span>/mois</span></div>
            </div>
            <ul className="pricing-features">
              <li>Accès complet</li>
              <li>32K+ chaînes</li>
              <li>160K+ films</li>
              <li>Multi-appareils</li>
              <li>Support 24/7</li>
            </ul>
            <a href={`https://wa.me/212629415085?text=Bonjour%20je%20souhaite%20souscrire%20%C3%A0%20l'abonnement%201%20mois%20EZSTREAM%20pour%20${selectedDeviceCount}%20appareil(s)`} target="_blank" rel="noopener noreferrer" className="btn-primary">S'abonner</a>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>3 MOIS</h3>
              <div className="price">{pricingTiers.quarter}<span>/trimestre</span></div>
              <div className="savings">Économisez {Math.round((1 - (pricingTiers.quarter / (pricingTiers.month * 3))) * 100)}%</div>
            </div>
            <ul className="pricing-features">
              <li>Accès complet</li>
              <li>32K+ chaînes</li>
              <li>160K+ films</li>
              <li>Multi-appareils</li>
              <li>Support 24/7</li>
            </ul>
            <a href={`https://wa.me/212629415085?text=Bonjour%20je%20souhaite%20souscrire%20%C3%A0%20l'abonnement%203%20mois%20EZSTREAM%20pour%20${selectedDeviceCount}%20appareil(s)`} target="_blank" rel="noopener noreferrer" className="btn-primary">S'abonner</a>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>6 MOIS</h3>
              <div className="price">{pricingTiers.semester}<span>/semestre</span></div>
              <div className="savings">Économisez {Math.round((1 - (pricingTiers.semester / (pricingTiers.month * 6))) * 100)}%</div>
            </div>
            <ul className="pricing-features">
              <li>Accès complet</li>
              <li>32K+ chaînes</li>
              <li>160K+ films</li>
              <li>Multi-appareils</li>
              <li>Support 24/7</li>
            </ul>
            <a href={`https://wa.me/212629415085?text=Bonjour%20je%20souhaite%20souscrire%20%C3%A0%20l'abonnement%206%20mois%20EZSTREAM%20pour%20${selectedDeviceCount}%20appareil(s)`} target="_blank" rel="noopener noreferrer" className="btn-primary">S'abonner</a>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>12 MOIS</h3>
              <div className="price">{pricingTiers.year}<span>/an</span></div>
              <div className="savings">Économisez {Math.round((1 - (pricingTiers.year / (pricingTiers.month * 12))) * 100)}%</div>
            </div>
            <ul className="pricing-features">
              <li>Accès complet</li>
              <li>32K+ chaînes</li>
              <li>160K+ films</li>
              <li>Multi-appareils</li>
              <li>Support 24/7</li>
              <li>Meilleur prix</li>
            </ul>
            <a href={`https://wa.me/212629415085?text=Bonjour%20je%20souhaite%20souscrire%20%C3%A0%20l'abonnement%2012%20mois%20EZSTREAM%20pour%20${selectedDeviceCount}%20appareil(s)`} target="_blank" rel="noopener noreferrer" className="btn-primary">S'abonner</a>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="worldcup-offer" className="worldcup-section">
        <div className="worldcup-content">
          <div className="worldcup-header">
            <p className="section-label">OFFRE SPÉCIALE</p>
            <h2 className="section-title">COUPE DU MONDE<br/>EXCLUSIVE</h2>
            <p className="section-desc">
              Vivez toutes les émotions de la Coupe du Monde avec notre offre spéciale !<br/>
              Accès complet à tous les matchs en direct et en streaming HD.
            </p>
          </div>
          
          <div className="worldcup-timer">
            <div className="timer-label">COMMENCE DANS</div>
            <div className="timer-display">
              <span className="time-unit">
                <span className="time-value">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="time-label">JOURS</span>
              </span>
              <span className="time-separator">:</span>
              <span className="time-unit">
                <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="time-label">HEURES</span>
              </span>
              <span className="time-separator">:</span>
              <span className="time-unit">
                <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="time-label">MIN</span>
              </span>
              <span className="time-separator">:</span>
              <span className="time-unit">
                <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="time-label">SEC</span>
              </span>
            </div>
          </div>
          
          <div className="worldcup-tv-container">
            <div className="worldcup-tv-frame">
              <video autoPlay muted loop className="worldcup-tv-video">
                <source src="/images/videos/fifa.mp4" type="video/mp4" />
              </video>
              <div className="tv-screen-border"></div>
              <div className="tv-stand"></div>
            </div>
          </div>
          
          <div className="worldcup-features-icons">
            <div className="feature-icon">
              <div className="icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span>Tous les matchs</span>
            </div>
            <div className="feature-icon">
              <div className="icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z"/>
                </svg>
              </div>
              <span>Qualité HD/4K</span>
            </div>
            <div className="feature-icon">
              <div className="icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span>Multi-appareils</span>
            </div>
            <div className="feature-icon">
              <div className="icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <span>Support 24/7</span>
            </div>
          </div>
          
          <div className="worldcup-offer-btn">
            <a href="https://wa.me/212629415085?text=Bonjour%20je%20souhaite%20profiter%20de%20l'offre%20sp%C3%A9ciale%20Coupe%20du%20Monde%20%C3%A0%2020%E2%82%AC%20EZSTREAM" target="_blank" rel="noopener noreferrer" className="btn-primary worldcup-btn">
              PROFITER DE L'OFFRE POUR JUSTE 20€
            </a>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      
      <section id="devices">
        <div className="devices-wrapper">
          <div className="devices-content">
            <div className="devices-header">
              <p className="section-label">TOUS VOS APPAREILS</p>
              <h2 className="section-title">Compatible avec<br/>tous les appareils</h2>
              <p className="section-desc">
                EZSTREAM fonctionne parfaitement sur tous vos appareils préférés. Aucune carte nécessaire, 
                installation instantanée et streaming HD garanti.
              </p>
            </div>
            
            <div className="devices-grid">
              <div className="device-card">
                <div className="device-icon">
                  <div className="device-icon-inner">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5l-1 2h10l-1-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v10z"/>
                    </svg>
                  </div>
                </div>
                <h3>Smart TV</h3>
                <p>Samsung, LG, Sony, Philips et plus</p>
              </div>
              
              <div className="device-card">
                <div className="device-icon">
                  <div className="device-icon-inner">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.51 5.67c-.19-.29-.54-.38-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C4.62 11.08 3.5 13.62 3.5 16.5h17c0-2.88-1.12-5.42-2.9-7.02zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
                    </svg>
                  </div>
                </div>
                <h3>Android</h3>
                <p>Smartphones, tablettes Android</p>
              </div>
              
              <div className="device-card">
                <div className="device-icon">
                  <div className="device-icon-inner">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                </div>
                <h3>iOS</h3>
                <p>iPhone, iPad, Apple TV</p>
              </div>
              
              <div className="device-card">
                <div className="device-icon">
                  <div className="device-icon-inner">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                    </svg>
                  </div>
                </div>
                <h3>PC & Mac</h3>
                <p>Windows, macOS, Linux</p>
              </div>
              
              <div className="device-card">
                <div className="device-icon">
                  <div className="device-icon-inner">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <h3>Fire TV</h3>
                <p>Fire Stick, Fire TV Cube</p>
              </div>
              
              <div className="device-card">
                <div className="device-icon">
                  <div className="device-icon-inner">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                    </svg>
                  </div>
                </div>
                <h3>Mag Box</h3>
                <p>MAG 250, MAG 322, MAG 424</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="payment-methods">
        <div className="payment-header">
          <p className="section-label">MÉTHODES DE PAIEMENT</p>
          <h2 className="section-title">{t.payment.title}<br/>{t.payment.title2}</h2>
          <p className="section-desc">
            {t.payment.description}
          </p>
        </div>
        
        <div className="payment-grid">
          {/* First row - 3 cards */}
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/bank.png" alt="Bank Transfert" width="48" height="48" />
            </div>
            <h3 className="payment-title">Bank Transfert</h3>
            <p className="payment-desc">Visa, Mastercard, Maestro</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/crypto.png" alt="Crypto" width="48" height="48" />
            </div>
            <h3 className="payment-title">Crypto</h3>
            <p className="payment-desc">Bitcoin, Ethereum, USDT, Litecoin</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/paypal.png" alt="PayPal" width="48" height="48" />
            </div>
            <h3 className="payment-title">PayPal</h3>
            <p className="payment-desc">Paiement en ligne sécurisé</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/western.png" alt="Western Union" width="48" height="48" />
            </div>
            <h3 className="payment-title">Western Union</h3>
            <p className="payment-desc">Transferts mondiaux</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/wise.png" alt="Wise" width="48" height="48" />
            </div>
            <h3 className="payment-title">Wise</h3>
            <p className="payment-desc">Transferts internationaux</p>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <img src="/images/skrill.png" alt="Skrill" width="48" height="48" />
            </div>
            <h3 className="payment-title">Skrill</h3>
            <p className="payment-desc">Paiement en ligne sécurisé</p>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="feedback">
        <div className="feedback-header">
          <p className="section-label">TÉMOIGNAGES</p>
          <h2 className="section-title">Ce que nos clients<br/>disent de nous</h2>
          <p className="section-desc">
            Découvrez les expériences de nos abonnés satisfaits
          </p>
        </div>
        
        <div className="feedback-grid">
          <div className="feedback-card">
            <div className="feedback-stars">
              <span>*****</span>
            </div>
            <p className="feedback-text">
              "Service IPTV exceptionnel ! Qualité HD parfaite et des milliers de chaînes. Je recommande vivement !"
            </p>
            <div className="feedback-author">
              <div className="author-avatar">M</div>
              <div className="author-info">
                <h4>Mohammed K.</h4>
                <p>Abonné depuis 6 mois</p>
              </div>
            </div>
          </div>
          
          <div className="feedback-card">
            <div className="feedback-stars">
              <span>*****</span>
            </div>
            <p className="feedback-text">
              "Support client très réactif et installation facile. Le meilleur service IPTV que j'ai testé."
            </p>
            <div className="feedback-author">
              <div className="author-avatar">S</div>
              <div className="author-info">
                <h4>Sophie L.</h4>
                <p>Abonnée depuis 1 an</p>
              </div>
            </div>
          </div>
          
          <div className="feedback-card">
            <div className="feedback-stars">
              <span>*****</span>
            </div>
            <p className="feedback-text">
              "Excellent rapport qualité-prix. Compatible avec tous mes appareils et streaming sans coupure."
            </p>
            <div className="feedback-author">
              <div className="author-avatar">A</div>
              <div className="author-info">
                <h4>Ahmed B.</h4>
                <p>Abonné depuis 3 mois</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="how-it-works">
        <div className="steps-header">
          <p className="section-label">COMMENT ÇA MARCHE</p>
          <h2 className="section-title">Commencez en<br/>3 étapes simples</h2>
          <p className="section-desc">
            Profitez de votre IPTV en quelques minutes seulement
          </p>
        </div>
        
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Envoyer message via WhatsApp</h3>
              <p className="step-desc">Contactez-nous pour votre essai gratuit</p>
            </div>
          </div>
          
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Choisissez votre appareil/pack</h3>
              <p className="step-desc">Sélectionnez l'abonnement qui vous convient</p>
            </div>
          </div>
          
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Profiter du direct</h3>
              <p className="step-desc">Accès instantané à toutes les chaînes</p>
            </div>
          </div>
        </div>
        
        <div className="steps-cta">
          <a href="https://wa.me/212629415085" target="_blank" rel="noopener noreferrer" className="btn-primary steps-btn">
            Commencer maintenant
          </a>
        </div>
      </section>

      <div className="red-stripe"></div>

      <section id="faq">
        <div className="faq-header">
          <p className="section-label">QUESTIONS FRÉQUENTES</p>
          <h2 className="section-title">FAQ - Questions<br/>courantes</h2>
          <p className="section-desc">
            Réponses aux questions les plus posées sur notre service IPTV
          </p>
        </div>
        
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(0)}>
              <h4>Comment fonctionne l'essai gratuit de 24h ?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Contactez-nous via WhatsApp pour recevoir votre accès gratuit de 24 heures. Aucune carte bancaire requise.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(1)}>
              <h4>Sur quels appareils puis-je utiliser EZSTREAM ?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>EZSTREAM est compatible avec Smart TV, Android TV, Fire Stick, iOS, Android, Windows et Mac.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(2)}>
              <h4>Quelle est la qualité des chaînes ?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Nous offrons des chaînes en HD et 4K avec une qualité de streaming stable et sans coupure.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(3)}>
              <h4>Comment puis-je payer mon abonnement ?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Nous acceptons PayPal, cartes bancaires, virements bancaires, Skrill, Wise et Western Union.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(4)}>
              <h4>Puis-je utiliser plusieurs appareils simultanément ?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Oui, selon votre formule vous pouvez utiliser jusqu'à 5 appareils simultanément.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Buttons */}
      <div className="contact-buttons">
        <a href="mailto:support.eztv@gmail.com" className="contact-btn email-btn" title="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
        <a href="https://wa.me/212629415085?text=Bonjour%20je%20souhaite%20plus%20d'informations%20sur%20EZSTREAM" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp-btn" title="WhatsApp">
          <img src="https://img.icons8.com/ios_filled/512/FFFFFF/whatsapp--v4.png" alt="WhatsApp" width="20" height="20" />
        </a>
        <a href="https://t.me/ezstream_support" target="_blank" rel="noopener noreferrer" className="contact-btn telegram-btn" title="Telegram">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png" alt="Telegram" width="20" height="20" />
        </a>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-sections">
            <div className="footer-section">
              <div className="footer-logo">EZ<em>TV</em></div>
              <p className="footer-desc">
                La meilleure expérience IPTV avec des milliers de chaînes HD, films et séries à la demande.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com/ezstream" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/ezstream" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/ezstream" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Liens Rapides</h4>
              <ul className="footer-links">
                <li><a href="#pricing">Tarifs</a></li>
                <li><a href="#channels">Chaînes</a></li>
                <li><a href="#devices">Appareils</a></li>
                <li><a href="#payment">Paiement</a></li>
                <li><a href="#feedback">Feedback</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul className="footer-links">
                <li><a href="mailto:support.eztv@gmail.com">Email: support.eztv@gmail.com</a></li>
                <li><a href="https://wa.me/212629415085" target="_blank" rel="noopener noreferrer">WhatsApp: +212 629 415 085</a></li>
                <li><a href="https://t.me/ezstream_support" target="_blank" rel="noopener noreferrer">Telegram: @ezstream_support</a></li>
                <li><a href="#faq">Centre d'aide</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Légal</h4>
              <ul className="footer-links">
                <li><a href="#terms">Conditions d'utilisation</a></li>
                <li><a href="#privacy">Politique de confidentialité</a></li>
                <li><a href="#refund">Politique de remboursement</a></li>
                <li><a href="#terms">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>{t.footer.copyright}</p>
            <p className="footer-credits">
              Développé avec ❤️ par EZSTREAM Team | Tous droits réservés
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation Bar */}
      <div className="bottom-nav">
        <div className="bottom-nav-container">
          <div className="bottom-nav-item">
            <a href="#hero" className="bottom-nav-link">
              <div className="bottom-nav-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <span>Accueil</span>
            </a>
          </div>
          <div className="bottom-nav-item">
            <a href="#pricing" className="bottom-nav-link">
              <div className="bottom-nav-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.81.45 1.61 1.67 1.61 1.16 0 1.6-.64 1.6-1.46 0-.84-.68-1.22-1.88-1.54-1.85-.49-3.35-1.32-3.35-3.38 0-1.72 1.19-2.96 2.99-3.37V5h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.63-1.63-1.63-1.01 0-1.46.54-1.46 1.34 0 .84.68 1.22 1.88 1.54 1.85.49 3.35 1.32 3.35 3.38 0 1.83-1.19 3.13-3.03 3.52z"/>
                </svg>
              </div>
              <span>Tarifs</span>
            </a>
          </div>
          <div className="bottom-nav-item">
            <a href="#devices" className="bottom-nav-link">
              <div className="bottom-nav-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                </svg>
              </div>
              <span>Appareils</span>
            </a>
          </div>
          <div className="bottom-nav-item">
            <a href="#payment-methods" className="bottom-nav-link">
              <div className="bottom-nav-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <span>Paiement</span>
            </a>
          </div>
          <div className="bottom-nav-item bottom-nav-language">
            <div className="bottom-nav-link" onClick={(e) => { e.preventDefault(); toggleLanguageDropdown(); }}>
              <div className="bottom-nav-icon">
                <img 
                  src={languages[currentLanguage].flag}
                  alt={`${languages[currentLanguage].name} flag`}
                  className="bottom-nav-flag"
                />
              </div>
              <span>{languages[currentLanguage].code}</span>
            </div>
            {isLanguageDropdownOpen && (
              <div className="bottom-nav-dropdown">
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    className={`bottom-nav-lang-option ${currentLanguage === code ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); changeLanguage(code); }}
                  >
                    <img src={lang.flag} alt={`${lang.name} flag`} className="bottom-nav-flag" />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
