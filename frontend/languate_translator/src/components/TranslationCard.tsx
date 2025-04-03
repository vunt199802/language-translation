import React, { useState } from 'react';

interface TranslationCardProps {
  title: string;
  isInput?: boolean;
  text?: string;
  onTextChange?: (text: string) => void;
  children?: React.ReactNode;
}

const TranslationCard: React.FC<TranslationCardProps> = ({
  title,
  isInput = false,
  text = '',
  onTextChange,
  children
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full max-w-md">
      <h2 className="text-blue-600 text-lg font-semibold mb-4 flex items-center">
        {title} <span className="ml-2">👆</span>
      </h2>
      {isInput ? (
        <textarea
          value={text}
          onChange={(e) => onTextChange?.(e.target.value)}
          className="w-full h-32 p-3 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text to translate..."
        />
      ) : (
        <div className="w-full h-32 p-3 bg-gray-50 rounded-md">
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

export default TranslationCard; 