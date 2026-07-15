export const metadata = {
  title: 'Cuidado de Prendas — VG Tejidos',
  description: 'Guía completa para cuidar tus prendas tejidas artesanales.',
};

// --- Vector Icons (SVG) ---

function HandWashIcon({ color = 'currentColor', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9h20l-1.8 9A2 2 0 0 1 18.2 20H5.8a2 2 0 0 1-2-1.8L2 9Z" />
      <path d="M6 13c1.5 0 2-1 3.5-1s2 1 3.5 1 2-1 3.5-1" />
      <path d="M12 3v5" />
      <path d="m9.5 5 2.5 2.5 2.5-2.5" />
    </svg>
  );
}

function MachineWashIcon({ color = 'currentColor', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="4" y1="7" x2="20" y2="7" />
      <circle cx="8" cy="5" r="1" fill={color} />
      <circle cx="11" cy="5" r="1" fill={color} />
      <line x1="15" y1="5" x2="17" y2="5" />
      <circle cx="12" cy="14" r="4" />
      <path d="M10 14a2 2 0 0 1 4 0" />
    </svg>
  );
}

function DryFlatIcon({ color = 'currentColor', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="4" y1="8" x2="8" y2="4" />
    </svg>
  );
}

function StorageIcon({ color = 'currentColor', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3Z" />
      <path d="M2 9.5h20v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3Z" />
      <path d="M6 5h12a2 2 0 0 1 2 2v1H4V7a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function PillingIcon({ color = 'currentColor', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function IronIcon({ color = 'currentColor', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h16a2 2 0 0 0 2-2c0-4.5-3.5-8-8-8H7c-1.5 0-3 1.5-3 3v7Z" />
      <path d="M9 10V7a2 2 0 0 1 2-2h5" />
      <circle cx="12" cy="14" r="0.75" fill={color} />
      <path d="M6 21v-1M12 21v-1M18 21v-1" />
    </svg>
  );
}

