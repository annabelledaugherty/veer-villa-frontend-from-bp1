import { Link } from 'react-router-dom';
import {
  Heart,
  Mountain,
  Users,
  Star,
  Award,
  MapPin,
  Shield,
  Sparkles
} from 'lucide-react';

const About = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const values = [
    {
      icon: Heart,
      title: 'Warm Hospitality',
      description: 'We treat every guest as family, ensuring personalized service and genuine care'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your security and comfort are our top priorities with 24/7 support'
    },
    {
      icon: Star,
      title: 'Quality Service',
      description: 'Consistent excellence in every aspect of your stay experience'
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      description: 'We focus on the little things that make a big difference'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/veer-villa-about-us-banner.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your Trusted Mountain Retreat Since the Beginning
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Experience Manali's Charm & Convenience
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Nestled just steps away from the vibrant Mall Road, The Veer Villa offers the perfect blend of accessibility and tranquility. Situated on the peaceful Gompa Road, our hotel provides a serene escape with breathtaking views of snow-clad mountains while keeping you connected to the city's pulse.
                  </p>
                  <p>
                    Whether you are here for a family vacation, a romantic getaway, or a solo adventure in the Himalayas, our warm hospitality, 24-hour service, and modern comforts ensure a memorable stay. We take pride in being more than just a place to rest - we're your home away from home in the mountains.
                  </p>
                  <p>
                    At The Veer Villa, we understand that every traveler is unique. That's why we've designed our rooms and services to cater to diverse needs while maintaining the authentic charm of Himachali hospitality. Our commitment is to make your Manali experience unforgettable.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/veer-villa-entrance.avif"
                  alt="Hotel Entrance"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/mountain-view.jpg"
                  alt="Manali Mountain View"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
                />
                <img
                  src="/veer-villa-front.webp"
                  alt="Hotel Exterior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg -mt-8"
                />
                <img
                  src="/veer-villa-views.jpg"
                  alt="Mountain View from Hotel"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Location Advantage
            </h2>
            <p className="text-xl text-green-100 leading-relaxed mb-8">
              The Veer Villa's strategic location on Gompa Road is our greatest asset. We're positioned in a peaceful residential area that's remarkably close to Mall Road - just a 2-5 minute walk. This unique positioning means you can enjoy the tranquility of a quiet neighborhood while having immediate access to Manali's bustling center.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-2xl font-bold mb-2">290m</h4>
                <p className="text-green-100">to Mall Road</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-2xl font-bold mb-2">80m</h4>
                <p className="text-green-100">to Tibetan Monastery</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-2xl font-bold mb-2">200m</h4>
                <p className="text-green-100">to Van Vihar Park</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600">
              The pillars of our hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/veer-villa-reception.avif"
                  alt="Hotel Welcome"
                  className="w-full h-96 object-cover rounded-xl shadow-xl"
                />
              </div>

              <div className="order-1 lg:order-2">
                <Mountain className="w-12 h-12 text-green-600 mb-4" />
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Why Choose The Veer Villa?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Prime Location</h4>
                      <p className="text-gray-600">Perfect balance between peaceful surroundings and easy access to attractions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Users className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Family Friendly</h4>
                      <p className="text-gray-600">Welcoming atmosphere suitable for families, couples, and solo travelers</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Star className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Quality Amenities</h4>
                      <p className="text-gray-600">Modern comforts including WiFi, parking, and 24-hour room service</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Mountain className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Stunning Views</h4>
                      <p className="text-gray-600">Wake up to breathtaking vistas of snow-capped Himalayan peaks</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Shield className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Safe & Secure</h4>
                      <p className="text-gray-600">24/7 security and CCTV surveillance for your peace of mind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Commitment to You
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At The Veer Villa, we're committed to providing exceptional hospitality that goes beyond just accommodation. We strive to create experiences that you'll cherish long after your mountain adventure ends. From the moment you arrive until your departure, our dedicated team works tirelessly to ensure your comfort and satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Guest Satisfaction</h4>
                <p className="text-gray-600">
                  We continuously improve our services based on guest feedback to deliver the best possible experience.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Local Expertise</h4>
                <p className="text-gray-600">
                  Our team provides insider knowledge about Manali's hidden gems and best experiences.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Cleanliness Standards</h4>
                <p className="text-gray-600">
                  Rigorous cleaning protocols ensure spotless rooms and common areas at all times.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Value for Money</h4>
                <p className="text-gray-600">
                  Competitive pricing without compromising on quality, amenities, or service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience The Veer Villa?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join countless satisfied guests who have made memories at our cozy mountain retreat
          </p>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl"
          >
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
