# AGENTS.md — VÉLOCÉ Automotive

## 1. Identidad del proyecto

**Proyecto:** VÉLOCÉ Automotive
**Tipo:** Landing page premium de automóviles
**Naturaleza:** Proyecto ficticio para portafolio frontend
**Idioma de la interfaz:** Inglés internacional
**Objetivo:** Crear una experiencia digital de showroom automotriz premium que comunique diseño, ingeniería, rendimiento y exclusividad.

VÉLOCÉ no es una concesionaria genérica ni un marketplace de vehículos. Es una marca automotriz ficticia con una gama reducida de automóviles cuidadosamente presentados.

La experiencia debe sentirse como el sitio oficial de una marca automotriz contemporánea, no como una plantilla de venta de autos.

---

## 2. Objetivo principal

Construir una landing visualmente sobresaliente, técnicamente sólida y responsive que demuestre:

* Dominio de React.
* Composición visual premium.
* Diseño de producto.
* Presentación de especificaciones técnicas.
* Jerarquía tipográfica.
* Interacciones refinadas.
* Responsive design.
* Accesibilidad.
* Organización y mantenibilidad del código.

**Prioridad:** calidad visual + coherencia de marca + experiencia de usuario + calidad técnica.

No se busca agregar funcionalidades innecesarias. Cada decisión debe mejorar la presentación del producto o la conversión.

---

## 3. Stack y restricciones técnicas

### Stack permitido

* React.
* Vite.
* JavaScript o TypeScript, según la configuración existente del proyecto.
* Tailwind CSS.
* Framer Motion.
* Lucide React.

### Reglas de dependencias

* **No instalar dependencias nuevas sin autorización explícita.**
* Antes de instalar cualquier paquete, revisar `package.json` y verificar si ya existe una solución disponible.
* No reemplazar el stack existente.
* No introducir frameworks adicionales.
* No instalar librerías de UI completas si no son necesarias.
* No instalar bibliotecas de animación adicionales.
* No instalar paquetes globales.
* No ejecutar instalaciones fuera del directorio del proyecto.
* No modificar configuraciones globales del sistema, del usuario, del editor o de otras aplicaciones.
* No crear proyectos auxiliares fuera del directorio actual.
* No utilizar `npm install -g`, `pnpm add -g` ni equivalentes.
* Utilizar el gestor de paquetes ya configurado en el proyecto.
* Si el proyecto utiliza `pnpm`, utilizar `pnpm`.
* No cambiar de gestor de paquetes.
* No actualizar dependencias existentes por iniciativa propia.

### Regla de autorización

Si una dependencia parece necesaria:

1. Explicar por qué se necesita.
2. Indicar qué funcionalidad resolvería.
3. Verificar si puede resolverse con el stack actual.
4. Solicitar autorización antes de instalarla.

**Por defecto, trabajar únicamente con las dependencias existentes.**

---

## 4. Dirección visual

### Concepto: Automotive Precision

La dirección visual combina:

* Lujo contemporáneo.
* Ingeniería automotriz.
* Precisión técnica.
* Diseño industrial.
* Rendimiento.
* Materiales premium.
* Arquitectura de showroom.
* Tecnología discreta.

La marca debe sentirse sofisticada, segura y precisa.

### Referencias conceptuales

La calidad visual debe acercarse al nivel de presentación de marcas automotrices premium y estudios de diseño industrial, sin copiar ninguna marca, sitio web o campaña existente.

Buscar inspiración en:

* Fotografía automotriz editorial.
* Showrooms de arquitectura contemporánea.
* Catálogos de producto premium.
* Diseño industrial.
* Instrumentación de precisión.
* Interfaces automotrices minimalistas.

### Sensación general

> Precision engineered. Distinctly yours.

La interfaz debe transmitir que cada detalle fue diseñado intencionalmente.

---

## 5. Paleta de colores

Utilizar estos tokens como fuente de verdad. No introducir colores arbitrarios sin justificar su necesidad.

### Colores principales

