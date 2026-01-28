import { FileText, ExternalLink, BookOpen } from 'lucide-react';

interface Resource {
  name: string;
  type: string;
  icon: React.ReactNode;
  available: boolean;
  link?: string;
}

const ResourcesSection = () => {
  const resources: Resource[] = [
    {
      name: 'Tutorial Slides',
      type: 'Google Slides',
      icon: <FileText className="w-6 h-6" />,
      available: true,
      link: 'https://docs.google.com/presentation/d/1bFmFP_bKSpGOmbazoriluTh8sQLzMUA7gjkvd6xRSx8/edit?usp=sharing',
    },
    {
      name: 'Hands-on Notebook',
      type: 'Colab Notebook',
      icon: <BookOpen className="w-6 h-6" />,
      available: true,
      link: 'https://colab.research.google.com/drive/1S6iDsTjz15_R0WKttG5pmVLZT7psgg2j?usp=sharing',
    },
    {
      name: 'Supplementary Reading',
      type: 'Research Paper',
      icon: <FileText className="w-6 h-6" />,
      available: true,
      link: 'https://www.sciencedirect.com/science/article/pii/S0164121225002766',
    },
  ];

  const relatedResources = [
    {
      title: 'ECSA 2025 Tutorial',
      description: 'Previous version of this tutorial presented at ECSA 2025 in Cyprus',
      link: 'https://agentic-sa.vercel.app',
    },
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tutorial materials and supplementary resources
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-12 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tutorial Materials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-emerald-600">{resource.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{resource.name}</h4>
                      <p className="text-sm text-gray-500">{resource.type}</p>
                    </div>
                  </div>
                  {resource.available && resource.link ? (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm px-4 py-2 bg-gray-100 rounded-lg">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h3>
            <div className="grid grid-cols-1 gap-4">
              {relatedResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-emerald-700">
                        {resource.title}
                      </h4>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/90 mb-6">
              Resources will be made available before and after the tutorial.
              Contact the organizers for more information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:karthik.vaidhyanathan@iiit.ac.in"
                className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Contact Organizers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
