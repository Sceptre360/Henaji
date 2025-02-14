'use client'

import Image from "next/image";

interface GasCylinderProps {
  id: number;
  size: string;
  price: number;
  image: string;
}

export default function GasCylinderCard({ id, size, price, image }: GasCylinderProps) {
  const handleOrder = () => {
    // Add order handling logic here
    console.log(`Ordering ${size} cylinder`);
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Image
        src={image}
        alt={`${size} Gas Cylinder`}
        width={200}
        height={200}
        className="mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{size} Cylinder</h2>
      <p className="text-gray-600 mb-4">Ksh {price}</p>
      <button 
        className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={handleOrder}
      >
        Order Now
      </button>
    </div>
  );
} 