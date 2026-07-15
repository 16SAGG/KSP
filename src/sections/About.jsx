import { useLanguage } from '../LanguageContext'
import './About.css'

const aboutTranslations = {
  en: {
    tag: "About KSP Projectos",
    title: "Who we are.",
    desc1: "KSP Projectos is an export and supply company based in Portugal, specialized in providing equipment, raw materials, and products for the oil and gas industry, and for the commercial and energy sectors, to clients across Europe, America, Africa, and Asia. In addition to industrial supply, we actively engage in the commercialization of hydrocarbons and essential energy commodities.",
    desc2: "Our core business is sourcing and exporting: pipes, valves, instrumentation, electrical equipment, pumping systems, specialized hydrocarbon measurement systems, heavy machinery, and specialized chemicals, drawn from a qualified international supplier network and delivered reliably to where our clients operate.",
    mission: "Mission",
    missionDesc: "To supply specialized equipment, raw materials, and products for the oil & gas, commercial, and energy sectors, obtained responsibly and backed by qualified technical support wherever a specific engagement requires it, so that our clients meet their operational goals on time and without compromise on safety or quality.",
    vision: "Vision",
    visionDesc: "To be the trusted bridge between Europe and the oil & gas industry and energy markets of America, Africa, and Asia, recognized as the reference organization for companies that require the specialized supply and technical accompaniment from a single accountable partner.",
    valuePropTitle: "Strategic positioning & value proposition",
    value1Title: "Supply-Led, Technically Backed",
    value1Desc: "A reliable export and supply partner and, where the engagement requires it, one that can also stand behind the equipment with qualified installation and field support.",
    value2Title: "Geographic Reach",
    value2Desc: "A European base with active export lines across America, Africa, and Asia, positioning KSP Projectos as a genuine bridge between European sourcing and these markets.",
    value3Title: "Sector Depth",
    value3Desc: "Deep specialization in oil, gas, petrochemical, and energy sectors, with supply of equipment and material.",
    value4Title: "Support Where It Counts",
    value4Desc: "Technical support (installation accompaniment, calibration, risk and reliability studies, engineering, and project technical assistance) is selectively applied to engagements where it reduces real execution risk for the client.",
    cycleTitle: "From customer needs to customer satisfaction, guided by our process map.",
    cycleNeeds: "Customer Needs",
    cycleSatisfaction: "Customer Satisfaction",
    cycleGovernance: "Governed by the strategies, policies, standards, laws, and procedures for import and export in each country",
    step1: "Technical & Financial Planning",
    step2: "Procure",
    step3: "Logistics & Storage",
    step4: "Import & Export",
    step5: "Distribution",
    bottom1: "Control & Follow-up",
    bottom2: "Quality Assurance · Environmental Preservation",
    bottom3: "Human Resources · Administration"
  },
  pt: {
    tag: "Sobre a KSP Projectos",
    title: "Quem somos.",
    desc1: "A KSP Projectos é uma empresa de exportação e fornecimento sediada em Portugal, especializada no fornecimento de equipamentos, matérias-primas e produtos para a indústria de petróleo e gás, e para os setores comercial e de energia, a clientes em toda a Europa, América, África e Ásia. Além do fornecimento industrial, participamos ativamente na comercialização de hidrocarbonetos e commodities energéticas essenciais.",
    desc2: "A nossa atividade principal consiste na aquisição e exportação de: tubos, válvulas, instrumentação, equipamentos elétricos, sistemas de bombagem, sistemas especializados de medição de hidrocarbonetos, maquinaria pesada e produtos químicos especializados, provenientes de uma rede qualificada de fornecedores internacionais e entregues com fiabilidade onde os nossos clientes operam.",
    mission: "Missão",
    missionDesc: "Fornecer equipamentos especializados, matérias-primas e produtos para os setores de petróleo e gás, comercial e de energia, obtidos de forma responsável e apoiados por suporte técnico qualificado sempre que um compromisso específico o exija, de modo a que os nossos clientes atinjam os seus objetivos operacionais a tempo e sem comprometer a segurança ou a qualidade.",
    vision: "Visão",
    visionDesc: "Ser a ponte de confiança entre a Europa e a indústria de petróleo e gás e os mercados de energia da América, África e Ásia, reconhecida como a organização de referência para empresas que exigem fornecimento especializado e acompanhamento técnico de um único parceiro responsável.",
    valuePropTitle: "Posicionamento estratégico & proposta de valor",
    value1Title: "Orientado ao Fornecimento, com Apoio Técnico",
    value1Desc: "Um parceiro fiável de exportação e fornecimento e, onde o compromisso o exigir, que também apoie o equipamento com instalação qualificada e suporte de campo.",
    value2Title: "Alcance Geográfico",
    value2Desc: "Uma base europeia com linhas de exportação ativas em toda a América, África e Ásia, posicionando a KSP Projectos como uma verdadeira ponte entre o fornecimento europeu e estes mercados.",
    value3Title: "Profundidade no Setor",
    value3Desc: "Especialização profunda nos setores de petróleo, gás, petroquímica e energia, com fornecimento de equipamentos e materiais.",
    value4Title: "Suporte Onde Realmente Importa",
    value4Desc: "O suporte técnico (acompanhamento de instalação, calibração, estudos de risco e fiabilidade, engenharia e assistência técnica de projeto) é aplicado seletivamente a compromissos onde reduz o risco real de execução para o cliente.",
    cycleTitle: "Desde as necessidades dos clientes até à satisfação dos clientes, orientados pelo nosso mapa de processos.",
    cycleNeeds: "Necessidades do Cliente",
    cycleSatisfaction: "Satisfação do Cliente",
    cycleGovernance: "Regido pelas estratégias, políticas, normas, leis e procedimentos de importação e exportação de cada país",
    step1: "Planeamento Técnico & Financeiro",
    step2: "Aquisição",
    step3: "Logística & Armazenamento",
    step4: "Importação & Exportação",
    step5: "Distribuição",
    bottom1: "Controlo & Acompanhamento",
    bottom2: "Garantia de Qualidade · Preservação Ambiental",
    bottom3: "Recursos Humanos · Administração"
  }
}

