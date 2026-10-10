# Despacho Jurídico e Inmobiliario TORA · Sucursal Querétaro

Sitio web institucional basado en el rediseño de imagen corporativa 2026.
HTML + CSS + JS puro, sin dependencias ni build: abra `index.html` y listo.

## Estructura

```
├── index.html          # Página única (hero, servicios, asistencia 24h, contacto)
├── css/
│   └── styles.css      # Sistema de diseño (paleta, tipografía, responsive)
├── js/
│   └── script.js       # Menú móvil, header con scroll, animaciones reveal
└── assets/
    └── logo-tora.png   # Logotipo oficial
```

## Paleta corporativa

| Color | Hex | Uso |
|---|---|---|
| Burdeos teja | `#7A1E1A` | Titulares · CTA · acento Familiar |
| Azul marino | `#1F3A5F` | Acento Civil · franjas corporativas |
| Verde bosque | `#1E6B3C` | Identidad · franja tricolor |
| Dorado envejecido | `#B08D3E` | Filetes · divisores · viñetas |
| Carbón | `#2B2B2B` | Textos · franjas de autoridad |
| Marfil | `#F7F5F0` | Fondos |

## Tipografía

- **Cormorant Garamond** (serif): titulares, CTA, secciones.
- **Source Sans 3** (sans): cuerpo, listados y datos de contacto.

## Editar en VS Code

1. Clone el repositorio: `git clone <url-del-repo>`
2. Abra la carpeta en VS Code.
3. Recomendado: extensión **Live Server** para previsualizar con recarga automática.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Sitio web TORA Sucursal Querétaro"
git branch -M main
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```

Puede publicarlo gratis con **GitHub Pages** (Settings → Pages → rama `main`).
