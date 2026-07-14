import { useLanguage } from '../LanguageContext'

const projectsTranslations = {
  en: {
    tag: "Track Record",
    title: "Documented and verifiable projects.",
    desc: "Engineering, telecommunications, instrumentation, and geotechnical studies delivered for international operators.",
    p1: "Procurement of electrical materials and instrumentation.",
    p2: "Basic and detailed engineering for interconnections for the early start-up of the Vacuum Distillation Unit.",
    p3: "Telecommunications and instrumentation work for the Vacuum Distillation Unit interconnections.",
    p4: "Geotechnical and structural engineering study."
  },
  pt: {
    tag: "Histórico",
    title: "Projetos documentados e verificáveis.",
    desc: "Engenharia, telecomunicações, instrumentação e estudos geotécnicos entregues para operadores internacionais.",
    p1: "Fornecimento de materiais elétricos e de instrumentação.",
    p2: "Engenharia básica e detalhada para interligações para o arranque antecipado da Unidade de Destilação em Vácuo.",
    p3: "Trabalhos de telecomunicações e instrumentação para as interligações da Unidade de Destilação em Vácuo.",
    p4: "Estudo geotécnico e de engenharia estrutural."
  }
}

function Projects() {
  const { lang } = useLanguage()
  const t = projectsTranslations[lang] || projectsTranslations.en

  return(
    <div id="projects" data-dc-tpl="140" data-screen-label="Projects">
        <div data-dc-tpl="141" style={{ background: 'rgb(13, 27, 42)', padding: '80px 40px 64px' }}>
            <div data-dc-tpl="142" style={{ maxWidth: '900px', margin: '0px auto', textAlign: 'center' }}>
            <div 
                data-dc-tpl="143" 
                style={{ 
                font: '700 12.5px "Source Sans 3", sans-serif', 
                letterSpacing: '2px', 
                color: 'rgb(111, 207, 151)', 
                textTransform: 'uppercase', 
                marginBottom: '14px' 
                }}
            >
                {t.tag}
            </div>
            <h1 data-dc-tpl="144" style={{ font: '800 36px / 1.25 Sora, sans-serif', color: 'rgb(255, 255, 255)', margin: '0px 0px 16px' }}>
                {t.title}
            </h1>
            <p data-dc-tpl="145" style={{ font: '400 16px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(255, 255, 255, 0.75)', margin: '0px' }}>
                {t.desc}
            </p>
            </div>
        </div>

        <div 
            data-dc-tpl="146" 
            style={{ 
            maxWidth: '900px', 
            margin: '0px auto', 
            padding: '70px 40px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0px' 
            }}
        >
            {/* Proyecto 1 */}
            <div data-dc-tpl="148" style={{ display: 'flex', gap: '24px', padding: '28px 0px', borderBottom: '1px solid rgba(13, 27, 42, 0.09)' }}>
            <div data-dc-tpl="149" style={{ flex: '0 0 auto', width: '74px' }}>
                <div data-dc-tpl="150" style={{ font: '800 22px Sora, sans-serif', color: 'rgb(63, 168, 115)' }}>
                <span className="sc-interp">2023</span>
                </div>
            </div>
            <div data-dc-tpl="151">
                <div data-dc-tpl="152" style={{ font: '700 17px Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '6px' }}>
                <span className="sc-interp">Consorcio Paldaca, C.A.</span>
                </div>
                <div data-dc-tpl="153" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)' }}>
                <span className="sc-interp">{t.p1}</span>
                </div>
            </div>
            </div>

            {/* Proyecto 2 */}
            <div data-dc-tpl="148" style={{ display: 'flex', gap: '24px', padding: '28px 0px', borderBottom: '1px solid rgba(13, 27, 42, 0.09)' }}>
            <div data-dc-tpl="149" style={{ flex: '0 0 auto', width: '74px' }}>
                <div data-dc-tpl="150" style={{ font: '800 22px Sora, sans-serif', color: 'rgb(63, 168, 115)' }}>
                <span className="sc-interp">2022</span>
                </div>
            </div>
            <div data-dc-tpl="151">
                <div data-dc-tpl="152" style={{ font: '700 17px Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '6px' }}>
                <span className="sc-interp">China Railway (HK) Trading Ltd.</span>
                </div>
                <div data-dc-tpl="153" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)' }}>
                <span className="sc-interp">{t.p2}</span>
                </div>
            </div>
            </div>

            {/* Proyecto 3 */}
            <div data-dc-tpl="148" style={{ display: 'flex', gap: '24px', padding: '28px 0px', borderBottom: '1px solid rgba(13, 27, 42, 0.09)' }}>
            <div data-dc-tpl="149" style={{ flex: '0 0 auto', width: '74px' }}>
                <div data-dc-tpl="150" style={{ font: '800 22px Sora, sans-serif', color: 'rgb(63, 168, 115)' }}>
                <span className="sc-interp">2022</span>
                </div>
            </div>
            <div data-dc-tpl="151">
                <div data-dc-tpl="152" style={{ font: '700 17px Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '6px' }}>
                <span className="sc-interp">China Railway (HK) Trading Ltd.</span>
                </div>
                <div data-dc-tpl="153" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)' }}>
                <span className="sc-interp">{t.p3}</span>
                </div>
            </div>
            </div>

            {/* Proyecto 4 */}
            <div data-dc-tpl="148" style={{ display: 'flex', gap: '24px', padding: '28px 0px', borderBottom: '1px solid rgba(13, 27, 42, 0.09)' }}>
            <div data-dc-tpl="149" style={{ flex: '0 0 auto', width: '74px' }}>
                <div data-dc-tpl="150" style={{ font: '800 22px Sora, sans-serif', color: 'rgb(63, 168, 115)' }}>
                <span className="sc-interp">2022</span>
                </div>
            </div>
            <div data-dc-tpl="151">
                <div data-dc-tpl="152" style={{ font: '700 17px Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '6px' }}>
                <span className="sc-interp">China Railway (HK) Trading Ltd.</span>
                </div>
                <div data-dc-tpl="153" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)' }}>
                <span className="sc-interp">{t.p4}</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects