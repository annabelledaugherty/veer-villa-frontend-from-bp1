import { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'rooms', label: 'Rooms' },
    { id: 'outdoors', label: 'Outdoors' },
    { id: 'washroom', label: 'Washroom' },
    { id: 'entrance', label: 'Entrance' },
    { id: 'reception', label: 'Reception' },
    { id: 'common-area', label: 'Common Area' },
    { id: 'parking', label: 'Parking' },
    { id: 'views', label: 'Views' },
    { id: 'others', label: 'Others' }
  ];

  const imagesByCategory = {
    rooms: [
      { url: '/veer-villa-delux-rom1.jpg', alt: 'Deluxe Room Interior' },
      { url: '/veer-villa-delux-room3.jpg', alt: 'Deluxe Room with Mountain View' },
      { url: '/delux-room.webp', alt: 'Deluxe Room Setup' },
      { url: '/delux-room3.webp', alt: 'Deluxe Room View' },
      { url: '/veer-villa-super-delux1.avif', alt: 'Super Deluxe Room Interior' },
      { url: '/veer-villa-super-delux2.avif', alt: 'Super Deluxe Room Bed' },
      { url: '/veer-villa-super-delux3.avif', alt: 'Super Deluxe Room Setup' },
      { url: '/veer-villa-super-delux4.avif', alt: 'Super Deluxe Room View' },
      { url: '/veer-villa-room11.avif', alt: 'Room Interior' },
      { url: '/veer-villa-room-12.avif', alt: 'Room View' },
      { url: '/veer-villa-room13.jpg', alt: 'Room with Wooden Interiors' },
      { url: '/veer-vill1-room-14.avif', alt: 'Cozy Room Setup' },
      { url: '/veer-villa-room15.avif', alt: 'Room with Mountain View' }
    ],
    outdoors: [
      { url: '/veer-villa-front.webp', alt: 'The Veer Villa Front View' },
      { url: '/outdoors-1.avif', alt: 'Outdoor Area 1' },
      { url: '/outdoors-2.avif', alt: 'Outdoor Area 2' },
      { url: '/outdoors-3.avif', alt: 'Outdoor Area 3' }
    ],
    washroom: [
      { url: '/washroom-1.avif', alt: 'Washroom 1' },
      { url: '/washroom-2.avif', alt: 'Washroom 2' },
      { url: '/washroom-3.avif', alt: 'Washroom 3' }
    ],
    entrance: [
      { url: '/veer-villa-hero-1.avif', alt: 'The Veer Villa Entrance' },
      { url: '/veer-villa-entrance.avif', alt: 'Veer Villa Entrance View' }
    ],
    reception: [
      { url: '/veer-villa-reception.avif', alt: 'Veer Villa Reception' }
    ],
    'common-area': [
      { url: '/common-area.avif', alt: 'Veer Villa Common Area' }
    ],
    parking: [
      { url: '/veer-villa-parking.jpg', alt: 'Veer Villa Parking Area' }
    ],
    views: [
      { url: '/veer-villa-views.jpg', alt: 'Scenic Mountain View from Veer Villa' }
    ],
    others: []
  };

  return (
    <div className="pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/veer-villa-hero-1.avif)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <ImageIcon className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Experience The Veer Villa Through Our Lens
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {categories.map((category) => {
            const images = imagesByCategory[category.id as keyof typeof imagesByCategory];
            if (images.length === 0) return null;

            return (
              <div key={category.id} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-4 border-green-600">
                  {category.label}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative bg-white shadow-md hover:shadow-xl transition-shadow"
                      onClick={() => setSelectedImage(image.url)}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                          View
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
};

export default Gallery;