| Token                    | Hex       | Uso                            |
| ------------------------ | --------- | ------------------------------ |
| `--color-ink`            | `#0B0D10` | Fondo principal                |
| `--color-surface`        | `#14181D` | Secciones secundarias          |
| `--color-surface-raised` | `#1D232A` | Bloques elevados y superficies |
| `--color-text`           | `#F4F5F6` | Texto principal                |
| `--color-text-muted`     | `#8C959F` | Texto secundario               |
| `--color-line`           | `#2A3037` | Bordes y divisores             |
| `--color-metal`          | `#B8C4D0` | Acento metálico                |
| `--color-metal-bright`   | `#D9E2EA` | Hover y detalles destacados    |

### Reglas de color

* El fondo principal debe ser oscuro, pero no completamente negro en toda la página.
* Utilizar `--color-surface` y `--color-surface-raised` para crear profundidad.
* El blanco debe reservarse para contenido importante.
* El acento metálico debe utilizarse con moderación.
* No utilizar dorado como color dominante.
* No utilizar gradientes violetas, rosas o azules de estilo SaaS.
* No utilizar colores neón.
* No utilizar degradados decorativos sin función.
* No convertir cada sección en una superficie visualmente distinta sin necesidad.
* Mantener una jerarquía cromática clara.

### Contraste

Todo texto debe mantener contraste suficiente para ser legible y cumplir buenas prácticas de accesibilidad.

No utilizar texto gris de bajo contraste sobre imágenes o fondos oscuros.

---

## 6. Tipografía

### Tipografías principales

**Manrope**

* Titulares.
* Navegación.
* Botones.
* Texto general.
* Nombres de modelos.

**JetBrains Mono**

* Especificaciones técnicas.
* Etiquetas de datos.
* Códigos de modelo.
* Categorías.
* Microcopy técnico.
* Valores numéricos.

### Reglas tipográficas

* Utilizar una jerarquía clara entre display, headings, body y metadata.
* Los titulares deben ser contundentes, limpios y controlados.
* Evitar titulares excesivamente largos.
* No utilizar más de dos familias tipográficas.
* No abusar de mayúsculas en párrafos completos.
* Utilizar mayúsculas principalmente en labels, categorías y elementos técnicos.
* Usar `letter-spacing` de forma intencional.
* Los números técnicos deben tener una presentación consistente.
* No utilizar tipografías genéricas adicionales sin autorización.

### Jerarquía orientativa

* Display: grandes titulares de impacto.
* H1: propuesta principal del hero.
* H2: títulos de sección.
* H3: modelos y bloques de contenido.
* Body: descripciones breves y legibles.
* Mono: especificaciones y metadata.

La escala debe adaptarse al viewport y nunca provocar overflow horizontal.

---

## 7. Estructura de la página

La landing debe seguir esta estructura base:

```text
App
├── Header
├── Hero
├── ModelCollection
├── FeaturedModel
├── DesignDetails
├── Technology
├── Personalization
├── PrivateViewing
└── Footer
```

La estructura puede dividirse en componentes adicionales cuando mejore la legibilidad, pero no fragmentar innecesariamente el código.

---

## 8. Secciones y contenido

### 8.1 Header

**Objetivo:** navegación discreta y sensación de marca premium.

**Elementos:**

* Logo / wordmark VÉLOCÉ.
* Navegación principal.
* Enlace a modelos.
* Enlace a tecnología o diseño.
* CTA de visita privada.
* Menú móvil accesible.

**Reglas:**

* Debe funcionar sobre el hero.
* Puede cambiar de estado al hacer scroll.
* Evitar headers excesivamente altos.
* No utilizar una navegación con demasiados enlaces.
* El logo debe tener presencia, pero no dominar la pantalla.
* El menú móvil debe ser accesible y usable con teclado.

---

### 8.2 Hero — The New Standard

**Objetivo:** presentar la marca y generar deseo por el producto.

**Contenido sugerido:**

```text
THE NEW STANDARD

Precision engineered.
Distinctly yours.
```

**CTA principal:**
`EXPLORE MODELS`

**CTA secundario:**
`BOOK A PRIVATE VIEWING`

**Dirección visual:**

* Vehículo premium como protagonista.
* Fotografía de estudio, showroom arquitectónico o entorno urbano sofisticado.
* Composición con espacio negativo.
* Texto corto.
* Imagen dominante.
* Overlay sutil para legibilidad.
* Animación de entrada refinada.

**Reglas:**

