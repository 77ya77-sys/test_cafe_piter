# Implementation Plan: Лендинг «Тихий Двор»

**Branch**: `20260406-233303-tihiy-dvor-landing` | **Date**: 2026-04-06 | **Spec**: [spec.md](../spec.md)
**Input**: Feature specification from `specs/20260406-233303-tihiy-dvor-landing/spec.md`

---

## Summary

Одностраничный лендинг кофейни «Тихий Двор» — чистый HTML/CSS/JS, без фреймворков. 6 секций: Hero, О месте, Меню, Почему мы, Локация, Финальный CTA + Футер. Дизайн из Figma (desktop 1440px + mobile 390px), тёмная палитра с золотыми акцентами. Стоковые фото. Яндекс.Карты для маршрута. Деплой — локально.

---

## Technical Context

**Language/Version**: HTML5, CSS3, ES6+ JavaScript
**Primary Dependencies**: Нет (vanilla, без фреймворков и библиотек)
**Storage**: N/A (статический сайт)
**Testing**: Ручное тестирование в браузере (Chrome, Safari, Firefox)
**Target Platform**: Desktop (1440px+) и Mobile (375px+) браузеры
**Project Type**: Static landing page
**Performance Goals**: LCP < 2.5s на 4G, First Contentful Paint < 1.5s
**Constraints**: 
- Без внешних зависимостей (no npm, no build tools)
- Все шрифты через Google Fonts CDN (Noto Serif, Liberation Serif, Manrope, Liberation Mono, Nimbus Sans)
- Изображения — стоковые, оптимизированные (WebP + fallback JPG)
- Локальный запуск через `index.html` или простой dev-сервер
**Scale/Scope**: 1 страница, ~6 секций, desktop + mobile

---

## Constitution Check

Constitution не заполнена. Пропускаю.

---

## Project Structure

### Documentation (this feature)

```text
specs/20260406-233303-tihiy-dvor-landing/
├── spec.md              # Feature specification
├── plan.md              # This file
└── checklists/
    └── requirements.md  # Validation checklist
```

### Source Code (repository root)

```text
test_lendos_kafe/
├── index.html              # Главная страница (все секции)
├── css/
│   ├── reset.css           # CSS reset / normalize
│   ├── variables.css       # CSS custom properties (design tokens)
│   ├── base.css            # Базовые стили (typography, body, links)
│   ├── header.css          # Навигация (desktop + mobile)
│   ├── hero.css            # Главный экран
│   ├── about.css           # Секция «О месте»
│   ├── menu.css            # Секция «Еда и кофе»
│   ├── why-us.css          # Секция «Почему к нам приходят»
│   ├── location.css        # Секция «Локация и контакты»
│   ├── cta.css             # Финальный CTA-блок
│   ├── footer.css          # Футер
│   └── responsive.css      # Media queries (mobile-first overrides)
├── js/
│   ├── main.js             # Точка входа, инициализация
│   ├── navigation.js       # Мобильное меню (бургер), smooth scroll
│   └── lazy-images.js      # Lazy loading для изображений
├── images/
│   ├── hero-bg.webp        # Фон hero (двор, гирлянды)
│   ├── hero-bg.jpg         # Fallback для hero
│   ├── about-1.webp        # Фото дворика
│   ├── about-2.webp        # Фото интерьера
│   ├── menu-breakfast.webp # Завтраки
│   ├── menu-main.webp      # Основное
│   ├── menu-dessert.webp   # Десерты
│   ├── menu-coffee.webp    # Кофе
│   └── cta-bg.webp         # Финальный CTA фон
└── fonts/                  # (опционально, если не через Google Fonts)
```

**Structure Decision**: Плоская структура с разделением на `css/`, `js/`, `images/`. CSS разбит по секциям для читаемости и лёгкой поддержки. Без сборщиков — файлы подключаются напрямую в `<head>`.

---

## Implementation Phases

### Phase 1: Foundation
1. `index.html` — каркас страницы, семантическая разметка всех 6 секций
2. `css/variables.css` — все CSS custom properties из Figma (цвета, шрифты, отступы)
3. `css/reset.css` — минимальный reset
4. `css/base.css` — типографика, body, ссылки, утилиты

### Phase 2: Sections (desktop first)
5. `css/header.css` — навбар с логотипом, телефоном, Telegram/WhatsApp
6. `css/hero.css` — hero-секция с фоновым изображением, заголовком, CTA-кнопками
7. `css/about.css` — секция «О месте» с текстом и тезисами
8. `css/menu.css` — карточки меню (4 категории)
9. `css/why-us.css` — 4 пункта «Почему к нам приходят»
10. `css/location.css` — адрес, карта, контакты, кнопки
11. `css/cta.css` — финальный CTA-блок
12. `css/footer.css` — футер

### Phase 3: Mobile Responsive
13. `css/responsive.css` — media queries для mobile (375px–768px)
14. `js/navigation.js` — бургер-меню, smooth scroll к секциям

### Phase 4: Polish
15. `js/lazy-images.js` — lazy loading изображений
16. `js/main.js` — инициализация всех скриптов
17. Оптимизация изображений (WebP + fallback)
18. Финальная проверка соответствия Figma

---

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Разделение CSS на файлы | Читаемость, поддержка по секциям | Один файл — слишком большой, сложно поддерживать |
| Отдельные JS файлы | Модульность, лёгкое отключение | Inline scripts — messy, нет переиспользования |

---

## Design Token Mapping (Figma → CSS)

```css
:root {
  /* Backgrounds */
  --bg-primary: #131313;
  --bg-navbar: rgba(23, 23, 23, 0.8);
  --bg-footer: #0a0a0a;
  --bg-card: #202020;
  --bg-section-alt: #1b1b1c;

  /* Text */
  --text-primary: #e5e2e1;
  --text-secondary: #d5c4b2;
  --text-muted: #737373;
  --text-link: #525252;

  /* Accents */
  --accent-gold: #fcba67;
  --accent-gold-dark: #c58a3c;
  --accent-gold-btn-text: #472a00;
  --accent-green: #325037;
  --accent-green-text: #adcfaf;
  --border-subtle: rgba(81, 69, 56, 0.3);
  --highlight: #f59e0b;

  /* Typography */
  --font-serif-hero: 'Noto Serif', serif;
  --font-serif: 'Liberation Serif', serif;
  --font-sans: 'Manrope', sans-serif;
  --font-mono: 'Liberation Mono', monospace;
  --font-footer: 'Nimbus Sans', sans-serif;

  /* Spacing */
  --container-padding: 24px;
  --section-padding-y: 80px;
  --section-padding-y-sm: 64px;
  --radius-card: 8px;
  --radius-hero: 12px;
  --btn-height-cta: 64px;
  --btn-height-secondary: 56px;
  --navbar-height: 101px;
  --divider-width: 48px;
  --divider-height: 2px;
}
```
