import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// ===== COMPOSANTS SVG =====
const AnimatedOlive = () => (
  <motion.svg 
    width="30" 
    height="30" 
    viewBox="0 0 24 24" 
    fill="none"
    className="navbar-olive"
  >
    <motion.path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, rotate: -180 }}
      animate={{ 
        pathLength: 1, 
        rotate: 0,
        transition: { 
          duration: 2, 
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 3
        }
      }}
    />
    <motion.path
      d="M8 12H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ scaleX: 0 }}
      animate={{ 
        scaleX: 1,
        transition: { 
          duration: 1, 
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 4
        }
      }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="2"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0, 1, 0.8, 1],
        transition: { 
          duration: 2,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 3
        }
      }}
    />
  </motion.svg>
);

const CartIcon = ({ isHovered }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <motion.path
      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.4 5.2 16.4H17M17 13V16.4M9 19C9 19.6 8.6 20 8 20C7.4 20 7 19.6 7 19C7 18.4 7.4 18 8 18C8.6 18 9 18.4 9 19ZM17 19C17 19.6 16.6 20 16 20C15.4 20 15 19.6 15 19C15 18.4 15.4 18 16 18C16.6 18 17 18.4 17 19Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isHovered ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
    />
    <motion.circle
      cx="8.5"
      cy="19.5"
      r="1.5"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
    />
    <motion.circle
      cx="17.5"
      cy="19.5"
      r="1.5"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3 }}
    />
  </svg>
);

const WhatsAppIcon = ({ isHovered }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <motion.path
      d="M21 12C21 16.97 16.97 21 12 21C10.13 21 8.33 20.5 6.76 19.57L3 21L4.43 17.24C3.5 15.67 3 13.87 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isHovered ? 1 : 0.8 }}
      transition={{ duration: 0.4 }}
    />
    <motion.path
      d="M16.5 14.5C16.5 14.5 15.5 14.5 15 14.5C14.5 14.5 13.5 15.5 13.5 15.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    />
    <motion.path
      d="M10.5 10.5C10.5 10.5 9.5 10.5 9 10.5C8.5 10.5 7.5 11.5 7.5 11.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    />
  </svg>
);

const OliveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <motion.path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, rotate: -180 }}
      animate={{ pathLength: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
    <motion.path
      d="M8 12H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="2"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    />
  </svg>
);

const AlmondIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <motion.path
      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M8 8L16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
    <motion.path
      d="M16 8L8 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    />
  </svg>
);

const FigIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <motion.path
      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M8 12H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
    <motion.circle
      cx="12"
      cy="8"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    />
    <motion.circle
      cx="12"
      cy="16"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    />
  </svg>
);

const PistachioIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <motion.path
      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M15 9L9 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
    <motion.circle
      cx="9"
      cy="9"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    />
    <motion.circle
      cx="15"
      cy="15"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    />
  </svg>
);

const MixIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <motion.path
      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.circle
      cx="8"
      cy="8"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
    />
    <motion.circle
      cx="16"
      cy="16"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.9 }}
    />
    <motion.circle
      cx="16"
      cy="8"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1.1 }}
    />
    <motion.circle
      cx="8"
      cy="16"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1.3 }}
    />
  </svg>
);

const LemonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <motion.path
      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M8 8L16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="2"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    />
  </svg>
);

