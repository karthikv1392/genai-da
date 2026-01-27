import { Clock, Coffee, Presentation, Laptop, Wine } from 'lucide-react';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'session' | 'break' | 'hands-on' | 'networking';
}

const ScheduleSection = () => {
  const schedule: ScheduleItem[] = [
    {
      time: '13:30 - 14:00',
      title: 'Machine Learning (ML) and SA',
      description: 'Synchronize on the terminology to be used during the tutorial. Basics on ML for SA and SA for ML.',
      icon: <Presentation className="w-5 h-5" />,
      type: 'session',
    },
    {
      time: '14:00 - 15:00',
      title: 'LLMs as an Architect Assistant',
      description: 'Evaluate the fitness of architectural decisions produced by LLMs. Discuss when and how to integrate LLMs into software architecting practices. Critically assess the role of LLMs in software architecture practices. Takeaways: Understand how LLMs can act as co-pilots in architecture-related tasks.',
      icon: <Presentation className="w-5 h-5" />,
      type: 'session',
    },
    {
      time: '15:00 - 15:30',
      title: 'Break',
      description: 'Networking and refreshments',
      icon: <Coffee className="w-5 h-5" />,
      type: 'break',
    },
    {
      time: '15:30 - 16:30',
      title: 'LLMs for Architecting (cont.) + Hands-on',
      description: 'Continued exploration of LLMs for software architecting with practical hands-on exercises.',
      icon: <Laptop className="w-5 h-5" />,
      type: 'hands-on',
    },
    {
      time: '16:30 - 17:30',
      title: 'Agentic AI and Sustainability',
      description: 'Architecting LLM agents and multi-agent systems. Energy/Sustainability implications and discussion. Takeaways: AI-enabled architecture as a product. Key considerations for architecting sustainable LLM-enabled systems.',
      icon: <Presentation className="w-5 h-5" />,
      type: 'session',
    },
    {
      time: '17:30 - 18:30',
      title: 'Networking Drinks',
      description: 'Informal networking session with drinks. Connect with fellow participants and speakers.',
      icon: <Wine className="w-5 h-5" />,
      type: 'networking',
    },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'session':
        return 'border-emerald-500 bg-emerald-50';
      case 'break':
        return 'border-orange-400 bg-orange-50';
      case 'hands-on':
        return 'border-purple-500 bg-purple-50';
      case 'networking':
        return 'border-pink-500 bg-pink-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'session':
        return 'text-emerald-600';
      case 'break':
        return 'text-orange-500';
      case 'hands-on':
        return 'text-purple-600';
      case 'networking':
        return 'text-pink-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tutorial Schedule</h2>
          <p className="text-xl text-gray-600">
            January 28, 2026 | 13:30 - 18:30
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 transform md:-translate-x-1/2"></div>

            {schedule.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-6 border-4 border-white shadow"></div>

                {/* Time */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'} pl-8 md:pl-0`}>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold mb-2 md:justify-start">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`p-6 rounded-xl border-l-4 ${getTypeStyles(item.type)}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={getIconColor(item.type)}>{item.icon}</span>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Prerequisites</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Basic understanding of software architecture concepts</li>
              <li>• Familiarity with software engineering practices</li>
              <li>• General knowledge of AI/ML is helpful but not required</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What to Bring</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Laptop for hands-on exercises</li>
              <li>• Notebook for taking notes</li>
              <li>• Questions about AI in software architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
