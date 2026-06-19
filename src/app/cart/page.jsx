'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const OWNER_PHONE = '5491100000000'; // ← Reemplazar con número real
const OWNER_EMAIL = 'vgtejidos@email.com'; // ← Reemplazar con email real

function buildWhatsAppMessage(form, items, total) {
  const itemLines = items
    .map(
      (i) =>
        `• ${i.product.name} — Talle ${i.size}, Color ${i.color.name} x${i.quantity} — $${(i.product.price * i.quantity).toLocaleString('es-AR')}`
    )
    .join('\n');

  return (
    `🧶 *Nuevo Pedido - VG Tejidos*\n\n` +
    `👤 *Cliente:* ${form.name}\n` +
    `📱 *Teléfono:* ${form.phone}\n` +
    `📧 *Email:* ${form.email}\n` +
    (form.notes ? `📝 *Notas:* ${form.notes}\n` : '') +
    `\n🛒 *Productos:*\n${itemLines}\n\n` +
    `💰 *Total estimado: $${total.toLocaleString('es-AR')}*\n\n` +
    `El cliente espera confirmación de pago y envío.`
  );
}

function buildEmailBody(form, items, total) {
  const itemLines = items
    .map(
      (i) =>
        `- ${i.product.name} | Talle: ${i.size} | Color: ${i.color.name} | Cantidad: ${i.quantity} | Subtotal: $${(i.product.price * i.quantity).toLocaleString('es-AR')}`
    )
    .join('\n');

  return `Nuevo pedido recibido de VG Tejidos:

DATOS DEL CLIENTE:
Nombre: ${form.name}
Teléfono: ${form.phone}
Email: ${form.email}
${form.notes ? `Notas: ${form.notes}` : ''}

PRODUCTOS:
${itemLines}

TOTAL ESTIMADO: $${total.toLocaleString('es-AR')}

El cliente espera confirmación de pago y envío.`;
}

