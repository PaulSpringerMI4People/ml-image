import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImagePreviewProps {
  image: File | string | null;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ image }) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (image instanceof File) {
      const url = URL.createObjectURL(image);
      setImageUrl(url);

      return () => URL.revokeObjectURL(url);
    } else if (typeof image === 'string') {
      setImageUrl(`data:image/png;base64,${image}`);
    }
  }, [image]);

  return (
    <div className="flex items-center justify-center bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700 mx-auto">
      {imageUrl ? (
        <Image
          className="object-contain w-full h-full"
          src={imageUrl}
          alt="Uploaded Image"
          height={256}
          width={256}
        />
      ) : (
        <svg
          className="text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      )}
    </div>
  );
};

export default ImagePreview;
