import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false, 
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl leading-relaxed text-lg">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-blue-500 mt-4 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;