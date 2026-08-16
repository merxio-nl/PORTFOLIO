export const languages = {
  en: 'English',
  ru: 'Русский',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.studio': 'Studio',
    'nav.creator': 'Creator',
    'nav.contact': 'Contact',
    'nav.startProject': 'Start a project',
    'nav.langSwitch': 'Russian — Ru',

    'hero.heading': 'Websites for businesses — from idea to launch.',
    'hero.subhead':
      'JOMO handles structure, design, development and launch. You work directly with the person building your project.',
    'hero.ctaPrimary': 'Start a project',
    'hero.ctaSecondary': 'See the work',

    'work.eyebrow': 'Selected work',
    'work.heading': 'Real projects for real businesses.',
    'work.viewAll': 'View all work',
    'work.viewCaseStudy': 'View case study',

    'workIndex.eyebrow': 'Work',
    'workIndex.heading': 'Selected projects.',
    'workIndex.subhead':
      "A quick look at what JOMO has built. Open a project for the full story.",

    'services.eyebrow': 'Services',
    'services.heading': 'One studio, the whole website problem.',
    'services.subhead': "No hand-offs between people who've never spoken. One point of contact.",
    'services.strategy.name': 'Strategy & Direction',
    'services.strategy.summary':
      'Understanding the business and the one job the site needs to do.',
    'services.strategy.item1': 'Information architecture',
    'services.strategy.item2': 'Content structure',
    'services.strategy.item3': 'Positioning',
    'services.design.name': 'Design',
    'services.design.summary':
      'An interface that looks intentional — built on typography, composition and restraint.',
    'services.design.item1': 'Art direction',
    'services.design.item2': 'Typography & layout',
    'services.design.item3': 'Responsive design',
    'services.development.name': 'Development',
    'services.development.summary': 'Fast, accessible, and easy to maintain.',
    'services.development.item1': 'Hand-built front end',
    'services.development.item2': 'Performance & accessibility',
    'services.development.item3': 'Hosting & launch',

    'studio.eyebrow': 'JOMO',
    'studio.heading': "Only what's actually needed.",
    'studio.body':
      "We don't add things for effect. Every section, feature and interaction solves a real problem — for the business or the person using the site.",
    'studio.focusLabel': 'What earns its place',
    'studio.focus1': 'The work itself, presented clearly',
    'studio.focus2': 'Words that help someone make a decision',
    'studio.focus3': 'A direct way to reach a real person',
    'studio.focus4': 'Enough craft to earn trust',

    'creator.eyebrow': 'Creator',
    'creator.name': 'Yaroslav Redka',
    'creator.role': 'Creator & developer, JOMO Studio · Tilburg, Netherlands',
    'creator.bio':
      'Yaroslav is personally responsible for the strategy, design and development of every JOMO project, and stays the direct point of contact throughout. The studio is built to grow — for now, one person handles the work and the conversation.',

    'process.eyebrow': 'Process',
    'process.heading': 'A short, clear path from first call to launch.',
    'process.discover.name': 'Discover',
    'process.discover.detail': 'Understand the business and what the site must achieve.',
    'process.define.name': 'Define',
    'process.define.detail': 'Agree the scope and priorities up front.',
    'process.design.name': 'Design',
    'process.design.detail': 'Shape the look and layout around the content.',
    'process.build.name': 'Build',
    'process.build.detail': 'Develop it properly — fast and responsive.',
    'process.launch.name': 'Launch',
    'process.launch.detail': 'Ship it, connect the domain, hand it over.',

    'contact.eyebrow': 'Contact',
    'contact.heading': 'Have a website that needs to work harder?',
    'contact.body': 'Tell us about the business and what the site needs to do. We reply directly.',

    'footer.tagline':
      'Quiet confidence. Strong work. Clear communication. We build what genuinely matters.',
    'footer.navigate': 'Navigate',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 JOMO Studio.',
    'footer.location': 'Tilburg, Netherlands',

    'case.backToWork': 'All work',
    'case.label': 'Case study',
    'case.problem': 'The problem',
    'case.solution': 'The solution',
    'case.delivered': 'What was delivered',
    'case.showcase': 'The site',
    'case.mobileShowcase': 'On mobile',
    'case.clientWork': 'Related work',
    'case.outcome': 'Outcome',
    'case.visitLive': 'Visit live site',
    'case.viewRepo': 'View repository',
    'case.nextProject': 'Next project',
    'case.aboutProject': 'About this project',
    'case.noFullCaseStudy': "A full case study for this project isn't available yet.",
  },
  ru: {
    'nav.work': 'Работы',
    'nav.services': 'Услуги',
    'nav.studio': 'Студия',
    'nav.creator': 'Обо мне',
    'nav.contact': 'Контакты',
    'nav.startProject': 'Обсудить проект',
    'nav.langSwitch': 'English — En',

    'hero.heading': 'Сайты для бизнеса — от идеи до запуска.',
    'hero.subhead':
      'JOMO берёт на себя структуру, дизайн, разработку и запуск. Вы напрямую общаетесь с человеком, который делает ваш проект.',
    'hero.ctaPrimary': 'Обсудить проект',
    'hero.ctaSecondary': 'Смотреть работы',

    'work.eyebrow': 'Проекты',
    'work.heading': 'Реальные проекты для реального бизнеса.',
    'work.viewAll': 'Все работы',
    'work.viewCaseStudy': 'Смотреть проект',

    'workIndex.eyebrow': 'Работы',
    'workIndex.heading': 'Избранные проекты.',
    'workIndex.subhead':
      'Коротко о том, что уже сделано. Откройте проект, чтобы увидеть детали.',

    'services.eyebrow': 'Услуги',
    'services.heading': 'Одна студия — всё, что нужно сайту.',
    'services.subhead': 'Без передачи проекта между разными людьми — один человек ведёт всё от начала до конца.',
    'services.strategy.name': 'Стратегия и направление',
    'services.strategy.summary':
      'Разбираемся в бизнесе и в том, какую задачу должен решать сайт.',
    'services.strategy.item1': 'Информационная архитектура',
    'services.strategy.item2': 'Структура контента',
    'services.strategy.item3': 'Позиционирование',
    'services.design.name': 'Дизайн',
    'services.design.summary':
      'Интерфейс, который выглядит продуманным — за счёт типографики, композиции и сдержанности.',
    'services.design.item1': 'Арт-дирекшн',
    'services.design.item2': 'Типографика и вёрстка',
    'services.design.item3': 'Адаптивный дизайн',
    'services.development.name': 'Разработка',
    'services.development.summary': 'Быстро, доступно для всех пользователей и легко поддерживать.',
    'services.development.item1': 'Вёрстка вручную',
    'services.development.item2': 'Производительность и доступность',
    'services.development.item3': 'Хостинг и запуск',

    'studio.eyebrow': 'JOMO',
    'studio.heading': 'Только то, что действительно нужно.',
    'studio.body':
      'Мы не добавляем элементы ради эффекта. Каждый раздел, функция и взаимодействие решают конкретную задачу — бизнеса или пользователя.',
    'studio.focusLabel': 'На чём мы фокусируемся',
    'studio.focus1': 'Сама работа, показанная ясно',
    'studio.focus2': 'Слова, которые помогают принять решение',
    'studio.focus3': 'Прямой контакт с реальным человеком',
    'studio.focus4': 'Достаточно мастерства, чтобы вызывать доверие',

    'creator.eyebrow': 'Обо мне',
    'creator.name': 'Ярослав Редька',
    'creator.role': 'Директор JOMO Studio · Тилбург, Нидерланды',
    'creator.bio':
      'Ярослав лично отвечает за стратегию, дизайн и разработку каждого проекта JOMO — и всегда на прямой связи с клиентом. Студия устроена так, чтобы расти дальше, но пока всю работу и общение ведёт один человек.',

    'process.eyebrow': 'Процесс',
    'process.heading': 'Короткий и понятный путь от звонка до запуска.',
    'process.discover.name': 'Изучение',
    'process.discover.detail': 'Разбираемся в бизнесе и в том, что должен делать сайт.',
    'process.define.name': 'Задача',
    'process.define.detail': 'Договариваемся об объёме и приоритетах.',
    'process.design.name': 'Дизайн',
    'process.design.detail': 'Формируем внешний вид и композицию вокруг контента.',
    'process.build.name': 'Разработка',
    'process.build.detail': 'Пишем сайт вручную — быстро и адаптивно.',
    'process.launch.name': 'Запуск',
    'process.launch.detail': 'Публикуем, подключаем домен, передаём проект.',

    'contact.eyebrow': 'Контакты',
    'contact.heading': 'Сайт мог бы работать лучше?',
    'contact.body': 'Расскажите о бизнесе и задаче — ответим напрямую.',

    'footer.tagline':
      'Спокойная уверенность. Сильная работа. Понятная коммуникация. Делаем то, что действительно важно.',
    'footer.navigate': 'Навигация',
    'footer.contact': 'Контакты',
    'footer.copyright': '© 2026 JOMO Studio.',
    'footer.location': 'Тилбург, Нидерланды',

    'case.backToWork': 'Все работы',
    'case.label': 'Кейс',
    'case.problem': 'Задача',
    'case.solution': 'Решение',
    'case.delivered': 'Что сделано',
    'case.showcase': 'Сайт',
    'case.mobileShowcase': 'На телефоне',
    'case.clientWork': 'Работы клиента',
    'case.outcome': 'Результат',
    'case.visitLive': 'Открыть сайт',
    'case.viewRepo': 'Открыть репозиторий',
    'case.nextProject': 'Следующий проект',
    'case.aboutProject': 'О проекте',
    'case.noFullCaseStudy': 'Подробный кейс для этого проекта пока не готов.',
  },
} as const;
