import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = ({ isHome = false, bannerLabel = "" }) => {
  const router = useRouter();
  const [isFading, setIsFading] = useState(false);
  /**
   * MOBILE NAV STATES
   */
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Submenu toggles for mobile
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);

  /**
   * DESKTOP HOVER STATES
   */
  const [aboutHoverOpen, setAboutHoverOpen] = useState(false);
  const [servicesHoverOpen, setServicesHoverOpen] = useState(false);

  // Refs for hover containers
  const aboutHoverMenuRef = useRef(null);
  const aboutHoverTriggerRef = useRef(null);
  const servicesHoverMenuRef = useRef(null);
  const servicesHoverTriggerRef = useRef(null);

  // Refs for mobile submenu containers
  const mobileNavAboutSubmenuContainerRef = useRef(null);
  const mobileNavServicesSubmenuContainerRef = useRef(null);

  // Refs for submenu trigger icons
  const aboutSubmenuTriggerOpenRef = useRef(null);
  const aboutSubmenuTriggerCloseRef = useRef(null);
  const servicesSubmenuTriggerOpenRef = useRef(null);
  const servicesSubmenuTriggerCloseRef = useRef(null);

  /**
   * MOBILE NAV OPEN/CLOSE
   */
  const handleOpenMobileNav = (e) => {
    e.preventDefault();
    setMobileNavOpen(true);
  };

  const handleCloseMobileNav = (e) => {    
    // Use setTimeout to delay the actual closing
    setTimeout(() => {
      setMobileNavOpen(false);
      // Force-close submenus
      closeAboutSubmenu();
      closeServicesSubmenu();
    }, 300); // This matches the CSS transition time
  };

  /**
   * MOBILE SUBMENU HANDLERS
   */
  const toggleAboutSubmenu = (e) => {
    e.preventDefault();
    if (!aboutSubmenuOpen) {
      openAboutSubmenu();
    } else {
      closeAboutSubmenu();
    }
  };

  const toggleServicesSubmenu = (e) => {
    e.preventDefault();
    if (!servicesSubmenuOpen) {
      openServicesSubmenu();
    } else {
      closeServicesSubmenu();
    }
  };

  /**
   * Functions to Open and Close About Submenu
   */
  const openAboutSubmenu = () => {
    setAboutSubmenuOpen(true);

    const aboutSectionsArray = Array.from(
      mobileNavAboutSubmenuContainerRef.current.querySelectorAll('.mobile-nav-about-submenu')
    );
    const height = aboutSectionsArray.length * 40; // Assuming each item ~40px height
    mobileNavAboutSubmenuContainerRef.current.style.height = `${height}px`;
    mobileNavAboutSubmenuContainerRef.current.style.zIndex = "1";

    // Toggle trigger icons
    if (aboutSubmenuTriggerOpenRef.current && aboutSubmenuTriggerCloseRef.current) {
      aboutSubmenuTriggerOpenRef.current.style.display = "none";
      aboutSubmenuTriggerCloseRef.current.style.display = "inline-block";
    }

    // Set transition delays and opacity
    aboutSectionsArray.forEach((anchor, index) => {
      anchor.style.transitionDelay = `${index * 0.15}s`; // Adjust delay as needed
      anchor.style.opacity = 1;
    });
  };

  const closeAboutSubmenu = () => {
    setAboutSubmenuOpen(false);

    mobileNavAboutSubmenuContainerRef.current.style.height = "0px";
    mobileNavAboutSubmenuContainerRef.current.style.zIndex = "-1";

    const aboutSectionsArray = Array.from(
      mobileNavAboutSubmenuContainerRef.current.querySelectorAll('.mobile-nav-about-submenu')
    );

    // Remove transition delays and set opacity to 0
    aboutSectionsArray.forEach((anchor) => {
      anchor.style.transitionDelay = "0s";
      anchor.style.opacity = 0;
    });

    // Toggle trigger icons
    if (aboutSubmenuTriggerCloseRef.current && aboutSubmenuTriggerOpenRef.current) {
      aboutSubmenuTriggerCloseRef.current.style.display = "none";
      aboutSubmenuTriggerOpenRef.current.style.display = "inline-block";
    }
  };

  /**
   * Functions to Open and Close Services Submenu
   */
  const openServicesSubmenu = () => {
    setServicesSubmenuOpen(true);

    const servicesSectionsArray = Array.from(
      mobileNavServicesSubmenuContainerRef.current.querySelectorAll('.mobile-nav-services-submenu')
    );
    const height = servicesSectionsArray.length * 40; // Assuming each item ~40px height
    mobileNavServicesSubmenuContainerRef.current.style.height = `${height}px`;
    mobileNavServicesSubmenuContainerRef.current.style.zIndex = "1";

    // Toggle trigger icons
    if (servicesSubmenuTriggerOpenRef.current && servicesSubmenuTriggerCloseRef.current) {
      servicesSubmenuTriggerOpenRef.current.style.display = "none";
      servicesSubmenuTriggerCloseRef.current.style.display = "inline-block";
    }

    // Set transition delays and opacity
    servicesSectionsArray.forEach((anchor, index) => {
      anchor.style.transitionDelay = `${index * 0.1}s`; // Adjust delay as needed
      anchor.style.opacity = 1;
    });
  };

  const closeServicesSubmenu = () => {
    setServicesSubmenuOpen(false);

    mobileNavServicesSubmenuContainerRef.current.style.height = "0px";
    mobileNavServicesSubmenuContainerRef.current.style.zIndex = "-1";

    const servicesSectionsArray = Array.from(
      mobileNavServicesSubmenuContainerRef.current.querySelectorAll('.mobile-nav-services-submenu')
    );

    // Remove transition delays and set opacity to 0
    servicesSectionsArray.forEach((anchor) => {
      anchor.style.transitionDelay = "0s";
      anchor.style.opacity = 0;
    });

    // Toggle trigger icons
    if (servicesSubmenuTriggerCloseRef.current && servicesSubmenuTriggerOpenRef.current) {
      servicesSubmenuTriggerCloseRef.current.style.display = "none";
      servicesSubmenuTriggerOpenRef.current.style.display = "inline-block";
    }
  };

  /**
   * DESKTOP HOVER HANDLERS
   */
  const showAboutHoverMenu = () => {
    setServicesHoverOpen(false);
    setAboutHoverOpen(true);

    if (aboutHoverMenuRef.current) {
      aboutHoverMenuRef.current.style.zIndex = '1000'; // Set desired z-index
      aboutHoverMenuRef.current.style.opacity = '1';   // Make it fully opaque
      // Optionally, ensure it's visible
      aboutHoverMenuRef.current.style.display = 'block';
    }
  };
  const hideAboutHoverMenu = () => {
    setTimeout(() => {
      if (
        !aboutHoverMenuRef.current?.matches(':hover') &&
        !aboutHoverTriggerRef.current?.matches(':hover')
      ) {
        setAboutHoverOpen(false);
        if (aboutHoverMenuRef.current) {
          aboutHoverMenuRef.current.style.zIndex = '0';  
          aboutHoverMenuRef.current.style.opacity = '0'; 
          aboutHoverMenuRef.current.style.display = 'none';
        }
      }
    }, 200);
  };

  const showServicesHoverMenu = () => {
    setAboutHoverOpen(false);
    setServicesHoverOpen(true);
    if (servicesHoverMenuRef.current) {
      servicesHoverMenuRef.current.style.zIndex = '1000';
      servicesHoverMenuRef.current.style.opacity = '1';  
      servicesHoverMenuRef.current.style.display = 'block';
    }
  };
  const hideServicesHoverMenu = () => {
    setTimeout(() => {
      if (
        !servicesHoverMenuRef.current?.matches(':hover') &&
        !servicesHoverTriggerRef.current?.matches(':hover')
      ) {
        setServicesHoverOpen(false);
        if (servicesHoverMenuRef.current) {
          servicesHoverMenuRef.current.style.zIndex = '0';  
          servicesHoverMenuRef.current.style.opacity = '0'; 
          servicesHoverMenuRef.current.style.display = 'none';
        }
      }
    }, 200);
  };

  /**
   * Dynamic Hover Menu Positioning (Optional)
   * If needed, keep this logic or adjust based on new submenu structure.
   */
  useEffect(() => {
    const calculateOffsets = () => {
      // About Hover Menu Positioning
      if (aboutHoverMenuRef.current && aboutHoverTriggerRef.current) {
        const triggerRect = aboutHoverTriggerRef.current.getBoundingClientRect();
        const menuRect = aboutHoverMenuRef.current.getBoundingClientRect();

        const top = triggerRect.bottom + window.scrollY;
        const left = triggerRect.left + triggerRect.width / 2 - menuRect.width / 2;

        aboutHoverMenuRef.current.style.top = `${top}px`;
        aboutHoverMenuRef.current.style.left = `${left}px`;
      }

      // Services Hover Menu Positioning
      if (servicesHoverMenuRef.current && servicesHoverTriggerRef.current) {
        const triggerRect = servicesHoverTriggerRef.current.getBoundingClientRect();
        const menuRect = servicesHoverMenuRef.current.getBoundingClientRect();

        const top = triggerRect.bottom + window.scrollY;
        const left = triggerRect.left + triggerRect.width / 2 - menuRect.width / 2;

        servicesHoverMenuRef.current.style.top = `${top}px`;
        servicesHoverMenuRef.current.style.left = `${left}px`;
      }
    };

    // Calculate positions on mount and when hover states change
    calculateOffsets();

    // Recalculate on window resize
    window.addEventListener('resize', calculateOffsets);
    return () => {
      window.removeEventListener('resize', calculateOffsets);
    };
  }, [aboutHoverOpen, servicesHoverOpen]);

  return (
    <>
      {/* LARGE FORMAT NAV */}
      <nav 
        className={`nav-wrap ${isHome ? 'navhome pb0' : 'pageback'}`}
        style={{ position: 'relative' }}
      >
        {/* Logo and menu button */}
        <div className="heading">
          <div className="flexspread">                
            <Link href="/" className="logohome" passHref>
              Grounded Minds
            </Link>
            {/* Mobile Toggler */}
            <button id="mobile-nav-open-btn" className="togglerbtn" onClick={handleOpenMobileNav}>
              <i className="fa-solid fa-bars fa-lg" style={{ color: '#000000' }}></i>
            </button>
          </div>
        </div>

        {/* Site Pages (Desktop) */}
        <div className="menu-links">
          {/* ABOUT */}
          <Link
            id="about-hover-trigger"
            href="/about"
            passHref
            ref={aboutHoverTriggerRef}
            onMouseEnter={showAboutHoverMenu}
            onMouseLeave={hideAboutHoverMenu}
            aria-haspopup="true"
            aria-expanded={aboutHoverOpen}
          >
            About
          </Link>
          {/* ABOUT Hovermenu */}
          <div
            id="nav-about-hovermenu-container"
            ref={aboutHoverMenuRef}
            className={`nav-hovermenu-container ${aboutHoverOpen ? 'active' : ''}`}
            onMouseEnter={showAboutHoverMenu}
            onMouseLeave={hideAboutHoverMenu}
            aria-haspopup="true"
            aria-expanded={aboutHoverOpen}
          >
            <div className="nav-about-hovermenu">
              <Link href="/about" passHref className="nav-about-hovermenu-cta">
                Our Team
              </Link>
            </div>
            <div className="nav-about-hovermenu">
              <Link href="/about/angieblandford" className="nav-about-hovermenu-cta">Angie Blandford</Link>
            </div>
            <div className="nav-about-hovermenu">
              <Link href="/about/ankakrivokuca" className="nav-about-hovermenu-cta">Anka Krivokuca</Link>
            </div>
            <div className="nav-about-hovermenu">
              <Link href="/about/daniellekirshenbaum" className="nav-about-hovermenu-cta">Danielle Kirshenbaum</Link>
            </div>
            <div className="nav-about-hovermenu">
              <Link href="/about/liannesaxon" className="nav-about-hovermenu-cta">Lianne Saxon</Link>
            </div>
            <div className="nav-about-hovermenu">
              <Link href="/about/moonsunjang" className="nav-about-hovermenu-cta">Moonsun Jang</Link>
            </div>
            <div className="nav-about-hovermenu">
              <Link href="/about/rafeyashami" className="nav-about-hovermenu-cta">Rafeya Shami</Link>
            </div>
          </div>

          {/* SERVICES */}
          <Link
            id="services-hover-trigger"
            href="/services"
            passHref
            ref={servicesHoverTriggerRef}
            onMouseEnter={showServicesHoverMenu}
            onMouseLeave={hideServicesHoverMenu}
            aria-haspopup="true"
            aria-expanded={servicesHoverOpen}
          >
            Services
          </Link>
          {/* SERVICES Hovermenu */}
          <div
            id="nav-services-hovermenu-container"
            ref={servicesHoverMenuRef}
            className={`nav-hovermenu-container ${servicesHoverOpen ? 'active' : ''}`}
            onMouseEnter={showServicesHoverMenu}
            onMouseLeave={hideServicesHoverMenu}
          >
            <div className="nav-services-hovermenu">
              <Link href="/services" className="nav-services-hovermenu-cta">All Services</Link>
            </div>
            <div className="nav-services-hovermenu">
              <Link href="/services/individual-therapy" className="nav-services-hovermenu-cta">Individual Therapy</Link>
            </div>
            <div className="nav-services-hovermenu">
              <Link href="/services/ocd" className="nav-services-hovermenu-cta">Therapy for OCD</Link>
            </div>
            <div className="nav-services-hovermenu">
              <Link href="/services/anxiety" className="nav-services-hovermenu-cta">Therapy for Anxiety</Link>
            </div>
            <div className="nav-services-hovermenu">
              <Link href="/services/trauma" className="nav-services-hovermenu-cta">Therapy for Trauma</Link>
            </div>
            <div className="nav-services-hovermenu">
              <Link href="/services/consultation" className="nav-services-hovermenu-cta">Clinical Consultation</Link>
            </div>
          </div>

          {/* Other menu links */}
          <Link href="/faq" passHref >FAQ</Link>
          <Link href="/resources" passHref >Resources</Link>
          <Link href="/contact" passHref >Contact</Link>
          <Link
            href="https://groundedmindstherapy.janeapp.com/"
            passHref
            className="bookwow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </Link>
        </div>

        {/* Banner section only for home nav */}
        {isHome && (
          <section className="banner">
            <p id="pp">
              <Link href="/services" passHref className="homebanner">
                Virtual Therapy for Anxiety + OCD
              </Link>
            </p>
          </section>
        )}
        {/* or for subpage: label, if you need it (like nav-subpage.html) */}
        {!isHome && (
          <p className="label">
            {bannerLabel}
          </p>
        )}
      </nav>

      {/* MOBILE NAV */}
      <div
        id="mobile-nav-anchor"
        className={`mobile-nav-container`}
        style={{ top: mobileNavOpen ? '0' : '-100vh' }}
      >
        <div className="mobile-menu-links-section">
          {/* Logo / Close btn */}
          <div className="mobile-menu-logo-section">
            <Link className="logohome" href="/">
              GROUNDED MINDS
            </Link>
            <button
              id="mobile-nav-close-btn"
              className="mobile-menu-close-btn"
              onClick={(e) => {
                e.preventDefault(); // It's OK to prevent default for the close button
                handleCloseMobileNav(e);
              }}
            >
              <i className="fa-solid fa-xmark fa-xl" style={{ color: '#000000' }}></i>
            </button>
          </div>

          <div id="mobile-nav-menu-container" className="mobile-menu-links-container">
            {/* ABOUT TRIGGER */}
            <div
              id="about-trigger-cta"
              className="nav-link-cta-container"
              style={{ opacity: mobileNavOpen ? 1 : 0, transitionDelay: mobileNavOpen ? '0.275s' : '0s' }}
              onClick={toggleAboutSubmenu}
            >
              <i
                id="about-submenu-trigger-open"
                className="fa-sharp fa-light fa-plus fa-lg"
                ref={aboutSubmenuTriggerOpenRef}
                style={{ display: aboutSubmenuOpen ? 'none' : 'inline-block', alignSelf: 'center' }}
              />
              <i
                id="about-submenu-trigger-close"
                className="fa-sharp fa-solid fa-minus fa-sm"
                ref={aboutSubmenuTriggerCloseRef}
                style={{ display: aboutSubmenuOpen ? 'inline-block' : 'none', alignSelf: 'center' }}
              />
              <p className="nav-link-cta">ABOUT</p>
            </div>

            {/* ABOUT SUBMENU */}
            <div
              className={`mobile-nav-about-submenu-container mobile-nav-submenu ${aboutSubmenuOpen ? 'active' : ''}`}
              ref={mobileNavAboutSubmenuContainerRef}
            >
              <div className="mobile-nav-about-submenu">
                <Link href="/about" className="mobile-nav-about-submenu-cta" onClick={handleCloseMobileNav}>Our Team</Link>
              </div>
              <div className="mobile-nav-about-submenu">
                <Link href="/about/angieblandford" className="mobile-nav-about-submenu-cta" onClick={handleCloseMobileNav}>Angie Blandford</Link>
              </div>
              <div className="mobile-nav-about-submenu">
                <Link href="/about/ankakrivokuca" className="mobile-nav-about-submenu-cta" onClick={handleCloseMobileNav}>Anka Krivokuca</Link>
              </div>
              <div className="mobile-nav-about-submenu">
                <Link href="/about/daniellekirshenbaum" className="mobile-nav-about-submenu-cta" onClick={handleCloseMobileNav}>Danielle Kirshenbaum</Link>
              </div>
              <div className="mobile-nav-about-submenu">
                <Link href="/about/liannesaxon" className="mobile-nav-about-submenu-cta" onClick={handleCloseMobileNav}>Lianne Saxon</Link>
              </div>
              <div className="mobile-nav-about-submenu">
                <Link href="/about/moonsunjang" className="mobile-nav-about-submenu-cta" onClick={handleCloseMobileNav}>Moonsun Jang</Link>
              </div>
              <div className="mobile-nav-about-submenu">
                <Link href="/about/rafeyashami" className="mobile-nav-about-submenu-cta" onClick={handleCloseMobileNav}>Rafeya Shami</Link>
              </div>
            </div>

            {/* SERVICES TRIGGER */}
            <div
              id="services-trigger-cta"
              className="nav-link-cta-container"
              style={{ opacity: mobileNavOpen ? 1 : 0, transitionDelay: mobileNavOpen ? '0.55s' : '0s' }}
              onClick={toggleServicesSubmenu}
            >
              <i
                id="service-submenu-trigger-open"
                className="fa-sharp fa-light fa-plus fa-lg"
                ref={servicesSubmenuTriggerOpenRef}
                style={{ display: servicesSubmenuOpen ? 'none' : 'inline-block', alignSelf: 'center' }}
              />
              <i
                id="service-submenu-trigger-close"
                className="fa-sharp fa-solid fa-minus fa-sm"
                ref={servicesSubmenuTriggerCloseRef}
                style={{ display: servicesSubmenuOpen ? 'inline-block' : 'none', alignSelf: 'center' }}
              />
              <p className="nav-link-cta">SERVICES</p>
            </div>

            {/* SERVICES SUBMENU */}
            <div
              className={`mobile-nav-services-submenu-container mobile-nav-submenu ${servicesSubmenuOpen ? 'active' : ''}`}
              ref={mobileNavServicesSubmenuContainerRef}
            >
              <div className="mobile-nav-services-submenu">
                <Link href="/services" className="mobile-nav-services-submenu-cta" onClick={handleCloseMobileNav}>All Services</Link>
              </div>
              <div className="mobile-nav-services-submenu">
                <Link href="/services/individual-therapy" className="mobile-nav-services-submenu-cta" onClick={handleCloseMobileNav}>Individual Therapy</Link>
              </div>
              <div className="mobile-nav-services-submenu">
                <Link href="/services/ocd" className="mobile-nav-services-submenu-cta" onClick={handleCloseMobileNav}>Therapy for OCD</Link>
              </div>
              <div className="mobile-nav-services-submenu">
                <Link href="/services/anxiety" className="mobile-nav-services-submenu-cta" onClick={handleCloseMobileNav}>Therapy for Anxiety</Link>
              </div>
              <div className="mobile-nav-services-submenu">
                <Link href="/services/trauma" className="mobile-nav-services-submenu-cta" onClick={handleCloseMobileNav}>Therapy for Trauma</Link>
              </div>
              <div className="mobile-nav-services-submenu">
                <Link href="/services/consultation" className="mobile-nav-services-submenu-cta" onClick={handleCloseMobileNav}>Clinical Consultation</Link>
              </div>
            </div>

            {/* FAQ */}
            <div
              className="nav-link-cta-container"
              style={{ opacity: mobileNavOpen ? 1 : 0, transitionDelay: mobileNavOpen ? '0.825s' : '0s' }}
            >
              <Link href="/faq" className="nav-link-cta" onClick={handleCloseMobileNav}>FAQ</Link>
            </div>
            {/* Resources */}
            <div
              className="nav-link-cta-container"
              style={{ opacity: mobileNavOpen ? 1 : 0, transitionDelay: mobileNavOpen ? '1.10s' : '0s' }}
            >
              <Link href="/resources" className="nav-link-cta" onClick={handleCloseMobileNav}>RESOURCES</Link>
            </div>
            {/* Contact */}
            <div
              className="nav-link-cta-container"
              style={{ opacity: mobileNavOpen ? 1 : 0, transitionDelay: mobileNavOpen ? '1.375s' : '0s' }}
            >
              <Link href="/contact" className="nav-link-cta" onClick={handleCloseMobileNav}>CONTACT</Link>
            </div>
            {/* Book Now */}
            <div
              className="nav-link-cta-container book-now-cta-container"
              style={{ opacity: mobileNavOpen ? 1 : 0, transitionDelay: mobileNavOpen ? '1.65s' : '0s' }}
            >
              <Link
                href="https://groundedmindstherapy.janeapp.com/"
                target="_blank"
                rel="noreferrer"
                className="nav-link-book-now-cta"
                onClick={handleCloseMobileNav}
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Socials section */}
          <div className="mobile-menu-socials-section">
            <div className="socials-handle">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/groundedmindstherapy/"
                className="socials-handle-link"
              >
                @GROUNDEDMINDSTHERAPY
              </Link>
            </div>
            <div className="socials-logo-container">
              <div className="socials-linkout-icon-container">
                <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/groundedmindstherapy/">
                  <img
                    src="/Insta-icon.png"
                    alt="instagram logo"
                    className="socials-linkout-icon-img"
                  />
                </Link>
              </div>
              <div className="socials-linkout-icon-container">
                <Link target="_blank" rel="noreferrer" href="https://www.facebook.com/groundedmindstherapy">
                  <img
                    src="/FB-icon.png"
                    alt="Facebook Icon"
                    className="socials-linkout-icon-img"
                  />
                </Link>
              </div>
              <div className="socials-linkout-icon-container">
                <Link target="_blank" rel="noreferrer" href="https://www.tiktok.com/@groundedmindstherapy">
                  <img
                    src="/TicTok-icon.png"
                    alt="TikTok Icon"
                    className="socials-linkout-icon-img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
