import { useLanguage } from '../LanguageContext'

const partnersTranslations = {
  en: {
    tag: "Partners",
    title: "Companies we work alongside.",
    desc: "A network of manufacturers and technical partners that back the equipment and materials we supply."
  },
  pt: {
    tag: "Parceiros",
    title: "Empresas com quem trabalhamos.",
    desc: "Uma rede de fabricantes e parceiros técnicos que apoiam os equipamentos e materiais que fornecemos."
  }
}

function Partners() {
  const { lang } = useLanguage()
  const t = partnersTranslations[lang] || partnersTranslations.en

  return(
    <div id="partners" data-dc-tpl="154" data-screen-label="Partners">
        <div data-dc-tpl="155" style={{ background: 'rgb(13, 27, 42)', padding: 'clamp(50px, 10vw, 80px) clamp(20px, 5vw, 40px) clamp(40px, 8vw, 64px)' }}>
            <div data-dc-tpl="156" style={{ maxWidth: '900px', margin: '0px auto', textAlign: 'center' }}>
            <div
                data-dc-tpl="157"
                style={{
                font: '700 clamp(10px, 2.5vw, 12.5px) "Source Sans 3", sans-serif',
                letterSpacing: '2px',
                color: 'rgb(111, 207, 151)',
                textTransform: 'uppercase',
                marginBottom: 'clamp(10px, 3vw, 14px)'
                }}
            >
                {t.tag}
            </div>
            <h1 data-dc-tpl="158" style={{ font: '800 clamp(28px, 7vw, 36px) / 1.25 Sora, sans-serif', color: 'rgb(255, 255, 255)', margin: '0px 0px clamp(12px, 3vw, 16px)' }}>
                {t.title}
            </h1>
            <p data-dc-tpl="159" style={{ font: '400 clamp(14px, 3.5vw, 16px) / 1.6 "Source Sans 3", sans-serif', color: 'rgba(255, 255, 255, 0.75)', margin: '0px' }}>
                {t.desc}
            </p>
            </div>
        </div>

        <div data-dc-tpl="160" style={{ maxWidth: '1280px', margin: '0px auto', padding: 'clamp(40px, 8vw, 70px) clamp(20px, 5vw, 40px)' }}>
            <div
            data-dc-tpl="161"
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'clamp(16px, 4vw, 26px)'
            }}
            >
            {/* Partner 1 */}
            <div
                data-dc-tpl="163"
                style={{
                border: '1px solid rgba(13, 27, 42, 0.08)',
                borderRadius: '14px',
                padding: 'clamp(20px, 5vw, 36px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'clamp(120px, 25vw, 160px)'
                }}
            >
                <img
                data-dc-tpl="164"
                src="partner-dl-service.png"
                alt="DL Service BV"
                style={{
                    maxWidth: '100%',
                    maxHeight: 'clamp(60px, 15vw, 96px)',
                    objectFit: 'contain',
                }}
                />
            </div>

            {/* Partner 2 */}
            <div
                data-dc-tpl="163"
                style={{
                border: '1px solid rgba(13, 27, 42, 0.08)',
                borderRadius: '14px',
                padding: 'clamp(20px, 5vw, 36px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'clamp(120px, 25vw, 160px)'
                }}
            >
                <img
                data-dc-tpl="164"
                src="partner-tesco.png"
                alt="TESCO — Trade Energy & Services Co."
                style={{
                    maxWidth: '100%',
                    maxHeight: 'clamp(60px, 15vw, 96px)',
                    objectFit: 'contain',
                }}
                />
            </div>

            {/* Partner 3 */}
            <div
                data-dc-tpl="163"
                style={{
                border: '1px solid rgba(13, 27, 42, 0.08)',
                borderRadius: '14px',
                padding: 'clamp(20px, 5vw, 36px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'clamp(120px, 25vw, 160px)'
                }}
            >
                <img
                data-dc-tpl="164"
                src="auyanteam.png"
                alt="Auyanteam."
                style={{
                    maxWidth: '100%',
                    maxHeight: 'clamp(60px, 15vw, 96px)',
                    objectFit: 'contain',
                }}
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Partners