function About() {
  const { lang } = useLanguage()
  const t = aboutTranslations[lang] || aboutTranslations.en

  return (
    <div id="about" data-dc-tpl="46" data-screen-label="About">
        <div data-dc-tpl="47" style={{ background: 'rgb(13, 27, 42)', padding: 'clamp(50px, 10vw, 80px) clamp(20px, 5vw, 40px) clamp(40px, 8vw, 64px)' }}>
            <div data-dc-tpl="48" style={{ maxWidth: '900px', margin: '0px auto', textAlign: 'center' }}>
            <div
                data-dc-tpl="49"
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
            <h1 data-dc-tpl="50" style={{ font: '800 clamp(28px, 7vw, 36px) / 1.25 Sora, sans-serif', color: 'rgb(255, 255, 255)', margin: '0px' }}>
                {t.title}
            </h1>
            </div>
        </div>

        <div data-dc-tpl="51" style={{ display: 'flex', justifyContent: 'center', padding: 'clamp(30px, 5vw, 44px) clamp(20px, 5vw, 40px) 0px' }}></div>

        <div data-dc-tpl="52" style={{ maxWidth: '1280px', margin: '0px auto', padding: 'clamp(40px, 8vw, 70px) clamp(20px, 5vw, 40px)' }}>
            <div
            data-dc-tpl="53"
            style={{
                font: '400 clamp(15px, 4vw, 17px) / 1.75 "Source Sans 3", sans-serif',
                color: 'rgba(22, 35, 47, 0.72)',
                maxWidth: '820px',
                margin: '0px auto clamp(12px, 3vw, 16px)'
            }}
            >
            <p 
                data-dc-tpl="54" 
                style={{ 
                lineHeight: '150%', 
                marginTop: '0pt', 
                marginBottom: '0pt', 
                marginLeft: '0in', 
                direction: 'ltr', 
                unicodeBidi: 'embed', 
                wordBreak: 'normal', 
                color: 'rgba(22, 35, 47, 0.72)', 
                fontSize: '17px', 
                textAlign: 'center' 
                }}
            >
                <span data-dc-tpl="58" style={{ fontSize: '17px', color: 'rgb(71, 85, 105)', textAlign: 'center', fontFamily: 'Arial' }}>
                {t.desc1}
                </span>
            </p>
            </div>
            <p 
            data-dc-tpl="59" 
            style={{ 
                font: '400 17px / 1.75 "Source Sans 3", sans-serif', 
                color: 'rgba(22, 35, 47, 0.72)', 
                maxWidth: '820px', 
                margin: '0px auto', 
                textAlign: 'center' 
            }}
            >
            {t.desc2}
            </p>
        </div>

        <div
            data-dc-tpl="60"
            style={{
            maxWidth: '1280px',
            margin: '0px auto',
            padding: '0px clamp(20px, 5vw, 40px) clamp(40px, 8vw, 70px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(16px, 4vw, 24px)'
            }}
        >
            <div data-dc-tpl="61" style={{ background: 'rgb(13, 27, 42)', borderRadius: '14px', padding: 'clamp(24px, 5vw, 38px)' }}>
            <div data-dc-tpl="62" style={{ font: '700 clamp(18px, 5vw, 22px) Sora, sans-serif', color: 'rgb(111, 207, 151)', marginBottom: 'clamp(10px, 2vw, 14px)' }}>
                {t.mission}
            </div>
            <div data-dc-tpl="63" style={{ font: '400 clamp(14px, 3.5vw, 15.5px) / 1.7 "Source Sans 3", sans-serif', color: 'rgba(255, 255, 255, 0.85)' }}>
                {t.missionDesc}
            </div>
            </div>
            <div data-dc-tpl="64" style={{ background: 'rgb(234, 247, 239)', borderRadius: '14px', padding: 'clamp(24px, 5vw, 38px)' }}>
            <div data-dc-tpl="65" style={{ font: '700 clamp(18px, 5vw, 22px) Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: 'clamp(10px, 2vw, 14px)' }}>
                {t.vision}
            </div>
            <div data-dc-tpl="66" style={{ font: '400 clamp(14px, 3.5vw, 15.5px) / 1.7 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                {t.visionDesc}
            </div>
            </div>
        </div>

        <div data-dc-tpl="67" style={{ background: 'rgb(238, 244, 240)', padding: 'clamp(40px, 8vw, 70px) clamp(20px, 5vw, 40px)' }}>
            <div data-dc-tpl="68" style={{ maxWidth: '1280px', margin: '0px auto' }}>
                <h2 data-dc-tpl="69" style={{ font: '700 clamp(22px, 6vw, 28px) Sora, sans-serif', color: 'rgb(13, 27, 42)', margin: '0px 0px clamp(24px, 5vw, 36px)', textAlign: 'center' }}>
                    {t.valuePropTitle}
                </h2>
                <div data-dc-tpl="70" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(16px, 4vw, 22px)' }}>
                    <div data-dc-tpl="72" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: 'clamp(18px, 4vw, 26px) clamp(16px, 4vw, 22px)' }}>
                    <div data-dc-tpl="73" style={{ font: '800 clamp(18px, 5vw, 20px) Sora, sans-serif', color: 'rgb(169, 220, 191)', marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                        <span className="sc-interp">01</span>
                    </div>
                    <div data-dc-tpl="74" style={{ font: '700 clamp(13px, 4vw, 15px) / 1.35 Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
                        <span className="sc-interp">{t.value1Title}</span>
                    </div>
                    <div data-dc-tpl="75" style={{ font: '400 clamp(12px, 3vw, 13.5px) / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.65)' }}>
                        <span className="sc-interp">{t.value1Desc}</span>
                    </div>
                    </div>

                    <div data-dc-tpl="72" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: 'clamp(18px, 4vw, 26px) clamp(16px, 4vw, 22px)' }}>
                    <div data-dc-tpl="73" style={{ font: '800 clamp(18px, 5vw, 20px) Sora, sans-serif', color: 'rgb(169, 220, 191)', marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                        <span className="sc-interp">02</span>
                    </div>
                    <div data-dc-tpl="74" style={{ font: '700 clamp(13px, 4vw, 15px) / 1.35 Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
                        <span className="sc-interp">{t.value2Title}</span>
                    </div>
                    <div data-dc-tpl="75" style={{ font: '400 clamp(12px, 3vw, 13.5px) / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.65)' }}>
                        <span className="sc-interp">{t.value2Desc}</span>
                    </div>
                    </div>

                    <div data-dc-tpl="72" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: 'clamp(18px, 4vw, 26px) clamp(16px, 4vw, 22px)' }}>
                    <div data-dc-tpl="73" style={{ font: '800 clamp(18px, 5vw, 20px) Sora, sans-serif', color: 'rgb(169, 220, 191)', marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                        <span className="sc-interp">03</span>
                    </div>
                    <div data-dc-tpl="74" style={{ font: '700 clamp(13px, 4vw, 15px) / 1.35 Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
                        <span className="sc-interp">{t.value3Title}</span>
                    </div>
                    <div data-dc-tpl="75" style={{ font: '400 clamp(12px, 3vw, 13.5px) / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.65)' }}>
                        <span className="sc-interp">{t.value3Desc}</span>
                    </div>
                    </div>

                    <div data-dc-tpl="72" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: 'clamp(18px, 4vw, 26px) clamp(16px, 4vw, 22px)' }}>
                    <div data-dc-tpl="73" style={{ font: '800 clamp(18px, 5vw, 20px) Sora, sans-serif', color: 'rgb(169, 220, 191)', marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                        <span className="sc-interp">04</span>
                    </div>
                    <div data-dc-tpl="74" style={{ font: '700 clamp(13px, 4vw, 15px) / 1.35 Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
                        <span className="sc-interp">{t.value4Title}</span>
                    </div>
                    <div data-dc-tpl="75" style={{ font: '400 clamp(12px, 3vw, 13.5px) / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.65)' }}>
                        <span className="sc-interp">{t.value4Desc}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div data-dc-tpl="76" style={{ maxWidth: '1280px', margin: '0px auto', padding: 'clamp(50px, 10vw, 90px) clamp(20px, 5vw, 40px)' }}>
            <div data-dc-tpl="77" style={{ textAlign: 'center', maxWidth: '680px', margin: '0px auto clamp(30px, 8vw, 48px)' }}>
            <h2 data-dc-tpl="78" style={{ font: '700 clamp(22px, 6vw, 32px) / 1.25 Sora, sans-serif', color: 'rgb(13, 27, 42)', margin: '0px' }}>
                {t.cycleTitle}
            </h2>
            </div>

            <div
                data-dc-tpl="79"
                className="cycle-wrap"
                style={{
                    display: 'grid', gridTemplateColumns: 'clamp(100px, 20%, 140px) 1fr clamp(100px, 20%, 140px)', gap: 'clamp(10px, 2vw, 14px)'
                }}
            >
            <div
                data-dc-tpl="80"
                className="cycle-needs"
                style={{
                gridArea: '1 / 1 / 4',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '20px',
                backgroundColor: 'rgb(13, 27, 42)'
                }}
            >
                <div data-dc-tpl="81" style={{ font: '700 17px Sora, sans-serif', color: 'rgb(111, 207, 151)' }}>
                {t.cycleNeeds}
                </div>
            </div>

            <div
                data-dc-tpl="82"
                className="cycle-governance"
                style={{
                gridColumn: 2,
                background: 'rgb(231, 237, 250)',
                borderRadius: '10px',
                padding: 'clamp(14px, 4vw, 18px) clamp(16px, 4vw, 24px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
                }}
            >
                <div data-dc-tpl="83" style={{ font: '700 clamp(13px, 3.5vw, 15px) / 1.5 "Source Sans 3", sans-serif', color: 'rgb(39, 64, 107)' }}>
                {t.cycleGovernance}
                </div>
            </div>

            <div
                data-dc-tpl="84"
                className="cycle-satisfaction"
                style={{
                gridArea: '1 / 3 / 4',
                background: 'rgb(63, 168, 115)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '20px'
                }}
            >
                <div data-dc-tpl="85" style={{ font: '700 17px Sora, sans-serif', color: 'rgb(13, 27, 42)' }}>
                {t.cycleSatisfaction}
                </div>
            </div>

            <div data-dc-tpl="86-91-wrap" className="cycle-steps-bottom" style={{ gridColumn: 2, display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 2vw, 14px)' }}>
            <div data-dc-tpl="86" className="cycle-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
                <div data-dc-tpl="88" style={{ background: 'rgb(234, 247, 239)', borderRadius: '10px', padding: '18px', minHeight: '110px' }}>
                <div data-dc-tpl="89" style={{ font: '700 13px Sora, sans-serif', color: 'rgb(63, 168, 115)', marginBottom: '10px' }}>
                    <span className="sc-interp">01</span>
                </div>
                <div data-dc-tpl="90" style={{ font: '700 15px / 1.35 "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>
                    <span className="sc-interp">{t.step1}</span>
                </div>
                </div>

                <div data-dc-tpl="88" style={{ background: 'rgb(211, 236, 220)', borderRadius: '10px', padding: '18px', minHeight: '110px' }}>
                <div data-dc-tpl="89" style={{ font: '700 13px Sora, sans-serif', color: 'rgb(47, 143, 95)', marginBottom: '10px' }}>
                    <span className="sc-interp">02</span>
                </div>
                <div data-dc-tpl="90" style={{ font: '700 15px / 1.35 "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>
                    <span className="sc-interp">{t.step2}</span>
                </div>
                </div>

                <div data-dc-tpl="88" style={{ background: 'rgb(169, 220, 191)', borderRadius: '10px', padding: '18px', minHeight: '110px' }}>
                <div data-dc-tpl="89" style={{ font: '700 13px Sora, sans-serif', color: 'rgb(31, 110, 70)', marginBottom: '10px' }}>
                    <span className="sc-interp">03</span>
                </div>
                <div data-dc-tpl="90" style={{ font: '700 15px / 1.35 "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>
                    <span className="sc-interp">{t.step3}</span>
                </div>
                </div>

                <div data-dc-tpl="88" style={{ background: 'rgb(127, 203, 158)', borderRadius: '10px', padding: '18px', minHeight: '110px' }}>
                <div data-dc-tpl="89" style={{ font: '700 13px Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '10px' }}>
                    <span className="sc-interp">04</span>
                </div>
                <div data-dc-tpl="90" style={{ font: '700 15px / 1.35 "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>
                    <span className="sc-interp">{t.step4}</span>
                </div>
                </div>

                <div data-dc-tpl="88" style={{ background: 'rgb(76, 175, 125)', borderRadius: '10px', padding: '18px', minHeight: '110px' }}>
                <div data-dc-tpl="89" style={{ font: '700 13px Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '10px' }}>
                    <span className="sc-interp">05</span>
                </div>
                <div data-dc-tpl="90" style={{ font: '700 15px / 1.35 "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>
                    <span className="sc-interp">{t.step5}</span>
                </div>
                </div>
            </div>

            <div data-dc-tpl="91" className="cycle-bottom" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                <div 
                data-dc-tpl="92" 
                style={{ 
                    background: 'rgb(255, 255, 255)', 
                    border: '1px solid rgba(13, 27, 42, 0.1)', 
                    borderRadius: '10px', 
                    padding: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center' 
                }}
                >
                <div data-dc-tpl="93" style={{ font: '700 14.5px / 1.4 "Source Sans 3", sans-serif', color: 'rgb(39, 64, 107)' }}>
                    {t.bottom1}
                </div>
                </div>
                
                <div 
                data-dc-tpl="94" 
                style={{ 
                    background: 'rgb(255, 255, 255)', 
                    border: '1px solid rgba(13, 27, 42, 0.1)', 
                    borderRadius: '10px', 
                    padding: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center' 
                }}
                >
                <div data-dc-tpl="95" style={{ font: '700 14.5px / 1.4 "Source Sans 3", sans-serif', color: 'rgb(39, 64, 107)' }}>
                    {t.bottom2}
                </div>
                </div>
                
                <div 
                data-dc-tpl="96" 
                style={{ 
                    background: 'rgb(255, 255, 255)', 
                    border: '1px solid rgba(13, 27, 42, 0.1)', 
                    borderRadius: '10px', 
                    padding: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center' 
                }}
                >
                <div data-dc-tpl="97" style={{ font: '700 14.5px / 1.4 "Source Sans 3", sans-serif', color: 'rgb(39, 64, 107)' }}>
                    {t.bottom3}
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About