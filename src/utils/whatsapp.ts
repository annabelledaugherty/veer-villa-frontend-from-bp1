export const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919816323999';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export const formatBookingMessage = (data: {
  name: string;
  email?: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType?: string;
  guests?: string;
  specialRequests?: string;
}) => {
  let message = `*New Booking Inquiry - The Veer Villa*\n\n`;
  message += `Name: ${data.name}\n`;
  if (data.email) message += `Email: ${data.email}\n`;
  message += `Phone: ${data.phone}\n`;
  message += `Check-in: ${data.checkIn}\n`;
  message += `Check-out: ${data.checkOut}\n`;
  if (data.roomType) message += `Room Type: ${data.roomType}\n`;
  if (data.guests) message += `Number of Guests: ${data.guests}\n`;
  if (data.specialRequests) message += `Special Requests: ${data.specialRequests}\n`;

  return message;
};

export const formatContactMessage = (data: {
  name: string;
  email?: string;
  phone?: string;
  message: string;
}) => {
  let msg = `*Contact Inquiry - The Veer Villa*\n\n`;
  msg += `Name: ${data.name}\n`;
  if (data.email) msg += `Email: ${data.email}\n`;
  if (data.phone) msg += `Phone: ${data.phone}\n`;
  msg += `Message: ${data.message}\n`;

  return msg;
};
