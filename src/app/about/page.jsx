import Link from 'next/link';

export const metadata = {
  title: 'Sobre Nosotras — VG Tejidos',
  description: 'La historia detrás de VG Tejidos, una marca artesanal de Buenos Aires.',
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
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧶</div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontStyle: 'italic', color: '#5E4F3E', lineHeight: '1.6' }}>
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
                icon: '🌿',
                title: 'Natural y sustentable',
                desc: 'Trabajamos con lana merino, alpaca y fibras naturales que respetan el medio ambiente y cuidan tu piel.',
              },
              {
                icon: '✋',
                title: 'Hecho a mano',
                desc: 'Ninguna máquina reemplaza el tejido artesanal. Cada pieza es única e irrepetible.',
              },
              {
                icon: '⏳',
                title: 'Para durar',
                desc: 'Diseñamos prendas atemporales que no siguen las tendencias fugaces. Calidad que se nota.',
              },
              {
                icon: '💫',
                title: 'Personalizado',
                desc: 'Podés encargar tu prenda en el color, talle y diseño que quieras. Hacemos realidad tu visión.',
              },
            ].map((v) => (
              <div key={v.title} style={{ backgroundColor: '#FDFAF5', border: '1px solid #EDE5D5', borderRadius: '4px', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.0625rem', fontWeight: 700, color: '#3D2B1F', marginBottom: '0.625rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#9C9087', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
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
