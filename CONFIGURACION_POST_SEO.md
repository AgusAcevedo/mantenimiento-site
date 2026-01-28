# Configuración Post-SEO - IAFA Corp

## 🔧 Configuraciones Necesarias en Vercel

### 1. Variables de Entorno
Agregar en el dashboard de Vercel (Settings → Environment Variables):

```bash
NEXT_PUBLIC_SITE_URL=https://iafacorp.com
```

### 2. Dominio Personalizado
1. Ir a Settings → Domains en Vercel
2. Agregar `iafacorp.com` y `www.iafacorp.com`
3. Configurar los DNS según las instrucciones de Vercel

### 3. Verificación de Google Search Console

1. Ir a https://search.google.com/search-console
2. Agregar propiedad: `https://iafacorp.com`
3. Método de verificación recomendado: **Meta tag HTML**
4. Copiar el código de verificación
5. Actualizar [layout.tsx](app/layout.tsx) línea 71:
   ```typescript
   verification: {
     google: 'TU_CODIGO_DE_VERIFICACION_AQUI',
   },
   ```
6. Desplegar y verificar

### 4. Crear Imágenes Faltantes

#### OG Image (Open Graph)
- **Archivo**: `/public/og-image.png`
- **Dimensiones**: 1200 x 630 px
- **Formato**: PNG o JPG
- **Contenido sugerido**: Logo + texto "IAFA - Soluciones Integrales de Mantenimiento"

#### Favicon
- **Archivo**: `/public/favicon.ico`
- **Dimensiones**: 32x32 px (multi-size: 16x16, 32x32, 48x48)
- **Formato**: ICO
- **Herramienta**: https://realfavicongenerator.net/

#### Apple Touch Icon
- **Archivo**: `/public/apple-touch-icon.png`
- **Dimensiones**: 180 x 180 px
- **Formato**: PNG

#### Android Icons (PWA)
- **Archivo**: `/public/android-chrome-192x192.png`
  - Dimensiones: 192 x 192 px
- **Archivo**: `/public/android-chrome-512x512.png`
  - Dimensiones: 512 x 512 px

**Generador recomendado**: https://www.pwabuilder.com/imageGenerator

### 5. Configurar Google Business Profile (Local SEO)

1. Ir a https://business.google.com/
2. Crear o reclamar el perfil de negocio
3. Completar toda la información:
   - Nombre: IAFA
   - Categoría: Servicios de Mantenimiento de Edificios
   - Dirección: (dirección real en Buenos Aires)
   - Teléfono: +54 9 11 2518 6253
   - Sitio web: https://iafacorp.com
   - Horarios de atención
4. Agregar fotos de alta calidad
5. Solicitar reseñas a clientes

### 6. Actualizar Redes Sociales

Actualizar los enlaces en [site.ts](app/data/site.ts) línea 53-57 con las URLs reales:

```typescript
sameAs: [
  "https://www.facebook.com/TU_PAGINA_REAL",
  "https://www.instagram.com/TU_USUARIO_REAL",
  "https://www.linkedin.com/company/TU_EMPRESA_REAL"
],
```

### 7. Sitemap en Google Search Console

Una vez verificado el sitio:
1. Ir a Sitemaps en Google Search Console
2. Agregar: `https://iafacorp.com/sitemap.xml`
3. Enviar

### 8. Robots.txt - Verificación

Después del deploy, verificar que funcione:
```
https://iafacorp.com/robots.txt
```

## 🎨 Mejoras de Contenido Recomendadas

### Agregar Sección FAQ
Crear un nuevo componente `FAQ.tsx` con preguntas frecuentes:
- ¿Qué servicios ofrecen?
- ¿Atienden emergencias?
- ¿En qué zonas trabajan?
- ¿Cómo solicitar un presupuesto?

Las FAQ son excelentes para SEO y aparecen en los resultados de búsqueda de Google.

### Testimonios Reales
Activar la sección de testimonios en [page.tsx](app/page.tsx) línea 16 con comentarios reales de clientes.

### Blog (Opcional pero Recomendado)
Crear artículos sobre:
- Mantenimiento preventivo vs correctivo
- Cómo mantener sistemas de aire acondicionado
- Normativas de seguridad contra incendios
- Tips de mantenimiento para edificios

## 📊 Monitoreo y Analytics

### Herramientas ya instaladas:
- ✅ Vercel Analytics
- ✅ Vercel Speed Insights

### Herramientas adicionales recomendadas:

#### 1. Google Analytics 4 (opcional)
```bash
# Instalar
npm install @next/third-parties
```

Agregar en layout.tsx:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// En el componente
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

#### 2. Microsoft Clarity (Heatmaps - Gratis)
1. Ir a https://clarity.microsoft.com/
2. Crear proyecto
3. Copiar el código de tracking
4. Agregar en [layout.tsx](app/layout.tsx) dentro del `<head>`

## 🔍 Comandos de Verificación

```bash
# Verificar build local
npm run build

# Verificar en navegador
npm run dev

# Ver qué está indexado en Google
site:iafacorp.com

# Lighthouse audit (Chrome DevTools)
# Ctrl+Shift+I → Lighthouse → Generate report

# Test de velocidad
https://pagespeed.web.dev/

# Validar structured data
https://validator.schema.org/
https://search.google.com/test/rich-results
```

## 🚨 Importante

1. **Actualizar la geolocalización** en [layout.tsx](app/layout.tsx) línea 89-92 con las coordenadas reales de tu oficina
2. **Actualizar la dirección** en [site.ts](app/data/site.ts) línea 46 con la dirección completa real
3. **Actualizar los teléfonos** si son diferentes
4. **Reemplazar el rating ficticio** (4.8/5 con 127 reseñas) con datos reales cuando tengas reviews

## 📈 Próximos Pasos

### Semana 1:
- [ ] Crear todas las imágenes (og-image, favicons, icons)
- [ ] Configurar dominio en Vercel
- [ ] Verificar Google Search Console
- [ ] Actualizar redes sociales reales

### Semana 2:
- [ ] Google Business Profile
- [ ] Solicitar primeras reseñas
- [ ] Agregar FAQ
- [ ] Optimizar imágenes existentes

### Mes 1:
- [ ] Monitorear posiciones en Search Console
- [ ] Crear primeros artículos de blog
- [ ] Link building básico
- [ ] Analizar métricas y ajustar

---

**Contacto para soporte técnico:**
- Documentación Next.js: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Google Search Console Help: https://support.google.com/webmasters

**Estado Actual**: ✅ SEO Base Implementado | ⚠️ Requiere configuración de producción
