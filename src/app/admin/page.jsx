'use client';

import { useState, useEffect } from 'react';
import initialProducts from '@/data/products.json';

const ADMIN_PASSWORD = 'vgtejidos2024'; // Contraseña simple — cambiar antes de publicar

const EMPTY_PRODUCT = {
  id: '',
  name: '',
  category: 'sacos',
  description: '',
  price: '',
  images: ['/images/products/saco-beige.png'],
  colors: [{ name: 'Beige', hex: '#D4B896' }],
  sizes: ['S', 'M', 'L'],
  featured: false,
  inStock: true,
  material: '',
  slug: '',
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState(EMPTY_PRODUCT);
  const [saved, setSaved] = useState(false);

  // Cargar productos desde localStorage (con fallback a JSON)
  useEffect(() => {
    if (!authenticated) return;
    const stored = localStorage.getItem('vgtejidos-products');
    if (stored) {
      try { setProducts(JSON.parse(stored)); } catch { setProducts(initialProducts); }
    } else {
      setProducts(initialProducts);
    }
  }, [authenticated]);

  const saveProducts = (list) => {
    setProducts(list);
    localStorage.setItem('vgtejidos-products', JSON.stringify(list));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setForm({ ...product, price: product.price.toString() });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNew = () => {
    setEditingProduct(null);
    setForm({ ...EMPTY_PRODUCT, id: `product-${Date.now()}`, slug: `product-${Date.now()}` });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (!confirm('¿Eliminar este producto?')) return;
    saveProducts(products.filter((p) => p.id !== id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const product = {
      ...form,
      price: Number(form.price),
      slug: form.slug || form.name.toLowerCase().replace(/\s+/g, '-'),
    };

    let updated;
    if (editingProduct) {
      updated = products.map((p) => (p.id === editingProduct ? product : p));
    } else {
      updated = [...products, product];
    }
    saveProducts(updated);
    setShowForm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleColorChange = (index, field, value) => {
    const newColors = [...form.colors];
    newColors[index] = { ...newColors[index], [field]: value };
    setForm({ ...form, colors: newColors });
  };

  const addColor = () => setForm({ ...form, colors: [...form.colors, { name: '', hex: '#D4B896' }] });
  const removeColor = (i) => setForm({ ...form, colors: form.colors.filter((_, idx) => idx !== i) });

  const handleSizesChange = (val) => {
    setForm({ ...form, sizes: val.split(',').map((s) => s.trim()).filter(Boolean) });
  };

  // Login screen
  if (!authenticated) {
    return (
      <div style={{ paddingTop: '96px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔐</div>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.75rem', fontWeight: 700, color: '#3D2B1F', marginBottom: '0.5rem' }}>
              Panel Admin
            </h1>
            <p style={{ color: '#9C9087', fontSize: '0.875rem' }}>VG Tejidos — Solo para la dueña</p>
          </div>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7C6B58', marginBottom: '0.375rem' }}>
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresá la contraseña"
                className="input-field"
                id="admin-password"
                autoFocus
                style={{ borderColor: passwordError ? '#e74c3c' : undefined }}
              />
              {passwordError && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '0.25rem' }}>Contraseña incorrecta</p>}
            </div>
            <button type="submit" className="btn-primary" id="admin-login-btn">
              Ingresar al panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '96px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#3D2B1F', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A8906F', marginBottom: '0.25rem' }}>
              Panel de administración
            </p>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.75rem', fontWeight: 700, color: '#FDFAF5' }}>
              Gestión de productos
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {saved && (
              <span style={{ color: '#6BCB77', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                ✓ Guardado
              </span>
            )}
            <button onClick={handleNew} className="btn-primary" style={{ backgroundColor: '#A8906F' }} id="admin-new-product-btn">
              + Nuevo producto
            </button>
            <button onClick={() => setAuthenticated(false)} className="btn-ghost" style={{ color: '#9C9087' }}>
              Salir
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        {/* Product Form */}
        {showForm && (
          <div style={{ backgroundColor: '#FDFAF5', border: '1.5px solid #DDD0BE', borderRadius: '4px', padding: '2rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', fontWeight: 700, color: '#3D2B1F' }}>
                {editingProduct ? 'Editar producto' : 'Nuevo producto'}
              </h2>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9C9087' }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSave} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              <FormField label="Nombre *">
                <input className="input-field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ej: Saco Clásico Beige" required id="admin-product-name" />
              </FormField>

              <FormField label="Categoría">
                <select className="input-field" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} id="admin-product-category">
                  {['sacos', 'sweaters', 'buzos', 'gorros', 'accesorios'].map((c) => (
                    <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                  ))}
                </select>
              </FormField>

              <FormField label="Precio (ARS) *">
                <input className="input-field" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="45000" required id="admin-product-price" />
              </FormField>

              <FormField label="Material">
                <input className="input-field" value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} placeholder="100% Lana Merino" id="admin-product-material" />
              </FormField>

              <FormField label="Talles (separados por coma)" style={{ gridColumn: '1 / -1' }}>
                <input className="input-field" value={form.sizes.join(', ')} onChange={(e) => handleSizesChange(e.target.value)} placeholder="S, M, L, XL" id="admin-product-sizes" />
              </FormField>

              <FormField label="Descripción" style={{ gridColumn: '1 / -1' }}>
                <textarea className="input-field" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} placeholder="Descripción del producto..." id="admin-product-desc" />
              </FormField>

              {/* Colors */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7C6B58', marginBottom: '0.75rem' }}>
                  Colores
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {form.colors.map((color, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input type="color" value={color.hex} onChange={(e) => handleColorChange(i, 'hex', e.target.value)} style={{ width: '36px', height: '36px', border: 'none', borderRadius: '2px', cursor: 'pointer', padding: 0 }} />
                      <input className="input-field" value={color.name} onChange={(e) => handleColorChange(i, 'name', e.target.value)} placeholder="Nombre del color" style={{ flex: 1 }} />
                      <button type="button" onClick={() => removeColor(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C4B8AD', padding: '0.25rem' }}>✕</button>
                    </div>
                  ))}
                  <button type="button" onClick={addColor} className="btn-ghost" style={{ alignSelf: 'flex-start', padding: '0.375rem 0', fontSize: '0.8125rem' }}>
                    + Agregar color
                  </button>
                </div>
              </div>

              {/* Flags */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: '#5E4F3E' }}>
                  <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} id="admin-product-featured" />
                  Producto destacado
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: '#5E4F3E' }}>
                  <input type="checkbox" checked={form.inStock} onChange={(e) => setForm({ ...form, inStock: e.target.checked })} id="admin-product-instock" />
                  En stock
                </label>
              </div>

              {/* Buttons */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
                <button type="submit" className="btn-primary" id="admin-save-product-btn">
                  {editingProduct ? 'Guardar cambios' : 'Crear producto'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="btn-outline">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Product Table */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.125rem', fontWeight: 700, color: '#3D2B1F' }}>
              {products.length} productos en el catálogo
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #DDD0BE' }}>
                  {['Producto', 'Categoría', 'Precio', 'Talles', 'Destacado', 'Stock', 'Acciones'].map((h) => (
                    <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9C9087' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid #EDE5D5', transition: 'background 0.15s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F9F4EA')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '40px', height: '48px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EDE5D5', flexShrink: 0 }}>
                          <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span style={{ fontWeight: 600, color: '#3D2B1F' }}>{p.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#EDE5D5', borderRadius: '2px', fontSize: '0.75rem', color: '#7C6B58' }}>
                        {p.category}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', fontWeight: 600, color: '#3D2B1F' }}>
                      ${p.price.toLocaleString('es-AR')}
                    </td>
                    <td style={{ padding: '1rem', color: '#7C6B58' }}>
                      {p.sizes.join(', ')}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ color: p.featured ? '#6BCB77' : '#C4B8AD', fontSize: '1rem' }}>
                        {p.featured ? '★' : '☆'}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ color: p.inStock ? '#6BCB77' : '#e74c3c', fontSize: '0.8rem', fontWeight: 600 }}>
                        {p.inStock ? 'En stock' : 'Sin stock'}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button onClick={() => handleEdit(p)} className="btn-ghost" style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem', color: '#7C6B58' }}>
                          Editar
                        </button>
                        <button onClick={() => handleDelete(p.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C4B8AD', fontSize: '0.8125rem', padding: '0.375rem 0.5rem', transition: 'color 0.2s' }}
                          onMouseEnter={(e) => (e.target.style.color = '#e74c3c')}
                          onMouseLeave={(e) => (e.target.style.color = '#C4B8AD')}>
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.25rem', backgroundColor: '#F9F4EA', borderRadius: '4px', border: '1px solid #EDE5D5' }}>
            <p style={{ fontSize: '0.8125rem', color: '#9C9087', lineHeight: '1.7' }}>
              <strong style={{ color: '#7C6B58' }}>Nota:</strong> Los cambios se guardan localmente en este navegador.
              Para conectar con una base de datos real, la estructura JSON de los productos ya está lista para ser integrada con Supabase, Firebase o cualquier API REST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, children, style }) {
  return (
    <div style={style}>
      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7C6B58', marginBottom: '0.375rem' }}>
        {label}
      </label>
      {children}
    </div>
  );
}
