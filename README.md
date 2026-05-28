# SGN-Law — Official Website

Premium legal consultancy website for SGN-Law Indonesia.

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JS — zero build step
- Fonts: Cormorant Garamond + DM Sans (Google Fonts)
- Icons: Lucide (CDN)
- Deployment: Vercel (static)

## Project Structure

```
sgnLaw/
├── index.html              # Homepage
├── vercel.json             # Vercel routing config
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (mobile-first)
│   └── js/
│       └── main.js         # Interactivity & animations
└── pages/
    ├── layanan.html        # Services page
    ├── about.html          # About us page
    ├── contact.html        # Contact page
    ├── fitur.html          # Features (Cek Nama PT, Tracking, etc.)
    ├── artikel.html        # Blog / Info Bisnis
    └── promo.html          # Promo page
```

## Local Development

```bash
# Clone the repo
git clone https://github.com/182slash/sgnLaw.git
cd sgnLaw

# Open with VS Code
code .

# Use Live Server extension (VS Code) to preview
# Right-click index.html → Open with Live Server
```

## Deploy to Vercel

```bash
git add .
git commit -m "your message"
git push origin main
# Vercel auto-deploys on push
```

## Contacts / WhatsApp Numbers

Update WhatsApp numbers in `assets/js/main.js` inside the `WA_CONTACTS` array.

## Color Tokens

| Token          | Value     | Usage                    |
|----------------|-----------|--------------------------|
| --bg           | #080706   | Page background          |
| --surface      | #141210   | Cards, sections          |
| --gold         | #C9A84C   | Primary brand accent     |
| --gold-bright  | #E2C47A   | Hover highlights         |
| --white        | #FFFFFF   | Secondary brand accent   |
| --text         | #F5F2EC   | Body text (warm white)   |

---

© 2024 SGN-Law. All rights reserved.
