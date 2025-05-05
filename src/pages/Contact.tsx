import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="relative">
      <ContactHero />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;