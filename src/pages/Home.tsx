import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Mountain,
  Wifi,
  Car,
  Shield,
  Clock,
  Utensils,
  Star,
  MapPin,
  Bed,
  Sparkles,
  ChevronRight,
  Phone,
  Calendar,
  Users,
  Check
} from 'lucide-react';
import { sendToWhatsApp, formatBookingMessage } from '../utils/whatsapp';

const Home = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const handleQuickBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = formatBookingMessage({
      name: bookingForm.name,
      phone: bookingForm.phone,
      checkIn: bookingForm.checkIn,
      checkOut: bookingForm.checkOut,
      guests: bookingForm.guests
    });
    sendToWhatsApp(message);
  };

  return (
    <div className="pt-20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/veer-villa-hero-1.avif)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Mountain className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Veer Villa
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Your Cozy Retreat in the Heart of Manali
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Experience breathtaking mountain views just steps from Mall Road
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-2xl hover:scale-105"
            >
              Book Your Stay
            </Link>
            <a
              href="#rooms"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border-2 border-white/30"
            >
              Explore Rooms
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      <section id="why-choose-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose The Veer Villa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect blend of comfort, location, and hospitality in the heart of Manali
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/prime-location-manali.jpg"
                  alt="Prime Location"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Prime Location</h3>
                <p className="text-gray-600">
                  Just 290m from Mall Road - walk to all the action in 2-5 minutes
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/veer-villa-views.jpg"
                  alt="Mountain Views"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Mountain Views</h3>
                <p className="text-gray-600">
                  Wake up to breathtaking views of snow-clad Himalayan peaks
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/24-hours-service.webp"
                  alt="24-Hour Service"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">24-Hour Service</h3>
                <p className="text-gray-600">
                  Round-the-clock front desk, room service, and security for your comfort
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/family-friendly.jpg"
                  alt="Family Friendly"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Family Friendly</h3>
                <p className="text-gray-600">
                  Warm hospitality and modern comforts perfect for families and couples
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Comfort with a View
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our carefully designed rooms, each offering modern amenities and stunning vistas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src="/delux-room.webp"
                  alt="Deluxe Room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Popular Choice
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Deluxe Room</h3>
                <p className="text-gray-600 mb-4">
                  A cozy 120 sq. ft. space perfect for couples or solo travelers. Features a plush king-sized bed and essential modern amenities.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                  <Bed className="w-4 h-4" />
                  <span>120 sq. ft.</span>
                  <span className="mx-2">•</span>
                  <Users className="w-4 h-4" />
                  <span>1-2 Guests</span>
                </div>
                <Link
                  to="/rooms#deluxe"
                  onClick={handleLinkClick}
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src="/veer-villa-super-delux1.avif"
                  alt="Super Deluxe Room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Super Deluxe Room</h3>
                <p className="text-gray-600 mb-4">
                  A more spacious option offering enhanced comfort at 160+ sq. ft. with stunning views of the surrounding landscapes.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                  <Bed className="w-4 h-4" />
                  <span>160+ sq. ft.</span>
                  <span className="mx-2">•</span>
                  <Users className="w-4 h-4" />
                  <span>2-3 Guests</span>
                </div>
                <Link
                  to="/rooms#super-deluxe"
                  onClick={handleLinkClick}
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-booking" className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Check Availability
              </h2>
              <p className="text-xl text-green-100">
                Fill in your details and we'll get back to you on WhatsApp
              </p>
            </div>

            <form onSubmit={handleQuickBooking} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Check-in Date</label>
                  <input
                    type="date"
                    value={bookingForm.checkIn}
                    onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Check-out Date</label>
                  <input
                    type="date"
                    value={bookingForm.checkOut}
                    onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Number of Guests</label>
                  <select
                    value={bookingForm.guests}
                    onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-white text-green-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="amenities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Facilities Designed for You
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a comfortable and memorable stay
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-700" />
              </div>
              <h4 className="font-semibold text-gray-800">Free Parking</h4>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-green-700" />
              </div>
              <h4 className="font-semibold text-gray-800">Free WiFi</h4>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-green-700" />
              </div>
              <h4 className="font-semibold text-gray-800">Room Service</h4>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-700" />
              </div>
              <h4 className="font-semibold text-gray-800">24/7 Security</h4>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-700" />
              </div>
              <h4 className="font-semibold text-gray-800">24h Front Desk</h4>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-700" />
              </div>
              <h4 className="font-semibold text-gray-800">Mountain Views</h4>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/amenities"
              onClick={handleLinkClick}
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              View All Amenities
            </Link>
          </div>
        </div>
      </section>

      <section id="location-highlights" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Prime Location in Manali
            </h2>
            <p className="text-xl text-gray-600">
              Steps away from Mall Road, surrounded by natural beauty and attractions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Mall Road</h4>
                <span className="text-green-600 font-bold">290m</span>
              </div>
              <p className="text-gray-600 text-sm">2-5 minute walk to the heart of Manali's shopping and dining</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Tibetan Monastery</h4>
                <span className="text-green-600 font-bold">80m</span>
              </div>
              <p className="text-gray-600 text-sm">Experience peaceful spirituality just steps away</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Van Vihar Park</h4>
                <span className="text-green-600 font-bold">200m</span>
              </div>
              <p className="text-gray-600 text-sm">Serene nature walks through deodar forests</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Hidimba Devi Temple</h4>
                <span className="text-green-600 font-bold">2.3 km</span>
              </div>
              <p className="text-gray-600 text-sm">Ancient temple set in cedar forests</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Solang Valley</h4>
                <span className="text-green-600 font-bold">14 km</span>
              </div>
              <p className="text-gray-600 text-sm">Adventure sports and stunning valley views</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Old Manali</h4>
                <span className="text-green-600 font-bold">3 km</span>
              </div>
              <p className="text-gray-600 text-sm">Cafes, backpacker culture, and local charm</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/location"
              onClick={handleLinkClick}
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Explore Location & Map
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from travelers who stayed with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Perfect location! We could walk to Mall Road in minutes and the mountain views from our room were absolutely breathtaking. The staff was incredibly helpful and friendly."
              </p>
              <div className="font-semibold text-gray-800">Priya & Rahul</div>
              <div className="text-sm text-gray-600">Delhi</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Excellent value for money! Clean rooms, comfortable beds, and the 24-hour room service was a lifesaver. Highly recommend for families visiting Manali."
              </p>
              <div className="font-semibold text-gray-800">Amit Kumar</div>
              <div className="text-sm text-gray-600">Mumbai</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "A hidden gem on Gompa Road! Peaceful location yet so close to everything. The Super Deluxe room was spacious and the view of snow-covered peaks was magical."
              </p>
              <div className="font-semibold text-gray-800">Sneha Patel</div>
              <div className="text-sm text-gray-600">Bangalore</div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery-preview" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience The Veer Villa
            </h2>
            <p className="text-xl text-gray-300">
              A glimpse of the comfort and beauty that awaits you
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/veer-villa-super-delux2.avif"
                alt="Hotel Room"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/mountain-view.jpg"
                alt="Mountain View"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/outdoors-2.avif"
                alt="Manali Scenery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/veer-villa-front.webp"
                alt="Hotel Exterior"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              onClick={handleLinkClick}
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section id="explore-manali" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore Manali
            </h2>
            <p className="text-xl text-gray-600">
              Discover the best activities and attractions around our hotel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/adventure-manali.jpeg"
                alt="Adventure Sports"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Adventure Sports</h4>
                <p className="text-gray-600 text-sm">
                  Paragliding, skiing, zorbing, and more at Solang Valley
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/TemplesnCulture.avif"
                alt="Temples & Culture"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Temples & Culture</h4>
                <p className="text-gray-600 text-sm">
                  Visit ancient temples and experience local Himachali culture
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/Trekking-Trailsmanali.webp"
                alt="Trekking"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Trekking Trails</h4>
                <p className="text-gray-600 text-sm">
                  Explore scenic mountain trails through pine and deodar forests
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="/Local-Cuisine-manali.jpg"
                alt="Local Cuisine"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Local Cuisine</h4>
                <p className="text-gray-600 text-sm">
                  Savor authentic Himachali dishes and international cuisine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="special-offers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-12 text-white text-center shadow-2xl">
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Special Season Offers
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book your stay now and enjoy exclusive benefits and discounts for a limited time
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Check className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">Early Bird Discount</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Check className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">Extended Stay Benefits</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Check className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">Complimentary Breakfast</p>
              </div>
            </div>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl"
            >
              Book Now & Save
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about your stay
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer flex items-center justify-between">
                What are the check-in and check-out times?
                <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Check-in is at 12:00 PM (noon) and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer flex items-center justify-between">
                Is parking available at the hotel?
                <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Yes, we provide secure on-site parking free of charge for all our guests.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer flex items-center justify-between">
                Do you provide room service?
                <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Yes, we offer 24-hour room service with a menu featuring North Indian, South Indian, and Chinese cuisine.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer flex items-center justify-between">
                Are couples allowed?
                <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Yes, couples are welcome at The Veer Villa. Valid ID proof (Aadhaar, Passport, or Driving License) is required for all guests.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer flex items-center justify-between">
                How far is the hotel from Mall Road?
                <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                We are located just 290 meters from Mall Road, which is approximately a 2-5 minute walk. Our prime location on Gompa Road offers easy access while maintaining a peaceful atmosphere.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer flex items-center justify-between">
                Is WiFi available?
                <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Yes, complimentary high-speed WiFi is available throughout the property, including all rooms and common areas.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Magic of Manali?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Book your stay at The Veer Villa today and create unforgettable memories in the Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="bg-white text-green-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl"
            >
              Book Your Stay
            </Link>
            <a
              href="tel:+919816323999"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg border-2 border-white/30 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
