"use client"

import React, { useState } from 'react';
import axios from 'axios';
import ImageUploadForm from '@/components/ImageUploadForm';
import ImagePreview from '@/components/ImagePreview';
import PredTable from '@/components/PredTable';

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [predData, setPredData] = useState<Record<string, number>>({});
  const [camData, setCamData] = useState<Record<string, string>>({});


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImage(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (image && image.type === "image/png") {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setPredData(response.data.preds);
        setCamData(response.data.gradcam);
      } catch (err) {
        alert(err);
      }
    } else {
      alert("Invalid format or you haven't picked a file");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Upload an image
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Our model processes your image through x and displays it here.
        </p>
        <ImageUploadForm onImageChange={handleChange} onSubmit={handleSubmit} />
        <ImagePreview image={image} />
      </div>
      <PredTable data={predData} camdata={camData} />
    </main>
  );
}
