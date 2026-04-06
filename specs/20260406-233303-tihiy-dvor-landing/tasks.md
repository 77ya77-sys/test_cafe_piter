---

description: "Task list for лендинг кофейни «Тихий Двор»"
---

# Tasks: Лендинг «Тихий Двор»

**Input**: Design documents from `specs/20260406-233303-tihiy-dvor-landing/`
**Prerequisites**: plan.md, spec.md

**Tests**: Not requested — ручное тестирование в браузере.

**Organization**: Tasks organized by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)

## Path Conventions

Repository root = `test_lendos_kafe/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project structure, design tokens, base styles

- [ ] T001 Create directory structure: `css/`, `js/`, `images/`
- [ ] T002 [P] Create `css/variables.css` — все CSS custom properties из plan.md (цвета, шрифты, отступы, радиусы)
- [ ] T003 [P] Create `css/reset.css` — минимальный reset (box-sizing, margins, list styles, images)
- [ ] T004 [P] Create `css/base.css` — body (bg #131313, text #e5e2e1), typography (Noto Serif, Liberation Serif, Manrope через Google Fonts), ссылки, утилиты (.container, .sr-only)
- [ ] T005 Create `index.html` — семантический каркас: `<header>`, `<main>` с 6 `<section>`, `<footer>`, подключение CSS/JS, Google Fonts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Навигация и общие компоненты — нужны для всех user stories

- [ ] T006 [P] Create `css/header.css` — навбар: лого «Тихий Двор» (Liberation Serif 24px), телефон, иконки Telegram/WhatsApp, фон rgba(23,23,23,0.8), backdrop-filter blur
- [ ] T007 [P] Create `css/footer.css` — футер: фон #0a0a0a, ссылки (Nimbus Sans 14px, #525252), копирайт (#737373), центрирование
- [ ] T008 Create `js/navigation.js` — бургер-меню для mobile, smooth scroll к якорям, подсветка активной секции при скролле
- [ ] T009 Create `js/lazy-images.js` — IntersectionObserver для lazy loading изображений с placeholder-цветом
- [ ] T010 Create `js/main.js` — точка входа: инициализация navigation.js и lazy-images.js

**Checkpoint**: Foundation готова — навигация, футер, скрипты работают. Можно начинать user stories.

---

## Phase 3: User Story 1 — Ознакомиться с местом и атмосферой (Priority: P1) 🎯 MVP

**Goal**: Пользователь открывает лендинг и за 5 секунд понимает: что это, где, чем отличается.

**Independent Test**: Открыть `index.html` → виден hero с названием, подзаголовком, CTA-кнопками, контактами в шапке. Фоновое изображение загружено, текст читаем.

### Implementation for User Story 1

- [ ] T011 [P] [US1] Create `css/hero.css` — hero-секция: фоновое изображение (двор, гирлянды), overlay с затемнением, заголовок «Кофе и еда в тихом дворе старого Петербурга» (Noto Serif 36px, #e5e2e1), подзаголовок (Manrope 14px, #fcba67), микро-текст «Вход через арку • 2 минуты от Невского»
- [ ] T012 [P] [US1] Create `css/cta.css` — финальный CTA-блок: фоновое изображение (вечер, тёплый свет), текст «Зайди на кофе сегодня», кнопки «Посмотреть меню» и «Построить маршрут»
- [ ] T013 [US1] Populate hero content in `index.html` — заголовок, подзаголовок, 2 CTA-кнопки, микро-текст, контакты в шапке
- [ ] T014 [US1] Populate final CTA content in `index.html` — текст, подтекст, 2 кнопки
- [ ] T015 [US1] Add hero background image to `images/hero-bg.webp` + `images/hero-bg.jpg` fallback (стоковое фото: двор-колодец, вечер, гирлянды)
- [ ] T016 [US1] Add CTA background image to `images/cta-bg.webp` (стоковое фото: вечерний свет, кофе, люди)
- [ ] T017 [US1] Style CTA buttons: primary (#c58a3c bg, #472a00 text, 64px height, 8px radius), secondary (outline или #325037 bg)

**Checkpoint**: Hero и финальный CTA работают. Пользователь видит место и может нажать «Посмотреть меню» или «Построить маршрут».

---

## Phase 4: User Story 2 — Изучить меню и кухню (Priority: P2)

**Goal**: Пользователь видит 4 категории блюд и может открыть полное меню.

**Independent Test**: Скролл до секции «Еда и кофе» → видны 4 карточки (Завтраки, Основное, Десерты, Кофе) с описаниями и кнопкой «Открыть полное меню».

### Implementation for User Story 2

- [ ] T018 [P] [US2] Create `css/menu.css` — секция меню: заголовок H2 (Liberation Serif 30px), золотой разделитель 48×2px, сетка карточек (grid/flex), карточки (bg #202020, radius 8px), hover-эффекты
- [ ] T019 [P] [US2] Add stock images for menu: `images/menu-breakfast.webp`, `images/menu-main.webp`, `images/menu-dessert.webp`, `images/menu-coffee.webp`
- [ ] T020 [US2] Populate menu section in `index.html` — 4 карточки:
  - Завтраки: «Сырники, омлеты, тосты с авокадо. С 8:00 до 14:00»
  - Основное: «Домашняя паста, салаты, горячие блюда»
  - Десерты: «Чизкейк, брауни, сезонные десерты»
  - Кофе: «Эспрессо, капучино, флэт уайт, альтернативные методы»
  - Кнопка «Открыть полное меню»
  - Примечание: «Меню немного меняется по сезону»

**Checkpoint**: Секция меню полностью работает. 4 карточки с фото, описаниями, кнопкой.

---

## Phase 5: User Story 3 — Найти кофейню и построить маршрут (Priority: P3)

**Goal**: Пользователь находит адрес, часы работы, контакты и строит маршрут через Яндекс.Карты.

**Independent Test**: Скролл до секции «Локация» → виден адрес, ориентир, часы работы, телефон, email, Telegram, WhatsApp. Кнопка «Построить маршрут» открывает yandex.ru/maps.

### Implementation for User Story 3

- [ ] T021 [P] [US3] Create `css/location.css` — секция локация: заголовок H2, блок с адресом (центрированный), карта (iframe или placeholder), контакты (телефон #fcba67, часы #737373), кнопки
- [ ] T022 [US3] Populate location section in `index.html`:
  - Адрес: «Санкт-Петербург, ул. Итальянская, 12. Вход через арку, во двор»
  - Ориентир: «Арка между домами, второй двор»
  - Часы: «Ежедневно с 08:00 до 22:00»
  - Телефон: +7 (000) 000-00-00
  - Email: info@tihiy-dvor.ru
  - Telegram: @tihiydvor
  - WhatsApp: +7 (000) 000-00-00
  - Кнопки: «Построить маршрут» → `https://yandex.ru/maps/?pt=30.3447,59.9386&z=17&l=map` (координаты уточнить), «Открыть карту»

