# Finanzas Calculadas

Sitio editorial educativo sobre educación financiera práctica, diseñado específicamente para cumplir con los criterios de aprobación de Google AdSense.

## 🎯 Objetivo del Sitio

Proporcionar educación financiera básica mediante:
- Calculadoras interactivas que funcionan 100% en el navegador
- Guías explicativas con ejemplos numéricos reales
- Glosario financiero con más de 30 términos definidos
- Contenido original, neutral y sin recomendaciones de inversión

## 🚀 Ejecución Local

```bash
# Instalar dependencias (opcional, para serve)
npm install serve -g

# Ejecutar servidor local
npm run dev
# o directamente:
npx serve .

# Abrir en navegador: http://localhost:3000
```

## 📁 Estructura del Proyecto

```
cv-next-v2-full/
├── index.html              # Sitio completo (SPA con router hash)
├── package.json            # Configuración del proyecto
├── README.md               # Este archivo
├── .git/                   # Repositorio Git (conservado)
├── .gitignore              # Archivos ignorados por Git
└── .env.example            # Variables de entorno (placeholder)
```

## 🌐 Páginas del Sitio

### Principales
- `/` — Inicio: presentación del sitio y acceso rápido
- `/calculadoras` — Landing de herramientas financieras
- `/guias` — Listado de 12 guías educativas
- `/glosario` — 30+ términos financieros definidos
- `/metodologia` — Explicación transparente de fórmulas y supuestos
- `/sobre-el-sitio` — Propósito, enfoque y límites del contenido
- `/politica-editorial` — Criterios de redacción y publicación
- `/politica-de-privacidad` — Incluye sección preparada para AdSense
- `/contacto` — Correo de contacto sin formularios

### Calculadoras (5 herramientas)
1. `/calculadoras/interes-compuesto` — Crecimiento de capital con aportes
2. `/calculadoras/ahorro-mensual` — Ahorro necesario para alcanzar una meta
3. `/calculadoras/cuota-prestamo` — Estimación de cuotas de préstamo
4. `/calculadoras/inflacion-acumulada` — Efecto de inflación en poder adquisitivo
5. `/calculadoras/costo-total-deuda` — Costo real de una deuda en cuotas

### Guías (12 artículos)
1. `/guias/que-es-el-interes-compuesto`
2. `/guias/como-definir-una-meta-de-ahorro`
3. `/guias/diferencia-entre-tasa-mensual-y-anual`
4. `/guias/como-leer-la-cuota-de-un-credito`
5. `/guias/que-significa-el-costo-total-de-una-deuda`
6. `/guias/como-afecta-la-inflacion-al-dinero`
7. `/guias/diferencia-entre-ahorro-inversion-y-especulacion`
8. `/guias/como-armar-un-presupuesto-mensual`
9. `/guias/que-es-liquidez-personal`
10. `/guias/como-ordenar-gastos-fijos-y-variables`
11. `/guias/como-comparar-dos-alternativas-de-pago`
12. `/guias/errores-comunes-al-planificar-finanzas-personales`

## ✅ Elementos Diseñados para AdSense

### Contenido
- ✅ Texto explicativo en párrafos completos en todas las páginas
- ✅ Contenido original, no copiado ni parafraseado
- ✅ Sin Lorem Ipsum, sin placeholders, sin "próximamente"
- ✅ Navegación clara con menú y footer consistentes
- ✅ Sin enlaces rotos (router interno validado)

### Privacidad y Transparencia
- ✅ Política de privacidad completa con sección específica para AdSense
- ✅ Explicación sobre cookies de terceros y publicidad personalizada
- ✅ Enlaces a configuración de anuncios de Google y aboutads.info
- ✅ Calculadoras procesan datos localmente, sin envío a servidores

### Seguridad de Datos
- ✅ Todas las calculadoras funcionan 100% en el navegador (JavaScript)
- ✅ No se almacenan ni transmiten montos, tasas ni resultados
- ✅ Aviso visible en cada calculadora sobre procesamiento local

### Cumplimiento de Políticas
- ✅ Sin recomendaciones de inversión, trading ni criptomonedas
- ✅ Sin promesas de rentabilidad ni frases "hazte rico"
- ✅ Sin afiliados, comparadores comerciales ni captación de leads
- ✅ Sin logos de bancos ni afirmación de afiliación institucional
- ✅ Tono informativo, neutral y riguroso en todo el contenido

### SEO Técnico
- ✅ Título y meta description únicos por página (vía router)
- ✅ Etiquetas canonical y Open Graph básicas
- ✅ HTML semántico con estructura de encabezados correcta
- ✅ Diseño responsive mobile-first
- ✅ Accesibilidad básica (labels, contraste, navegación por teclado)

## 🔧 Preparación para Publicar con AdSense

### Pasos Manuales Pendientes

1. **Insertar código de AdSense**
   - En `<head>` de `index.html`, agregar:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```

2. **Verificar dominio en AdSense**
   - Agregar meta tag de verificación en `<head>` si se solicita

3. **Configurar ads.txt** (opcional pero recomendado)
   - Crear archivo `ads.txt` en raíz con:
   ```
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```

4. **Solicitar revisión en AdSense**
   - Conectar el sitio publicado a tu cuenta de AdSense
   - Esperar revisión (puede tomar varios días)

5. **Configurar consentimiento de cookies (CMP)**
   - Si se habilitan anuncios personalizados, configurar CMP desde el panel de AdSense
   - La política de privacidad ya incluye el texto base para esta configuración

### Archivos Adicionales Recomendados

#### robots.txt
```txt
User-agent: *
Allow: /
Sitemap: https://tudominio.com/sitemap.xml
```

#### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://tudominio.com/</loc></url>
  <url><loc>https://tudominio.com/calculadoras</loc></url>
  <!-- Agregar URLs de todas las páginas -->
</urlset>
```

## ⚠️ Limitaciones y Alcance

- Este sitio tiene fines **exclusivamente educativos e informativos**
- Las calculadoras entregan **estimaciones**, no asesoría financiera personalizada
- Los resultados dependen de los datos ingresados y de los supuestos de cálculo
- No se garantiza que los rendimientos estimados se materialicen en la realidad
- Para decisiones financieras importantes, consultar con un asesor profesional certificado

## 📄 Licencia

MIT — Uso libre con atribución.

---

*Última actualización: junio 2025*
