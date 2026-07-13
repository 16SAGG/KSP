import { useState } from 'react'

function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isFormFilled = 
    formData.name.trim() !== '' && 
    formData.email.trim() !== '' && 
    formData.message.trim() !== '';

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("aaaa", formData.name.trim());
        console.log("aaaa", formData.email.trim());
        console.log("aaaa", formData.message.trim());
        if (!isFormFilled) return

        const { name, email, company, message } = formData;
        
        // Correo de destino
        const emailTo = "contato@ksprojectos.pt"; 
        
        // Asunto del correo electrónico
        const subject = encodeURIComponent(`New Project Inquiry - ${name}`);
        
        // Cuerpo del correo (formateando los saltos de línea con \n)
        const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company || 'Not specified'}\n\n` +
        `Message:\n${message}`
        );

        // Abrir el cliente de correo nativo del usuario con los datos pre-llenados
        window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    };

    return(
        <div data-dc-tpl="165" id="contact" data-screen-label="Contact">
            <div data-dc-tpl="166" style={{ background: 'rgb(13, 27, 42)', padding: '80px 40px 64px' }}>
                <div data-dc-tpl="167" style={{ maxWidth: '900px', margin: '0px auto', textAlign: 'center' }}>
                <div 
                    data-dc-tpl="168" 
                    style={{ 
                    font: '700 12.5px "Source Sans 3", sans-serif', 
                    letterSpacing: '2px', 
                    color: 'rgb(111, 207, 151)', 
                    textTransform: 'uppercase', 
                    marginBottom: '14px' 
                    }}
                >
                    Contact
                </div>
                <h1 data-dc-tpl="169" style={{ font: '800 36px / 1.25 Sora, sans-serif', color: 'rgb(255, 255, 255)', margin: '0px 0px 16px' }}>
                    One partner, accountable from end to end.
                </h1>
                <p data-dc-tpl="170" style={{ font: '400 16px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(255, 255, 255, 0.75)', margin: '0px' }}>
                    Tell us about your project in the commercial, industrial, or energy sectors. We coordinate supply and engineering under one roof.
                </p>
                </div>
            </div>

            <div 
                data-dc-tpl="171" 
                style={{ 
                maxWidth: '1280px', 
                margin: '0px auto', 
                padding: '70px 40px', 
                display: 'grid', 
                gridTemplateColumns: '1fr 1.2fr', 
                gap: '56px' 
                }}
            >
                {/* Columna de Información */}
                <div data-dc-tpl="172">
                <div data-dc-tpl="173" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                    <div data-dc-tpl="174">
                    <div data-dc-tpl="175" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>Website</div>
                    <div data-dc-tpl="176" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>ksprojectos.pt</div>
                    </div>
                    <div data-dc-tpl="177">
                    <div data-dc-tpl="178" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>Phone</div>
                    <div data-dc-tpl="179" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>+351 (911) 184 324</div>
                    </div>
                    <div data-dc-tpl="180">
                    <div data-dc-tpl="181" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>Email</div>
                    <div data-dc-tpl="182" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>contato@ksprojectos.pt</div>
                    </div>
                    <div data-dc-tpl="183">
                    <div data-dc-tpl="184" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>Legal Name</div>
                    <div data-dc-tpl="185" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>Kinetic Scale Projectos, LDA</div>
                    </div>
                    <div data-dc-tpl="186">
                    <div data-dc-tpl="187" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>Tax ID</div>
                    <div data-dc-tpl="188" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>PT-516835750</div>
                    </div>
                    <div data-dc-tpl="189">
                    <div data-dc-tpl="190" style={{ font: '600 11.5px "Source Sans 3", sans-serif', letterSpacing: '1.2px', color: 'rgb(63, 168, 115)', textTransform: 'uppercase', marginBottom: '8px' }}>Headquarters / Reach</div>
                    <div data-dc-tpl="191" style={{ font: '600 16px "Source Sans 3", sans-serif', color: 'rgb(13, 27, 42)' }}>Portugal, Europe — serving Europe, America, Africa, Asia</div>
                    </div>
                    <a 
                    data-dc-tpl="192" 
                    href="KSP Brochure.dc.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="scp2" 
                    style={{ 
                        textDecoration: 'none', 
                        display: 'inline-block', 
                        font: '700 14px "Source Sans 3", sans-serif', 
                        color: 'rgb(13, 27, 42)', 
                        background: 'rgb(111, 207, 151)', 
                        padding: '14px 24px', 
                        borderRadius: '8px', 
                        marginTop: '6px' 
                    }}
                    href="KSP Brochure - v2.pdf"
                    download
                    >
                    Download Brochure
                    </a>
                </div>
                </div>

                {/* Columna del Formulario */}
                <div data-dc-tpl="193" style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgba(13, 27, 42, 0.08)', borderRadius: '14px', padding: '36px' }}>
                <div data-dc-tpl="200">
                    <div data-dc-tpl="201" style={{ font: '700 19px Sora, sans-serif', color: 'rgb(13, 27, 42)', marginBottom: '22px' }}>Send us a message</div>
                    <div data-dc-tpl="202" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    <div data-dc-tpl="203">
                        <div data-dc-tpl="204" style={{ font: '600 12px "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.55)', marginBottom: '6px' }}>Name</div>
                        <input 
                        data-dc-tpl="205" 
                        placeholder="Your name" 
                        className="scp4" 
                        defaultValue="" 
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
                        <div data-dc-tpl="207" style={{ font: '600 12px "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.55)', marginBottom: '6px' }}>Email</div>
                        <input 
                        data-dc-tpl="208" 
                        placeholder="you@company.com" 
                        className="scp4" 
                        defaultValue="" 
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
                        <div data-dc-tpl="210" style={{ font: '600 12px "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.55)', marginBottom: '6px' }}>Company</div>
                        <input 
                        data-dc-tpl="211" 
                        placeholder="Company name" 
                        className="scp4" 
                        defaultValue="" 
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
                        <div data-dc-tpl="213" style={{ font: '600 12px "Source Sans 3", sans-serif', color: 'rgba(22, 35, 47, 0.55)', marginBottom: '6px' }}>Message</div>
                        <textarea 
                        data-dc-tpl="214" 
                        placeholder="Tell us about your project" 
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

                    <div 
                        data-dc-tpl="215" 
                        className="scp2" 
                        style={{ 
                        font: '700 14.5px "Source Sans 3", sans-serif', 
                        color: !isFormFilled ? 'rgba(13, 27, 42, 0.4)' : 'rgb(13, 27, 42)', 
                        background: !isFormFilled ? 'rgba(13, 27, 42, 0.12)' : 'rgb(111, 207, 151)', 
                        padding: '14px', 
                        borderRadius: '8px', 
                        textAlign: 'center', 
                        cursor: isFormFilled ? 'pointer' : 'not-allowed', 
                        marginTop: '6px' 
                        }}
                        onClick={handleSubmit}
                    >
                        Send Message
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact