import Link from 'next/link';

export const metadata = {
  title: 'Sobre Nosotras — VG Tejidos',
  description: 'La historia detrás de VG Tejidos, una marca artesanal de Buenos Aires.',
};

// --- SVG Icons for About Page ---

function YarnSkeinIcon({ color = 'currentColor', size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 8c2.5-1 5.5 1 8 0M6 12c4-2 8 2 12 0M8 16c2.5 1 5.5-1 8 0" />
      <line x1="3" y1="21" x2="10" y2="14" />
      <circle cx="3" cy="21" r="0.5" />
      <line x1="21" y1="21" x2="14" y2="14" />
      <circle cx="21" cy="21" r="0.5" />
    </svg>
  );
}

function OrganicWoolIcon({ color = 'currentColor', size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V2M12 7c2-1 4-2 6-1M12 11c3 0 5-1 6 1M12 15c2 1 4 0 6 2M12 7c-2-1-4-2-6-1M12 11c-3 0-5-1-6 1M12 15c-2 1-4 0-6 2" />
    </svg>
  );
}

function HandcraftedIcon({ color = 'currentColor', size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V5a2 2 0 1 0-4 0v9" />
      <path d="M18 18V7.5a2 2 0 1 0-4 0v6.5" />
      <path d="M6 18V11.5a2 2 0 1 1 4 0V14" />
      <path d="M2 18V9.5a2 2 0 1 1 4 0V14" />
      <path d="M2 18a10 10 0 0 0 20 0v-4.5a2 2 0 1 0-4 0v1.5" />
    </svg>
  );
}

function DurableIcon({ color = 'currentColor', size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 2h14M5 22h14M19 2v3a7 7 0 0 1-5 6.6V12.4A7 7 0 0 1 19 19v3M5 2v3a7 7 0 0 0 5 6.6V12.4A7 7 0 0 0 5 19v3" />
      <path d="M12 12v.01" />
    </svg>
  );
}

function CustomDesignIcon({ color = 'currentColor', size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" />
    </svg>
  );
}

const VALUES_ICON_MAP = {
  natural: OrganicWoolIcon,
  hand: HandcraftedIcon,
  durable: DurableIcon,
  custom: CustomDesignIcon,
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '96px' }}>
      {/* Hero */}
      <div style={{ backgroundColor: '#3D2B1F', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A8906F', marginBottom: '0.75rem' }}>
          Nuestra historia
        </p>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#FDFAF5', maxWidth: '600px', margin: '0 auto' }}>
          Tejiendo con amor desde el corazón
        </h1>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        {/* Story */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          <div>
            <p className="section-subtitle" style={{ marginBottom: '0.75rem' }}>Los comienzos</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Una pasión que se convirtió en marca</h2>
            <p style={{ color: '#7C6B58', lineHeight: '1.85', marginBottom: '1.25rem', fontSize: '1rem' }}>
              VG Tejidos nació de una pasión que comenzó desde pequeña: ver las manos de la abuela transformar simples madejas de lana en prendas llenas de calidez y cariño.
            </p>
            <p style={{ color: '#7C6B58', lineHeight: '1.85', marginBottom: '1.25rem', fontSize: '1rem' }}>
              Con el tiempo, ese amor por el tejido se convirtió en un emprendimiento artesanal. Cada prenda que sale de nuestras manos lleva consigo horas de dedicación, atención al detalle y el deseo de que quien la use se sienta abrigada no solo en cuerpo, sino también en alma.
            </p>
            <p style={{ color: '#7C6B58', lineHeight: '1.85', fontSize: '1rem' }}>
              Hoy, desde Buenos Aires, seguimos tejiendo con la misma pasión de siempre, pieza por pieza, hilo por hilo.
            </p>
          </div>
          <div style={{
            backgroundColor: '#EDE5D5',
            borderRadius: '4px',
            padding: '3rem 2rem',
            textAlign: 'center',
          }}>
            <div style={{ color: '#8B7355', display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <YarnSkeinIcon color="#8B7355" size={64} />
            </div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontStyle: 'italic', color: '#5E4F3E', lineHeight: '1.6', margin: 0 }}>
              "Cada punto es una caricia, cada prenda un abrazo."
            </p>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: '5rem' }} />

        {/* Values */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-subtitle" style={{ marginBottom: '0.75rem' }}>Lo que nos define</p>
            <h2 className="section-title">Nuestros valores</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: 'natural',
                title: 'Natural y sustentable',
                desc: 'Trabajamos con lana merino, alpaca y fibras naturales que respetan el medio ambiente y cuidan tu piel.',
              },
              {
                icon: 'hand',
                title: 'Hecho a mano',
                desc: 'Ninguna máquina reemplaza el tejido artesanal. Cada pieza es única e irrepetible.',
              },
              {
                icon: 'durable',
                title: 'Para durar',
                desc: 'Diseñamos prendas atemporales que no siguen las tendencias fugaces. Calidad que se nota.',
              },
              {
                icon: 'custom',
                title: 'Personalizado',
                desc: 'Podés encargar tu prenda en el color, talle y diseño que quieras. Hacemos realidad tu visión.',
              },
            ].map((v) => {
              const IconComponent = VALUES_ICON_MAP[v.icon];
              return (
                <div key={v.title} style={{ backgroundColor: '#FDFAF5', border: '1px solid #EDE5D5', borderRadius: '4px', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <div style={{ color: '#A8906F', display: 'flex', alignItems: 'center' }}>
                    <IconComponent color="#A8906F" size={32} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.0625rem', fontWeight: 700, color: '#3D2B1F', margin: 0 }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#9C9087', lineHeight: '1.7', margin: 0 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#F9F4EA', borderRadius: '4px', border: '1px solid #EDE5D5' }}>
          <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.375rem', color: '#3D2B1F', marginBottom: '1rem' }}>
            ¿Querés ser parte de esta historia?
          </p>
          <p style={{ color: '#9C9087', marginBottom: '2rem', fontSize: '0.9375rem' }}>
            Explorá nuestra colección y encontrá la prenda perfecta para vos.
          </p>
          <Link href="/catalog" className="btn-primary" style={{ textDecoration: 'none' }}>
            Ver catálogo →
          </Link>
        </div>
      </div>
    </div>
  );
}
