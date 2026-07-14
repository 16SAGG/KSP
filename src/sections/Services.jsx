import { useLanguage } from '../LanguageContext'

const servicesTranslations = {
  en: {
    tag: "Our Services",
    title: "From material supply to installation accompaniment.",
    desc: "Export and supply are our core business. Technical and engineering support is a case-by-case complement applied where a specific supply engagement requires it.",
    s1Title: "Supply & Procurement",
    s1Desc: "Specialized hydrocarbon measurement systems (LACT), piping, valves, instrumentation, electrical equipment, pumping systems, containers, and chemicals for water treatment and oil & gas production.",
    s2Title: "Design & Engineering",
    s2Desc: "Engineering at any project stage, integrated project management, environmental and risk consulting.",
    s3Title: "Studies & Evaluations",
    s3Desc: "Environmental impact, hydrogeology, geotechnics, topography, constructability, financial evaluation, and risk & reliability studies.",
    s4Title: "Oil & Gas Field Services",
    s4Desc: "Chemical application and control, on-site technical assistance, multiphase flow metering for well testing, and integrated control systems.",
    s5Title: "Environmental Commitment",
    s5Desc: "Environmental responsibility is a sourcing criterion across every category — an operating principle, not a separate service line.",
    leftTitle: "Export & Product Supply",
    leftTag: "Core business",
    leftItem1: "Piping systems for the conduction of fluids used in the oil, petrochemical, and gas industries",
    leftItem2: "Equipment and spare parts for air conditioning, direct expansion, and chilled-water systems",
    leftItem3: "Instrumentation for pressure, temperature, flow, and level measurement, plus calibration, testing, and installation tools",
    leftItem4: "Valves and accessories for the oil, petrochemical, and gas industry",
    leftItem5: "Electrical and instrumentation equipment",
    leftItem6: "Underground and surface pumping systems, seals, couplings, air and nitrogen compressors, pressure vessels, and rotating heads",
    leftItem7: "Motors, transformers, batteries, rectifiers, switches, CCM, CDP, control panels, and electrical network components",
    leftItem8: "Custom containers, trailers, cranes, articulated arms, and heavy vehicles",
    leftItem9: "Vegetable oil, bentonite, dolomite, minerals, and chemicals for water treatment, oil and gas production, and well stimulation",
    leftItem10: "Multiphase flow measurement solutions for well testing and fiscal measurement units (LACT)",
    leftItem11: "Gas regulation and gas/oil separation solutions for hydrocarbon production",
    rightTitle: "Technical & Engineering Support",
    rightTag: "Case-by-case, tied to supply",
    rightItem1: "On-site installation accompaniment and specialized technical assistance with qualified personnel",
    rightItem2: "Engineering development and integrated project management, from feasibility through design, construction, commissioning, operation, and maintenance",
    rightItem3: "Environmental consulting and management; Environmental Impact, Hydrogeological, Hydraulic, and Geological-Geotechnical Studies; Topography; Constructability Studies",
    rightItem4: "Risk and reliability studies — HAZID, HAZOP, Quantitative ACR Risk Analysis, SIL-SIS Determination and Verification, Reliability Studies; Project Financial Evaluations",
    rightItem5: "Programming and integration of supervision and control systems; technical manuals for plant and process-unit start-up",
    rightItem6: "Oil & gas production field services: supply, application, monitoring and control of chemical products; multiphase flow-meter design and supply for well testing; field measurement for well testing; construction, installation, calibration, and testing",
    bottomTag: "Beyond Equipment Supply",
    bottomTitle: "Hydrocarbon & commodities commercialization.",
    bottomDesc: "KSP Projectos structures the commercial side of hydrocarbon and commodity flows — connecting producers, traders, and end users across our markets under the same accountable, single-partner model.",
    b1Title: "Physical Trading",
    b1Desc: "Sourcing and commercialization of crude oil, refined products, LPG/LNG, and industrial commodities for clients across Europe, America, Africa, and Asia.",
    b2Title: "Offtake & Supply Agreements",
    b2Desc: "Structuring offtake and supply arrangements that give producers reliable buyers and clients dependable, contracted volumes.",
    b3Title: "Logistics & Documentation",
    b3Desc: "Coordinating shipping, storage, customs clearance, and trade documentation so cargoes move without compliance friction.",
    b4Title: "Risk & Compliance",
    b4Desc: "Counterparty due diligence, KYC, and adherence to import/export regulation in every jurisdiction we operate in."
  },
  pt: {
    tag: "Os Nossos Serviços",
    title: "Do fornecimento de materiais ao acompanhamento de instalação.",
    desc: "A exportação e o fornecimento são a nossa atividade principal. O suporte técnico e de engenharia é um complemento caso a caso, aplicado quando um compromisso de fornecimento específico o exige.",
    s1Title: "Fornecimento & Aquisição",
    s1Desc: "Sistemas especializados de medição de hidrocarbonetos (LACT), tubagens, válvulas, instrumentação, equipamentos elétricos, sistemas de bombagem, contentores e produtos químicos para tratamento de água e produção de petróleo e gás.",
    s2Title: "Design & Engenharia",
    s2Desc: "Engenharia em qualquer fase do projeto, gestão integrada de projetos, consultoria ambiental e de risco.",
    s3Title: "Estudos & Avaliações",
    s3Desc: "Impacto ambiental, hidrogeologia, geotecnia, topografia, construtibilidade, avaliação financeira e estudos de risco e fiabilidade.",
    s4Title: "Serviços de Campo de Petróleo & Gás",
    s4Desc: "Aplicação e controlo de produtos químicos, assistência técnica no local, medição de caudal multifásico para testes de poços e sistemas integrados de controlo.",
    s5Title: "Compromisso Ambiental",
    s5Desc: "A responsabilidade ambiental é um critério de aquisição em todas as categorias — um princípio operacional, não uma linha de serviço separada.",
    leftTitle: "Exportação & Fornecimento de Produtos",
    leftTag: "Atividade principal",
    leftItem1: "Sistemas de tubagem para a condução de fluidos utilizados nas indústrias de petróleo, petroquímica e gás",
    leftItem2: "Equipamentos e peças de reposição para sistemas de ar condicionado, expansão direta e água refrigerada",
    leftItem3: "Instrumentação para medição de pressão, temperatura, caudal e nível, além de ferramentas de calibração, teste e instalação",
    leftItem4: "Válvulas e acessórios para a indústria de petróleo, petroquímica e gás",
    leftItem5: "Equipamentos elétricos e de instrumentação",
    leftItem6: "Sistemas de bombagem subterrâneos e de superfície, empanques, acoplamentos, compressores de ar e azoto, vasos de pressão e cabeças rotativas",
    leftItem7: "Motores, transformadores, baterias, retificadores, interruptores, CCM, CDP, painéis de controlo e componentes de rede elétrica",
    leftItem8: "Contentores personalizados, reboques, gruas, braços articulados e veículos pesados",
    leftItem9: "Óleo vegetal, bentonite, dolomite, minerais e produtos químicos para tratamento de águas, produção de petróleo e gás e estimulação de poços",
    leftItem10: "Soluções de medição de caudal multifásico para testes de poços e unidades de medição fiscal (LACT)",
    leftItem11: "Soluções de regulação de gás e separação de gás/óleo para produção de hidrocarbonetos",
    rightTitle: "Suporte Técnico & de Engenharia",
    rightTag: "Caso a caso, associado ao fornecimento",
    rightItem1: "Acompanhamento de instalação no local e assistência técnica especializada com pessoal qualificado",
    rightItem2: "Desenvolvimento de engenharia e gestão integrada de projetos, desde a viabilidade até ao design, construção, comissionamento, operação e manutenção",
    rightItem3: "Consultoria e gestão ambiental; Estudos de Impacto Ambiental, Hidrogeológicos, Hidráulicos e Geológico-Geotécnicos; Topografia; Estudos de Construtibilidade",
    rightItem4: "Estudos de risco e fiabilidade — HAZID, HAZOP, Análise Quantitativa de Risco ACR, Determinação e Verificação de SIL-SIS, Estudos de Fiabilidade; Avaliações Financeiras de Projetos",
    rightItem5: "Programação e integração de sistemas de supervisão e controlo; manuais técnicos para arranque de instalações e unidades de processo",
    rightItem6: "Serviços de campo de produção de petróleo e gás: fornecimento, aplicação, monitorização e controlo de produtos químicos; design e fornecimento de caudalímetros multifásicos para testes de poços; medição de campo para testes de poços; construção, instalação, calibração e testes",
    bottomTag: "Além do Fornecimento de Equipamentos",
    bottomTitle: "Comercialização de hidrocarbonetos & commodities.",
    bottomDesc: "A KSP Projectos estrutura o lado comercial dos fluxos de hidrocarbonetos e commodities — ligando produtores, traders e utilizadores finais nos nossos mercados sob o mesmo modelo de parceiro único e responsável.",
    b1Title: "Comercialização Física",
    b1Desc: "Aquisição e comercialização de petróleo bruto, produtos refinados, GPL/GNL e commodities industriais para clientes em toda a Europa, América, África e Ásia.",
    b2Title: "Acordos de Offtake & Fornecimento",
    b2Desc: "Estruturação de acordos de offtake e fornecimento que dão aos produtores compradores fiáveis e aos clientes volumes estáveis e contratados.",
    b3Title: "Logística & Documentação",
    b3Desc: "Coordenação de transporte, armazenamento, desalfandegamento e documentação comercial para que as cargas se movam sem atritos de conformidade.",
    b4Title: "Risco & Conformidade",
    b4Desc: "Diligência devida das contrapartes, KYC e conformidade com os regulamentos de importação/exportação em cada jurisdição em que operamos."
  }
}

