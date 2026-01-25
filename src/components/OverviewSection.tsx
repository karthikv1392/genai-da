import { Brain, Cpu, Layout, Wrench, Target, Users } from 'lucide-react';

const OverviewSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'GenAI Fundamentals',
      description: 'Understanding generative AI and large language models in the context of software architecture.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'LLMs for Architecture',
      description: 'Exploring how LLMs can assist in architectural decision-making and documentation.',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Agentic AI Systems',
      description: 'Deep dive into design patterns and architectures for building agentic AI systems.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Hands-on Learning',
      description: 'Practical exercises with real-world tools and frameworks for AI-enhanced architecture.',
    },
  ];

  const learningObjectives = [
    'Understand the fundamentals of generative AI and its impact on software architecture',
    'Learn how LLMs can serve as architectural co-pilots for decision support',
    'Evaluate and critically assess AI-generated architectural decisions',
    'Design multi-agent architectures for complex real-world scenarios',
    'Apply best practices for integrating GenAI into software development workflows',
  ];

  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tutorial Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The rapid advancement of Generative AI, particularly Large Language Models (LLMs),
            has introduced transformative possibilities in how software systems are designed,
            developed, and evolved. This tutorial bridges the gap between GenAI capabilities
            and architectural practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-emerald-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-emerald-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Learning Objectives</h3>
            </div>
            <ul className="space-y-4">
              {learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-emerald-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Target Audience</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Researchers</h4>
                <p className="text-gray-600">
                  Interested in the intersection of Software Architecture and AI, looking to
                  explore how GenAI can enhance architectural practices and enable new research directions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Practitioners</h4>
                <p className="text-gray-600">
                  Software architects and engineers working on AI-enabled systems, seeking to
                  understand how to leverage GenAI tools and design robust agentic architectures.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Students</h4>
                <p className="text-gray-600">
                  Graduate students in computer science or software engineering looking to
                  understand the emerging landscape of AI-driven software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
