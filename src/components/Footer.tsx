import { MapPin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Digital Architecture in the Age of GenAI</h3>
            <p className="text-gray-400">
              A comprehensive tutorial exploring how Generative AI is transforming
              digital architecture practices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Venue</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-emerald-400" />
                <div>
                  <p>Room NU-5A</p>
                  <p>VU Amsterdam, Digital Sustainability Center</p>
                  <p>De Boelelaan 1111</p>
                  <p>1081 HV Amsterdam</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <a
                href="mailto:karthik.vaidhyanathan@iiit.ac.in"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                karthik.vaidhyanathan@iiit.ac.in
              </a>
              <a
                href="mailto:henry.muccini@univaq.it"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                henry.muccini@univaq.it
              </a>
              <a
                href="https://karthikvaidhyanathan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
                karthikvaidhyanathan.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>
            &copy; 2026 Digital Architecture Tutorial. All rights reserved.
          </p>
          <p className="mt-2">
            January 28, 2026 | VU Amsterdam, Netherlands
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
