import { useLanguage } from '../LanguageContext'

const homeTranslations = {
  en: {
    tag: "Export & Supply · Oil, Gas & Energy",
    title: "The trusted bridge between Europe and the world's industrial and energy markets.",
    desc: "The accountable partner for specialized supply, commercialization and the qualified technical support in the field — where the scope of a specific equipment sale requires it — across the commercial, industrial, and energy sectors.",
    letsTalk: "Let's Talk",
    downloadBrochure: "Download Brochure",
    dualTitle: "A dual capability that is uncommon in our markets.",
    dualDesc1: "KSP Projectos is an export and supply company based in Portugal, specialized in providing equipment, raw materials, and products for the oil and gas industry, and for the commercial and energy sectors, to clients across Europe, America, Africa, and Asia. In addition to industrial supply, we actively engage in the commercialization of hydrocarbons and essential energy commodities.",
    dualDesc2: "We complement that supply with qualified technical support in the field — installation accompaniment, calibration, testing, and related engineering services — deployed selectively, on a case-by-case basis.",
    imgAlt: "Engineer reviewing a 3D piping model"
  },
  pt: {
    tag: "Exportação & Fornecimento · Petróleo, Gás & Energia",
    title: "A ponte de confiança entre a Europa e os mercados mundiais de energia e indústria.",
    desc: "O parceiro responsável pelo fornecimento especializado, comercialização e apoio técnico qualificado no terreno — onde o âmbito de uma venda de equipamento específico o exija — nos setores comercial, industrial e de energia.",
    letsTalk: "Fale Connosco",
    downloadBrochure: "Descarregar Brochura",
    dualTitle: "Uma capacidade dupla que é invulgar nos nossos mercados.",
    dualDesc1: "A KSP Projectos é uma empresa de exportação e fornecimento sediada em Portugal, especializada no fornecimento de equipamentos, matérias-primas e produtos para a indústria de petróleo e gás, e para os setores comercial e de energia, a clientes em toda a Europa, América, África e Ásia. Além do fornecimento industrial, participamos ativamente na comercialização de hidrocarbonetos e commodities energéticas essenciais.",
    dualDesc2: "Complementamos esse fornecimento com apoio técnico qualificado no terreno — acompanhamento de instalação, calibração, testes e serviços de engenharia relacionados — disponibilizados seletivamente, caso a caso.",
    imgAlt: "Engenheiro a rever um modelo de tubagens 3D"
  }
}

function Home() {
  const { lang } = useLanguage()
  const t = homeTranslations[lang] || homeTranslations.en

  return (
    <div id='home'>
        <div
            style={{
                position:'relative',
                minHeight:'640px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-end',
                backgroundImage: 'linear-gradient(rgba(10, 20, 32, 0.35) 0%, rgba(10, 20, 32, 0.55) 45%, rgba(10, 20, 32, 0.94) 100%), url(hero-port.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 65%'
            }}
        >
            <div
                style={{
                    margin: '0px auto',
                    padding: '90px 40px 70px',
                    width: '100%',
                    boxSizing: 'border-box',
                    display:'flex',
                    justifyContent: 'space-between',
                    alignItems:'flex-end',
                    gap:'40px',
                    flexWrap: 'wrap'
                }}
            >
                <div
                    style={{
                        animation:'0.7s ease 0s 1 normal both running ksp-rise',
                        background:'rgba(10, 20, 32, 0.38)',
                        backdropFilter: 'blur(2px)',
                        borderRadius: '14px',
                        padding: '24px 28px',
                        margin: '0px -28px',
                        maxWidth: '660px'
                    }}
                >
                    <p
                        style={{
                            font: '700 12.5px "Source Sans 3", sans-serif',
                            letterSpacing:'2px',
                            color: 'rgb(111, 207, 151)',
                            textTransform: 'uppercase',
                            marginBottom: '16px'
                        }}
                    >
                        {t.tag}
                    </p>
                    <h1
                        style={{
                            font: '800 46px / 1.15 Sora, sans-serif',
                            color: '#fff',
                            margin: '0px 0px 20px'
                        }}
                    >
                        {t.title}
                    </h1>
                    <p
                        style={{
                            font: '400 17px / 1.6 "Source Sans 3", sans-serif',
                            color: 'rgba(255, 255, 255, 0.82)',
                            margin: '0px 0px 28px',
                            maxWidth: '560px'
                        }}
                    >
                        {t.desc}
                    </p>
                    <div
                        style={{
                            display:'flex',
                            gap:'14px',
                            flexWrap:'wrap'
                        }}
                    >
                        <a
                            style={{
                                textDecoration: 'none',
                                font: '700 14.5px "Source Sans 3", sans-serif',
                                color: 'rgb(22, 35, 47)',
                                background : 'rgb(111, 207, 151)',
                                padding: '14px 26px',
                                borderRadius: '7px'
                            }}
                            href='#contact'
                        >
                            {t.letsTalk}
                        </a>
                        <a
                            style={{
                                textDecoration: 'none',
                                font: '600 14.5px "Source Sans 3", sans-serif',
                                color: 'rgb(255, 255, 255)',
                                border: '1px solid rgba(255, 255, 255, 0.35)',
                                padding: '14px 26px',
                                borderRadius: '7px'
                            }}
                            href="KSP Brochure - v2.pdf"
                            download
                        >
                            {t.downloadBrochure}
                        </a>
                        
                    </div>
                </div>
            </div>
            
        </div>
        <div
            style={{
                boxSizing:'border-box'
            }}
        >
            <div
                style={{
                    boxSizing:"border-box"
                }}
            >
                <div data-dc-tpl="38" style={{
                    maxWidth: '1280px',
                    margin: '0px auto',
                    padding: '90px 40px',
                    display: 'flex',
                    gap: '64px',
                    alignItems: 'center',
                    flexWrap:'wrap'
                }}>
                    <div data-dc-tpl="39" style={{ flex: '1 1 420px', minWidth: '320px' }}>
                        <h2 
                            data-dc-tpl="40" 
                            style={{ 
                                font: '700 32px / 1.25 Sora, sans-serif', 
                                color: 'rgb(13, 27, 42)', 
                                margin: '0px 0px 20px' 
                            }}
                        >
                            {t.dualTitle}
                        </h2>
                        
                        <p 
                            data-dc-tpl="41" 
                            style={{ 
                                font: '400 16.5px / 1.7 "Source Sans 3", sans-serif', 
                                color: 'rgba(22, 35, 47, 0.72)', 
                                margin: '0px 0px 16px' 
                            }}
                        >
                            <span 
                                data-dc-tpl="42" 
                                style={{ 
                                    color: 'rgba(22, 35, 47, 0.72)', 
                                    fontSize: '16.5px', 
                                    lineHeight: '28px' 
                                }}
                            >
                                {t.dualDesc1}
                            </span>
                        </p>
                        
                        <p 
                            data-dc-tpl="43" 
                            style={{ 
                                font: '400 16.5px / 1.7 "Source Sans 3", sans-serif', 
                                color: 'rgba(22, 35, 47, 0.72)', 
                                margin: '0px' 
                            }}
                        >
                            {t.dualDesc2}
                        </p>
                    </div>
                    <div data-dc-tpl="44" style={{ flex: '1 1 380px', minWidth: '300px' }}>
                        <img 
                            data-dc-tpl="45" 
                            src="engineer-3d-model.png" 
                            alt={t.imgAlt} 
                            style={{ 
                            width: '100%', 
                            borderRadius: '12px', 
                            display: 'block', 
                            boxShadow: 'rgba(13, 27, 42, 0.16) 0px 20px 44px' 
                            }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
