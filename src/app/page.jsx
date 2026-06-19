import Image from 'next/image';
import Link from 'next/link';
import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';

const featured = products.filter((p) => p.featured).slice(0, 4);

const CATEGORIES = [
  { key: 'sacos', label: 'Sacos', icon: '🧥' },
  { key: 'sweaters', label: 'Sweaters', icon: '👕' },
  { key: 'buzos', label: 'Buzos', icon: '🫙' },
  { key: 'gorros', label: 'Gorros', icon: '🎩' },
  { key: 'bufandas', label: 'Bufandas', icon: '🧣' },
  { key: 'accesorios', label: 'Accesorios', icon: '✨' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/hero.png"
            alt="VG Tejidos — Colección artesanal"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(61,43,31,0.7) 0%, rgba(61,43,31,0.3) 50%, rgba(61,43,31,0.1) 100%)',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '6rem 1.5rem 4rem', width: '100%' }}>
          <div style={{ maxWidth: '580px' }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C2AD92',
              marginBottom: '1.25rem',
              animation: 'fadeUp 0.6s ease-out 0.1s both',
            }}>
              🧶 Tejido a mano · Buenos Aires
            </p>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              color: '#FDFAF5',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              animation: 'fadeUp 0.6s ease-out 0.2s both',
            }}>
              Prendas que<br />
              <span style={{ color: '#C2AD92', fontStyle: 'italic' }}>abrazan el alma</span>
            </h1>
            <p style={{
              fontSize: '1.0625rem',
              color: 'rgba(253, 250, 245, 0.85)',
              lineHeight: '1.75',
              marginBottom: '2.5rem',
              maxWidth: '460px',
              animation: 'fadeUp 0.6s ease-out 0.3s both',
            }}>
              Cada prenda, tejida con amor y lana premium. Sacos, sweaters, bufandas y más — diseñados para durar toda la vida.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.6s ease-out 0.4s both' }}>
              <Link href="/catalog" className="btn-primary" style={{ backgroundColor: '#F5F0E8', color: '#3D2B1F', textDecoration: 'none' }}
                id="hero-catalog-btn">
                Ver catálogo
              </Link>
              <Link href="/about" className="btn-outline" style={{ borderColor: 'rgba(253,250,245,0.6)', color: '#FDFAF5', textDecoration: 'none' }}>
                Nuestra historia
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(253,250,245,0.6)',
          animation: 'float 2s ease-in-out infinite',
        }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Brand Values */}
      <section style={{ backgroundColor: '#3D2B1F', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            {[
              { icon: '🧶', title: '100% Artesanal', desc: 'Cada prenda es tejida a mano, pieza por pieza.' },
              { icon: '🌿', title: 'Lana Premium', desc: 'Usamos lana merino y materiales naturales de calidad.' },
              { icon: '♾️', title: 'Prendas únicas', desc: 'Sin producción en masa. Cada una es irrepetible.' },
              { icon: '💛', title: 'Hecho con amor', desc: 'Una emprendedora detrás de cada tejido.' },
            ].map((v) => (
              <div key={v.title}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.125rem', fontWeight: 700, color: '#F5F0E8', marginBottom: '0.5rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#9C9087', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-subtitle" style={{ marginBottom: '0.75rem' }}>Colección</p>
            <h2 className="section-title">Explorá por categoría</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.key}
                href={`/catalog?cat=${cat.key}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="bg-cream-50 border-[1.5px] border-sand-100 rounded-[4px] py-7 px-4 text-center cursor-pointer transition-all duration-300 hover:border-wool-300 hover:bg-cream-100 hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(61,43,31,0.1)]">
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.625rem' }}>{cat.icon}</div>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5E4F3E' }}>
                    {cat.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '1200px', margin: '0 auto' }} />

      {/* Featured Products */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="section-subtitle" style={{ marginBottom: '0.75rem' }}>Selección</p>
              <h2 className="section-title">Productos destacados</h2>
            </div>
            <Link href="/catalog" className="btn-outline" style={{ textDecoration: 'none' }}>
              Ver todo →
            </Link>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        margin: '0 1.5rem 6rem',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'linear-gradient(135deg, #3D2B1F 0%, #5E4F3E 100%)',
        borderRadius: '8px',
        padding: '4rem 3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C2AD92', marginBottom: '1rem' }}>
          🧶 Encargos personalizados
        </p>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#FDFAF5', marginBottom: '1rem' }}>
          ¿Querés algo especial?
        </h2>
        <p style={{ color: '#C4B8AD', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
          Hacemos encargos personalizados en el color, talle y diseño que elijas.
        </p>
        <a
          href="https://wa.me/5491100000000?text=Hola! Quisiera hacer un encargo personalizado en VG Tejidos."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ backgroundColor: '#25D366', color: 'white', textDecoration: 'none', display: 'inline-flex', gap: '0.5rem' }}
          id="custom-order-btn"
        >
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          Escribinos por WhatsApp
        </a>
      </section>
    </>
  );
}
