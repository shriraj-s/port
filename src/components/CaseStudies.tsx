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
        "Navjeevan is a mobile healthcare lab concept designed to promote awareness around nutrition and basic health education.\n\nI co-developed the Navjeevan Ground Report alongside a student from JNTU-H during field research in a remote village in Odisha.\n\nThe report is currently being prepared for presentation to the state government as a proposal for potential implementation.",
    },
    {
      id: 2,
      title: "Utsav",
      category: "Food and Beverages",
      description:
        "Utsav is an upcoming cloud kitchen concept rooted in transparency and culture.\n\nWith 100% open operations, customers are encouraged to ask questions, visit the facility, and understand their meals through clear macro-labeled packaging.\n\nUtsav aims to bridge Indian cultural heritage and Gen-Z tastes through food, while sourcing ingredients directly from local markets to uplift the regional economy.",
    },
    {
      id: 3,
      title: "Samarth",
      category: "Road and Surveillance Technology",
      description:
        "Project Samarth empowers citizens to take charge of road safety through a real-time mobile app that enables easy reporting of traffic violations.\n\nUnlike traditional systems reliant solely on police or CCTV, Samarth bridges the gap by allowing public participation—offering features like women’s safety alerts and reward-based reporting.\n\nIts core goal is to make roads safer, streamline enforcement, and foster collaboration between people and authorities.",
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm text-blue-600 mb-3">{project.category}</p>
              <p className="text-gray-700 line-clamp-3">{project.description}</p>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
              <p className="text-sm text-blue-600 mb-4">{selectedProject.category}</p>
              <p className="text-gray-800 whitespace-pre-line">{selectedProject.description}</p>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-blue-600 hover:underline"
                >
                  <ExternalLink className="mr-1" size={18} />
                  View Project
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