export default function CartPage() {
  const { items, total, removeItem, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({ name: '', phone: '', email: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Ingresá tu nombre';
    if (!form.phone.trim()) e.phone = 'Ingresá tu teléfono';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Ingresá un email válido';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    if (items.length === 0) return;
    const msg = buildWhatsAppMessage(form, items, total);
    window.open(`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    clearCart();
    router.push('/order-success');
  };

  const handleEmail = () => {
    if (!validate()) return;
    if (items.length === 0) return;
    const subject = encodeURIComponent(`Nuevo pedido VG Tejidos — ${form.name}`);
    const body = encodeURIComponent(buildEmailBody(form, items, total));
    window.open(`mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`, '_blank');
    clearCart();
    router.push('/order-success');
  };

  if (items.length === 0 && !sending) {
    return (
      <div style={{ paddingTop: '96px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 1.5rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🧺</div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', color: '#3D2B1F', marginBottom: '0.75rem' }}>
          Tu carrito está vacío
        </h1>
        <p style={{ color: '#9C9087', marginBottom: '2.5rem' }}>Todavía no hay prendas en tu carrito.</p>
        <Link href="/catalog" className="btn-primary" style={{ textDecoration: 'none' }}>
          Explorar catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '96px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#3D2B1F', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A8906F', marginBottom: '0.5rem' }}>
            Paso final
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#FDFAF5' }}>
            Confirmar pedido
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>

          {/* Order Summary */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: '#3D2B1F', marginBottom: '1.5rem' }}>
              Resumen del pedido
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {items.map((item) => (
                <div key={item.key} style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#FDFAF5', borderRadius: '4px', border: '1px solid #EDE5D5' }}>
                  <div style={{ position: 'relative', width: '80px', height: '96px', flexShrink: 0, borderRadius: '3px', overflow: 'hidden', backgroundColor: '#EDE5D5' }}>
                    <Image src={item.product.images[0]} alt={item.product.name} fill style={{ objectFit: 'cover' }} sizes="80px" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#3D2B1F', marginBottom: '0.25rem' }}>
                      {item.product.name}
                    </p>
                    <p style={{ fontSize: '0.8125rem', color: '#9C9087', marginBottom: '0.375rem' }}>
                      Talle: <strong>{item.size}</strong> · Color: <strong>{item.color.name}</strong>
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <button onClick={() => updateQuantity(item.key, item.quantity - 1)} style={{ width: '24px', height: '24px', border: '1px solid #DDD0BE', borderRadius: '2px', background: 'white', cursor: 'pointer', fontSize: '1rem', color: '#7C6B58' }}>−</button>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#3D2B1F' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.key, item.quantity + 1)} style={{ width: '24px', height: '24px', border: '1px solid #DDD0BE', borderRadius: '2px', background: 'white', cursor: 'pointer', fontSize: '1rem', color: '#7C6B58' }}>+</button>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontWeight: 700, color: '#3D2B1F' }}>${(item.product.price * item.quantity).toLocaleString('es-AR')}</span>
                        <button onClick={() => removeItem(item.key)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C4B8AD' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#e74c3c')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#C4B8AD')}>
                          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div style={{ backgroundColor: '#FDFAF5', borderRadius: '4px', border: '1px solid #EDE5D5', padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: '#9C9087' }}>Subtotal</span>
                <span style={{ fontWeight: 600, color: '#3D2B1F' }}>${total.toLocaleString('es-AR')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #EDE5D5' }}>
                <span style={{ color: '#9C9087' }}>Envío</span>
                <span style={{ color: '#A8906F', fontStyle: 'italic', fontSize: '0.875rem' }}>A coordinar con la dueña</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#3D2B1F' }}>Total estimado</span>
                <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#3D2B1F' }}>${total.toLocaleString('es-AR')}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: '#3D2B1F', marginBottom: '0.5rem' }}>
              Tus datos de contacto
            </h2>
            <p style={{ color: '#9C9087', fontSize: '0.875rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
              Completá tus datos y te contactaremos para confirmar disponibilidad, método de pago y envío.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7C6B58', marginBottom: '0.375rem' }}>
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="checkout-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="María Pérez"
                  className="input-field"
                  style={{ borderColor: errors.name ? '#e74c3c' : undefined }}
                />
                {errors.name && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '0.25rem' }}>{errors.name}</p>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7C6B58', marginBottom: '0.375rem' }}>
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="checkout-phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="11 1234-5678"
                  className="input-field"
                  style={{ borderColor: errors.phone ? '#e74c3c' : undefined }}
                />
                {errors.phone && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '0.25rem' }}>{errors.phone}</p>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7C6B58', marginBottom: '0.375rem' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="checkout-email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="maria@email.com"
                  className="input-field"
                  style={{ borderColor: errors.email ? '#e74c3c' : undefined }}
                />
                {errors.email && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '0.25rem' }}>{errors.email}</p>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7C6B58', marginBottom: '0.375rem' }}>
                  Notas adicionales (opcional)
                </label>
                <textarea
                  id="checkout-notes"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Consultá sobre disponibilidad, colores, encargos..."
                  rows={3}
                  className="input-field"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <p style={{ fontSize: '0.8rem', color: '#C4B8AD', marginBottom: '1rem', textAlign: 'center' }}>
                  Elegí cómo enviar tu pedido:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    onClick={handleWhatsApp}
                    id="send-whatsapp-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.625rem',
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: '#25D366',
                      color: 'white',
                      border: 'none',
                      borderRadius: '2px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1da851')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
                  >
                    <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    Enviar pedido por WhatsApp
                  </button>

                  <button
                    onClick={handleEmail}
                    id="send-email-btn"
                    className="btn-outline"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem' }}
                  >
                    <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    Enviar pedido por Email
                  </button>
                </div>

                <p style={{ fontSize: '0.75rem', color: '#C4B8AD', textAlign: 'center', marginTop: '1rem', lineHeight: '1.6' }}>
                  Sin pago online. La dueña te contactará para coordinar pago y envío.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
