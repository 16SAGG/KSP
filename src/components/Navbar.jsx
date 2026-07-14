import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
            padding: '0px 40px',
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
                        height: '57px',
                        objectFit: 'contain',
                        display:'block'
                    }}
                />
            </a>
            
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

            {/* Mobile Dropdown Menu */}
            <div className={`nav-mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="nav-mobile-links">
                    <Link text={'Home'} goTo={'#home'} onClick={handleLinkClick} />
                    <Link text={'About'} goTo={'#about'} onClick={handleLinkClick} />
                    <Link text={'Services'} goTo={'#services'} onClick={handleLinkClick} />
                    <Link text={'Projects'} goTo={'#projects'} onClick={handleLinkClick} />
                    <Link text={'Partners'} goTo={'#partners'} onClick={handleLinkClick} />
                    <Link text={'Contact'} goTo={'#contact'} onClick={handleLinkClick} />
                </div>
                <div className="nav-mobile-actions">
                    <a
                        style={{
                            textDecoration: 'none',
                            font: '600 14.5px "Source Sans 3", sans-serif',
                            color: 'rgb(22, 35, 47)',
                            border: '1px solid rgba(13, 27, 42, 0.22)',
                            padding: '10px 16px',
                            borderRadius: '7px'
                        }}
                        href="KSP Brochure - v2.pdf"
                        download
                        onClick={handleLinkClick}
                    >
                        Brochure
                    </a>
                    <a
                        style={{
                            textDecoration: 'none',
                            font: '700 14.5px "Source Sans 3", sans-serif',
                            color: 'rgb(22, 35, 47)',
                            background : 'rgb(111, 207, 151)',
                            padding: '10px 18px',
                            borderRadius: '7px'
                        }}
                        href='#contact'
                        onClick={handleLinkClick}
                    >
                        Let's Talk
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
