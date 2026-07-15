import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import './Navbar.css'

const menuTranslations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    partners: 'Partners',
    contact: 'Contact',
    brochure: 'Brochure',
    letsTalk: "Let's Talk"
  },
  pt: {
    home: 'Início',
    about: 'Sobre Nós',
    services: 'Serviços',
    projects: 'Projetos',
    partners: 'Parceiros',
    contact: 'Contacto',
    brochure: 'Brochura',
    letsTalk: 'Fale Connosco'
  }
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, changeLanguage } = useLanguage()

  const t = menuTranslations[lang] || menuTranslations.en

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div
        style={{
            position:'sticky',
            top: '0px',
            zIndex: 50,
            background: '#FFF',
            height:'76px',
            borderBottom: '1px solid rgba(13, 27, 42, 0.08)',
            boxShadow: 'rgba(13, 27, 42, 0.05) 0px 2px 14px'
        }}
    >
        <div
         style={{
            margin: '0px auto',
            padding: '0px clamp(16px, 5vw, 40px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height:'100%'
         }}
        >
            <a
                style={{
                    display:'flex',
                    alignItems:'center',
                    textDecoration: 'none'
                }}
                href='#home'
            >
                <img
                    src="ksp-logo.png"
                    alt="KSP Projectos — Kinetic Scale Projectos, LDA"
                    style={{
                        height: 'clamp(40px, 10vw, 57px)',
                        objectFit: 'contain',
                        display:'block'
                    }}
                />
            </a>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 3vw, 24px)' }}>
                {/* Language Switcher */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        font: '600 clamp(11px, 2.5vw, 13.5px) "Source Sans 3", sans-serif',
                        background: 'rgba(13, 27, 42, 0.03)',
                        padding: '6px clamp(8px, 2vw, 12px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(13, 27, 42, 0.08)'
                    }}
                >
                    <span 
                        onClick={() => changeLanguage('en')} 
                        style={{ 
                            color: lang === 'en' ? 'rgb(111, 207, 151)' : 'rgba(22, 35, 47, 0.6)', 
                            cursor: 'pointer',
                            fontWeight: lang === 'en' ? '700' : '600',
                            transition: 'color 0.2s ease'
                        }}
                    >
                        EN
                    </span>
                    <span style={{ color: 'rgba(13, 27, 42, 0.15)' }}>|</span>
                    <span 
                        onClick={() => changeLanguage('pt')} 
                        style={{ 
                            color: lang === 'pt' ? 'rgb(111, 207, 151)' : 'rgba(22, 35, 47, 0.6)', 
                            cursor: 'pointer',
                            fontWeight: lang === 'pt' ? '700' : '600',
                            transition: 'color 0.2s ease'
                        }}
                    >
                        PT
                    </span>
                </div>

                {/* Hamburger Button */}
                <button 
                    className={`hamburger-btn ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`nav-mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="nav-mobile-links">
                    <Link text={t.home} goTo={'#home'} onClick={handleLinkClick} />
                    <Link text={t.about} goTo={'#about'} onClick={handleLinkClick} />
                    <Link text={t.services} goTo={'#services'} onClick={handleLinkClick} />
                    <Link text={t.projects} goTo={'#projects'} onClick={handleLinkClick} />
                    <Link text={t.partners} goTo={'#partners'} onClick={handleLinkClick} />
                    <Link text={t.contact} goTo={'#contact'} onClick={handleLinkClick} />
                </div>
                <div className="nav-mobile-actions">
                    <a
                        style={{
                            textDecoration: 'none',
                            font: '600 clamp(12px, 3vw, 14.5px) "Source Sans 3", sans-serif',
                            color: 'rgb(22, 35, 47)',
                            border: '1px solid rgba(13, 27, 42, 0.22)',
                            padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 16px)',
                            borderRadius: '7px'
                        }}
                        href="KSP Brochure - v2.pdf"
                        download
                        onClick={handleLinkClick}
                    >
                        {t.brochure}
                    </a>
                    <a
                        style={{
                            textDecoration: 'none',
                            font: '700 clamp(12px, 3vw, 14.5px) "Source Sans 3", sans-serif',
                            color: 'rgb(22, 35, 47)',
                            background : 'rgb(111, 207, 151)',
                            padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 18px)',
                            borderRadius: '7px'
                        }}
                        href='#contact'
                        onClick={handleLinkClick}
                    >
                        {t.letsTalk}
                    </a>
                </div>
            </div>
        </div>
    
    </div>
  )
}


function Link({text, goTo, onClick}) {
    return(
        <a
            style={{
                textDecoration: 'none',
                font: '600 14.5px "Source Sans 3", sans-serif',
                color: 'rgb(22, 35, 47)'
            }}
            href={goTo}
            onClick={onClick}
        >
            {text}
        </a> 
    )
}

export default Navbar
