export type Screen = {
  /** File name inside public/screens */
  file: string
  alt: string
  caption: string
}

export type Project = {
  id: string
  name: string
  meta: string
  summary: string
  highlights: string[]
  tags: string[]
  screens?: Screen[]
}

export const profile = {
  name: 'Kristina Lavrikova',
  role: 'iOS Developer',
  stack: 'Swift | SwiftUI | ARKit | LiDAR',
  location: 'London',
  intro:
    'I build modern iOS applications using Swift, SwiftUI, and modern Apple technologies. Experienced in commercial mobile development, App Store releases, and AR/3D solutions.',
  email: 'christine16lav@gmail.com',
  github: 'https://github.com/austriaInEurope/PortfolioNew',
  githubHandle: 'austriaInEurope',
  linkedin: 'https://www.linkedin.com/in/kristina-lavrikova-962768363',
}

export const featuredProject: Project = {
  id: 'scanner',
  name: '3D Scanner',
  meta: 'Featured · Freelance MVP, 2026',
  summary:
    'A LiDAR-based scanning app that reconstructs physical objects in real time, validates the resulting mesh, and exports it for downstream 3D work. Built as a commercial MVP for object digitisation and shape analysis.',
  highlights: [
    'Real-time capture and reconstruction with ARKit and the LiDAR scanner',
    'Mesh generation, validation and AR visualisation pipelines',
    'Heatmap comparison between two scans to surface shape deviation',
    'USDZ and OBJ export for use in other 3D tooling',
    'Rendering and mesh-quality optimisation for sustained frame rates',
  ],
  tags: ['ARKit', 'LiDAR', 'SceneKit', 'Mesh processing', 'USDZ / OBJ'],
}

export const featuredNote =
  'Screens are under NDA — the visualisation shows how the capture flow works. Happy to walk through the architecture on a call.'

export const projects: Project[] = [
  {
    id: 'godecor',
    name: 'GoDecor',
    meta: 'Commercial · Feb – Mar 2026',
    summary:
      'A workforce management app delivered end to end for a client: employees log shifts, the app calculates pay at day and night rates, and an administrator approves or returns each entry with a comment.',
    highlights: [
      'Two roles, two flows — employee and administrator',
      'Payroll from day/night hours, tied to approval state',
      'Shift history with status and admin comments',
      'Google Sheets sync with a local offline fallback',
    ],
    tags: ['SwiftUI', 'MVVM', 'Role-based access', 'Offline storage', 'Google Sheets'],
    screens: [
      { file: 'godecor-launch.webp', alt: 'GoDecor launch screen with a role picker', caption: 'Role picker on launch' },
      { file: 'godecor-login.webp', alt: 'Employee sign-in screen', caption: 'Employee sign-in and registration' },
      { file: 'godecor-admin-setup.webp', alt: 'First-run administrator password setup', caption: 'One-time admin password setup' },
      { file: 'godecor-employee.webp', alt: 'Employee dashboard with shift counters', caption: 'Employee dashboard and counters' },
      { file: 'godecor-form.webp', alt: 'Shift entry form with rate, date and hours', caption: 'Shift entry with project autofill' },
      { file: 'godecor-time.webp', alt: 'Time picker dialog', caption: 'Time picker for start and end' },
      { file: 'godecor-history.webp', alt: 'Shift history showing a pending entry', caption: 'History with live status' },
      { file: 'godecor-admin.webp', alt: 'Administrator review queue with approve and reject actions', caption: 'Administrator review queue' },
      { file: 'godecor-reject.webp', alt: 'Rejection dialog with a comment field', caption: 'Rejection with a written reason' },
      { file: 'godecor-rejected.webp', alt: 'Employee sees the rejection comment and a resubmit button', caption: 'Employee fixes and resubmits' },
      { file: 'godecor-payment.webp', alt: 'Payment confirmation screen', caption: 'Payment confirmed by the employee' },
    ],
  },
  {
    id: 'mixcafe',
    name: 'MixCafe',
    meta: 'Commercial · Dec 2025 – Jan 2026',
    summary:
      'A customer-facing app for a food-service business. The catalogue is rendered through WKWebView so the owner can change the menu, prices and promotions without shipping a new build.',
    highlights: [
      'SwiftUI + MVVM app shell around web content',
      'Deep linking and external URL handling',
      'Offline detection with user feedback',
      'Custom splash and loading flow, released via TestFlight',
    ],
    tags: ['SwiftUI', 'MVVM', 'WKWebView', 'Deep Linking', 'App Store Connect', 'TestFlight'],
    screens: [
      { file: 'mixcafe-menu.webp', alt: 'MixCafe home screen with promotions and menu categories', caption: 'Home, promotions and menu' },
      { file: 'mixcafe-drawer.webp', alt: 'MixCafe navigation drawer with categories', caption: 'Category navigation' },
      { file: 'mixcafe-catalog.webp', alt: 'MixCafe product catalogue with prices and add-to-cart buttons', caption: 'Catalogue with prices and cart' },
    ],
  },
]

export const movieProject: Project = {
  id: 'movies',
  name: 'Movie App',
  meta: 'Personal · Jun – Jul 2025',
  summary:
    'A film discovery app built around third-party API integration, state management and modern iOS architecture.',
  highlights: [
    'TMDb REST API for live catalogue data and search',
    'Search, filtering and favourites for faster discovery',
    'MVVM structure with responsive SwiftUI layouts',
    'Local persistence for preferences and saved films',
  ],
  tags: ['REST API', 'TMDb', 'MVVM', 'Local storage'],
  screens: [
    { file: 'movie-auth.webp', alt: 'Movie App welcome screen with guest and account sign-in options', caption: 'Guest or account sign-in' },
    { file: 'movie-home.webp', alt: 'Movie App home screen with Popular and Top Rated rows', caption: 'Popular and top-rated rows' },
    { file: 'movie-nowplaying.webp', alt: 'Movie App Now Playing tab with a filtered list', caption: 'Now Playing filter' },
    { file: 'movie-search.webp', alt: 'Movie App search results for the term Love', caption: 'Live search results' },
    { file: 'movie-detail.webp', alt: 'Movie App detail screen with synopsis and recommendations', caption: 'Detail view with recommendations' },
    { file: 'movie-favorites.webp', alt: 'Movie App favourites screen with saved titles', caption: 'Saved favourites' },
  ],
}

export const skillGroups: { title: string; items: string[] }[] = [
  { title: 'iOS', items: ['Swift', 'SwiftUI', 'UIKit', 'Combine'] },
  {
    title: 'Architecture',
    items: ['MVVM', 'MVC', 'Clean Architecture', 'SOLID · Dependency Injection'],
  },
  { title: 'Data', items: ['CoreData', 'SwiftData', 'UserDefaults', 'Offline-first storage'] },
  {
    title: 'Networking',
    items: ['REST API', 'URLSession', 'Async/Await', 'Network layer design'],
  },
  {
    title: 'AR & 3D',
    items: ['ARKit', 'LiDAR', 'RealityKit · SceneKit', 'Mesh generation · USDZ / OBJ'],
  },
  {
    title: 'Delivery',
    items: ['Xcode · Git', 'App Store Connect', 'TestFlight', 'Performance profiling · GCD · ARC'],
  },
]
