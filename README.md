# VG Tejidos — E-Commerce Premium

Tienda online premium para **VG Tejidos**, una marca artesanal de ropa tejida (sacos, sweaters, buzos, bufandas, gorros y accesorios) fabricada a mano en Buenos Aires, Argentina.

El diseño del sitio es minimalista y cálido, inspirado en colores de lana natural y texturas orgánicas (crema, arena, tierra, gris y beige).

---

## 🚀 Tecnologías Utilizadas

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Lógica de Interfaz**: [React 19](https://react.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Estado Global (Carrito)**: React Context API + LocalStorage
- **Persistencia**: Archivo JSON de productos local y LocalStorage (preparado para integrar base de datos real).

---

## 📦 Características Principales

1. **Catálogo de Productos**:
   - Grilla fluida y responsive de productos con soporte para colores, talles, precios y detalles.
   - Filtros dinámicos por categorías.

2. **Carrito de Compras**:
   - Drawer deslizante interactivo y página de checkout dedicada.
   - Persistencia local del carrito entre recargas de página.

3. **Flujo de Checkout Directo**:
   - Formulario de contacto con validaciones.
   - Despacho de pedidos mediante botones integrados:
     - **WhatsApp**: Envía un mensaje estructurado y detallado del pedido a la dueña.
     - **Email**: Prepara un correo electrónico listo para enviar con la información del pedido.

4. **Panel de Administración**:
   - Protegido por contraseña simple (`vgtejidos2024`).
   - CRUD completo de productos (Crear, Editar, Eliminar) con persistencia temporal.

5. **Optimización SEO**:
   - Metadata, keywords y tags Open Graph configurados de forma nativa en las páginas.

---

## 🛠️ Cómo Comenzar

### 1. Clonar e Instalar dependencias

```bash
npm install
```

### 2. Ejecutar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### 3. Crear build para producción

```bash
npm run build
npm run start
```
