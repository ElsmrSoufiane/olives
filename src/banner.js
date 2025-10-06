import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = ({ t }) => {
  const slides = [
    {
      id: 1,
      subtitle: t.premiumQuality,
      title: t.mediterraneanOlives,
      description: t.bannerDescription,
      buttonText: t.exploreProducts,
      buttonLink: "products.html",
      background: "linear-gradient(135deg, #2a7d2e 0%, #3a9d3e 100%)"
    },
    {
      id: 2,
      subtitle: t.naturalOrganic,
      title: t.farmFresh,
      description: t.farmDescription,
      buttonText: t.ourStory,
      buttonLink: "about.html",
      background: "linear-gradient(135deg, #d4a574 0%, #e4b584 100%)"
    },
    {
      id: 3,
      subtitle: t.perfectOccasion,
      title: t.gourmetSelection,
      description: t.gourmetDescription,
      buttonText: t.shopNow,
      buttonLink: "products.html",
      background: "linear-gradient(135deg, #8b4513 0%, #a05525 100%)"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
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

  // Animation variants
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

  const dotVariants = {
    initial: { scale: 0.8, opacity: 0.6 },
    active: { 
      scale: 1.2, 
      opacity: 1,
      backgroundColor: "#ffffff",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    inactive: {
      scale: 1,
      opacity: 0.7,
      backgroundColor: "rgba(255,255,255,0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="main-banner header-text" id="top">
      <div className="modern-slider-react" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
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
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: slides[currentSlide].background,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="img-fill" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))`
            }}></div>
            
            <motion.div 
              className="text-content"
              style={{
                textAlign: 'center',
                color: 'white',
                width: '80%',
                maxWidth: '800px',
                position: 'relative',
                zIndex: 2
              }}
            >
              <motion.h6
                variants={textVariants}
                initial="initial"
                animate="animate"
                style={{
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '20px',
                  fontWeight: '400'
                }}
              >
                {slides[currentSlide].subtitle}
              </motion.h6>
              
              <motion.h4
                variants={textVariants}
                initial="initial"
                animate="animate"
                style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  marginBottom: '25px',
                  lineHeight: '1.2'
                }}
              >
                {slides[currentSlide].title}
              </motion.h4>
              
              <motion.p
                variants={textVariants}
                initial="initial"
                animate="animate"
                style={{
                  fontSize: '16px',
                  marginBottom: '35px',
                  lineHeight: '1.6',
                  maxWidth: '600px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
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
                style={{
                  display: 'inline-block',
                  padding: '12px 30px',
                  backgroundColor: '#f7c552',
                  color: '#2a2a2a',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontWeight: '600',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {slides[currentSlide].buttonText}
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.3)';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
          }}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.3)';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
          }}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Slide Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 3
        }}>
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              variants={dotVariants}
              initial="initial"
              animate={index === currentSlide ? "active" : "inactive"}
              whileHover={{ scale: 1.1 }}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid white',
                cursor: 'pointer',
                padding: 0
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: "linear" }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '3px',
            background: 'rgba(255,255,255,0.7)',
            zIndex: 3
          }}
        />
      </div>
    </div>
  );
};

export default Banner;