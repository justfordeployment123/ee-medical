my-react-app/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── components/         # Reusable UI building blocks
│   │   ├── about/          # Components specific to the About page
│   │   │   ├── AboutContent.tsx
│   │   │   ├── AboutDetails.tsx
│   │   │   └── AboutGrid.tsx
│   │   ├── home/           # Components specific to the Home page
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Stats.tsx
│   │   ├── shared/         # Components used across multiple pages
│   │   │   └── PageHeader.tsx
│   │   ├── Footer.tsx      # Global footer
│   │   └── Header.tsx      # Global navigation and mobile menu
│   │
│   ├── pages/              # High-level route components
│   │   ├── About.tsx       # Assembles the About page components
│   │   └── Home.tsx        # Assembles the Home page components
│   │
│   ├── App.tsx             # Main application file (React Router setup)
│   ├── index.css           # Global Tailwind CSS imports
│   ├── main.tsx            # React DOM rendering entry point
│   └── types.ts            # TypeScript interfaces (ServiceType, StatType)
│
├── package.json
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration (if using Vite)