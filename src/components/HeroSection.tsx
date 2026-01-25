import { Calendar, MapPin, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 pt-16">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Digital Architecture
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            in the Age of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
              GenAI
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
            <p className="font-semibold text-lg">January 28, 2026</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform">
            <Clock className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
            <p className="font-semibold text-lg">13:30 - 18:30</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
            <p className="font-semibold text-lg">VU Amsterdam</p>
            <p className="text-sm text-white/80">Room NU-5A</p>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in">
          A comprehensive tutorial exploring how Generative AI is transforming digital architecture practices,
          hosted at the Digital Sustainability Center, VU Amsterdam.
        </p>

        <div className="animate-fade-in">
          <a
            href="#overview"
            className="inline-block bg-white text-emerald-700 font-semibold px-8 py-4 rounded-full hover:bg-yellow-300 hover:text-emerald-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Explore the Tutorial
          </a>
        </div>

        <div className="mt-16 text-white/70 text-sm animate-fade-in">
          <p>Digital Sustainability Center</p>
          <p>De Boelelaan 1111, 1081 HV Amsterdam</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