// ===== COMPOSANT HEADER AVEC NAVIGATION =====
const Header = ({ t, language, changeLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Sub Header */}
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <ul className="left-info">
                <li>
                  <a href="tel:0766548709">
                    <i className="fa fa-phone"></i>0766548709
                  </a>
                </li>
                <li>
                  <a href="https://maps.google.com/?q=3ain ch9ef fes" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-map-marker"></i>3ain ch9ef, Fès
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-clock-o"></i>{t.businessHours}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="header-language-switcher">
                <button
                  className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
                  onClick={() => changeLanguage('fr')}
                >
                  FR
                </button>
                <button
                  className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
                  onClick={() => changeLanguage('ar')}
                >
                  AR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#top">
              <div className="brand-container">
                <AnimatedOlive />
                <h2>Olives Miloud</h2>
              </div>
            </a>
            
            <button 
              className="navbar-toggler"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="navbar-toggler-icon">☰</span>
            </button>

            <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#top" onClick={() => scrollToSection('top')}>
                    {t.home}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products" onClick={() => scrollToSection('products')}>
                    {t.products}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#quality" onClick={() => scrollToSection('quality')}>
                    {t.about}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" onClick={() => scrollToSection('contact')}>
                    {t.contact}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

// ===== COMPOSANT BANNER =====
const Banner = ({ t }) => {
  const slides = [
    {
      id: 1,
      subtitle: t.premiumQuality,
      title: t.mediterraneanOlives,
      description: t.bannerDescription,
      buttonText: t.exploreProducts,
      buttonLink: "#products",
      image: "https://i.ibb.co/ZpXkjqJr/olives.jpg"
    },
    {
      id: 2,
      subtitle: t.naturalOrganic,
      title: t.farmFresh,
      description: t.farmDescription,
      buttonText: t.ourStory,
      buttonLink: "#quality",
      image: "https://i.ibb.co/HfkdhBZw/images-7.jpg"
    },
    {
      id: 3,
      subtitle: t.perfectOccasion,
      title: t.gourmetSelection,
      description: t.gourmetDescription,
      buttonText: t.shopNow,
      buttonLink: "#products",
      image: "https://i.ibb.co/6R7b3N2C/97438273-124505359247708-6799848461328973824-n.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="main-banner header-text" id="top">
      <div className="modern-slider-react">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="banner-slide"
          >
            <div className="img-fill" style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div className="banner-overlay"></div>
            </div>
            
            <motion.div className="text-content">
              <motion.h6
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                {slides[currentSlide].subtitle}
              </motion.h6>
              
              <motion.h4
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                {slides[currentSlide].title}
              </motion.h4>
              
              <motion.p
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.a
                href={slides[currentSlide].buttonLink}
                className="filled-button"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                {slides[currentSlide].buttonText}
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <button onClick={prevSlide} className="slider-arrow prev" aria-label="Previous slide">‹</button>
        <button onClick={nextSlide} className="slider-arrow next" aria-label="Next slide">›</button>

        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <motion.div
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: "linear" }}
          className="progress-bar"
        />
      </div>
    </div>
  );
};

