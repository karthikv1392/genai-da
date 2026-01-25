import { Mail, Globe } from 'lucide-react';

interface Speaker {
  name: string;
  title: string;
  affiliation: string;
  image: string;
  bio: string;
  expertise: string;
  website: string;
  email: string;
}

const SpeakersSection = () => {
  const speakers: Speaker[] = [
    {
      name: 'Karthik Vaidhyanathan',
      title: 'Assistant Professor',
      affiliation: 'SERC, IIIT-Hyderabad, India',
      image: 'https://karthikvaidhyanathan.com/assets/img/karthik_circle_profile.png',
      bio: 'Karthik completed his PhD from Gran Sasso Science Institute, Italy, and was a postdoctoral researcher at the University of L\'Aquila.',
      expertise: 'His research focuses on the intersection of software architecture and AI, with emphasis on sustainable and self-adaptive software systems.',
      website: 'https://karthikvaidhyanathan.com/',
      email: 'karthik.vaidhyanathan@iiit.ac.in',
    },
    {
      name: 'Henry Muccini',
      title: 'Professor in Computer Science',
      affiliation: 'University of L\'Aquila, Italy',
      image: 'https://www.henrymuccini.com/wp-content/uploads/2015/08/Henry-Muccini-Uffizi-cut-330x330.png',
      bio: 'Henry is a leading researcher in Software Architecture, Model-based Engineering, and Quality Assurance.',
      expertise: 'His current research focuses on Agentic AI architectures. He served as General co-chair of ICSA 2023 and ECSA 2020.',
      website: 'https://www.henrymuccini.com/',
      email: 'henry.muccini@univaq.it',
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tutorial Speakers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from leading experts in software architecture and AI systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-white"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">{speaker.name}</h3>
                  <p className="text-emerald-600 font-semibold">{speaker.title}</p>
                  <p className="text-gray-600">{speaker.affiliation}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-gray-700">{speaker.bio}</p>
                <p className="text-gray-700">{speaker.expertise}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={speaker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </a>
                <a
                  href={`mailto:${speaker.email}`}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {speaker.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">About the Collaboration</h3>
          <p className="text-lg text-white/90">
            This tutorial brings together expertise from both academic research and practical
            industry experience. The speakers combine their knowledge in software architecture,
            AI systems, and sustainable computing to deliver a comprehensive learning experience
            on Digital Architecture in the age of Generative AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
