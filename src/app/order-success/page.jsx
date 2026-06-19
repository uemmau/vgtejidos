import Link from 'next/link';

export default function OrderSuccessPage() {
  return (
    <div style={{
      paddingTop: '96px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 1.5rem',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '540px' }}>
        {/* Success icon */}
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#EDE5D5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          fontSize: '2.5rem',
          animation: 'fadeIn 0.5s ease',
        }}>
          🧶
        </div>

        <h1 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: '#3D2B1F',
          marginBottom: '1rem',
          animation: 'fadeUp 0.5s ease 0.1s both',
        }}>
          ¡Gracias por tu pedido!
        </h1>

        <p style={{
          fontSize: '1.0625rem',
          color: '#7C6B58',
          lineHeight: '1.75',
          marginBottom: '2.5rem',
          animation: 'fadeUp 0.5s ease 0.2s both',
        }}>
          Recibimos tu pedido. La dueña se comunicará por WhatsApp para confirmar disponibilidad, método de pago y envío.
        </p>

        <div style={{
          backgroundColor: '#F9F4EA',
          border: '1.5px solid #DDD0BE',
          borderRadius: '4px',
          padding: '1.5rem',
          marginBottom: '2.5rem',
          animation: 'fadeUp 0.5s ease 0.3s both',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { icon: '📱', text: 'Te contactarán por WhatsApp dentro de las próximas horas.' },
              { icon: '💰', text: 'Te confirmarán el método de pago y el costo del envío.' },
              { icon: '📦', text: 'Una vez confirmado el pago, se prepara y envía tu prenda.' },
            ].map((step) => (
              <div key={step.text} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', textAlign: 'left' }}>
                <span style={{ fontSize: '1.125rem', flexShrink: 0 }}>{step.icon}</span>
                <p style={{ fontSize: '0.9rem', color: '#7C6B58', lineHeight: '1.6' }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeUp 0.5s ease 0.4s both' }}>
          <Link href="/" className="btn-primary" style={{ textDecoration: 'none' }}>
            Volver al inicio
          </Link>
          <Link href="/catalog" className="btn-outline" style={{ textDecoration: 'none' }}>
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}
