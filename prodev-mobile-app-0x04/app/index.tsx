import React from 'react';
import Link from 'next/link';
import { properties } from '../constants';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="border p-4 rounded shadow">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded mb-2" />
            <h2 className="text-lg font-semibold">{property.title}</h2>
            <p>{property.location}</p>
            <p className="font-bold">{property.price}/night</p>
            <Link href={`/property/${property.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
