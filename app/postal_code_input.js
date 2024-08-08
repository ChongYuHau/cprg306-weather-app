import { useState } from 'react';
 
export default function CanadianPostalCodeInput() {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(postalCode.toUpperCase())) {
      setError(true);
      return;
    }
    setError(false);
    
    const normalizedPostalCode = postalCode.replace(/\s+/g, '').toUpperCase();
    
    window.location.href = `/displayWeather?location=${encodeURIComponent(normalizedPostalCode)}`;
  };