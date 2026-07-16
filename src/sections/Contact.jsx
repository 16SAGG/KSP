import { useState } from 'react'
import { useLanguage } from '../LanguageContext'

const contactTranslations = {
  en: {
    tag: "Contact",
    title: "One partner, accountable from end to end.",
    desc: "Tell us about your project in the commercial, industrial, or energy sectors. We coordinate supply and engineering under one roof.",
    website: "Website",
    phone: "Phone",
    email: "Email",
    legalName: "Legal Name",
    taxId: "Tax ID",
    headquarters: "Headquarters / Reach",
    reachDesc: "Portugal, Europe — serving Europe, America, Africa, Asia",
    downloadBrochure: "Download Brochure",
    formTitle: "Send us a message",
    fieldName: "Name",
    placeholderName: "Your name",
    fieldEmail: "Email",
    fieldCompany: "Company",
    placeholderCompany: "Company name",
    fieldMessage: "Message",
    placeholderMessage: "Tell us about your project",
    sendButton: "Send Message",
    mailSubject: "New Project Inquiry",
    mailLabelName: "Name",
    mailLabelEmail: "Email",
    mailLabelCompany: "Company",
    mailLabelNotSpecified: "Not specified",
    mailLabelMessage: "Message"
  },
  pt: {
    tag: "Contacto",
    title: "Um único parceiro, responsável de ponta a ponta.",
    desc: "Fale-nos sobre o seu projeto nos setores comercial, industrial ou de energia. Coordenamos o fornecimento e a engenharia sob o mesmo teto.",
    website: "Website",
    phone: "Telefone",
    email: "E-mail",
    legalName: "Denominação Social",
    taxId: "NIF",
    headquarters: "Sede / Alcance",
    reachDesc: "Portugal, Europa — servindo a Europa, América, África e Ásia",
    downloadBrochure: "Descarregar Brochura",
    formTitle: "Envie-nos uma mensagem",
    fieldName: "Nome",
    placeholderName: "O seu nome",
    fieldEmail: "E-mail",
    fieldCompany: "Empresa",
    placeholderCompany: "Nome da empresa",
    fieldMessage: "Mensagem",
    placeholderMessage: "Fale-nos sobre o seu projeto",
    sendButton: "Enviar Mensagem",
    mailSubject: "Pedido de Informação de Projeto",
    mailLabelName: "Nome",
    mailLabelEmail: "E-mail",
    mailLabelCompany: "Empresa",
    mailLabelNotSpecified: "Não especificada",
    mailLabelMessage: "Mensagem"
  }
}

