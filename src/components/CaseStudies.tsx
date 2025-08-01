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
        "Navjeevan is a mobile healthcare lab concept designed to promote awareness around nutrition and basic health education. I co-developed the Navjeevan Ground Report alongside a student from JNTU-H during field research in a remote village in Odisha. The report is currently being prepared for presentation to the state government as a proposal for potential implementation.",
    },
    {
      id: 2,
      title: "Utsav",
      category: "Food and Beverages",
      description:
        "Utsav is an upcoming cloud kitchen concept rooted in transparency and culture. With 100% open operations, customers are encouraged to ask questions, visit the facility, and understand their meals through clear macro-labeled packaging. Utsav aims to bridge Indian cultural heritage and Gen-Z tastes through food, while sourcing ingredients directly from local markets to uplift the regional economy.",
    },
    {
      id: 3,
      title: "Samarth",
      category: "Road and Surveillance Technology",
      description:
        "Project Samarth empowers citizens to take charge of road safety through a real-time mobile app that enables easy reporting of traffic violations. Unlike traditional systems reliant solely on police or CCTV, Samarth bridges the gap by allowing public participation—offering features like women’s safety alerts and reward-based reporting. Its core goal is to make roads safer, streamline enforcement, and foster collaboration between people and authorities.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-8">
                <div className="text-sm text-orange-600 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-orange-600 font-medium">
                    {selectedProject.category}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    View Live
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
