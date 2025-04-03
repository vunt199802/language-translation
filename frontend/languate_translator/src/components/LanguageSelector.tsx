import React from 'react';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-blue-600 text-lg font-semibold mb-3 flex items-center">
        Select language 👆
      </h3>
      <div className="space-y-3">
        {languages.map((language) => (
          <label
            key={language.code}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="radio"
              name="language"
              value={language.code}
              checked={selectedLanguage === language.code}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="form-radio text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-700 flex items-center">
              {language.name} <span className="ml-2">{language.flag}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector; 