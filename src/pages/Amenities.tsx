import { Link } from 'react-router-dom';
import {
  Car,
  Wifi,
  Utensils,
  Shield,
  Clock,
  MapPin,
  CreditCard,
  Luggage,
  Camera,
  Wind,
  Sparkles,
  Phone
} from 'lucide-react';

const Amenities = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const amenities = [
    {
      category: 'Location & Access',
      icon: MapPin,
      items: [
        'Prime location on Gompa Road',
        'Walking distance to Mall Road (290m)',
        'Near Tibetan Monastery (80m)',
        'Close to Van Vihar Park (200m)',
        'Easy access to major attractions'
      ]
    },
    {
      category: 'Parking & Transportation',
      icon: Car,
      items: [
        'Secure on-site parking',
        'Free parking for all guests',
        'Ample space for cars and bikes',
        'Well-lit parking area',
        'Assistance with taxi bookings'
      ]
    },
    {
      category: 'Dining Services',
      icon: Utensils,
      items: [
        '24-hour room service',
        'North Indian cuisine',
        'South Indian specialties',
        'Chinese dishes',
        'Tea and coffee on request'
      ]
    },
    {
      category: 'Connectivity',
      icon: Wifi,
      items: [
        'Free high-speed WiFi',
        'Coverage in all rooms',
        'WiFi in common areas',
        'Reliable connectivity',
        'Technical support available'
      ]
    },
    {
      category: 'Front Desk Services',
      icon: Clock,
      items: [
        '24-hour front desk',
        'Express check-in/check-out',
        'Multilingual staff',
        'Tour and activity bookings',
        'Local recommendations'
      ]
    },
    {
      category: 'Security & Safety',
      icon: Shield,
      items: [
        '24-hour security staff',
        'CCTV surveillance',
        'Secure entry systems',
        'Fire safety equipment',
        'First aid available'
      ]
    },
    {
      category: 'Guest Services',
      icon: Luggage,
      items: [
        'Luggage storage',
        'Laundry services',
        'Wake-up calls',
        'Newspaper on request',
        'Travel desk assistance'
      ]
    },
    {
      category: 'Housekeeping',
      icon: Wind,
      items: [
        'Daily housekeeping',
        'Fresh linens and towels',
        'Room cleaning service',
        'Turn-down service',
        'Extra amenities on request'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/amentieis.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Amenities
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Facilities Designed for Your Comfort and Convenience
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Everything You Need for a Perfect Stay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've thoughtfully curated our amenities to ensure your stay at The Veer Villa is comfortable, convenient, and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <amenity.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{amenity.category}</h3>
                <ul className="space-y-3">
                  {amenity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Utensils className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              24-Hour Room Service
            </h2>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              Satisfy your cravings any time of day or night with our round-the-clock room service. Whether you're in the mood for authentic North Indian curries, crispy South Indian dosas, or flavorful Chinese stir-fries, our kitchen is always ready to serve you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-3">North Indian</h4>
                <p className="text-green-100">Classic curries, tandoori specialties, and traditional breads</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-3">South Indian</h4>
                <p className="text-green-100">Dosas, idlis, vadas, and authentic filter coffee</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-3">Chinese</h4>
                <p className="text-green-100">Noodles, fried rice, manchurian, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600">
                We go the extra mile to make your stay special
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CreditCard className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Payment Options</h4>
                <p className="text-gray-600">We accept cash, cards, and digital payments for your convenience</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Camera className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Photography Spots</h4>
                <p className="text-gray-600">Stunning mountain views from multiple vantage points around the property</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Phone className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Local Assistance</h4>
                <p className="text-gray-600">Help with booking local activities, tours, and transportation</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Sparkles className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Special Occasions</h4>
                <p className="text-gray-600">Room decorations and special arrangements for celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-12 text-white text-center shadow-2xl">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl mb-6 text-white/90 leading-relaxed">
              We maintain 24/7 security with trained staff and comprehensive CCTV surveillance throughout the property. Our commitment to your safety allows you to relax and enjoy your mountain retreat with complete peace of mind.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">24/7 Security</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">CCTV Monitoring</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Fire Safety</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Emergency Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to Experience Our Hospitality?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your stay today and enjoy all the comforts and conveniences that make The Veer Villa special
          </p>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg shadow-xl"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
