import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#3D2B1F',
      color: '#C4B8AD',
      padding: '4rem 1.5rem 2rem',
      marginTop: '6rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: '#F5F0E8',
              marginBottom: '0.75rem',
            }}>
              VG <span style={{ color: '#C2AD92' }}>Tejidos</span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.7', color: '#9C9087', maxWidth: '240px' }}>
              Prendas artesanales tejidas con amor y dedicación. Cada pieza, única e irrepetible.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-warm hover:text-cream transition-colors duration-200"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-warm hover:text-cream transition-colors duration-200"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A8906F', marginBottom: '1.25rem', fontWeight: 600 }}>
              Tienda
            </h4>
            {[
              { href: '/catalog', label: 'Catálogo' },
              { href: '/catalog?cat=sacos', label: 'Sacos' },
              { href: '/catalog?cat=sweaters', label: 'Sweaters' },
              { href: '/catalog?cat=accesorios', label: 'Accesorios' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="block text-warm hover:text-cream text-sm mb-2.5 no-underline transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A8906F', marginBottom: '1.25rem', fontWeight: 600 }}>
              Información
            </h4>
            {[
              { href: '/about', label: 'Sobre nosotras' },
              { href: '/care', label: 'Cuidado de prendas' },
              { href: '/cart', label: 'Carrito' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="block text-warm hover:text-cream text-sm mb-2.5 no-underline transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A8906F', marginBottom: '1.25rem', fontWeight: 600 }}>
              Contacto
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#9C9087', marginBottom: '0.5rem' }}>WhatsApp: +54 9 11 0000-0000</p>
            <p style={{ fontSize: '0.875rem', color: '#9C9087', marginBottom: '0.5rem' }}>vgtejidos@email.com</p>
            <p style={{ fontSize: '0.875rem', color: '#9C9087' }}>Buenos Aires, Argentina</p>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '1.5rem' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8125rem', color: '#736860' }}>
            © {new Date().getFullYear()} VG Tejidos. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: '0.8125rem', color: '#736860' }}>
            Tejido con 🧶 en Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
