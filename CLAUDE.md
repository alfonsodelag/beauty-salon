# CLAUDE.md

Guía breve para trabajar este proyecto de landing page para beauty salon.

## Objetivo del proyecto

Crear una landing page sencilla, elegante y comercial para un beauty salon, usando como base el repo `MartinXCVI/beauty-salon`.

La web debe verse premium, cálida y profesional. Debe convertir visitantes en citas mediante WhatsApp, formulario de contacto y llamadas claras a la acción.

## Stack recomendado

Mantener el stack simple:

- Astro
- Tailwind CSS
- SCSS/Sass
- TypeScript
- Web3Forms para el formulario
- Cloudflare Pages o Vercel para deploy

No migrar a Next.js salvo que el proyecto crezca hacia una app más compleja con login, dashboard, reservas avanzadas o pagos.

## Prioridad de diseño

Estética: beauty salon cálido, elegante y moderno.

Sensación visual:

- Champagne
- Crema
- Lino
- Taupe
- Piel cálida
- Lujo suave
- Limpieza y confianza

Evitar:

- Rosa neón
- Negro demasiado fuerte
- Gradientes exagerados
- Diseño infantil
- Copy genérico o demasiado vendedor

## Paleta de colores

Colores principales de marca:

```scss
$brandTaupe: #ae9380;
$brandCream: #ffe7cd;
```

Paleta completa recomendada:

```scss
// Brand
$brandTaupe: #ae9380;
$brandCream: #ffe7cd;

// Backgrounds
$ivory: #fff8f1;
$softBlush: #f8e1dd;
$taupeLight: #d8c1b0;

// Accents
$taupeDark: #6f5141;
$dustyRose: #c7837a;
$champagneGold: #d6b17a;
$sage: #8fae9e;

// Text and borders
$espresso: #2f2521;
$mochaMuted: #75665f;
$linenBorder: #e7d2c4;
$white: #ffffff;
$errorRose: #b75656;
```

Mapeo práctico para `src/sass/includes/_colors.scss`:

```scss
$firstColor: #fff8f1;
$secondColor: #ae9380;
$thirdColor: #6f5141;

$softBlack: #2f2521;
$softerBlack: #75665f;
$whiteSmoke: #fff8f1;
$softGrey: #e7d2c4;
$lightGrey: #d8c1b0;
$grey: #75665f;
$darkGrey: #6f5141;
```

Usar `#2F2521` para texto principal. Usar `#6F5141` para botones principales con texto blanco.

## Estructura esperada del sitio

La landing debe incluir:

1. Hero con CTA fuerte
2. Servicios
3. Sobre nosotros
4. Galería
5. Testimonios
6. Blog preview
7. Contacto
8. WhatsApp visible
9. Horarios
10. Dirección / Google Maps

CTAs recomendados:

- Reservar cita
- Escribir por WhatsApp
- Ver servicios
- Contáctenos

## Copy y tono

Escribir en español claro, cálido y comercial.

Tono:

- Elegante
- Cercano
- Profesional
- Confiable
- Premium sin sonar exagerado

Frases útiles:

- Realza tu belleza natural
- Cuidado personalizado
- Belleza, bienestar y confianza
- Reserva tu cita
- Tratamientos diseñados para tu estilo
- Un espacio para verte y sentirte mejor

Evitar promesas absolutas como “resultados garantizados” o “el mejor salón”.

## Formulario

Usar Web3Forms.

Variable de entorno:

```env
WEB3_FORMS_API_KEY=your_access_key_here
```

Campos recomendados:

- Nombre
- Teléfono / WhatsApp
- Correo
- Servicio de interés
- Fecha tentativa
- Mensaje

Mensaje de éxito:

```txt
Gracias. Hemos recibido tu mensaje y te contactaremos pronto para coordinar tu cita.
```

## Blog

Para blog sencillo, usar Astro Content Collections.

Crear luego:

```txt
src/content/blog/
src/pages/blog/index.astro
src/pages/blog/[slug].astro
```

Temas útiles para SEO:

- Cómo cuidar el cabello después de un tinte
- Tendencias de uñas
- Keratina vs botox capilar
- Cómo elegir el tratamiento ideal para tu cabello
- Rutina facial antes de un evento
- Consejos para mantener tu manicure

Solo integrar Sanity si el cliente necesita editar el blog desde un panel visual.

## SEO local

Optimizar para búsquedas como:

- salón de belleza en Panamá
- manicure y pedicure
- maquillaje profesional
- tratamientos capilares
- cuidado facial
- estilismo profesional

Cada página debe tener:

- Title único
- Meta description
- H1 claro
- Alt text en imágenes
- Open Graph básico
- Buen orden de headings

No hacer keyword stuffing.

## Reglas de código

- Mantener Astro para componentes estáticos.
- Usar React solo donde ya exista interactividad real.
- No convertir todo a React.
- No instalar librerías pesadas sin necesidad.
- Preferir variables SCSS antes que hex codes repetidos.
- Mantener componentes pequeños y claros.
- Poner contenido reusable en `src/data/`.
- Antes de terminar, correr `npm run build`.

## Orden recomendado de trabajo

1. Actualizar paleta en `_colors.scss`.
2. Ajustar hero, CTAs y textos principales.
3. Revisar servicios del beauty salon.
4. Actualizar galería e imágenes.
5. Configurar contacto, WhatsApp, horarios y ubicación.
6. Verificar formulario.
7. Mejorar SEO.
8. Agregar blog si se solicita.
9. Ejecutar build.
10. Reportar cambios realizados.

## Respuesta esperada al finalizar tareas

Al terminar cualquier cambio, responder con:

- Archivos modificados
- Qué se cambió
- Comandos ejecutados
- Si el build pasó o falló
- Próximo paso recomendado
