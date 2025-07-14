# Sign Streak II

A modern, feature-rich typing test application built with Next.js and React. Test your typing speed and accuracy with customizable settings and multiple difficulty levels.

## Features

### 🎯 Core Functionality
- **Real-time typing test** with live WPM (Words Per Minute) and accuracy tracking
- **Character-by-character accuracy** highlighting with color-coded feedback
- **Multiple test modes**: Regular typing test and Sign Language test (coming soon)
- **Extreme Mode**: A challenging game mode for advanced users

### ⚙️ Customizable Settings
- **Time limits**: 30s, 60s, 180s, 300s, or infinite
- **Word counts**: 10, 25, 50, 100, or 200 words
- **Difficulty levels**: 
  - Gentle Gale (Easy)
  - Balanced Trial (Medium) 
  - Iron Oath (Hard)
  - Wyrm Wrath (Insane - triggers Extreme Mode)
- **Content sources**: Random words, quotes, code, or custom text
- **Language support**: English, Spanish, French, Vietnamese

### 🎨 User Experience
- **Modern dark theme** with sleek UI design
- **Responsive design** that works on desktop and mobile
- **Smooth animations** and transitions
- **Real-time feedback** with visual indicators
- **Auto-focus** on text input for seamless testing

### 📊 Performance Tracking
- **WPM calculation** based on actual typing time
- **Accuracy percentage** calculated character-by-character
- **Visual progress indicators** showing correct/incorrect characters
- **Test completion** with results summary

## Tech Stack

- **Framework**: Next.js 15.3.2 with App Router
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React, React Icons, Heroicons
- **Background Effects**: Starfield React
- **Development**: ESLint, Turbopack

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sign-streak-2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
sign-streak-2/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Home page with test selection
│   │   ├── regular-test/      # Regular typing test
│   │   └── sign-language-test/ # Sign language test (in development)
│   ├── components/            # React components
│   │   ├── TypingTest.jsx     # Main typing test component
│   │   ├── TestConfig.jsx     # Test configuration panel
│   │   ├── ExtremeMode.jsx    # Extreme mode game component
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Footer.jsx         # Footer component
│   │   └── About.jsx          # About page component
│   ├── content/               # Content and data
│   │   ├── randomWord.js      # Word dictionaries by difficulty
│   │   └── aboutContent.js    # About page content
│   └── utils/                 # Utility functions
│       └── generatePrompt.js  # Prompt generation logic
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Development

- **Sign Language Test**: Interactive sign language typing challenges
- **Leaderboards**: Global and local score tracking
- **User Accounts**: Personal progress and statistics
- **Custom Content**: User-defined typing prompts
- **Advanced Analytics**: Detailed performance insights

## Contributing

This project is actively developed. Feel free to submit issues, feature requests, or pull requests.

## License

This project is private and proprietary.

---

*"Dare thyself to this trial of fingers and mind. A crucible of will and skill, where hands speak not words, but in sacred signs."*