function InfoIcon({ color = 'currentColor', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

const ICON_MAP = {
  handwash: HandWashIcon,
  machine: MachineWashIcon,
  dry: DryFlatIcon,
  store: StorageIcon,
  pilling: PillingIcon,
  iron: IronIcon,
};

const CARE_TIPS = [
  {
    icon: 'handwash',
    title: 'Lavado a mano',
    color: '#D4C5AE',
    tips: [
      'Usá agua tibia (máximo 30°C)',
      'Jabón neutro o shampoo suave',
      'Nunca refregar ni torcer la prenda',
      'Enjuagá con cuidado sin exprimir',
    ],
  },
  {
    icon: 'machine',
    title: 'Lavadora (si es necesario)',
    color: '#C2AD92',
    tips: [
      'Solo programa delicado o lana',
      'Agua fría, máximo 30°C',
      'Usá bolsa de red protectora',
      'Centrifugado mínimo o sin centrifugado',
    ],
  },
  {
    icon: 'dry',
    title: 'Secado',
    color: '#A8906F',
    tips: [
      'Nunca en secadora eléctrica',
      'Extendé la prenda sobre una toalla',
      'Secá en posición horizontal',
      'Evitá el sol directo y el calor',
    ],
  },
  {
    icon: 'store',
    title: 'Guardado',
    color: '#8B7355',
    tips: [
      'Doblá, nunca colgues las prendas de lana',
      'Usá bolsas de tela o papel',
      'Agregá lavanda para repeler polillas',
      'Guardá en lugar seco y ventilado',
    ],
  },
  {
    icon: 'pilling',
    title: 'Pilling (pelotitas)',
    color: '#7C6B58',
    tips: [
      'Es normal en prendas de lana natural',
      'Usá una maquinita quitapelusas',
      'También podés usar un rastrillo especial',
      'Hacelo con suavidad para no dañar el tejido',
    ],
  },
  {
    icon: 'iron',
    title: 'Planchado',
    color: '#5E4F3E',
    tips: [
      'Preferí el vapor suave sobre la plancha',
      'Nunca planches directo sobre la lana',
      'Usá un paño de tela como intermediario',
      'Mantené la plancha en movimiento',
    ],
  },
];

export default function CarePage() {
  return (
    <div style={{ paddingTop: '96px' }}>
      {/* Hero */}
      <div style={{ backgroundColor: '#3D2B1F', padding: '6rem 1.5rem 5rem 1.5rem', color: '#FDFAF5' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left Column (Text) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C2AD92',
              marginBottom: '1rem'
            }}>
              Guía de cuidados
            </p>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#FDFAF5',
              lineHeight: 1.15,
              marginBottom: '1.25rem'
            }}>
              Cuidá tu prenda<br />
              <span style={{ color: '#C2AD92', fontStyle: 'italic' }}>tejida a mano</span>
            </h1>
            <p style={{ color: '#C4B8AD', fontSize: '1.025rem', lineHeight: '1.7', maxWidth: '480px' }}>
              Las prendas artesanales de lana natural son piezas únicas que cuentan historias. Con el cuidado adecuado, conservarán su suavidad, textura y forma original por muchas temporadas.
            </p>
          </div>

          {/* Right Column (Framed Image) */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Artistic frame container */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '4/3',
              backgroundColor: '#EDE5D5',
              borderRadius: '4px',
              padding: '8px',
              boxShadow: '12px 12px 0px rgba(168, 144, 111, 0.35)', // Artistic offset frame shadow
              border: '1px solid rgba(253, 250, 245, 0.15)',
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderRadius: '2px',
              }}>
                <img
                  src="/images/products/saco-beige.png"
                  alt="Textura de saco de lana beige premium"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.95,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        {/* Alert / General Tip */}
        <div style={{
          backgroundColor: '#FDFAF5',
          border: '1px solid #DDD0BE',
          borderLeft: '4px solid #A8906F',
          borderRadius: '4px',
          padding: '1.5rem 2rem',
          marginBottom: '4rem',
          display: 'flex',
          gap: '1.25rem',
          alignItems: 'flex-start',
          boxShadow: '0 4px 20px rgba(61,43,31,0.03)',
        }}>
          <div style={{
            color: '#A8906F',
            backgroundColor: '#A8906F15',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <InfoIcon color="#A8906F" size={20} />
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#3D2B1F',
              marginBottom: '0.35rem',
              letterSpacing: '0.01em'
            }}>
              Consejo primordial
            </p>
            <p style={{ color: '#7C6B58', fontSize: '0.9375rem', lineHeight: '1.7' }}>
              Las prendas de lana natural como el merino o la alpaca son sumamente delicadas pero increíblemente duraderas si se cuidan correctamente. El secreto de oro radica en el lavado manual suave y el secado en plano horizontal. <strong>Nunca las cuelgues mojadas:</strong> el peso del agua estirará las fibras y deformará la prenda de forma irreversible.
            </p>
          </div>
        </div>

        {/* Tips grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {CARE_TIPS.map((tip) => {
            const IconComponent = ICON_MAP[tip.icon];
            return (
              <div
                key={tip.title}
                className="card"
                style={{
                  backgroundColor: '#FDFAF5',
                  border: '1px solid #EDE5D5',
                  borderTop: `3px solid ${tip.color}`,
                  borderRadius: '4px',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  boxShadow: '0 2px 8px rgba(61,43,31,0.02)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: tip.color + '26', // ~15% opacity
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#3D2B1F'
                  }}>
                    <IconComponent color="#3D2B1F" size={20} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', fontWeight: 700, color: '#3D2B1F' }}>
                    {tip.title}
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', margin: 0, padding: 0 }}>
                  {tip.tips.map((t) => (
                    <li key={t} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', fontSize: '0.875rem', color: '#7C6B58', lineHeight: '1.6' }}>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#A8906F" strokeWidth="3" style={{ flexShrink: 0, marginTop: '0.25rem' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span style={{ flex: 1 }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Materials */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-subtitle" style={{ marginBottom: '0.5rem' }}>Materiales</p>
            <h2 className="section-title">Los materiales que usamos</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Lana Merino', desc: 'Ultra suave, hipoalergénica y termorreguladora. La más premium.', temp: '≤30°C' },
              { name: 'Alpaca', desc: 'Ligerísima, más cálida que la lana y sin picazón.', temp: '≤30°C' },
              { name: 'Lana Mezcla', desc: 'Combinación de lana natural con fibras para mayor durabilidad.', temp: '≤30°C' },
              { name: 'Lana Artesanal', desc: 'Lana tradicional de campo, con carácter y textura natural.', temp: '≤30°C' },
            ].map((m) => (
              <div
                key={m.name}
                className="card"
                style={{
                  backgroundColor: '#FDFAF5',
                  border: '1px solid #DDD0BE',
                  borderLeft: '3px solid #C9B99E',
                  borderRadius: '4px',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  boxShadow: '0 2px 8px rgba(61,43,31,0.02)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#3D2B1F', fontSize: '1rem' }}>{m.name}</h4>
                  <span style={{
                    fontSize: '0.75rem',
                    border: '1.5px dashed #A8906F',
                    color: '#A8906F',
                    backgroundColor: '#FDFAF5',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '2px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap'
                  }}>
                    {m.temp}
                  </span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#7C6B58', lineHeight: '1.6', margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Questions CTA (Postcard frame) */}
        <div style={{
          backgroundColor: '#3D2B1F',
          borderRadius: '4px',
          padding: '8px',
          boxShadow: '0 4px 30px rgba(61,43,31,0.15)',
          marginBottom: '2rem',
        }}>
          <div style={{
            border: '1.5px solid #A8906F',
            borderRadius: '2px',
            padding: '3rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#FDFAF5',
              margin: 0,
            }}>
              ¿Tenés dudas sobre el cuidado?
            </p>
            <p style={{
              color: '#C4B8AD',
              fontSize: '0.875rem',
              maxWidth: '420px',
              lineHeight: '1.6',
              margin: '0 0 1rem 0'
            }}>
              Queremos que tu prenda VG se mantenga perfecta. Si tenés una consulta específica sobre lavado o almacenamiento, escribinos directamente.
            </p>
            <a
              href="https://wa.me/5491100000000?text=Hola! Tengo una consulta sobre el cuidado de mi prenda de VG Tejidos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.875rem 2rem',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.03em',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.25)',
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.989-1.874-1.874-4.354-2.904-6.993-2.906-5.441 0-9.866 4.423-9.87 9.871-.001 1.764.476 3.49 1.385 5.025l-.985 3.598 3.68-.966zm11.572-7.202c-.322-.161-1.905-.94-2.202-1.05-.297-.109-.514-.162-.73.162-.217.324-.841 1.05-.1.05.163-.162.296-.324.618-.486c.324-.162.162-.324.08-.486-.08-.162-.73-1.758-.999-2.41-.263-.632-.53-.546-.73-.556-.19-.01-.406-.01-.617-.01-.21 0-.556.08-.846.39-.29.313-1.11.1.085-1.11.085s-2.13.04-2.13.04.145.485.467.566c.322.08 1.906.94 2.202 1.05.297.11.514.16.73-.16.217-.32.84-1.05 1.03-1.21.19-.16.38-.13.7-.13.32 0 .556-.08.847-.39.29-.31 1.11-1.08 1.11-2.64 0-1.56-1.136-2.3-1.233-2.41-.097-.11-.2-.16-.3-.16z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
