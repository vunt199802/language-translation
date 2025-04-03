# PollyGlot Translation Frontend

A modern React-based frontend for the PollyGlot translation service, built with Vite and TypeScript.

## Features

- Clean and intuitive user interface
- Real-time text translation
- Support for multiple languages:
  - French 🇫🇷
  - Spanish 🇪🇸
  - Japanese 🇯🇵
- Responsive design
- Loading states and animations
- Error handling

## Prerequisites

- Node.js 14.0 or higher
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd language-translation/frontend/languate_translator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Project Structure

```
src/
├── components/
│   ├── TranslationCard.tsx
│   └── LanguageSelector.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Locally preview the production build.

## Usage

1. Enter the text you want to translate in the input field
2. Select your target language from the available options
3. Click the "Translate" button
4. View your translation result
5. Use "Start Over" to begin a new translation

## Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8000
```

## Features in Detail

### Translation Card Component
- Handles both input and display of text
- Supports multiline text input
- Responsive design for all screen sizes

### Language Selector Component
- Radio button selection for languages
- Includes country flags
- Easy to extend for additional languages

### Main Application
- Three-state view system:
  1. Input view
  2. Loading view
  3. Result view
- Smooth transitions between states
- Error handling and user feedback

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
