import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Chief Marketing Officer',
      company: 'SHORe Fest, GITAM University',
      location: 'India',
      period: 'Nov 2024 – Jan 2025',
      description:
        'Led the end-to-end marketing strategy for a national-level cultural fest, bringing together design, digital, and partnerships to create a high-impact brand experience.',
      achievements: [
        'Conceptualized and launched integrated campaigns that amplified engagement across multiple campuses.',
        'Created dynamic content and marketing collateral aligned with student interests and sponsor expectations.',
        'Fostered strong collaborations across teams to ensure consistent brand messaging and seamless execution.',
      ],
    },
    {
      title: 'Chair – Entity Control Board',
      company: 'AIESEC in Slovakia',
      location: 'Remote (India-Slovakia)',
      period: 'Jan 2025 – July 2025',
      description:
        'Oversaw operational governance and compliance across national and international stakeholders while enhancing knowledge transfer across cities.',
      achievements: [
        'Led strategic process audits and built alignment between local and national policies.',
        'Facilitated contract management and cross-border legal coordination.',
        'Spearheaded operational campaigns focused on efficiency and accountability.',
      ],
    },
    {
      title: 'Manager – Business Operations & Support',
      company: 'AIESEC in India',
      location: 'Visakhapatnam, India',
      period: 'Aug 2023 – Jan 2025',
      description:
        'Manager - Incoming Global Talent (iGTa) and Team Leader - Business Development',
      achievements: [
        'Worked on a functional exchange division while onboarding corporate partners and running social impact events.',
        'Witnessed national-level campaigns to drive participation and brand visibility.',
        'Member of Audits and Compliance Team of Entity Control Board India which earned recognition at the Asia-Pacific level.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through leadership, campaigns, and building experiences that matter
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 space-y-2 sm:space-y-0 sm:space-x-6">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-2 text-orange-600" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-600" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <Calendar size={16} className="mr-2 text-blue-600" />
                    <span className="font-medium text-blue-800">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
