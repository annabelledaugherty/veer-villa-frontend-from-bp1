import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Calendar,
  Users,
  Home,
  FileText,
  CreditCard,
  AlertCircle
} from 'lucide-react';
import { sendToWhatsApp, formatBookingMessage, formatContactMessage } from '../utils/whatsapp';

const Contact = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'deluxe',
    guests: '2',
    specialRequests: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = formatBookingMessage(bookingForm);
    sendToWhatsApp(message);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = formatContactMessage(contactForm);
    sendToWhatsApp(message);
  };

  return (
    <div className="pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/conctact-banner.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're Here to Help Plan Your Perfect Mountain Getaway
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone & WhatsApp</h3>
                      <a href="tel:+919816323999" className="text-green-600 hover:text-green-700 font-medium">
                        +91-98163 23999
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Available 24/7 for bookings and inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                      <a href="mailto:booking@veervilla.com" className="text-green-600 hover:text-green-700 font-medium">
                        booking@veervilla.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600">
                        Gompa Road, Opposite Hotel Jamuna Complex<br />
                        Near Mall Road, Siyal<br />
                        Manali, Himachal Pradesh, 175131
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Check-in / Check-out</h3>
                      <p className="text-gray-600">
                        Check-in: 12:00 PM (Noon)<br />
                        Check-out: 11:00 AM
                      </p>
                      <p className="text-sm text-gray-600 mt-1">Early check-in/late check-out on request</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-6 h-6 text-green-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Quick Response on WhatsApp</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        For fastest response, send us a message on WhatsApp. We're always connected and ready to help!
                      </p>
                      <a
                        href="https://wa.me/919816323999?text=Hello!%20I%20would%20like%20to%20inquire%20about%20The%20Veer%20Villa."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Book Your Stay
              </h2>
              <p className="text-xl text-green-100">
                Fill in your details and we'll get back to you on WhatsApp
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
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
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Room Type</label>
                  <select
                    value={bookingForm.roomType}
                    onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="deluxe" className="text-gray-900">Deluxe Room</option>
                    <option value="super-deluxe" className="text-gray-900">Super Deluxe Room</option>
                    <option value="any" className="text-gray-900">Any Available</option>
                  </select>
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
                    <option value="1" className="text-gray-900">1 Guest</option>
                    <option value="2" className="text-gray-900">2 Guests</option>
                    <option value="3" className="text-gray-900">3 Guests</option>
                    <option value="4" className="text-gray-900">4 Guests</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Special Requests</label>
                  <textarea
                    rows={3}
                    value={bookingForm.specialRequests}
                    onChange={(e) => setBookingForm({ ...bookingForm, specialRequests: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Any special requirements or requests?"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-white text-green-700 px-6 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Booking Request via WhatsApp</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Booking Policies & Information
            </h2>
            <p className="text-xl text-gray-600">
              Important details for your stay
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Check-in/Check-out</h3>
              <p className="text-gray-600 text-sm">
                Check-in: 12:00 PM<br />
                Check-out: 11:00 AM<br />
                Early/late requests subject to availability
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Guest Policy</h3>
              <p className="text-gray-600 text-sm">
                Couples are welcome<br />
                Valid ID required (Aadhaar, Passport, Driving License)<br />
                Maximum occupancy per room applies
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Payment Options</h3>
              <p className="text-gray-600 text-sm">
                Cash accepted<br />
                Major cards accepted<br />
                Digital payment options available
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cancellation</h3>
              <p className="text-gray-600 text-sm">
                Please contact us for cancellation policy<br />
                Flexible options available<br />
                Early notification appreciated
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Outside Food</h3>
              <p className="text-gray-600 text-sm">
                Policy may vary<br />
                24-hour room service available<br />
                Please inquire when booking
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Special Occasions</h3>
              <p className="text-gray-600 text-sm">
                Room decorations available<br />
                Special arrangements on request<br />
                Advance notice required
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-2xl font-bold mb-4">Find Us on the Map</h3>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.054983!2d77.1849827!3d32.2421923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390489df4fa09b75%3A0x84337fca8618dcdf!2sThe%20Veer%20Villa!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Veer Villa Map"
              ></iframe>
            </div>
            <p className="text-green-100">
              Gompa Road, Near Mall Road, Manali, Himachal Pradesh
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
