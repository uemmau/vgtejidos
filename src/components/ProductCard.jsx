'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem, openCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
    openCart();
  };

  return (
    <div
      className="card"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '3/4', backgroundColor: '#EDE5D5', overflow: 'hidden' }}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.04)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Category badge */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          backgroundColor: 'rgba(245, 240, 232, 0.9)',
          backdropFilter: 'blur(6px)',
          padding: '0.2rem 0.6rem',
          borderRadius: '2px',
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#A8906F',
        }}>
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1 }}>
        {/* Name & Price */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 700, color: '#3D2B1F', lineHeight: 1.3 }}>
            {product.name}
          </h3>
          <span style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#3D2B1F', whiteSpace: 'nowrap' }}>
            ${product.price.toLocaleString('es-AR')}
          </span>
        </div>

        <p style={{ fontSize: '0.8125rem', color: '#9C9087', lineHeight: '1.6', flexGrow: 1 }}>
          {product.description.length > 90 ? product.description.slice(0, 90) + '...' : product.description}
        </p>

        {/* Colors */}
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4B8AD', marginBottom: '0.5rem' }}>
            Color: <span style={{ color: '#7C6B58' }}>{selectedColor.name}</span>
          </p>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                aria-label={`Color ${color.name}`}
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  backgroundColor: color.hex,
                  border: selectedColor.name === color.name ? '2px solid #3D2B1F' : '2px solid transparent',
                  outline: selectedColor.name === color.name ? '2px solid #C9B99E' : '2px solid transparent',
                  outlineOffset: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4B8AD', marginBottom: '0.5rem' }}>
            Talle
          </p>
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: '0.25rem 0.6rem',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  border: selectedSize === size ? '1.5px solid #3D2B1F' : '1.5px solid #DDD0BE',
                  backgroundColor: selectedSize === size ? '#3D2B1F' : 'transparent',
                  color: selectedSize === size ? '#F5F0E8' : '#7C6B58',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          id={`add-to-cart-${product.id}`}
          className="btn-primary"
          style={{
            width: '100%',
            backgroundColor: added ? '#A8906F' : '#3D2B1F',
          }}
        >
          {added ? (
            <>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              ¡Agregado!
            </>
          ) : (
            <>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
}
