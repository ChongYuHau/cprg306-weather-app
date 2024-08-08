"use client";
import { useState } from 'react';

export default function PostalCodeInput({ onSubmit }) {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate Canadian postal code (pattern allows optional space in the middle)
    if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(postalCode.toUpperCase())) {
      setError(true);
      return;
    }
    setError(false);
    // Normalize the postal code by removing spaces and converting to upper case
    const normalizedPostalCode = postalCode.replace(/\s+/g, '').toUpperCase();
    onSubmit(normalizedPostalCode);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-lg font-bold text-gray-700 mb-4">Enter Your Canadian Postal Code</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input
          type="text"
          value={postalCode}
          onChange={(e) => {
            setPostalCode(e.target.value);
            setError(false);
          }}
          placeholder="e.g., M5V3L9 or M5V 3L9"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
          Submit
        </button>
        {error && <p className="text-red-500 text-xs italic">Please enter a valid postal code.</p>}
      </form>
    </div>
  );
}