* No llenar el hero de estadísticas.
* No utilizar múltiples cards flotantes.
* No agregar un formulario dentro del hero.
* No utilizar fondos genéricos de paisajes naturales.
* El vehículo debe ser el foco visual.
* El texto debe ser breve y memorable.

---

### 8.3 Model Collection — The Collection

**Objetivo:** presentar la gama de vehículos.

**Modelos ficticios iniciales:**

```text
VÉLOCÉ GT
Grand Tourer

VÉLOCÉ S7
Performance Sedan

VÉLOCÉ X
Performance SUV
```

**Contenido por modelo:**

* Imagen.
* Nombre.
* Categoría.
* Descripción breve.
* Especificación principal.
* CTA `VIEW MODEL`.

**Dirección visual:**

* Presentación editorial.
* Imágenes dominantes.
* Composición asimétrica o variación controlada.
* Hover sutil.
* Información que aparece de forma progresiva.

**Reglas:**

* No crear cards genéricas de SaaS.
* No utilizar iconos como elemento principal.
* No utilizar tres tarjetas idénticas sin personalidad.
* No saturar con especificaciones.
* Mantener consistencia entre modelos.
* La imagen debe tener prioridad sobre el texto.

---

### 8.4 Featured Model — Engineered to Move

**Objetivo:** profundizar en el vehículo protagonista.

**Modelo sugerido:** VÉLOCÉ GT.

**Contenido:**

* Nombre del modelo.
* Categoría.
* Descripción.
* Potencia.
* Aceleración.
* Torque.
* Motorización.
* CTA de consulta.

**Especificaciones ficticias de referencia:**

```text
390 HP
4.8 SEC 0—100 KM/H
620 NM TORQUE
3.0L TURBO
```

**Importante:** estos datos son ficticios y deben tratarse como contenido conceptual del proyecto. No presentarlos como información de un vehículo real.

**Dirección visual:**

* Vehículo en gran formato.
* Números técnicos con JetBrains Mono.
* Divisores finos.
* Composición limpia.
* Mucho espacio negativo.
* Sensación de ficha técnica premium.

**Reglas:**

* No convertir la sección en un dashboard.
* No usar una pared de KPIs.
* Las especificaciones deben complementar la imagen.
* Mantener pocos datos, pero relevantes.
* No inventar funcionalidades complejas que no existan.

---

### 8.5 Design Details — Sculpted by Performance

**Objetivo:** comunicar diseño exterior, interior y materiales.

**Contenido:**

* Diseño exterior.
* Interior.
* Materiales.
* Iluminación.
* Detalles de acabado.

**Copy conceptual:**

```text
SCULPTED BY PERFORMANCE

Every surface serves a purpose.
Every detail has a reason.
```

**Dirección visual:**

* Fotografía de detalles.
* Faros.
* Carrocería.
* Costuras.
* Volante.
* Asientos.
* Consola.
* Materiales metálicos.

**Reglas:**

* No crear una galería caótica.
* No usar demasiadas imágenes pequeñas.
* Priorizar 2–4 imágenes fuertes.
* Mantener una composición editorial.
* El texto debe ser corto.
* Las imágenes deben tener una relación visual coherente.

---

### 8.6 Technology — Intelligence in Motion

**Objetivo:** mostrar tecnología de forma elegante y comprensible.

**Contenido sugerido:**

* Driver assistance.
* Connected cockpit.
* Drive modes.
* Advanced safety.
* Digital interface.

**Dirección visual:**

* Interiores.
* Pantallas del vehículo.
* Detalles técnicos.
* Diagramas simples.
* Layouts limpios.

**Reglas:**

* No convertirlo en una landing de software.
* No utilizar iconos grandes para cada beneficio.
* No llenar la sección de tarjetas.
* No usar claims tecnológicos exagerados.
* Cada beneficio debe ser claro y concreto.
* Si se utilizan funcionalidades ficticias, tratarlas como contenido conceptual.

---

### 8.7 Personalization — Make It Yours

**Objetivo:** comunicar exclusividad y configuración personal.

**Contenido:**

* Colores exteriores.
* Acabados interiores.
* Llantas.
* Paquetes de equipamiento.

**Interacción opcional:**

* Selector de variantes.
* Cambio de imagen según configuración.
* Estado activo claramente visible.

