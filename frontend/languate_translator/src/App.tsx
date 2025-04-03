import { useState } from 'react';
import TranslationCard from './components/TranslationCard';
import LanguageSelector, { Language } from './components/LanguageSelector';
import './App.css';

const languages: Language[] = [
  { code: 'French', name: 'French', flag: '🇫🇷' },
  { code: 'Spanish', name: 'Spanish', flag: '🇪🇸' },
  { code: 'Japanese', name: 'Japanese', flag: '🇯🇵' },
];

function App() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('French');
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: inputText,
          target_language: selectedLanguage,
        }),
      });

      const data = await response.json();
      setTranslatedText(data.translated_query);
      setShowResult(true);
    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartOver = () => {
    setInputText('');
    setTranslatedText('');
    setShowResult(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Translating...</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <img src="/logo.svg" alt="PollyGlot" className="h-16" />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-blue-600 text-lg font-semibold mb-4 flex items-center">
                Original text 👆
              </h2>
              <div className="bg-gray-50 p-4 rounded-md">
                {inputText}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-blue-600 text-lg font-semibold mb-4 flex items-center">
                Your translation 👆
              </h2>
              <div className="bg-gray-50 p-4 rounded-md">
                {translatedText}
              </div>
            </div>

            <button
              onClick={handleStartOver}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <img src="/logo.svg" alt="PollyGlot" className="h-16" />
        </div>
        <TranslationCard
          title="Text to translate"
          isInput={true}
          text={inputText}
          onTextChange={setInputText}
        >
          <LanguageSelector
            languages={languages}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
          <button
            onClick={handleTranslate}
            disabled={!inputText.trim()}
            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Translate
          </button>
        </TranslationCard>
      </div>
    </div>
  );
}

export default App;
