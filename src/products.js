import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Composants SVG (gardés identiques)
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

function Products1({ t }) {
  const [cart, setCart] = useState([]);
  const [hoveredButtons, setHoveredButtons] = useState({});

  // Données des produits réalistes avec prix en DHS
  const products = [
    {
      id: 1,
      nom: t.oliveKalamata,
      prix: 249.99, // 250 DHS
      promotion: 199.99, // 200 DHS
      image: "/images/olives-kalamata.jpg",
      categorie: "olives",
      description: t.oliveKalamataDesc,
      icon: OliveIcon,
      weight: "500g",
      origin: "Grèce",
      isOrganic: true
    },
    {
      id: 2,
      nom: t.almonds,
      prix: 185.00, // 185 DHS
      promotion: 149.99, // 150 DHS
      image: "/images/amandes.jpg",
      categorie: "fruits-secs",
      description: t.almondsDesc,
      icon: AlmondIcon,
      weight: "400g",
      origin: "Maroc",
      isOrganic: true
    },
    {
      id: 3,
      nom: t.driedFigs,
      prix: 165.00, // 165 DHS
      promotion: 139.99, // 140 DHS
      image: "/images/figues.jpg",
      categorie: "fruits-secs",
      description: t.driedFigsDesc,
      icon: FigIcon,
      weight: "350g",
      origin: "Turquie",
      isOrganic: false
    },
    {
      id: 4,
      nom: t.saltedPistachios,
      prix: 320.00, // 320 DHS
      promotion: 269.99, // 270 DHS
      image: "/images/pistaches.jpg",
      categorie: "fruits-secs",
      description: t.saltedPistachiosDesc,
      icon: PistachioIcon,
      weight: "300g",
      origin: "Iran",
      isOrganic: false
    },
    {
      id: 5,
      nom: t.marinatedOlives,
      prix: 179.99, // 180 DHS
      promotion: 149.99, // 150 DHS
      image: "/images/olives-vertes.jpg",
      categorie: "olives",
      description: t.marinatedOlivesDesc,
      icon: OliveIcon,
      weight: "450g",
      origin: "Maroc",
      isOrganic: true
    },
    {
      id: 6,
      nom: t.mediterraneanMix,
      prix: 299.99, // 300 DHS
      promotion: 249.99, // 250 DHS
      image: "/images/melange.jpg",
      categorie: "melanges",
      description: t.mediterraneanMixDesc,
      icon: MixIcon,
      weight: "600g",
      origin: "Mélange Méditerranéen",
      isOrganic: true
    },
    {
      id: 7,
      nom: "Noix de Cajou Grillées",
      prix: 220.00, // 220 DHS
      promotion: 189.99, // 190 DHS
      image: "/images/noix-cajou.jpg",
      categorie: "fruits-secs",
      description: "Noix de cajou premium grillées à sec, crémeuses et savoureuses. Parfaites pour les encas santé.",
      icon: AlmondIcon,
      weight: "350g",
      origin: "Vietnam",
      isOrganic: false
    },
    {
      id: 8,
      nom: "Abricots Secs Bio",
      prix: 145.00, // 145 DHS
      promotion: 119.99, // 120 DHS
      image: "/images/abricots.jpg",
      categorie: "fruits-secs",
      description: "Abricots biologiques séchés naturellement, moelleux et sucrés. Riches en fibres et vitamines.",
      icon: FigIcon,
      weight: "400g",
      origin: "Turquie",
      isOrganic: true
    },
    {
      id: 9,
      nom: "Mélange Énergétique",
      prix: 275.00, // 275 DHS
      promotion: 229.99, // 230 DHS
      image: "/images/melange-energetique.jpg",
      categorie: "melanges",
      description: "Mélange énergétique de fruits secs, noix et graines. Idéal pour le sport et les journées actives.",
      icon: MixIcon,
      weight: "500g",
      origin: "Mélange Maison",
      isOrganic: true
    }
  ];

  // Gestion du hover des boutons
  const handleButtonHover = (buttonId, isHovered) => {
    setHoveredButtons(prev => ({
      ...prev,
      [buttonId]: isHovered
    }));
  };

  // Ajouter au panier
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

  // Supprimer du panier
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Commander sur WhatsApp
  const orderOnWhatsApp = (product = null) => {
    const items = product ? [product] : cart;
    if (items.length === 0) return;

    const message = items.map(item => 
      `• ${item.nom} - ${item.quantity}x - ${(item.promotion || item.prix).toFixed(2)} DHS`
    ).join('%0A');

    const total = items.reduce((sum, item) => 
      sum + (item.promotion || item.prix) * item.quantity, 0
    );

    const whatsappUrl = `https://wa.me/212612345678?text=${t.whatsappMessage}%0A%0A${message}%0A%0A${t.total}: ${total.toFixed(2)} DHS`;
    window.open(whatsappUrl, '_blank');
  };

  // Animation variants
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
    <div className="products-section">
      <div className="container">
        {/* En-tête */}
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

        {/* Panier flottant */}
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

        {/* Grille des produits */}
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
                  {/* En-tête de la carte avec icône SVG */}
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

                  {/* Image du produit */}
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
                    
                    {/* Badge promotion */}
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

                    {/* Badge bio */}
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

                    {/* Overlay au hover */}
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

                  {/* Contenu de la carte */}
                  <div className="product-content">
                    <p className="product-description">
                      {product.description}
                    </p>

                    {/* Informations supplémentaires */}
                    <div className="product-info">
                      <span className="product-origin">
                        <strong>{t.origin}:</strong> {product.origin}
                      </span>
                    </div>

                    {/* Prix */}
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

                    {/* Boutons d'action */}
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

        {/* Section vide du panier */}
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

export default Products1;