function Contact(){
    const { lang } = useLanguage()
    const t = contactTranslations[lang] || contactTranslations.en

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (formStatus) setFormStatus(null);
    };

    const isFormFilled =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormFilled || loading) return;

        setLoading(true);
        setFormStatus(null);

        try {
            const response = await fetch('/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus({ type: 'success', message: data.message });
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                setFormStatus({
                    type: 'error',
                    message: data.message || (data.errors && data.errors[0]) || 'An error occurred'
                });
            }
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: 'Unable to send message. Please check your connection and try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    return(
        <div data-dc-tpl="165" id="contact" data-screen-label="Contact">
            <div data-dc-tpl="166" style={{ background: 'rgb(13, 27, 42)', padding: 'clamp(50px, 10vw, 80px) clamp(20px, 5vw, 40px) clamp(40px, 8vw, 64px)' }}>
                <div data-dc-tpl="167" style={{ maxWidth: '900px', margin: '0px auto', textAlign: 'center' }}>
                <div
                    data-dc-tpl="168"
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
                <h1 data-dc-tpl="169" style={{ font: '800 clamp(28px, 7vw, 36px) / 1.25 Sora, sans-serif', color: 'rgb(255, 255, 255)', margin: '0px 0px clamp(12px, 3vw, 16px)' }}>
                    {t.title}
                </h1>
                <p data-dc-tpl="170" style={{ font: '400 clamp(14px, 3.5vw, 16px) / 1.6 "Source Sans 3", sans-serif', color: 'rgba(255, 255, 255, 0.75)', margin: '0px' }}>
                    {t.desc}
                </p>
                </div>
            </div>

            <div
                data-dc-tpl="171"
                style={{
                maxWidth: '1280px',
                margin: '0px auto',
                padding: 'clamp(40px, 8vw, 70px) clamp(20px, 5vw, 40px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(30px, 8vw, 56px)'
                }}
            >
                {/* Columna de Información */}
                <div data-dc-tpl="172">
                <div data-dc-tpl="173" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                    <div data-dc-tpl="174">
                    <div data-dc-tpl="175" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>{t.website}</div>
                    <div data-dc-tpl="176" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>ksprojectos.pt</div>
                    </div>
                    <div data-dc-tpl="177">
                    <div data-dc-tpl="178" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>{t.phone}</div>
                    <div data-dc-tpl="179" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>+351 (911) 184 324</div>
                    </div>
                    <div data-dc-tpl="180">
                    <div data-dc-tpl="181" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>{t.email}</div>
                    <div data-dc-tpl="182" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>contato@ksprojectos.pt</div>
                    </div>
                    <div data-dc-tpl="183">
                    <div data-dc-tpl="184" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>{t.legalName}</div>
                    <div data-dc-tpl="185" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>Kinetic Scale Projectos, LDA</div>
                    </div>
                    <div data-dc-tpl="186">
                    <div data-dc-tpl="187" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>{t.taxId}</div>
                    <div data-dc-tpl="188" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>PT-516835750</div>
                    </div>
                    <div data-dc-tpl="189">
                    <div data-dc-tpl="190" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>{t.headquarters}</div>
                    <div data-dc-tpl="191" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>{t.reachDesc}</div>
                    </div>
                    <a 
                    data-dc-tpl="192" 
                    href="KSP Brochure - v2.pdf" 
                    download
                    className="scp2" 
                    style={{ 
                        textDecoration: 'none', 
                        display: 'inline-block', 
                        font: '700 14px "Source Sans 3", sans-serif', 
                        color: 'rgb(13, 27, 42)', 
                        background: 'rgb(111, 207, 151)', 
                        padding: '14px 24px', 
                        borderRadius: '8px', 
                        marginTop: '6px',
                        textAlign: 'center'
                    }}
                    >
                    {t.downloadBrochure}
                    </a>
                </div>
                </div>

                {/* Columna del Formulario */}
                <div data-dc-tpl="193" style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgba(13, 27, 42, 0.08)', borderRadius: '14px', padding: '36px' }}>
                <div data-dc-tpl="200">
                    <div data-dc-tpl="201" style={{ font: '700 19px Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '22px' }}>{t.formTitle}</div>
                    <div data-dc-tpl="202" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    <div data-dc-tpl="203">
                        <div data-dc-tpl="204" style={{ font: '600 12px "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.55)', marginBottom: '6px' }}>{t.fieldName}</div>
                        <input 
                        data-dc-tpl="205" 
                        placeholder={t.placeholderName} 
                        className="scp4" 
                        style={{ 
                            width: '100%', 
                            boxSizing: 'border-box', 
                            padding: '12px 14px', 
                            borderRadius: '8px', 
                            border: '1px solid rgba(13, 27, 42, 0.15)', 
                            font: '400 14.5px "Source Sans 3", sans-serif', 
                            color: 'rgb(13, 27, 42)' 
                        }}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        />
                    </div>

                    <div data-dc-tpl="206">
                        <div data-dc-tpl="207" style={{ font: '600 12px "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.55)', marginBottom: '6px' }}>{t.fieldEmail}</div>
                        <input 
                        data-dc-tpl="208" 
                        placeholder="you@company.com" 
                        className="scp4" 
                        style={{ 
                            width: '100%', 
                            boxSizing: 'border-box', 
                            padding: '12px 14px', 
                            borderRadius: '8px', 
                            border: '1px solid rgba(13, 27, 42, 0.15)', 
                            font: '400 14.5px "Source Sans 3", sans-serif', 
                            color: 'rgb(13, 27, 42)' 
                        }}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                    </div>

                    <div data-dc-tpl="209">
                        <div data-dc-tpl="210" style={{ font: '600 12px "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.55)', marginBottom: '6px' }}>{t.fieldCompany}</div>
                        <input 
                        data-dc-tpl="211" 
                        placeholder={t.placeholderCompany} 
                        className="scp4" 
                        style={{ 
                            width: '100%', 
                            boxSizing: 'border-box', 
                            padding: '12px 14px', 
                            borderRadius: '8px', 
                            border: '1px solid rgba(13, 27, 42, 0.15)', 
                            font: '400 14.5px "Source Sans 3", sans-serif', 
                            color: 'rgb(13, 27, 42)' 
                        }}
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        />
                    </div>

                    <div data-dc-tpl="212">
                        <div data-dc-tpl="213" style={{ font: '600 12px "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.55)', marginBottom: '6px' }}>{t.fieldMessage}</div>
                        <textarea 
                        data-dc-tpl="214" 
                        placeholder={t.placeholderMessage} 
                        rows={4} 
                        className="scp4" 
                        style={{ 
                            width: '100%', 
                            boxSizing: 'border-box', 
                            padding: '12px 14px', 
                            borderRadius: '8px', 
                            border: '1px solid rgba(13, 27, 42, 0.15)', 
                            fontStyle: 'normal', 
                            fontVariant: 'normal', 
                            fontSizeAdjust: 'none', 
                            fontLanguageOverride: 'normal', 
                            fontKerning: 'auto', 
                            fontOpticalSizing: 'auto', 
                            fontFeatureSettings: 'normal', 
                            fontVariationSettings: 'normal', 
                            fontWeight: 400, 
                            fontStretch: 'normal', 
                            fontSize: '14.5px', 
                            lineHeight: 'normal', 
                            fontFamily: 'inherit', 
                            color: 'rgb(13, 27, 42)', 
                            resize: 'vertical' 
                        }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        />
                    </div>

                    {formStatus && (
                        <div
                            style={{
                                padding: '12px 14px',
                                borderRadius: '8px',
                                font: '500 13px "Source Sans 3", sans-serif',
                                textAlign: 'center',
                                marginTop: '6px',
                                backgroundColor: formStatus.type === 'success' ? 'rgba(111, 207, 151, 0.15)' : 'rgba(255, 87, 87, 0.15)',
                                color: formStatus.type === 'success' ? 'rgb(63, 168, 115)' : 'rgb(255, 87, 87)',
                                border: `1px solid ${formStatus.type === 'success' ? 'rgb(111, 207, 151)' : 'rgb(255, 87, 87)'}`
                            }}
                        >
                            {formStatus.message}
                        </div>
                    )}

                    <div
                        data-dc-tpl="215"
                        className="scp2"
                        style={{
                        font: '700 14.5px "Source Sans 3", sans-serif',
                        color: !isFormFilled || loading ? 'rgba(13, 27, 42, 0.4)' : 'rgb(13, 27, 42)',
                        background: !isFormFilled || loading ? 'rgba(13, 27, 42, 0.12)' : 'rgb(111, 207, 151)',
                        padding: '14px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        cursor: (isFormFilled && !loading) ? 'pointer' : 'not-allowed',
                        marginTop: formStatus ? '12px' : '6px',
                        opacity: loading ? 0.7 : 1,
                        transition: 'all 0.2s ease'
                        }}
                        onClick={handleSubmit}
                    >
                        {loading ? 'Sending...' : t.sendButton}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact