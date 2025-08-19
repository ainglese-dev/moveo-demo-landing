# PRD — MOVEO (demo landing)

**Repo:** `ainglese-dev/moveo-demo-landing`
**Owner:** Angel Inglese
**Client:** MOVEO — salud integral para el adulto mayor (Bogotá)
**Date:** 2025-08-18

---

## 1) Objective

Deliver a warm, professional multi-page demo site (Spanish) that converts visitors into booked consultations and leads for MOVEO. Demo deployed to GitHub Pages under developer account.

## 2) Success criteria

* Demo site live at `https://ainglese-dev.github.io/moveo-demo-landing/`.
* Clear lead capture: WhatsApp CTA + contact form storing submissions.
* Content in Spanish (provided below) ready to paste into pages.
* Design uses MOVEO color palette and logo variants.
* README with deploy & handoff steps; basic Habeas Data/privacy text included.

## 3) Audience

Primary: adults 60+ and their family decision-makers (children, grandchildren) in Bogotá seeking programs to maintain independence, mobility and social wellbeing.

## 4) Core features / pages

* Home (Hero with looping MP4 or GIF background placeholder)
* Servicios (program details: presencial, grupal, a domicilio)
* Sobre (credentials, approach, experiencia)
* Testimonios (placeholders if none)
* Contacto (form + WhatsApp button)
* Legal: Habeas Data / privacy snippet

## 5) Messaging (high level)

* Tone: cálido, acogedor, profesional (medical-friendly).
* Primary CTA: **Agendar consulta gratis (WhatsApp + formulario)**.

---

## 6) MOVEO — Color Palette (as provided)

### COLORES PRINCIPALES (Main Colors)

**Primary Color Palette (PANTONE)**

* Deep Blue: **PANTONE 2748C**
* Bright Blue: **PANTONE 2738C**
* Purple: **PANTONE 274BC**
* Yellow: **PANTONE 12-C**
* Additional: **PANTONE 7212C**

### COLORES SECUNDARIOS (Secondary Colors) — Color equivalencies

**Yellow variations**

* `HEX #FFF241`
* `HEX #85DF7` ⚠️ **VERIFY** — appears malformed (5 characters). Recommend confirm/correct (likely `#85DF77` or similar).

**Purple variations**

* `HEX #A85FF7`
* `HEX #8A30FF`

**Blue variations**

* `HEX #3A50FF`
* `HEX #22BC4` ⚠️ **VERIFY** — appears malformed (5 characters).

**Navy/Dark variations**

* `HEX #ACAC48`
* `NEGRO 35%`
* `NEGRO 65%`
* `NEGRO 70%`

**Additional hex codes visible (as provided)**

* `#952FF` ⚠️ **VERIFY** (malformed)
* `#00048` ⚠️ **VERIFY** (malformed)
* `#FF564C`

**Logo Applications**

* Logo should support: full-color primary palette, single-color (monochrome) on light/dark, and a reversed gold-on-black version. Include spacing rules and minimum size for legibility.

> **Note:** Several hex entries appear incomplete (not 6 hex digits). Keep these as provided in the spec but verify/correct before final UI work. I recommend converting the PANTONE values to exact web hex via a color tool for consistent rendering.

---

## 7) Design & UI guidance

* Style: warm + clinical-friendly; clear CTAs; accessible typography (Inter or Poppins).
* Hero background: use light motion (muted MP4 preferred); placeholder size `1280×720`, duration 5–8s, fps 15, file <3MB.
* Spacing: comfortable vertical padding for readability for older audiences.
* Buttons: large, high-contrast (yellow accent on dark background).
* Accessibility: font sizes ≥18px body, high contrast ratios.

## 8) Tech stack recommendation

* **Primary:** Astro (static, content-first, good for SEO).
* **Alternative:** Vite + lightweight framework if interactivity needed.
* CI/CD: GitHub Actions → build → deploy to `gh-pages` (same reusable workflow as other demos).
* Forms: Netlify forms or simple serverless webhook → Google Sheets / email.
* Analytics: optional GA4 or Plausible for production.

## 9) Integrations

* WhatsApp click-to-chat: `+57 3142265559` (primary CTA).
* Contact form: name, relación con el adulto, teléfono/WhatsApp, comentario.
* Booking (v2): Calendly or other calendar integration.

---

## 10) Deliverables

* Live demo (GitHub Pages).
* Markdown page copy (Spanish) — see next section.
* Design tokens (color palette file, font choices).
* README with deployment and handoff instructions.
* Habeas Data / privacy snippet (Spanish).
* Logo usage guidance (placeholder included).

## 11) Timeline (est.)

* Day 0: Approve PRD & color palette validation.
* Day 1: Claude generates copy; placeholders chosen.
* Day 2–4: Build site in Astro, integrate form + WhatsApp.
* Day 5–7: QA, refine styles, deploy demo.
  *(\~1 week total for demo)*

## 12) Acceptance criteria

* Demo URL accessible.
* WhatsApp CTA opens and form records submissions.
* All main pages populated with Spanish copy and placeholders.
* Colors implemented per palette (or confirmed corrections).
* PRD items checked and approved.

## 13) Risks

* Missing/invalid hex codes -> visual mismatch (must validate).
* No client photos/testimonials -> use accessible placeholders and request assets.
* Any medical claims must be cleared by client.

---

# Webpage content (Spanish) — ready to paste (concise)

> Tone: cálido, profesional, directo. Buttons assume WhatsApp link + contact form.

---

## Home — Hero

**Headline:**
Moveo — salud integral para el adulto mayor

**Subhead:**
Programas personalizados que mejoran movilidad, memoria y bienestar social. Consulta gratis.

**Primary CTA (button):**
Agendar consulta gratis — WhatsApp: `+57 3142265559`

**Microcopy debajo del CTA:**
También atendemos solicitudes hechas por familiares. Llama o escribe por WhatsApp.

---

## Sección: ¿Qué hacemos?

**Título:**
Programas diseñados para conservar independencia

**Bullets (3):**

* Entrenamiento físico personalizado para recuperar movilidad.
* Actividades cognitivas que fortalecen la memoria y la atención.
* Espacios grupales para reducir la soledad y potenciar el apoyo social.

**CTA secundario:**
Conoce nuestros programas — (link a Servicios)

---

## Servicios (detalle corto)

**Título:**
Nuestros servicios

* **Clases presenciales:** sesiones grupales con énfasis en seguridad y progreso individual.
* **Sesiones grupales personalizadas:** grupos pequeños con ejercicios adaptados.
* **Clases a domicilio:** programas en casa para movilidad y autonomía.
* **Evaluación inicial gratuita:** diagnóstico de capacidades físicas y cognitivas.

**Beneficios:**
Mejora funcional, reducción de dolor y conexión social.

---

## Sobre — Credenciales

**Título:**
¿Por qué confiar en Moveo?

**Copy:**
Profesional en Cultura Física, Máster en Actividad Física para la Salud y especialista en nutrición. Más de 5 años de experiencia trabajando con adultos mayores, incluso con condiciones de discapacidad física y deterioro cognitivo. Nuestro enfoque combina evidencia clínica y atención personalizada.

---

## Testimonios (placeholder)

**Título:**
Historias de éxito

> “Desde que mi mamá atiende en Moveo, recuperó fuerza y volvió a caminar sin ayuda.” — *Nombre, familiar*

*(Solicitar testimonios reales y reemplazar placeholders antes de producción.)*

---

## FAQ (mínimo)

**¿A quién está dirigido?**
Adultos mayores y sus familias que buscan mantener o recuperar independencia física y mental.

**¿Necesito referencia médica?**
No para la evaluación inicial; recomendamos traer historial médico cuando aplique.

**¿Ofrecen planes de membresía?**
Sí — tenemos membresía mensual y paquetes por sesiones (detalles en Servicios).

---

## Contacto (form + WhatsApp)

**Título:**
Agendar consulta gratuita

**Campos del formulario:**

* Nombre del adulto
* Relación con el adulto (hijo, nieto, otro)
* Teléfono o WhatsApp
* Mensaje / motivo
  **Botón:** Enviar consulta

**Contacto directo:**
WhatsApp: `+57 3142265559` — también disponible para llamadas.

---

## Habeas Data / Privacy (short)

**Texto (Spanish, simple):**
Acepto que los datos proporcionados se usen exclusivamente para agendar y gestionar la consulta. MOVEO trata la información con confidencialidad según la normativa colombiana de protección de datos (Habeas Data).

---

## Footer microcopy

© MOVEO — Salud integral para el adulto mayor. Bogotá.
Contacto: +57 3142265559 — Política de privacidad.