**Reglas:**

* La interacción debe ser funcional.
* No construir un configurador complejo si no es necesario.
* No agregar dependencias para una interacción simple.
* Mantener el estado local dentro del componente apropiado.
* Los controles deben ser accesibles.
* El cambio visual debe ser suave, no teatral.

---

### 8.8 Private Viewing — Your Next Drive

**Objetivo:** convertir el interés en una consulta.

**CTA principal:**
`BOOK A PRIVATE VIEWING`

**Contenido:**

* Breve texto de invitación.
* Modelo de interés.
* Nombre.
* Email.
* Preferencia de contacto.
* Mensaje.
* Confirmación visual del envío.

**Reglas:**

* El formulario debe tener labels visibles.
* Inputs accesibles.
* Estados de focus.
* Estados de error.
* Mensajes claros.
* No prometer envíos reales si no existe backend.
* Si es una demo, utilizar un estado de envío simulado claramente controlado.
* No recolectar datos innecesarios.

---

### 8.9 Footer

**Contenido:**

* Wordmark.
* Navegación.
* Modelos.
* Contacto.
* Redes sociales ficticias o enlaces placeholder controlados.
* Legal.
* Copyright.

**Reglas:**

* Mantenerlo sobrio.
* No sobrecargarlo con columnas innecesarias.
* Los enlaces deben ser coherentes.
* No dejar enlaces rotos sin una razón.
* Utilizar una estructura semántica accesible.

---

## 9. Reglas de diseño UI

### Principios

* Menos elementos, mejor ejecutados.
* La imagen del vehículo es protagonista.
* La tipografía debe tener presencia.
* El espacio negativo es parte del diseño.
* Cada sección debe tener una función clara.
* La interfaz debe sentirse precisa, no decorativa.
* El diseño debe tener ritmo visual.
* No todas las secciones deben utilizar el mismo patrón.

### Bordes y radios

* Preferir radios pequeños o moderados.
* Evitar `rounded-full` salvo para controles donde tenga sentido.
* No utilizar tarjetas excesivamente redondeadas.
* No crear una estética de aplicación SaaS.
* Mantener consistencia en botones, inputs y contenedores.

### Botones

Utilizar CTAs claros y sobrios:

* `EXPLORE MODELS`
* `VIEW MODEL`
* `BOOK A PRIVATE VIEWING`
* `DISCOVER DETAILS`
* `REQUEST INFORMATION`

**Reglas:**

* No utilizar diez variantes de CTA para la misma acción.
* Mantener una jerarquía entre botón primario y secundario.
* Incluir estados hover, focus y disabled.
* No utilizar botones gigantes sin necesidad.
* No usar iconos decorativos que no aporten.

### Iconografía

* Utilizar Lucide React si se necesitan iconos.
* Los iconos deben ser secundarios.
* No usar iconos como sustituto de contenido.
* No mezclar estilos de iconos.
* No crear iconos SVG complejos innecesariamente.

---

## 10. Reglas de imágenes

Las imágenes son fundamentales para este proyecto.

### Dirección fotográfica

Buscar imágenes con:

* Automóviles premium.
* Fotografía de estudio.
* Iluminación cinematográfica controlada.
* Showrooms contemporáneos.
* Entornos urbanos sofisticados.
* Detalles de interiores.
* Materiales y carrocería.
* Composición limpia.
* Alta calidad visual.

### Evitar

* Imágenes genéricas de concesionarias.
* Vehículos con marcas visibles que entren en conflicto con VÉLOCÉ.
* Collages de stock inconsistentes.
* Fotografías con marcas de agua.
* Imágenes de baja resolución.
* Fondos saturados.
* Vehículos deformados o visualmente incoherentes.
* Mezclar estilos fotográficos sin control.

### Reglas técnicas

* Utilizar imágenes optimizadas.
* Definir `width` y `height` cuando corresponda.
* Evitar layout shift.
* Utilizar `loading="lazy"` en imágenes no críticas.
* El hero debe priorizarse correctamente.
* No utilizar imágenes gigantes sin optimización.
* Mantener `object-fit` y `object-position` intencionales.
* No depender de URLs aleatorias para el resultado final.

---

## 11. Reglas de animación

