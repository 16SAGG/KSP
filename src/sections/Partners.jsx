function Partners() {
    return(
        <div id="partners" data-dc-tpl="154" data-screen-label="Partners">
            <div data-dc-tpl="155" style={{ background: 'rgb(13, 27, 42)', padding: '80px 40px 64px' }}>
                <div data-dc-tpl="156" style={{ maxWidth: '900px', margin: '0px auto', textAlign: 'center' }}>
                <div 
                    data-dc-tpl="157" 
                    style={{ 
                    font: '700 12.5px "Source Sans 3", sans-serif', 
                    letterSpacing: '2px', 
                    color: 'rgb(111, 207, 151)', 
                    textTransform: 'uppercase', 
                    marginBottom: '14px' 
                    }}
                >
                    Partners
                </div>
                <h1 data-dc-tpl="158" style={{ font: '800 36px / 1.25 Sora, sans-serif', color: 'rgb(255, 255, 255)', margin: '0px 0px 16px' }}>
                    Companies we work alongside.
                </h1>
                <p data-dc-tpl="159" style={{ font: '400 16px / 1.6 "Source Sans 3", sans-serif', color: 'rgba(255, 255, 255, 0.75)', margin: '0px' }}>
                    A network of manufacturers and technical partners that back the equipment and materials we supply.
                </p>
                </div>
            </div>

            <div data-dc-tpl="160" style={{ maxWidth: '1280px', margin: '0px auto', padding: '70px 40px' }}>
                <div 
                data-dc-tpl="161" 
                style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '26px' 
                }}
                >
                {/* Partner 1 */}
                <div 
                    data-dc-tpl="163" 
                    style={{ 
                    border: '1px solid rgba(13, 27, 42, 0.08)', 
                    borderRadius: '14px', 
                    padding: '36px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    minHeight: '160px' 
                    }}
                >
                    <img 
                    data-dc-tpl="164" 
                    src="partner-dl-service.png" 
                    alt="DL Service BV" 
                    style={{ 
                        maxWidth: '100%', 
                        maxHeight: '96px', 
                        objectFit: 'contain', 
                        width: '312px',
                    }} 
                    />
                </div>

                {/* Partner 2 */}
                <div 
                    data-dc-tpl="163" 
                    style={{ 
                    border: '1px solid rgba(13, 27, 42, 0.08)', 
                    borderRadius: '14px', 
                    padding: '36px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    minHeight: '160px' 
                    }}
                >
                    <img 
                    data-dc-tpl="164" 
                    src="partner-tesco.png" 
                    alt="TESCO — Trade Energy &amp; Services Co." 
                    style={{ 
                        maxWidth: '100%', 
                        objectFit: 'contain', 
                        width: '160px',
                    }} 
                    />
                </div>

                {/* Partner 3 */}
                <div 
                    data-dc-tpl="163" 
                    style={{ 
                    border: '1px solid rgba(13, 27, 42, 0.08)', 
                    borderRadius: '14px', 
                    padding: '36px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    minHeight: '160px' 
                    }}
                >
                    <img 
                    data-dc-tpl="164" 
                    src="auyanteam.png" 
                    alt="Auyanteam." 
                    style={{ 
                        maxWidth: '100%', 
                        objectFit: 'contain', 
                        width: '180px',
                    }} 
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Partners