**Checkpoint**: Локация полностью работает. Все контакты видны, маршрут строится через Яндекс.Карты.

---

## Phase 6: User Story 4 — Принять решение о визите (Priority: P4)

**Goal**: Пользователь читает «Почему к нам приходят» — 4 тезиса укрепляют желание зайти.

**Independent Test**: Скролл до блока → видны 4 пункта: Вкус, Локация, Атмосфера, Формат — каждый с иконкой и описанием.

### Implementation for User Story 4

- [ ] T023 [P] [US4] Create `css/why-us.css` — секция «Почему мы»: заголовок H2, 4 пункта с вертикальными бордерами (#514538 30%), H4 (Manrope 18px, #e5e2e1), описания (Manrope 14px, #d5c4b2), фон #1b1b1c
- [ ] T024 [US4] Populate why-us section in `index.html`:
  - Вкус: «Готовим так, чтобы хотелось вернуться»
  - Локация: «Центр города, но без шума и потока»
  - Атмосфера: «Можно сидеть долго — никто не торопит»
  - Формат: «Подходит и для встреч, и для работы»

**Checkpoint**: Все 4 тезиса отображаются. Эмоциональный триггер работает.

---

## Phase 7: About Section (сквозная, нужна для US1)

**Purpose**: Секция «Про место / Атмосфера» — описывает кофейню, вход через арку, летнюю веранду.

- [ ] T025 [P] Create `css/about.css` — секция about: заголовок H2, текст (Manrope 14px, #d5c4b2), 4 тезиса с иконками, фото дворика и интерьера
- [ ] T026 [P] Add stock images: `images/about-1.webp` (дворик, арка), `images/about-2.webp` (интерьер, столики)
- [ ] T027 Populate about section in `index.html`:
  - Текст: «Тихий Двор» — небольшая кофейня в старом фонде Петербурга...
  - Тезисы: тихий двор в центре, вход через арку, летняя веранда, можно с ноутбуком

**Checkpoint**: Секция «О месте» полностью работает.

---

## Phase 8: Mobile Responsive

**Purpose**: Адаптация всех секций под mobile (375px–768px)

- [ ] T028 Create `css/responsive.css` — media queries:
  - Mobile nav: бургер-меню, полноэкранное overlay
  - Hero: уменьшенный шрифт (заголовок 28px → 24px), кнопки в колонку
  - Menu: карточки в 1 колонку вместо сетки
  - Location: карта на всю ширину, контакты в колонку
  - Footer: ссылки в колонку, уменьшенные отступы
  - Все секции: padding 24px → 16px, шрифты адаптированы

**Checkpoint**: Лендинг корректно отображается на 375px, 768px, 1440px+.

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Финальные улучшения

- [ ] T029 [P] Добавить favicon (иконка кофе/двора)
- [ ] T030 [P] Добавить meta-теги: title, description, Open Graph (для шаринга в соцсетях)
- [ ] T031 Проверить smooth scroll ко всем якорям (кнопки «Посмотреть меню» → секция меню, «Построить маршрут» → секция локация)
- [ ] T032 Проверить все ссылки: Telegram (https://t.me/tihiydvor), WhatsApp (https://wa.me/70000000000), Яндекс.Карты
- [ ] T033 Финальная проверка соответствия Figma: цвета, шрифты, отступы, border-radius
- [ ] T034 Оптимизировать изображения: WebP с fallback JPG, lazy loading работает
- [ ] T035 Проверить в Chrome, Safari, Firefox (desktop + mobile)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — BLOCKS all user stories
- **User Stories (Phase 3–7)**: All depend on Phase 2 completion
  - Can proceed sequentially: P1 → P2 → P3 → P4 → About
  - Or parallel if multiple developers
- **Mobile Responsive (Phase 8)**: Depends on all desktop sections being complete
- **Polish (Phase 9)**: Depends on all previous phases

### User Story Dependencies

- **US1 (P1)**: Hero + CTA — can start after Foundational
- **US2 (P2)**: Menu — can start after Foundational, independent of US1
- **US3 (P3)**: Location — can start after Foundational, independent of US1/US2
- **US4 (P4)**: Why Us — can start after Foundational, independent
- **About**: Supports US1 (атмосфера), can be done in parallel with US1

### Parallel Opportunities

- T002, T003, T004 — все [P], разные файлы
- T006, T007 — header и footer, разные файлы
- T011, T012 — hero и CTA CSS, разные файлы
- T018, T019 — menu CSS и images, разные файлы
- T021 — location CSS, independent
- T023 — why-us CSS, independent
- T025, T026 — about CSS и images, разные файлы
- T029, T030 — favicon и meta-теги, разные файлы

### Suggested Execution Order (single developer)

```
Phase 1: T001 → T002+T003+T004 (parallel) → T005
Phase 2: T006+T007 (parallel) → T008 → T009 → T010
Phase 3: T011+T012 (parallel) → T013 → T014 → T015 → T016 → T017
Phase 4: T018+T019 (parallel) → T020
Phase 5: T021 → T022
Phase 6: T023 → T024
Phase 7: T025+T026 (parallel) → T027
Phase 8: T028
Phase 9: T029+T030 (parallel) → T031 → T032 → T033 → T034 → T035
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Hero + CTA)
4. **STOP and VALIDATE**: Открыть index.html — видно hero, кнопки, атмосферу?
5. Добавить Phase 7 (About) для полноты первого впечатления

### Incremental Delivery

1. Setup + Foundational → каркас готов
2. US1 (Hero + CTA) → первое впечатление ✅
3. About → описание места ✅
4. US2 (Menu) → еда и кофе ✅
5. US4 (Why Us) → почему стоит прийти ✅
6. US3 (Location) → как найти ✅
7. Mobile Responsive → адаптивность ✅
8. Polish → финальные штрихи ✅

### Total: 35 tasks

| Phase | Tasks | Count |
|-------|-------|-------|
| Setup | T001–T005 | 5 |
| Foundational | T006–T010 | 5 |
| US1 (Hero + CTA) | T011–T017 | 7 |
| US2 (Menu) | T018–T020 | 3 |
| US3 (Location) | T021–T022 | 2 |
| US4 (Why Us) | T023–T024 | 2 |
| About | T025–T027 | 3 |
| Mobile Responsive | T028 | 1 |
| Polish | T029–T035 | 7 |
| **Total** | | **35** |
