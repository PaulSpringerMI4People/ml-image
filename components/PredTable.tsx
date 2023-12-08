import React, { useState } from 'react';
import { Modal, ImagePreview } from '@/components'
import Image from 'next/image';

interface DataTableProps {
  data: { [key: string]: number };
  camdata: { [key: string]: string };
}

const DataTable: React.FC<DataTableProps> = ({ data, camdata }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const dataArray = Object.entries(data);
  const camArray = Object.entries(camdata);

  const handleRowClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  return (
    <div className="relative mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-sm">
        <thead className="ext-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 text-center rounded-tl-sm">Condition</th>
            <th className="px-6 py-3 text-center rounded-tl-sm">Value</th>
          </tr>
        </thead>
        <tbody className='rounded-b-sm'>
          {dataArray.map(([condition, value], index) => (
            <tr key={index} className="bg-white dark:bg-gray-800" onClick={() => handleRowClick(camArray[index][1])}>
              <td className="px-6 py-4 text-center">{condition}</td>
              <td className="px-6 py-4 text-center">{value.toFixed(12)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImagePreview image={selectedImage} />
      </Modal>
    </div>
  );
};

export default DataTable;
