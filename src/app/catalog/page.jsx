'use client';

import { useState, useMemo } from 'react';
import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const CATEGORIES = [
  { key: 'all', label: 'Todo' },
  { key: 'sacos', label: 'Sacos' },
  { key: 'sweaters', label: 'Sweaters' },
  { key: 'buzos', label: 'Buzos' },
  { key: 'gorros', label: 'Gorros' },
  { key: 'accesorios', label: 'Accesorios' },
];

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState('default');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [activeCategory, sortBy, search]);

  return (
    <div style={{ paddingTop: '96px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#3D2B1F', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A8906F', marginBottom: '0.75rem' }}>
            Colección completa
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#FDFAF5', marginBottom: '1rem' }}>
            Catálogo VG Tejidos
          </h1>
          <p style={{ color: '#9C9087', fontSize: '1rem', maxWidth: '450px', margin: '0 auto' }}>
            Prendas artesanales para cada ocasión, tejidas con lana premium.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Filters bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          {/* Category tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                id={`filter-${cat.key}`}
                style={{
                  padding: '0.5rem 1.125rem',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat.key ? '#3D2B1F' : '#DDD0BE',
                  backgroundColor: activeCategory === cat.key ? '#3D2B1F' : 'transparent',
                  color: activeCategory === cat.key ? '#F5F0E8' : '#7C6B58',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#C4B8AD' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="catalog-search"
                className="input-field"
                style={{ paddingLeft: '2.25rem', width: '180px', fontSize: '0.875rem' }}
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              id="catalog-sort"
              className="input-field"
              style={{ width: 'auto', fontSize: '0.875rem' }}
            >
              <option value="default">Ordenar por</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="name">Nombre A-Z</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p style={{ fontSize: '0.8125rem', color: '#9C9087', marginBottom: '1.5rem' }}>
          {filtered.length} {filtered.length === 1 ? 'prenda' : 'prendas'}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#9C9087', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ color: '#C9B99E', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3M8 11h6" />
              </svg>
            </div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', color: '#3D2B1F', marginBottom: '0.5rem', fontWeight: 600 }}>Sin resultados</p>
            <p style={{ fontSize: '0.875rem' }}>Probá con otra búsqueda o categoría</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div style={{ paddingTop: '96px', textAlign: 'center', padding: '10rem', color: '#9C9087' }}>Cargando catálogo...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
