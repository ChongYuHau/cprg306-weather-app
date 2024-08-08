import Link from 'next/link';
 
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Welcome to the Weather App</h1>
      <p className="text-lg text-gray-600 mb-4">Get weather information by entering your postal code.</p>
      <Link href="/components"> Enter Postal Code</Link>
    </div>
  );
}
