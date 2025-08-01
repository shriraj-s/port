import React from 'react';
import { ExternalLink, Calendar, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Foundations of Augmented Reality',
      issuer: 'Meta',
      date: '2023',
      logo: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=200',
      verificationUrl: 'https://www.coursera.org/account/accomplishments/certificate/D63666Q7E7M6',
      description: 'Learnt the importance and the classification of Augmented Reality in the virtual world',
    },
    {
      name: 'Entrepreneurship',
      issuer: 'HEC Paris',
      date: '2023',
      logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=200',
      verificationUrl: 'https://www.coursera.org/account/accomplishments/certificate/Z49GAE3JSQEG',
      description: 'Explored real-world startup frameworks, from ideation to investor pitching, through case studies and entrepreneurial strategy models from one of Europe’s top business schools',
    },
    {
      name: 'Setting Up a Business Entity',
      issuer: 'IIM Bangalore',
      date: 'To Be Issued',
      logo: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=200',
      verificationUrl: '#',
      description: 'Learned the legal, financial, and operational frameworks essential for launching and structuring a business in India, from registration to compliance.',
    },
    {
      name: 'Foundations of Marketing',
      issuer: 'IIM Bangalore',
      date: 'To Be Issued',
      logo: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=200',
      verificationUrl: '#',
      description: 'Covered core marketing principles including consumer behavior, segmentation, branding, and value creation — with real-world applications and strategy insights.',
    },
    {
      name: 'Soft Skills for Business',
      issuer: 'IIM Bangalore',
      date: 'To Be Issued',
      logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200',
      verificationUrl: '#',
      description: 'Built essential workplace competencies including communication, emotional intelligence, and collaborative problem-solving — tailored for high-impact business environments.',
    },

    {
      name: 'Action Driven Business Plan',
      issuer: 'Technion - Israel Institute of Technology',
      date: '2023',
      logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200',
      verificationUrl: 'https://www.coursera.org/account/accomplishments/certificate/M53TVLSV4LEH',
      description: 'Focused on building executable business plans by combining market research, product validation, and lean startup methodologies to drive real-world impact.',
    },

  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development in design and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative p-6">
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-blue-700 transition-colors">
                    {cert.name}
                  </h3>
                </div>

                <div className="flex items-center mb-4">
                  <Award size={16} className="text-orange-600 mr-2" />
                  <span className="font-medium text-orange-600">{cert.issuer}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;