function Services() {
  const { lang } = useLanguage()
  const t = servicesTranslations[lang] || servicesTranslations.en

  return (
    <div id="services" data-dc-tpl="98" data-screen-label="Services">
        <div data-dc-tpl="99" style={{ background: 'rgb(13, 27, 42)', padding: '80px 40px 64px' }}>
            <div data-dc-tpl="100" style={{ maxWidth: '900px', margin: '0px auto', textAlign: 'center' }}>
            <div 
                data-dc-tpl="101" 
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
            <h1 data-dc-tpl="102" style={{ font: '800 36px / 1.25 Sora, sans-serif', color: 'rgb(255, 255, 255)', margin: '0px 0px 16px' }}>
                {t.title}
            </h1>
            <p data-dc-tpl="103" style={{ font: '400 16px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(255, 255, 255, 0.75)', margin: '0px' }}>
                {t.desc}
            </p>
            </div>
        </div>

        <div 
            data-dc-tpl="104" 
            style={{ 
            maxWidth: '1280px', 
            margin: '0px auto', 
            padding: '70px 40px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '22px' 
            }}
        >
            <div data-dc-tpl="106" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '30px', border: '1px solid rgba(13, 27, 42, 0.08)' }}>
                <div data-dc-tpl="107" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div 
                    data-dc-tpl="108" 
                    style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '8px', 
                        background: 'rgb(234, 247, 239)', 
                        color: 'rgb(63, 168, 115)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        font: '700 14px Sora, sans-serif', 
                        flex: '0 0 auto' 
                    }}
                    >
                    <span className="sc-interp">01</span>
                    </div>
                    <div data-dc-tpl="109" style={{ font: '700 18px Sora, sans-serif', color: 'rgb(13, 27, 42)' }}>
                    <span className="sc-interp">{t.s1Title}</span>
                    </div>
                </div>
                <div data-dc-tpl="110" style={{ font: '400 14.5px / 1.65 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)' }}>
                    <span className="sc-interp">{t.s1Desc}</span>
                </div>
            </div>

            <div data-dc-tpl="106" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '30px', border: '1px solid rgba(13, 27, 42, 0.08)' }}>
            <div data-dc-tpl="107" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <div 
                data-dc-tpl="108" 
                style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '8px', 
                    background: 'rgb(234, 247, 239)', 
                    color: 'rgb(63, 168, 115)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    font: '700 14px Sora, sans-serif', 
                    flex: '0 0 auto' 
                }}
                >
                <span className="sc-interp">02</span>
                </div>
                <div data-dc-tpl="109" style={{ font: '700 18px Sora, sans-serif', color: 'rgb(13, 27, 42)' }}>
                <span className="sc-interp">{t.s2Title}</span>
                </div>
            </div>
            <div data-dc-tpl="110" style={{ font: '400 14.5px / 1.65 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)' }}>
                <span className="sc-interp">{t.s2Desc}</span>
            </div>
            </div>

            <div data-dc-tpl="106" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '30px', border: '1px solid rgba(13, 27, 42, 0.08)' }}>
            <div data-dc-tpl="107" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <div 
                data-dc-tpl="108" 
                style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '8px', 
                    background: 'rgb(234, 247, 239)', 
                    color: 'rgb(63, 168, 115)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    font: '700 14px Sora, sans-serif', 
                    flex: '0 0 auto' 
                }}
                >
                <span className="sc-interp">03</span>
                </div>
                <div data-dc-tpl="109" style={{ font: '700 18px Sora, sans-serif', color: 'rgb(13, 27, 42)' }}>
                <span className="sc-interp">{t.s3Title}</span>
                </div>
            </div>
            <div data-dc-tpl="110" style={{ font: '400 14.5px / 1.65 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)' }}>
                <span className="sc-interp">{t.s3Desc}</span>
            </div>
            </div>

            <div data-dc-tpl="106" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '30px', border: '1px solid rgba(13, 27, 42, 0.08)' }}>
            <div data-dc-tpl="107" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <div 
                data-dc-tpl="108" 
                style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '8px', 
                    background: 'rgb(234, 247, 239)', 
                    color: 'rgb(63, 168, 115)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    font: '700 14px Sora, sans-serif', 
                    flex: '0 0 auto' 
                }}
                >
                <span className="sc-interp">04</span>
                </div>
                <div data-dc-tpl="109" style={{ font: '700 18px Sora, sans-serif', color: 'rgb(13, 27, 42)' }}>
                <span className="sc-interp">{t.s4Title}</span>
                </div>
            </div>
            <div data-dc-tpl="110" style={{ font: '400 14.5px / 1.65 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)' }}>
                <span className="sc-interp">{t.s4Desc}</span>
            </div>
            </div>

            <div data-dc-tpl="106" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '30px', border: '1px solid rgba(13, 27, 42, 0.08)' }}>
            <div data-dc-tpl="107" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <div 
                data-dc-tpl="108" 
                style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '8px', 
                    background: 'rgb(234, 247, 239)', 
                    color: 'rgb(63, 168, 115)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    font: '700 14px Sora, sans-serif', 
                    flex: '0 0 auto' 
                }}
                >
                <span className="sc-interp">05</span>
                </div>
                <div data-dc-tpl="109" style={{ font: '700 18px Sora, sans-serif', color: 'rgb(13, 27, 42)' }}>
                <span className="sc-interp">{t.s5Title}</span>
                </div>
            </div>
            <div data-dc-tpl="110" style={{ font: '400 14.5px / 1.65 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)' }}>
                <span className="sc-interp">{t.s5Desc}</span>
            </div>
            </div>
        </div>

        <div data-dc-tpl="111" style={{ background: 'rgb(238, 244, 240)', padding: '70px 40px' }}>
            <div 
            data-dc-tpl="112" 
            style={{ 
                maxWidth: '1280px', 
                margin: '0px auto', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '40px' 
            }}
            >
            <div data-dc-tpl="113">
                <h3 data-dc-tpl="114" style={{ font: '700 22px Sora, sans-serif', color: 'rgb(13, 27, 42)', margin: '0px 0px 8px' }}>
                {t.leftTitle}
                </h3>
                <div 
                data-dc-tpl="115" 
                style={{ 
                    font: '600 13px "Source Sans 3", sans-serif', 
                    color: 'rgb(63, 168, 115)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    marginBottom: '22px' 
                }}
                >
                {t.leftTag}
                </div>
                <div data-dc-tpl="116" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem1}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem2}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem3}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem4}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem5}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem6}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem7}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem8}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem9}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem10}</span>
                    </div>
                </div>

                <div data-dc-tpl="118" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="119" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(111, 207, 151)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="120" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.leftItem11}</span>
                    </div>
                </div>
                </div>
            </div>

            <div data-dc-tpl="121">
                <h3 data-dc-tpl="122" style={{ font: '700 22px Sora, sans-serif', color: 'rgb(13, 27, 42)', margin: '0px 0px 8px' }}>
                {t.rightTitle}
                </h3>
                <div 
                data-dc-tpl="123" 
                style={{ 
                    font: '600 13px "Source Sans 3", sans-serif', 
                    color: 'rgb(63, 168, 115)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    marginBottom: '22px' 
                }}
                >
                {t.rightTag}
                </div>
                <div data-dc-tpl="124" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div data-dc-tpl="126" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="127" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(63, 168, 115)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="128" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.rightItem1}</span>
                    </div>
                </div>

                <div data-dc-tpl="126" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="127" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(63, 168, 115)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="128" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.rightItem2}</span>
                    </div>
                </div>

                <div data-dc-tpl="126" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="127" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(63, 168, 115)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="128" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.rightItem3}</span>
                    </div>
                </div>

                <div data-dc-tpl="126" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="127" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(63, 168, 115)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="128" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.rightItem4}</span>
                    </div>
                </div>

                <div data-dc-tpl="126" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="127" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(63, 168, 115)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="128" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.rightItem5}</span>
                    </div>
                </div>

                <div data-dc-tpl="126" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div data-dc-tpl="127" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgb(63, 168, 115)', marginTop: '8px', flex: '0 0 auto' }}></div>
                    <div data-dc-tpl="128" style={{ font: '400 14.5px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.72)' }}>
                    <span className="sc-interp">{t.rightItem6}</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div data-dc-tpl="129" style={{ maxWidth: '1280px', margin: '0px auto', padding: '70px 40px' }}>
            <div data-dc-tpl="130" style={{ textAlign: 'center', maxWidth: '760px', margin: '0px auto 44px' }}>
            <div 
                data-dc-tpl="131" 
                style={{ 
                font: '700 12.5px "Source Sans 3", sans-serif', 
                letterSpacing: '2px', 
                color: 'rgb(63, 168, 115)', 
                textTransform: 'uppercase', 
                marginBottom: '14px' 
                }}
            >
                {t.bottomTag}
            </div>
            <h2 data-dc-tpl="132" style={{ font: '700 30px / 1.3 Sora, sans-serif', color: 'rgb(13, 27, 42)', margin: '0px 0px 16px' }}>
                {t.bottomTitle}
            </h2>
            <p data-dc-tpl="133" style={{ font: '400 16px / 1.65 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.68)', margin: '0px' }}>
                {t.bottomDesc}
            </p>
            </div>
            <div 
            data-dc-tpl="134" 
            style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '22px' 
            }}
            >
            <div data-dc-tpl="136" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '28px 24px', border: '1px solid rgba(13, 27, 42, 0.08)' }}>
                <div data-dc-tpl="137" style={{ font: '800 20px Sora, sans-serif', color: 'rgb(169, 220, 191)', marginBottom: '12px' }}>
                <span className="sc-interp">01</span>
                </div>
                <div data-dc-tpl="138" style={{ font: '700 16px / 1.35 Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '10px' }}>
                <span className="sc-interp">{t.b1Title}</span>
                </div>
                <div data-dc-tpl="139" style={{ font: '400 14px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.65)' }}>
                <span className="sc-interp">{t.b1Desc}</span>
                </div>
            </div>

            <div data-dc-tpl="136" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '28px 24px', border: '1px solid rgba(13, 27, 42, 0.08)' }}>
                <div data-dc-tpl="137" style={{ font: '800 20px Sora, sans-serif', color: 'rgb(169, 220, 191)', marginBottom: '12px' }}>
                <span className="sc-interp">02</span>
                </div>
                <div data-dc-tpl="138" style={{ font: '700 16px / 1.35 Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '10px' }}>
                <span className="sc-interp">{t.b2Title}</span>
                </div>
                <div data-dc-tpl="139" style={{ font: '400 14px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.65)' }}>
                <span className="sc-interp">{t.b2Desc}</span>
                </div>
            </div>

            <div data-dc-tpl="136" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '28px 24px', border: '1px solid rgba(13, 27, 42, 0.08)' }}>
                <div data-dc-tpl="137" style={{ font: '800 20px Sora, sans-serif', color: 'rgb(169, 220, 191)', marginBottom: '12px' }}>
                <span className="sc-interp">03</span>
                </div>
                <div data-dc-tpl="138" style={{ font: '700 16px / 1.35 Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '10px' }}>
                <span className="sc-interp">{t.b3Title}</span>
                </div>
                <div data-dc-tpl="139" style={{ font: '400 14px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.65)' }}>
                <span className="sc-interp">{t.b3Desc}</span>
                </div>
            </div>

            <div data-dc-tpl="136" style={{ background: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '28px 24px', border: '1px solid rgba(13, 27, 42, 0.08)' }}>
                <div data-dc-tpl="137" style={{ font: '800 20px Sora, sans-serif', color: 'rgb(169, 220, 191)', marginBottom: '12px' }}>
                <span className="sc-interp">04</span>
                </div>
                <div data-dc-tpl="138" style={{ font: '700 16px / 1.35 Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '10px' }}>
                <span className="sc-interp">{t.b4Title}</span>
                </div>
                <div data-dc-tpl="139" style={{ font: '400 14px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.65)' }}>
                <span className="sc-interp">{t.b4Desc}</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Services