Utilizar Framer Motion únicamente cuando mejore la experiencia.

### Estilo de movimiento

* Elegante.
* Controlado.
* Suave.
* Cinematográfico.
* Rápido cuando se trate de feedback.
* Sutil en scroll.
* Sin efectos exagerados.

### Animaciones permitidas

* Entrada progresiva del hero.
* Aparición de títulos.
* Reveal de imágenes.
* Transiciones de modelos.
* Hover de imágenes.
* Cambio de configuración.
* Transiciones de navegación.
* Microinteracciones de botones.

### Evitar

* ❌ Parallax excesivo.
* ❌ Texto que rebota.
* ❌ Animaciones constantes.
* ❌ Rotaciones innecesarias.
* ❌ Escalas exageradas.
* ❌ Efectos tipo presentación de videojuego.
* ❌ Animar todos los elementos al hacer scroll.
* ❌ Animaciones que dificulten la navegación.

### Accesibilidad

* Respetar `prefers-reduced-motion`.
* Utilizar `useReducedMotion` cuando corresponda.
* Reducir o eliminar animaciones no esenciales.
* No depender del movimiento para comprender el contenido.

---

## 12. Responsive design

El diseño debe funcionar correctamente en:

* 1440px.
* 1280px.
* 1024px.
* 768px.
* 390px.
* 375px.

### Reglas

* Diseñar mobile como una experiencia completa, no como una versión reducida.
* No permitir overflow horizontal.
* No reducir todo indiscriminadamente.
* Ajustar tipografía y espaciado por breakpoint.
* Mantener legibilidad.
* Reorganizar composiciones complejas cuando sea necesario.
* Evitar imágenes recortadas de forma accidental.
* El menú móvil debe ser cómodo de utilizar.
* Los CTAs deben tener un área táctil adecuada.
* Los formularios deben ser usables en pantallas pequeñas.
* Las especificaciones técnicas deben reorganizarse correctamente.
* No utilizar alturas fijas que rompan el contenido.

---

## 13. Accesibilidad

Cumplir buenas prácticas de accesibilidad y apuntar a WCAG 2.1 AA.

### Reglas mínimas

* HTML semántico.
* Un único H1 principal.
* Jerarquía correcta de headings.
* `alt` descriptivo para imágenes relevantes.
* `alt=""` para imágenes puramente decorativas.
* Labels visibles en formularios.
* Focus states claros.
* Navegación por teclado.
* Contraste adecuado.
* Botones reales para acciones.
* Enlaces reales para navegación.
* No depender únicamente del color.
* Menú móvil accesible.
* Respetar reduced motion.
* No ocultar contenido importante para usuarios de teclado.

---

## 14. Arquitectura del código

### Principios

* Componentes pequeños y comprensibles.
* Evitar componentes monolíticos.
* Separar datos de presentación cuando sea útil.
* Mantener una fuente de verdad para modelos y especificaciones.
* Evitar duplicación innecesaria.
* No crear abstracciones prematuras.
* No utilizar patrones complejos sin necesidad.
* Priorizar legibilidad.

### Estructura sugerida

```text
src/
├── assets/
│   ├── images/
│   └── ...
├── components/
│   ├── layout/
│   │   ├── Header
│   │   └── Footer
│   ├── sections/
│   │   ├── Hero
│   │   ├── ModelCollection
│   │   ├── FeaturedModel
│   │   ├── DesignDetails
│   │   ├── Technology
│   │   ├── Personalization
│   │   └── PrivateViewing
│   └── ui/
│       ├── Button
│       ├── Container
│       └── SectionHeading
├── data/
│   └── siteData.js
├── App.jsx
├── index.css
└── main.jsx
```

Adaptar esta estructura a la estructura real del proyecto. No mover archivos masivamente sin necesidad.

### Datos

Utilizar una fuente centralizada para:

* Nombre de marca.
* Modelos.
* Especificaciones.
* Navegación.
* Contacto.
* Textos reutilizables.

No duplicar información de modelos en múltiples componentes.

---

## 15. CSS y estilos

### Reglas obligatorias

