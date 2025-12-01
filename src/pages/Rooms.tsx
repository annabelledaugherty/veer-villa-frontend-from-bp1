import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bed,
  Users,
  Maximize,
  Tv,
  Wifi,
  Wind,
  Coffee,
  Droplets,
  Eye,
  Armchair,
  Check,
  X
} from 'lucide-react';
import { sendToWhatsApp, formatBookingMessage } from '../utils/whatsapp';

const Rooms = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const [selectedRoom, setSelectedRoom] = useState('');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const handleBooking = (e: React.FormEvent, roomType: string) => {
    e.preventDefault();
    const message = formatBookingMessage({
      ...bookingForm,
      roomType
    });
    sendToWhatsApp(message);
  };

  const roomAmenities = [
    { icon: Eye, label: 'Mountain/City Views' },
    { icon: Tv, label: 'Flat-screen TV with Satellite' },
    { icon: Wifi, label: 'Free High-Speed WiFi' },
    { icon: Droplets, label: 'Private Bathroom with Geyser' },
    { icon: Armchair, label: 'Seating Area & Center Table' },
    { icon: Coffee, label: 'Tea/Coffee Maker' },
    { icon: Wind, label: 'Daily Housekeeping' }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/veer-villa-room15.avif)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Rooms
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comfort with a View - Choose Your Perfect Mountain Retreat
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div id="deluxe" className="scroll-mt-24 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Popular Choice
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Deluxe Room</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    A cozy 120 sq. ft. space perfect for couples or solo travelers. Our Deluxe Room features a plush king-sized bed, modern amenities, and stunning mountain or city views that will make your stay memorable.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Maximize className="w-6 h-6 text-green-700 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">120 sq. ft.</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Bed className="w-6 h-6 text-green-700 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">King Bed</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Users className="w-6 h-6 text-green-700 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">1-2 Guests</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedRoom(selectedRoom === 'deluxe' ? '' : 'deluxe')}
                    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    {selectedRoom === 'deluxe' ? 'Hide Booking Form' : 'Book This Room'}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/delux-room.webp"
                    alt="Deluxe Room"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/veer-villa-delux-rom1.jpg"
                    alt="Room Interior"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/delux-room3.webp"
                    alt="Bed Close-up"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/veer-villa-delux-room3.jpg"
                    alt="Room View"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {selectedRoom === 'deluxe' && (
                <div className="mt-12 bg-green-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Deluxe Room</h3>
                  <form onSubmit={(e) => handleBooking(e, 'Deluxe Room')} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="email"
                      placeholder="Email (Optional)"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <select
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                    </select>
                    <input
                      type="date"
                      value={bookingForm.checkIn}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="date"
                      value={bookingForm.checkOut}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                      type="submit"
                      className="md:col-span-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      Send Booking Request via WhatsApp
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div id="super-deluxe" className="scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/veer-villa-super-delux1.avif"
                      alt="Super Deluxe Room"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    <img
                      src="/veer-villa-super-delux2.avif"
                      alt="Spacious Interior"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    <img
                      src="/veer-villa-super-delux3.avif"
                      alt="Comfortable Setting"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    <img
                      src="/veer-villa-super-delux4.avif"
                      alt="Mountain View from Room"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Premium Choice
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Super Deluxe Room</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    A more spacious option at 160+ sq. ft., our Super Deluxe Room offers enhanced comfort with extra living space, stunning panoramic views of the surrounding landscapes, and all the premium amenities you need for an unforgettable stay.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <Maximize className="w-6 h-6 text-amber-700 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">160+ sq. ft.</p>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <Bed className="w-6 h-6 text-amber-700 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">King Bed</p>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <Users className="w-6 h-6 text-amber-700 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">2-3 Guests</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedRoom(selectedRoom === 'super-deluxe' ? '' : 'super-deluxe')}
                    className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                  >
                    {selectedRoom === 'super-deluxe' ? 'Hide Booking Form' : 'Book This Room'}
                  </button>
                </div>
              </div>

              {selectedRoom === 'super-deluxe' && (
                <div className="mt-12 bg-amber-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Super Deluxe Room</h3>
                  <form onSubmit={(e) => handleBooking(e, 'Super Deluxe Room')} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                      type="email"
                      placeholder="Email (Optional)"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <select
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                    </select>
                    <input
                      type="date"
                      value={bookingForm.checkIn}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                      type="date"
                      value={bookingForm.checkOut}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button
                      type="submit"
                      className="md:col-span-2 bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                    >
                      Send Booking Request via WhatsApp
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              In-Room Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Every room is equipped with modern comforts for your convenience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
            {roomAmenities.map((amenity, index) => (
              <div key={index} className="text-center p-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="w-8 h-8 text-green-700" />
                </div>
                <p className="text-sm font-medium text-gray-800">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Room Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect room for your needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">Deluxe Room</th>
                  <th className="px-6 py-4 text-center">Super Deluxe Room</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Room Size</td>
                  <td className="px-6 py-4 text-center">120 sq. ft.</td>
                  <td className="px-6 py-4 text-center">160+ sq. ft.</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-medium">Maximum Guests</td>
                  <td className="px-6 py-4 text-center">1-2</td>
                  <td className="px-6 py-4 text-center">2-3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Mountain View</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-medium">Flat-screen TV</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Free WiFi</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-medium">Seating Area</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Extra Space</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Panoramic Views</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions About Our Rooms?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Our team is here to help you choose the perfect accommodation
          </p>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
