'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeCart}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(61, 43, 31, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 55,
            animation: 'fadeIn 0.2s ease',
          }}
        />
      )}

      {/* Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#FDFAF5',
          zIndex: 60,
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '-8px 0 40px rgba(61, 43, 31, 0.15)',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid #EDE5D5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: '#3D2B1F' }}>
              Tu carrito
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#9C9087', marginTop: '2px' }}>
              {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
            </p>
          </div>
          <button
            onClick={closeCart}
            id="close-cart-btn"
            aria-label="Cerrar carrito"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9C9087', padding: '0.25rem' }}
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧶</div>
              <p style={{ color: '#9C9087', fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Tu carrito está vacío
              </p>
              <p style={{ color: '#C4B8AD', fontSize: '0.875rem', marginBottom: '2rem' }}>
                Explorá nuestro catálogo y encontrá tu prenda ideal.
              </p>
              <Link href="/catalog" onClick={closeCart} className="btn-primary">
                Ver catálogo
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {items.map((item) => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(q) => updateQuantity(item.key, q)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '1.5rem', borderTop: '1px solid #EDE5D5', backgroundColor: '#F9F4EA' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#9C9087', fontSize: '0.875rem' }}>Subtotal</span>
              <span style={{ color: '#3D2B1F', fontWeight: 600 }}>${total.toLocaleString('es-AR')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ color: '#9C9087', fontSize: '0.875rem' }}>Envío</span>
              <span style={{ color: '#A8906F', fontSize: '0.875rem', fontStyle: 'italic' }}>A coordinar</span>
            </div>
            <Link
              href="/cart"
              onClick={closeCart}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', textDecoration: 'none', display: 'block' }}
              id="checkout-btn"
            >
              Finalizar pedido →
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onUpdateQty }) {
  return (
    <div style={{
      display: 'flex',
      gap: '0.875rem',
      padding: '0.875rem',
      backgroundColor: '#F5F0E8',
      borderRadius: '4px',
      border: '1px solid #EDE5D5',
    }}>
      {/* Image */}
      <div style={{ position: 'relative', width: '72px', height: '90px', flexShrink: 0, borderRadius: '3px', overflow: 'hidden', backgroundColor: '#EDE5D5' }}>
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="72px"
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.9rem', fontWeight: 700, color: '#3D2B1F', marginBottom: '0.2rem' }}>
          {item.product.name}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{
            padding: '0.125rem 0.5rem',
            backgroundColor: '#EDE5D5',
            borderRadius: '2px',
            fontSize: '0.7rem',
            color: '#7C6B58',
            fontWeight: 500,
          }}>
            Talle {item.size}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.7rem', color: '#7C6B58' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.color.hex, border: '1px solid rgba(0,0,0,0.1)', display: 'inline-block' }} />
            {item.color.name}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Quantity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <button onClick={() => onUpdateQty(item.quantity - 1)} style={{ width: '22px', height: '22px', border: '1px solid #DDD0BE', borderRadius: '2px', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#7C6B58' }}>−</button>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#3D2B1F', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
            <button onClick={() => onUpdateQty(item.quantity + 1)} style={{ width: '22px', height: '22px', border: '1px solid #DDD0BE', borderRadius: '2px', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#7C6B58' }}>+</button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#3D2B1F' }}>
              ${(item.product.price * item.quantity).toLocaleString('es-AR')}
            </span>
            <button
              onClick={onRemove}
              aria-label="Eliminar"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C4B8AD', padding: '0.125rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e74c3c')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#C4B8AD')}
            >
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
