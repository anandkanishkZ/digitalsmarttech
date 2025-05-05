import React from 'react';
import TeamHero from '../components/team/TeamHero';
import TeamMembers from '../components/team/TeamMembers';
import ContactCTA from '../components/home/ContactCTA';

const Team = () => {
  return (
    <div className="relative">
      <TeamHero />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <TeamMembers />
      </div>
      <ContactCTA />
    </div>
  );
};

export default Team;