// ===== COMPOSANT PRODUCTS1 =====
function Products1({ t }) {
  const [cart, setCart] = useState([]);
  const [hoveredButtons, setHoveredButtons] = useState({});

  // Données des produits avec les nouveaux produits
  const products = [
  
    {
      id: 4,
      nom: "Limon Da9 (ليمون داق)",
      prix: 20.00,
      image: "https://i.ibb.co/nN2hDwQ8/97522031-124505382581039-3508220632737251328-n.jpg",
      categorie: "agrumes",
      description: "Limon Da9 frais et juteux, parfait pour la cuisine marocaine et les boissons rafraîchissantes.",
      icon: LemonIcon,
      weight: "1kg",
      origin: "Fès, Maroc",
      isOrganic: true
    },
    {
      id: 5,
      nom: "Zitoun K7al (زيتون خال)",
      prix: 20.00,
      image: "https://i.ibb.co/DD375Wfg/97548121-124505399247704-4798884440061247488-n.jpg",
      categorie: "olives",
      description: "Olives noires traditionnelles de Fès, préparées selon les méthodes ancestrales.",
      icon: OliveIcon,
      weight: "500g",
      origin: "Fès, Maroc",
      isOrganic: true
    },
    {
      id: 6,
      nom: "Bassal Lokhalal (بصل لخلال)",
      prix: 15.00,
      image: "https://i.ibb.co/s9fjm5g1/97548121-124505419247702-2680587736242454528-n.jpg",
      categorie: "légumes",
      description: "Oignons frais locaux, parfaits pour toutes vos préparations culinaires marocaines.",
      icon: MixIcon,
      weight: "1kg",
      origin: "Fès, Maroc",
      isOrganic: true
    },
    
  ];

  const handleButtonHover = (buttonId, isHovered) => {
    setHoveredButtons(prev => ({
      ...prev,
      [buttonId]: isHovered
    }));
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const orderOnWhatsApp = (product = null) => {
    const items = product ? [product] : cart;
    if (items.length === 0) return;

    const message = items.map(item => 
      `• ${item.nom} - ${item.quantity}x - ${(item.promotion || item.prix).toFixed(2)} DHS`
    ).join('%0A');

    const total = items.reduce((sum, item) => 
      sum + (item.promotion || item.prix) * item.quantity, 0
    );

    const whatsappUrl = `https://wa.me/212766548709?text=${t.whatsappMessage}%0A%0A${message}%0A%0A${t.total}: ${total.toFixed(2)} DHS`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px var(--olive-primary)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const badgeVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="products-section" id="products">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="section-title">
            {t.ourPremiumProducts}
          </h2>
          <p className="section-subtitle">
            {t.productsSubtitle}
          </p>
        </motion.div>

        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="cart-notification"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => orderOnWhatsApp()}
          >
            <div className="cart-content">
              <motion.div
                className="cart-icon"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <CartIcon isHovered={hoveredButtons.cartNotification} />
              </motion.div>
              <strong>{cart.reduce((sum, item) => sum + item.quantity, 0)} {t.items}</strong>
              <span className="separator">|</span>
              <strong>{cart.reduce((sum, item) => sum + (item.promotion || item.prix) * item.quantity, 0).toFixed(2)} DHS</strong>
              <motion.div
                className="whatsapp-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                <WhatsAppIcon isHovered={hoveredButtons.whatsappNotification} />
              </motion.div>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="row"
        >
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="col-lg-4 col-md-6 mb-4"
              >
                <motion.div
                  className="product-card olive-card"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(85, 107, 47, 0.2)"
                  }}
                >
                  <div className="product-header">
                    <motion.div 
                      className="product-icon"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <IconComponent />
                    </motion.div>
                    <div className="product-title-container">
                      <h3 className="product-title">{product.nom}</h3>
                      <div className="product-meta">
                        <span className="product-weight">{product.weight}</span>
                        {product.isOrganic && <span className="organic-badge">{t.organic}</span>}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="product-image-container"
                    variants={imageVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <img
                      src={product.image}
                      alt={product.nom}
                      className="product-image"
                    />
                    
                    {product.promotion && (
                      <motion.div
                        className="promotion-badge"
                        variants={badgeVariants}
                        initial="initial"
                        animate="animate"
                      >
                        -{Math.round((1 - product.promotion/product.prix) * 100)}%
                      </motion.div>
                    )}

                    {product.isOrganic && (
                      <motion.div
                        className="organic-label"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {t.organic}
                      </motion.div>
                    )}

                    <motion.div
                      className="product-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="overlay-buttons">
                        <motion.button
                          className="cart-btn overlay-btn"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onHoverStart={() => handleButtonHover(`cart-${product.id}`, true)}
                          onHoverEnd={() => handleButtonHover(`cart-${product.id}`, false)}
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                          }}
                        >
                          <span className="btn-icon">
                            <CartIcon isHovered={hoveredButtons[`cart-${product.id}`]} />
                          </span>
                          {t.addToCart}
                        </motion.button>
                        
                        <motion.button
                          className="whatsapp-btn overlay-btn"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onHoverStart={() => handleButtonHover(`whatsapp-${product.id}`, true)}
                          onHoverEnd={() => handleButtonHover(`whatsapp-${product.id}`, false)}
                          onClick={(e) => {
                            e.stopPropagation();
                            orderOnWhatsApp({...product, quantity: 1});
                          }}
                        >
                          <span className="btn-icon">
                            <WhatsAppIcon isHovered={hoveredButtons[`whatsapp-${product.id}`]} />
                          </span>
                          {t.orderNow}
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="product-content">
                    <p className="product-description">
                      {product.description}
                    </p>

                    <div className="product-info">
                      <span className="product-origin">
                        <strong>{t.origin}:</strong> {product.origin}
                      </span>
                    </div>

                    <div className="price-section">
                      {product.promotion ? (
                        <div className="price-container">
                          <span className="current-price">
                            {product.promotion.toFixed(2)} DHS
                          </span>
                          <span className="original-price">
                            {product.prix.toFixed(2)} DHS
                          </span>
                        </div>
                      ) : (
                        <span className="current-price">
                          {product.prix.toFixed(2)} DHS
                        </span>
                      )}
                    </div>

                    <div className="action-buttons">
                      <motion.button
                        className="cart-btn action-btn"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onHoverStart={() => handleButtonHover(`cart-action-${product.id}`, true)}
                        onHoverEnd={() => handleButtonHover(`cart-action-${product.id}`, false)}
                        onClick={() => addToCart(product)}
                      >
                        <span className="btn-icon">
                          <CartIcon isHovered={hoveredButtons[`cart-action-${product.id}`]} />
                        </span>
                        {t.addToCart}
                      </motion.button>
                      
                      <motion.button
                        className="whatsapp-btn action-btn compact"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onHoverStart={() => handleButtonHover(`whatsapp-action-${product.id}`, true)}
                        onHoverEnd={() => handleButtonHover(`whatsapp-action-${product.id}`, false)}
                        onClick={() => orderOnWhatsApp({...product, quantity: 1})}
                        title={t.orderWhatsApp}
                      >
                        <span className="btn-icon">
                          <WhatsAppIcon isHovered={hoveredButtons[`whatsapp-action-${product.id}`]} />
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {cart.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-5"
          >
            <p className="empty-cart-message">
              {t.emptyCart}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ===== COMPOSANT QUALITY =====
const Quality = ({ t }) => {
  const stats = [
    { number: "25", title: t.yearsExperience },
    { number: "50", title: t.productsCount },
    { number: "1000", title: t.happyCustomers },
    { number: "5", title: t.countriesServed }
  ];

  return (
    <div className="fun-facts" id="quality">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-content">
              <span>{t.whyChoose}</span>
              <h2>{t.qualityTrust}</h2>
              <p>
                {t.qualityDescription}
                <br /><br />
                {t.qualityDescription2}
              </p>
              <a href="#products" className="filled-button">
                {t.learnMore}
              </a>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="row">
              {stats.map((stat, index) => (
                <div key={index} className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit">{stat.number}</div>
                    <div className="count-title">{stat.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== COMPOSANT FOOTER =====
const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-item">
              <h4>Olives Miloud</h4>
              <p>{t.companyDescription}</p>
              <ul className="social-icons">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
              </ul>
            </div>

            <div className="col-md-4 footer-item">
              <h4>{t.quickLinks}</h4>
              <ul className="menu-list">
                <li><a href="#top">{t.home}</a></li>
                <li><a href="#products">{t.products}</a></li>
                <li><a href="#quality">{t.about}</a></li>
                <li><a href="#contact">{t.contact}</a></li>
              </ul>
            </div>

            <div className="col-md-4 footer-item">
              <h4>{t.contactUs}</h4>
              <div className="contact-info">
                <p><i className="fa fa-map-marker"></i> 3ain ch9ef, Fès</p>
                <p><i className="fa fa-phone"></i> 0766548709</p>
                <p><i className="fa fa-clock-o"></i> {t.businessHours}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                {t.copyright} &copy; {currentYear} Olives Miloud, Fès
                - Développé par <strong>Soufiane Lasmar</strong> | <a href="tel:0766548709">0766548709</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// ===== COMPOSANT PRINCIPAL APP =====
function App() {
  const [language, setLanguage] = useState('fr');
  const [direction, setDirection] = useState('ltr');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setDirection(lang === 'ar' ? 'rtl' : 'ltr');
  };

  const t = translations[language];

  return (
    <div className="App" dir={direction}>
      <Header t={t} language={language} changeLanguage={changeLanguage} />
      <Banner t={t} />
      <Products1 t={t} />
      <Quality t={t} />
      <Footer t={t} />
    </div>
  );
}

// ===== TRADUCTIONS =====
const translations = {
  fr: {
    businessHours: "Lun-Sam 08:00-20:00",
    home: "Accueil",
    about: "À Propos",
    products: "Produits",
    contact: "Contact",
    
    premiumQuality: "qualité premium depuis 1995",
    mediterraneanOlives: "Olives Miloud - Spécialités de Fès",
    bannerDescription: "Découvrez le goût authentique des olives et fruits secs de Fès avec Olives Miloud.",
    exploreProducts: "Découvrir les Produits",
    naturalOrganic: "naturel et biologique",
    farmFresh: "Frais du Marché & Traditionnel",
    farmDescription: "Tous nos produits sont sélectionnés localement et préparés selon les méthodes traditionnelles de Fès.",
    ourStory: "Notre Histoire",
    perfectOccasion: "parfait pour chaque occasion",
    gourmetSelection: "Sélection Gastronomique",
    gourmetDescription: "Du snack quotidien aux occasions spéciales, découvrez notre sélection d'olives, noix et fruits secs.",
    shopNow: "Acheter Maintenant",

    oliveKalamata: "Olives Kalamata Bio",
    oliveKalamataDesc: "Olives Kalamata biologiques de Fès, riches en saveurs et antioxydants.",
    almonds: "Amandes Grillées de Fès",
    almondsDesc: "Amandes premium de la région de Fès, grillées à sec, croquantes et savoureuses.",
    driedFigs: "Figues Séchées de Fès",
    driedFigsDesc: "Figues naturelles séchées au soleil de Fès, sucrées et moelleuses.",
    saltedPistachios: "Pistaches Salées",
    saltedPistachiosDesc: "Pistaches sélectionnées, légèrement salées, parfaites pour l'apéritif.",
    marinatedOlives: "Olives Vertes Marinées",
    marinatedOlivesDesc: "Olives vertes marinées aux épices marocaines.",
    mediterraneanMix: "Mélange Marocain",
    mediterraneanMixDesc: "Mélange exclusif d'olives, amandes et fruits secs de Fès.",

    addToCart: "Ajouter au panier",
    orderNow: "Commander",
    orderWhatsApp: "Commander via WhatsApp",
    items: "articles",
    total: "Total",
    whatsappMessage: "Bonjour Olives Miloud! Je souhaite commander:",
    emptyCart: "Votre panier est vide. Ajoutez des produits pour commander !",
    organic: "Bio",
    origin: "Origine",

    ourPremiumProducts: "Nos Produits Premium",
    productsSubtitle: "Soigneusement sélectionnés des meilleures sources de Fès",

    whyChoose: "Pourquoi choisir Olives Miloud ?",
    qualityTrust: "Qualité à laquelle vous pouvez faire confiance",
    qualityDescription: "Depuis des années, nous apportons le goût authentique de Fès à votre table.",
    qualityDescription2: "Nous travaillons directement avec des producteurs locaux qui partagent nos valeurs de qualité et de fraîcheur.",
    learnMore: "En Savoir Plus",
    yearsExperience: "Années d'Expérience",
    productsCount: "Produits",
    happyCustomers: "Clients Satisfaits",
    countriesServed: "Régions Desservies",

    companyDescription: "Olives Miloud - Apportant le goût authentique de Fès à votre table depuis 1995.",
    quickLinks: "Liens Rapides",
    contactUs: "Contactez-Nous",
    copyright: "Droits d'auteur"
  },
  ar: {
    businessHours: "الإثنين-السبت 08:00-20:00",
    home: "الرئيسية",
    about: "من نحن",
    products: "المنتجات",
    contact: "اتصل بنا",
    
    premiumQuality: "جودة ممتازة منذ 1995",
    mediterraneanOlives: "زيتون ميلود - تخصصات فاس",
    bannerDescription: "اكتشف الطعم الأصيل للزيتون والفواكه المجففة من فاس مع زيتون ميلود.",
    exploreProducts: "استكشف المنتجات",
    naturalOrganic: "طبيعي وعضوي",
    farmFresh: "طازج من السوق & تقليدي",
    farmDescription: "جميع منتجاتنا مختارة محلياً ومعدة وفق الطرق التقليدية في فاس.",
    ourStory: "قصتنا",
    perfectOccasion: "مثالي لكل مناسبة",
    gourmetSelection: "تشكيلة فاخرة",
    gourmetDescription: "من الوجبات الخفيفة اليومية إلى المناسبات الخاصة، اكتشف تشكيلتنا المختارة.",
    shopNow: "تسوق الآن",

    oliveKalamata: "زيتون كالاماتا عضوي",
    oliveKalamataDesc: "زيتون كالاماتا عضوي من فاس، غني بالنكهات ومضادات الأكسدة.",
    almonds: "لوز فاس محمص",
    almondsDesc: "لوز ممتاز من منطقة فاس، محمص على الناشف، مقرمش ولذيذ.",
    driedFigs: "تين فاس مجفف",
    driedFigsDesc: "تين طبيعي مجفف تحت أشعة الشمس في فاس، حلو وطري.",
    saltedPistachios: "فستق مملح",
    saltedPistachiosDesc: "فستق مختار، مملح قليلاً، مثالي للمقبلات.",
    marinatedOlives: "زيتون أخضر متبل",
    marinatedOlivesDesc: "زيتون أخضر متبل بالبهارات المغربية.",
    mediterraneanMix: "مزيج مغربي",
    mediterraneanMixDesc: "مزيج حصري من الزيتون، اللوز والفواكه المجففة من فاس.",

    addToCart: "أضف إلى السلة",
    orderNow: "اطلب الآن",
    orderWhatsApp: "اطلب عبر واتساب",
    items: "منتجات",
    total: "المجموع",
    whatsappMessage: "مرحباً زيتون ميلود! أود طلب:",
    emptyCart: "سلة التسوق فارغة. أضف منتجات للطلب!",
    organic: "عضوي",
    origin: "المصدر",

    ourPremiumProducts: "منتجاتنا الممتازة",
    productsSubtitle: "مختارة بعناية من أفضل مصادر فاس",

    whyChoose: "لماذا تختار زيتون ميلود؟",
    qualityTrust: "جودة يمكنك الوثوق بها",
    qualityDescription: "منذ سنوات، نحن نقدم الطعم الأصيل لمدينة فاس إلى مائدتك.",
    qualityDescription2: "نعمل مباشرة مع منتجين محليين يشاركوننا قيم الجودة والطزاجة.",
    learnMore: "اعرف المزيد",
    yearsExperience: "سنوات الخبرة",
    productsCount: "منتجات",
    happyCustomers: "عملاء سعداء",
    countriesServed: "مناطق نخدمها",

    companyDescription: "زيتون ميلود - نقدم الطعم الأصيل لمدينة فاس إلى مائدتك منذ 1995.",
    quickLinks: "روابط سريعة",
    contactUs: "اتصل بنا",
    copyright: "حقوق النشر"
  }
};

export default App;