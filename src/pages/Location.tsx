import { Link } from 'react-router-dom';
import {
  MapPin,
  Navigation,
  Clock,
  Mountain,
  Church,
  TreePine,
  Plane,
  Bus,
  Train,
  Car
} from 'lucide-react';

const Location = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const nearbyAttractions = [
    {
      name: 'Mall Road',
      distance: '290m',
      time: '2-5 min walk',
      icon: MapPin,
      description: 'The vibrant heart of Manali with shopping, dining, and entertainment'
    },
    {
      name: 'Tibetan Monastery',
      distance: '80m',
      time: '1 min walk',
      icon: Church,
      description: 'Peaceful Buddhist monastery with beautiful architecture'
    },
    {
      name: 'Van Vihar Park',
      distance: '200m',
      time: '3 min walk',
      icon: TreePine,
      description: 'Serene nature park with deodar trees and walking paths'
    },
    {
      name: 'Hidimba Devi Temple',
      distance: '2.3 km',
      time: '10 min drive',
      icon: Church,
      description: 'Ancient temple nestled in cedar forests, a must-visit attraction'
    },
    {
      name: 'Solang Valley',
      distance: '14 km',
      time: '30 min drive',
      icon: Mountain,
      description: 'Adventure hub with skiing, paragliding, and stunning valley views'
    },
    {
      name: 'Old Manali',
      distance: '3 km',
      time: '10 min drive',
      icon: MapPin,
      description: 'Hip neighborhood with cafes, guesthouses, and backpacker culture'
    }
  ];

  const transportOptions = [
    {
      icon: Plane,
      title: 'By Air',
      details: 'Bhuntar Airport (Kullu-Manali Airport)',
      distance: '50 km',
      time: 'Approx. 2 hours by taxi',
      description: 'Regular flights from Delhi and Chandigarh. Pre-book taxis or we can arrange pickup.'
    },
    {
      icon: Bus,
      title: 'By Bus',
      details: 'Manali Bus Stand',
      distance: '2 km',
      time: '5-10 minutes by taxi',
      description: 'Well-connected by state and private buses from Delhi, Chandigarh, and other cities.'
    },
    {
      icon: Train,
      title: 'By Train',
      details: 'Joginder Nagar Railway Station',
      distance: '165 km',
      time: 'Approx. 4-5 hours by taxi',
      description: 'Nearest major station is Chandigarh (310 km). Then take a taxi or bus to Manali.'
    },
    {
      icon: Car,
      title: 'By Road',
      details: 'Well-connected highway routes',
      distance: 'From Delhi: 540 km',
      time: '12-14 hours drive',
      description: 'Excellent road connectivity via NH3. Scenic drive through mountains.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/our-location-banner.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Location
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Prime Position in the Heart of Manali
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-green-700" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  The Perfect Location
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The Veer Villa is strategically located on peaceful Gompa Road, just steps away from the bustling Mall Road. This unique position offers you the best of both worlds - easy access to Manali's attractions while providing a tranquil retreat away from the crowds.
                </p>

                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Complete Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>The Veer Villa</strong><br />
                    Gompa Road, Opposite Hotel Jamuna Complex<br />
                    Near Mall Road, Siyal<br />
                    Manali, Himachal Pradesh, 175131<br />
                    India
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">2-5 minute walk to Mall Road</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mountain className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Stunning mountain views from rooms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TreePine className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Surrounded by natural beauty</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-xl h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.1234567890!2d77.19!3d32.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE0JzI0LjAiTiA3N8KwMTEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Veer Villa Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nearby Attractions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need is within easy reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <attraction.icon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-green-600 font-semibold">{attraction.distance}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{attraction.time}</span>
                </div>
                <p className="text-gray-600 text-sm">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600">
              Multiple convenient options to reach The Veer Villa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {transportOptions.map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <option.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{option.title}</h3>
                <p className="text-lg font-semibold text-green-700 mb-1">{option.details}</p>
                <p className="text-gray-600 mb-1"><strong>Distance:</strong> {option.distance}</p>
                <p className="text-gray-600 mb-4"><strong>Time:</strong> {option.time}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Navigation className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Directions or Transportation Help?
            </h2>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              Our team is happy to provide detailed directions and can assist you in arranging transportation from the airport, bus stand, or railway station. Just give us a call or send us a message on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="bg-white text-green-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919816323999"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg border-2 border-white/30"
              >
                Call: +91-98163 23999
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Local Area Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Gompa Road Neighborhood</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our location on Gompa Road offers a peaceful residential atmosphere while keeping you connected to all the action. The area is known for its proximity to the Tibetan Monastery, creating a serene environment perfect for relaxation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Walking Distance Convenience</h3>
                <p className="text-gray-600 leading-relaxed">
                  With Mall Road just a short stroll away, you can easily explore Manali's shops, restaurants, and cafes on foot. No need to worry about parking or traffic - everything is within comfortable walking distance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Natural Surroundings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wake up to views of snow-capped Himalayan peaks and breathe in fresh mountain air. The location offers nature at your doorstep while maintaining urban convenience.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Safe & Accessible</h3>
                <p className="text-gray-600 leading-relaxed">
                  The area is safe, well-lit, and easily accessible by all types of vehicles. Well-maintained roads ensure smooth travel regardless of the season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