* **No utilizar estilos inline.**
* No utilizar `style={{ ... }}` en componentes React.
* No utilizar atributos `style=""` en HTML.
* Utilizar Tailwind CSS o archivos CSS del proyecto.
* Mantener los estilos organizados.
* No crear CSS global innecesario.
* No utilizar valores arbitrarios repetidos sin justificación.
* No duplicar clases extensas si puede resolverse con una abstracción clara.
* No modificar estilos de forma aislada sin revisar su impacto responsive.

### Prohibiciones visuales

No utilizar:

* Glassmorphism como lenguaje principal.
* Neumorphism.
* Gradientes decorativos excesivos.
* Fondos con ruido artificial sin necesidad.
* Bordes luminosos.
* Sombras exageradas.
* Efectos de brillo constantes.
* Tarjetas flotantes genéricas.
* Estética de dashboard.
* Estética de SaaS genérico.
* Exceso de pills.
* Exceso de rounded cards.

---

## 16. Contenido y copywriting

El contenido debe ser breve, elegante y específico.

### Tono

* Seguro.
* Preciso.
* Sofisticado.
* Contemporáneo.
* Aspiracional, pero no exagerado.
* Comercial sin ser agresivo.

### Evitar

* Frases vacías repetidas.
* Claims imposibles.
* Lenguaje excesivamente publicitario.
* "The future is here" como recurso genérico.
* "Unleash your potential" sin contexto.
* Párrafos largos en el hero.
* Especificaciones inventadas presentadas como datos reales.

### Preferir

* Frases cortas.
* Lenguaje de producto.
* Descripciones concretas.
* Terminología automotriz coherente.
* Jerarquía entre marca, modelo, categoría y especificación.

---

## 17. Reglas de implementación

Antes de modificar código:

1. Inspeccionar la estructura actual.
2. Revisar `package.json`.
3. Revisar los componentes existentes.
4. Identificar qué ya funciona.
5. Evitar reemplazar archivos completos sin necesidad.
6. Mantener la configuración existente.
7. Verificar si las dependencias necesarias ya están instaladas.
8. Revisar la estrategia de imágenes.
9. Confirmar que la implementación respeta esta dirección visual.

### Durante la implementación

* No crear funcionalidades fuera del alcance.
* No agregar secciones porque sí.
* No instalar paquetes sin autorización.
* No modificar archivos fuera del proyecto.
* No tocar configuraciones globales.
* No utilizar estilos inline.
* No introducir datos incoherentes.
* No usar placeholders visualmente pobres en el resultado final.
* No dejar componentes muertos sin justificación.
* No duplicar lógica.

### Después de implementar

Ejecutar, si están disponibles en el proyecto:

```bash
pnpm lint
pnpm build
```

Corregir errores reales de lint o build.

Verificar visualmente:

* Desktop 1440px.
* Desktop 1024px.
* Tablet 768px.
* Mobile 390px.
* Mobile 375px.
* Estados hover.
* Estados focus.
* Menú móvil.
* Formulario.
* Reduced motion.
* Overflow horizontal.
* Contraste.
* Carga de imágenes.

---

## 18. Criterios de calidad

La implementación se considera correcta cuando:

* La marca VÉLOCÉ se siente coherente.
* La landing no parece una plantilla genérica.
* La fotografía tiene protagonismo.
* La tipografía tiene jerarquía.
* Las especificaciones se presentan con precisión.
* Los componentes son mantenibles.
* No existen estilos inline.
* No se instalaron dependencias no autorizadas.
* No se modificó nada fuera del proyecto.
* La página funciona correctamente en mobile.
* Las animaciones son sutiles y accesibles.
* Los CTAs son claros.
* No hay overflow horizontal.
* No hay errores de lint o build.
* El resultado es defendible como proyecto de portafolio profesional.

---

## 19. Regla final de criterio

Ante cualquier decisión de diseño, priorizar en este orden:

1. **Coherencia de marca.**
2. **Calidad visual.**
3. **Jerarquía y claridad.**
4. **Experiencia de usuario.**
5. **Accesibilidad.**
6. **Responsive.**
7. **Mantenibilidad.**
8. **Simplicidad técnica.**

**No agregar elementos solo porque están de moda.**

El objetivo no es demostrar cuántas librerías o efectos puede utilizar el agente, sino demostrar que puede construir una experiencia automotriz premium, coherente, funcional y técnicamente bien ejecutada.
