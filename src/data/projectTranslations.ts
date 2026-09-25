export type ProjectCopy = {
  meta: string
  summary: string
  highlights: string[]
  captions: Record<string, string>
  alts: Record<string, string>
}

export const projectTranslations: Record<'en' | 'ru', Record<string, ProjectCopy>> = {
  en: {
    scanner: {
      meta: 'Featured · Freelance MVP, 2026',
      summary: 'A LiDAR-based scanning app that reconstructs physical objects in real time, validates the resulting mesh, and exports it for downstream 3D work. Built as a commercial MVP for object digitisation and shape analysis.',
      highlights: [
        'Real-time capture and reconstruction with ARKit and the LiDAR scanner',
        'Mesh generation, validation and AR visualisation pipelines',
        'Heatmap comparison between two scans to surface shape deviation',
        'USDZ and OBJ export for use in other 3D tooling',
        'Rendering and mesh-quality optimisation for sustained frame rates',
      ],
      captions: {},
      alts: {},
    },
    godecor: {
      meta: 'Commercial · Feb – Mar 2026',
      summary: 'A workforce management app delivered end to end for a client: employees log shifts, the app calculates pay at day and night rates, and an administrator approves or returns each entry with a comment.',
      highlights: [
        'Two roles, two flows — employee and administrator',
        'Payroll from day/night hours, tied to approval state',
        'Shift history with status and admin comments',
        'Google Sheets sync with a local offline fallback',
      ],
      captions: {
        'godecor-launch.webp': 'Role picker on launch',
        'godecor-login.webp': 'Employee sign-in and registration',
        'godecor-admin-setup.webp': 'One-time admin password setup',
        'godecor-employee.webp': 'Employee dashboard and counters',
        'godecor-form.webp': 'Shift entry with project autofill',
        'godecor-time.webp': 'Time picker for start and end',
        'godecor-history.webp': 'History with live status',
        'godecor-admin.webp': 'Administrator review queue',
        'godecor-reject.webp': 'Rejection with a written reason',
        'godecor-rejected.webp': 'Employee fixes and resubmits',
        'godecor-payment.webp': 'Payment confirmed by the employee',
      },
      alts: {
        'godecor-launch.webp': 'GoDecor launch screen with a role picker',
        'godecor-login.webp': 'Employee sign-in screen',
        'godecor-admin-setup.webp': 'First-run administrator password setup',
        'godecor-employee.webp': 'Employee dashboard with shift counters',
        'godecor-form.webp': 'Shift entry form with rate, date and hours',
        'godecor-time.webp': 'Time picker dialog',
        'godecor-history.webp': 'Shift history showing a pending entry',
        'godecor-admin.webp': 'Administrator review queue with approve and reject actions',
        'godecor-reject.webp': 'Rejection dialog with a comment field',
        'godecor-rejected.webp': 'Employee sees the rejection comment and a resubmit button',
        'godecor-payment.webp': 'Payment confirmation screen',
      },
    },
    mixcafe: {
      meta: 'Commercial · Dec 2025 – Jan 2026',
      summary: 'A customer-facing app for a food-service business. The catalogue is rendered through WKWebView so the owner can change the menu, prices and promotions without shipping a new build.',
      highlights: [
        'SwiftUI + MVVM app shell around web content',
        'Deep linking and external URL handling',
        'Offline detection with user feedback',
        'Custom splash and loading flow, released via TestFlight',
      ],
      captions: {
        'mixcafe-menu.webp': 'Home, promotions and menu',
        'mixcafe-drawer.webp': 'Category navigation',
        'mixcafe-catalog.webp': 'Catalogue with prices and cart',
      },
      alts: {
        'mixcafe-menu.webp': 'MixCafe home screen with promotions and menu categories',
        'mixcafe-drawer.webp': 'MixCafe navigation drawer with categories',
        'mixcafe-catalog.webp': 'MixCafe product catalogue with prices and add-to-cart buttons',
      },
    },
    movies: {
      meta: 'Personal · Jun – Jul 2025',
      summary: 'A film discovery app built around third-party API integration, state management and modern iOS architecture.',
      highlights: [
        'TMDb REST API for live catalogue data and search',
        'Search, filtering and favourites for faster discovery',
        'MVVM structure with responsive SwiftUI layouts',
        'Local persistence for preferences and saved films',
      ],
      captions: {
        'movie-auth.webp': 'Guest or account sign-in',
        'movie-home.webp': 'Popular and top-rated rows',
        'movie-nowplaying.webp': 'Now Playing filter',
        'movie-search.webp': 'Live search results',
        'movie-detail.webp': 'Detail view with recommendations',
        'movie-favorites.webp': 'Saved favourites',
      },
      alts: {
        'movie-auth.webp': 'Movie App welcome screen with guest and account sign-in options',
        'movie-home.webp': 'Movie App home screen with Popular and Top Rated rows',
        'movie-nowplaying.webp': 'Movie App Now Playing tab with a filtered list',
        'movie-search.webp': 'Movie App search results for the term Love',
        'movie-detail.webp': 'Movie App detail screen with synopsis and recommendations',
        'movie-favorites.webp': 'Movie App favourites screen with saved titles',
      },
    },
  },
  ru: {
    scanner: {
      meta: 'Избранный · Коммерческий MVP, 2026',
      summary: 'Приложение для 3D-сканирования на основе LiDAR, которое в реальном времени восстанавливает форму физических объектов, проверяет полученную mesh-геометрию и экспортирует результат для дальнейшей работы с 3D. Проект создан как коммерческий MVP для оцифровки объектов и анализа их формы.',
      highlights: [
        'Съёмка и реконструкция в реальном времени с ARKit и LiDAR-сканером',
        'Генерация, проверка и AR-визуализация 3D-геометрии',
        'Сравнение двух сканов с помощью heatmap для выявления отклонений формы',
        'Экспорт в USDZ и OBJ для использования в других 3D-инструментах',
        'Оптимизация рендеринга и качества mesh для стабильной частоты кадров',
      ],
      captions: {},
      alts: {},
    },
    godecor: {
      meta: 'Коммерческий · февраль – март 2026',
      summary: 'Приложение для управления рабочими сменами, разработанное для клиента от начала до конца: сотрудники отмечают смены, приложение рассчитывает оплату по дневному и ночному тарифам, а администратор подтверждает или возвращает каждую запись с комментарием.',
      highlights: [
        'Две роли и два сценария работы — сотрудник и администратор',
        'Расчёт оплаты по дневным и ночным часам с учётом статуса согласования',
        'История смен со статусами и комментариями администратора',
        'Синхронизация с Google Sheets и локальный режим работы без интернета',
      ],
      captions: {
        'godecor-launch.webp': 'Выбор роли при запуске',
        'godecor-login.webp': 'Вход и регистрация сотрудника',
        'godecor-admin-setup.webp': 'Одноразовая настройка пароля администратора',
        'godecor-employee.webp': 'Главный экран сотрудника и счётчики смен',
        'godecor-form.webp': 'Добавление смены с автоматическим выбором проекта',
        'godecor-time.webp': 'Выбор времени начала и окончания смены',
        'godecor-history.webp': 'История смен с актуальным статусом',
        'godecor-admin.webp': 'Очередь заявок администратора',
        'godecor-reject.webp': 'Отклонение записи с указанием причины',
        'godecor-rejected.webp': 'Исправление и повторная отправка сотрудником',
        'godecor-payment.webp': 'Подтверждение оплаты сотрудником',
      },
      alts: {
        'godecor-launch.webp': 'Экран запуска GoDecor с выбором роли',
        'godecor-login.webp': 'Экран входа сотрудника',
        'godecor-admin-setup.webp': 'Первичная настройка пароля администратора',
        'godecor-employee.webp': 'Главный экран сотрудника со счётчиками смен',
        'godecor-form.webp': 'Форма добавления смены с тарифом, датой и часами',
        'godecor-time.webp': 'Диалог выбора времени',
        'godecor-history.webp': 'История смен с ожидающей подтверждения записью',
        'godecor-admin.webp': 'Очередь администратора с действиями подтверждения и отклонения',
        'godecor-reject.webp': 'Диалог отклонения с полем для комментария',
        'godecor-rejected.webp': 'Сотрудник видит причину отклонения и кнопку повторной отправки',
        'godecor-payment.webp': 'Экран подтверждения оплаты',
      },
    },
    mixcafe: {
      meta: 'Коммерческий · декабрь 2025 – январь 2026',
      summary: 'Клиентское приложение для бизнеса в сфере общественного питания. Каталог отображается через WKWebView, поэтому владелец может менять меню, цены и акции без выпуска новой версии приложения.',
      highlights: [
        'Оболочка приложения на SwiftUI + MVVM вокруг веб-контента',
        'Deep linking и обработка внешних ссылок',
        'Определение отсутствия интернета и понятная обратная связь для пользователя',
        'Кастомные экран запуска и загрузка, релиз через TestFlight',
      ],
      captions: {
        'mixcafe-menu.webp': 'Главный экран, акции и меню',
        'mixcafe-drawer.webp': 'Навигация по категориям',
        'mixcafe-catalog.webp': 'Каталог с ценами и корзиной',
      },
      alts: {
        'mixcafe-menu.webp': 'Главный экран MixCafe с акциями и категориями меню',
        'mixcafe-drawer.webp': 'Выдвижное меню MixCafe с категориями',
        'mixcafe-catalog.webp': 'Каталог MixCafe с ценами и кнопками добавления в корзину',
      },
    },
    movies: {
      meta: 'Личный проект · июнь – июль 2025',
      summary: 'Приложение для поиска и просмотра информации о фильмах, построенное на интеграции стороннего API, управлении состоянием и современной iOS-архитектуре.',
      highlights: [
        'REST API TMDb для актуального каталога фильмов и поиска',
        'Поиск, фильтрация и избранное для быстрого выбора фильмов',
        'Архитектура MVVM и адаптивные интерфейсы на SwiftUI',
        'Локальное сохранение настроек и избранных фильмов',
      ],
      captions: {
        'movie-auth.webp': 'Вход как гость или через аккаунт',
        'movie-home.webp': 'Популярные фильмы и фильмы с высоким рейтингом',
        'movie-nowplaying.webp': 'Фильтр «Сейчас в кино»',
        'movie-search.webp': 'Результаты поиска в реальном времени',
        'movie-detail.webp': 'Карточка фильма с описанием и рекомендациями',
        'movie-favorites.webp': 'Сохранённые фильмы в избранном',
      },
      alts: {
        'movie-auth.webp': 'Приветственный экран Movie App с вариантами входа гостем или через аккаунт',
        'movie-home.webp': 'Главный экран Movie App с подборками популярных фильмов и фильмов с высоким рейтингом',
        'movie-nowplaying.webp': 'Вкладка «Сейчас в кино» со списком фильмов',
        'movie-search.webp': 'Результаты поиска фильма по запросу Love',
        'movie-detail.webp': 'Экран фильма с описанием и рекомендациями',
        'movie-favorites.webp': 'Экран избранных фильмов',
      },
    },
  },
}
