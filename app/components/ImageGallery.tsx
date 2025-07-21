import Image from "next/image";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    title?: string;
  }[];
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {images.map((image, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
          <div className="aspect-square relative">
            {image.src ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm">{image.title || image.alt}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-semibold">{image.title || image.alt}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 