export const metadata = {
  title: 'Cuidado de Prendas — VG Tejidos',
  description: 'Guía completa para cuidar tus prendas tejidas artesanales.',
};

const CARE_TIPS = [
  {
    icon: '🛁',
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
    icon: '🌀',
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
    icon: '🌬️',
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
    icon: '🗄️',
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
    icon: '✂️',
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
    icon: '♨️',
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
      <div style={{ backgroundColor: '#3D2B1F', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A8906F', marginBottom: '0.75rem' }}>
          Guía de cuidados
        </p>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#FDFAF5', marginBottom: '1rem' }}>
          Cuidá tu prenda tejida
        </h1>
        <p style={{ color: '#9C9087', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
          Con el cuidado correcto, tus prendas artesanales pueden durar muchos años y mantenerse hermosas.
        </p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        {/* Alert */}
        <div style={{
          backgroundColor: '#F9F4EA',
          border: '1.5px solid #DDD0BE',
          borderLeft: '4px solid #A8906F',
          borderRadius: '4px',
          padding: '1.25rem 1.5rem',
          marginBottom: '3.5rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>💡</span>
          <div>
            <p style={{ fontWeight: 600, color: '#3D2B1F', marginBottom: '0.25rem' }}>Consejo general</p>
            <p style={{ color: '#7C6B58', fontSize: '0.9375rem', lineHeight: '1.65' }}>
              Las prendas de lana natural como el merino o la alpaca son delicadas pero duraderas. El secreto está en el lavado cuidadoso y el secado horizontal. Nunca las colgues mojadas: el peso del agua puede deformarlas.
            </p>
          </div>
        </div>

        {/* Tips grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {CARE_TIPS.map((tip) => (
            <div key={tip.title} className="bg-cream-50 border border-sand-100 rounded-[4px] p-8 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(61,43,31,0.1)]">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: tip.color + '33',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.375rem',
                  flexShrink: 0,
                }}>
                  {tip.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.0625rem', fontWeight: 700, color: '#3D2B1F' }}>
                  {tip.title}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {tip.tips.map((t) => (
                  <li key={t} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.875rem', color: '#7C6B58', lineHeight: '1.55' }}>
                    <span style={{ color: '#A8906F', flexShrink: 0, marginTop: '0.125rem' }}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Materials */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-subtitle" style={{ marginBottom: '0.5rem' }}>Materiales</p>
            <h2 className="section-title">Los materiales que usamos</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { name: 'Lana Merino', desc: 'Ultra suave, hipoalergénica y termorreguladora. La más premium.', temp: '≤30°C' },
              { name: 'Alpaca', desc: 'Ligerísima, más cálida que la lana y sin picazón.', temp: '≤30°C' },
              { name: 'Lana Mezcla', desc: 'Combinación de lana natural con fibras para mayor durabilidad.', temp: '≤30°C' },
              { name: 'Lana Artesanal', desc: 'Lana tradicional de campo, con carácter y textura natural.', temp: '≤30°C' },
            ].map((m) => (
              <div key={m.name} style={{ backgroundColor: '#EDE5D5', borderRadius: '4px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.625rem' }}>
                  <h4 style={{ fontWeight: 700, color: '#3D2B1F', fontSize: '0.9375rem' }}>{m.name}</h4>
                  <span style={{ fontSize: '0.7rem', backgroundColor: '#C9B99E', color: '#3D2B1F', padding: '0.125rem 0.5rem', borderRadius: '2px', fontWeight: 600 }}>
                    {m.temp}
                  </span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#7C6B58', lineHeight: '1.6' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Questions CTA */}
        <div style={{ textAlign: 'center', backgroundColor: '#3D2B1F', padding: '3rem', borderRadius: '4px' }}>
          <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', color: '#F5F0E8', marginBottom: '0.75rem' }}>
            ¿Tenés dudas sobre el cuidado?
          </p>
          <p style={{ color: '#9C9087', fontSize: '0.875rem', marginBottom: '2rem' }}>
            Escribinos y te ayudamos con gusto.
          </p>
          <a
            href="https://wa.me/5491100000000?text=Hola! Tengo una consulta sobre el cuidado de mi prenda de VG Tejidos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ backgroundColor: '#25D366', textDecoration: 'none', display: 'inline-flex', gap: '0.5rem' }}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
