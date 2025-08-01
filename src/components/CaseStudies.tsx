import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  liveUrl?: string;
}

const CaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Navjeevan",
      category: "Rural Healthcare",
      description:
        `Navjeevan is a mobile healthcare lab concept designed to promote awareness around nutrition and basic health education.

I co-developed the Navjeevan Ground Report alongside a student from JNTU-H during field research in a remote village in Odisha.

The report is currently being prepared for presentation to the state government as a proposal for potential implementation.`,
    },
    {
      id: 2,
      title: "Utsav",
      category: "Food and Beverages",
      description:
        `Utsav is an upcoming cloud kitchen concept rooted in transparency and culture.

With 100% open operations, customers are encouraged to ask questions, visit the facility, and understand their meals through clear macro-labeled packaging.

Utsav aims to bridge Indian cultural heritage and Gen-Z tastes through food, while sourcing ingredients directly from local markets to uplift the regional economy.`,
    },
    {
      id: 3,
      title: "Samarth",
      category: "Road and Surveillance Technology",
      description:
        `Project Samarth empowers citizens to take charge of road safety through a real-time mobile app that enables easy reporting of traffic violations.

Unlike traditional systems reliant solely on police or CCTV, Samarth bridges the gap by allowing public participation—offering features like women’s safety alerts and reward-based reporting.

Its core goal is to make roads safer, streamline enforcement, and foster collaboration between people and authorities.`,
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my approach to solving real-world challenges.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-all"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{project.category}</p>
              <p className="text-gray-600 line-clamp-4">
                {project.description.split('\n')[0]}
              </p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl p-8 relative overflow-y-auto max-h-[80vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{selectedProject.category}</p>
              <p className="text-gray-700 whitespace-pre-line">{selectedProject.description}</p>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-blue-600 hover:underline"
                >
                  <ExternalLink className="mr-2" size={18} />
                  View Live
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
