import { useLanguage } from '../LanguageContext'

const footerTranslations = {
  en: {
    rights: "© 2026 KSP Projectos. All rights reserved."
  },
  pt: {
    rights: "© 2026 KSP Projectos. Todos os direitos reservados."
  }
}

function Footer() {
  const { lang } = useLanguage()
  const t = footerTranslations[lang] || footerTranslations.en

  return (
    <div data-dc-tpl="216" style={{ padding: 'clamp(30px, 5vw, 44px) clamp(20px, 5vw, 40px)', backgroundColor: 'rgb(255, 255, 255)' }}>
        <div
            data-dc-tpl="217"
            style={{
            maxWidth: '1280px',
            margin: '0px auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(16px, 4vw, 20px)'
            }}
        >
            <div
            data-dc-tpl="218"
            style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgb(255, 255, 255)',
                borderRadius: '7px',
                padding: '5px 9px'
            }}
            >
            <img
                data-dc-tpl="219"
                src="ksp-logo.png"
                alt="KSP Projectos — Kinetic Scale Projectos, LDA"
                style={{
                height: 'clamp(40px, 10vw, 70px)',
                objectFit: 'contain',
                display: 'block',
                width: 'auto'
                }}
            />
            </div>
            <div
            data-dc-tpl="220"
            style={{
                font: '400 clamp(11px, 2.5vw, 13px) "Source Sans 3", sans-serif',
                color: 'rgba(255, 255, 255, 0.5)'
            }}
            >
            Kinetic Scale Projectos, LDA · PT-516835750 · Portugal, Europe
            </div>
            <div
            data-dc-tpl="221"
            style={{
                font: '400 clamp(11px, 2.5vw, 13px) "Source Sans 3", sans-serif',
                color: 'rgba(22, 35, 47, 0.5)'
            }}
            >
            {t.rights}
            </div>
        </div>
    </div>
  )
}

export default Footer