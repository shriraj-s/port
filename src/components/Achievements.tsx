import React from 'react';
import { Award, Trophy, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      year: '2021',
      title: 'Gold Medalist - Ad Making',
      organization: 'Whoosh Hyderabad Inter-School Competition',
      description: 'Turned ideas into impact and bagged Gold for Tropicana Essentials in an ad-making faceoff with 140+ creative minds across 90+ schools.',
      icon: Trophy,
      color: 'text-yellow-600',
    },
    {
      year: '2014',
      title: 'All India Rank 3 in Mental Arithmetic',
      organization: 'Alama Abacus - National Series',
      description: 'Clinched a National Bronze in the Under-13 Mental Arithmetic Championship — where speed met precision and numbers told stories.',
      icon: Star,
      color: 'text-blue-600',
    },
    {
      
      title: 'Outstanding Cultural Performer Award',
      organization: 'Army Public School and CAL Public School',
      description: 'Consistently recognized across schools for clinching 17+ First Place awards, 8 top-tier certificates, and making my mark on both city and national podiums.',
      icon: Award,
      color: 'text-orange-600',
    },
   
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition for dedication to excellence in creative field
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-orange-600"></div>

          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-white shadow-md mr-4`}>
                        <IconComponent size={24} className={achievement.color} />
                      </div>
                      <span className="text-sm font-medium text-gray-500">{achievement.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-orange-600 font-medium mb-3">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;