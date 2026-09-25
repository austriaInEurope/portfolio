export type Language = 'en' | 'ru'

export const translations = {
  en: {
    nav: { work: 'Work', about: 'About', skills: 'Skills', contact: 'Contact', setApp: 'Setka', linkedin: 'LinkedIn' },
    theme: { light: 'Light mode', dark: 'Dark mode' },
    language: { en: 'EN', ru: 'RU', label: 'Language' },
    hero: {
      available: 'Available for work',
      viewProjects: 'View projects',
      github: 'GitHub',
      contact: 'Contact',
      setApp: 'Setka',
    },
    about: {
      title: 'About',
      p1: 'I develop production iOS applications in Swift and SwiftUI, structured around MVVM and a modular, testable architecture. My work covers the full lifecycle: turning a client’s business process into requirements, building the app, and taking it through TestFlight to an App Store release.',
      p2: 'On the data side I design network layers over REST APIs with URLSession and async/await, and persist state with CoreData, SwiftData and UserDefaults — including offline-first setups that keep working when the connection drops.',
      p3: 'My specialism is spatial computing. I build with ARKit and LiDAR: real-time 3D scanning, mesh generation and validation, AR visualisation, and USDZ/OBJ export, with an eye on rendering performance and mesh quality.',
      facts: [
        ['Currently', 'Seeking a Middle iOS Developer role'],
        ['Shipped', '4 commercial projects · App Store & TestFlight'],
        ['Core stack', 'Swift · SwiftUI · MVVM · ARKit'],
        ['Languages', 'Russian (native) · English B1 · Spanish A1'],
      ],
    },
    projects: {
      title: 'Selected work',
      intro: 'Four commercial iOS projects, from a LiDAR scanning MVP to a workforce app built around a client’s payroll process. The screens below are from the shipped builds.',
      scroll: 'Scroll for more screens →',
      featuredNote: 'Screens are under NDA — the visualisation shows how the capture flow works. Happy to walk through the architecture on a call.',
    },
    skills: {
      title: 'Skills',
      intro: 'The tools I reach for day to day, grouped by where they sit in an app.',
    },
    contact: {
      title: 'Let’s build something for iOS.',
      intro: 'Open to Middle iOS Developer roles and commercial projects — especially anything involving AR, LiDAR or 3D on device. The fastest way to reach me is email.',
      notes: {
        email: 'Best for roles, briefs and estimates.',
        github: 'Source code and project history.',
        linkedin: 'Full work history and background.',
      },
    },
    footer: 'Built with React, TypeScript and Tailwind CSS.',
    projectLabels: {
      commercial: 'Commercial',
      personal: 'Personal',
      featured: 'Featured',
    },
  },
  ru: {
    nav: { work: 'Проекты', about: 'Обо мне', skills: 'Навыки', contact: 'Контакты', setApp: 'Сетка', linkedin: 'LinkedIn' },
    theme: { light: 'Дневной режим', dark: 'Ночной режим' },
    language: { en: 'EN', ru: 'RU', label: 'Язык' },
    hero: {
      available: 'Открыта к предложениям',
      viewProjects: 'Смотреть проекты',
      github: 'GitHub',
      contact: 'Связаться',
      setApp: 'Сетка',
    },
    about: {
      title: 'Обо мне',
      p1: 'Разрабатываю production iOS-приложения на Swift и SwiftUI с архитектурой MVVM и модульной, тестируемой структурой. Работаю со всем циклом разработки: от перевода бизнес-задачи клиента в требования до сборки, TestFlight и релиза в App Store.',
      p2: 'В части данных проектирую сетевые слои на REST API с URLSession и async/await, использую CoreData, SwiftData и UserDefaults. В том числе реализую offline-first сценарии, которые продолжают работать при потере соединения.',
      p3: 'Моя специализация — spatial computing. Работаю с ARKit и LiDAR: 3D-сканирование в реальном времени, генерация и валидация mesh, AR-визуализация и экспорт USDZ/OBJ с фокусом на качество геометрии и производительность.',
      facts: [
        ['Сейчас', 'Рассматриваю позиции Middle iOS Developer'],
        ['Выпущено', '4 коммерческих проекта · App Store и TestFlight'],
        ['Основной стек', 'Swift · SwiftUI · MVVM · ARKit'],
        ['Языки', 'Русский (родной) · Английский B1 · Испанский A1'],
      ],
    },
    projects: {
      title: 'Избранные проекты',
      intro: 'Четыре коммерческих iOS-проекта: от MVP со сканированием через LiDAR до приложения для учёта смен и расчёта выплат. Ниже — экраны из готовых сборок.',
      scroll: 'Прокрутите, чтобы увидеть больше экранов →',
      featuredNote: 'Экраны находятся под NDA — визуализация показывает принцип работы сканирования. Архитектуру проекта могу подробно показать на созвоне.',
    },
    skills: {
      title: 'Навыки',
      intro: 'Инструменты и технологии, с которыми я работаю каждый день.',
    },
    contact: {
      title: 'Создадим что-нибудь для iOS.',
      intro: 'Рассматриваю позиции Middle iOS Developer и коммерческие проекты — особенно задачи с AR, LiDAR и 3D на устройстве. Быстрее всего связаться со мной по email.',
      notes: {
        email: 'Для вакансий, задач и оценки проекта.',
        github: 'Исходный код и история проектов.',
        linkedin: 'Опыт работы и профессиональный профиль.',
      },
    },
    footer: 'Сайт создан на React, TypeScript и Tailwind CSS.',
    projectLabels: {
      commercial: 'Коммерческий',
      personal: 'Личный',
      featured: 'Избранный',
    },
  },
} as const
