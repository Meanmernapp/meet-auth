import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen pt-20">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-10 flex flex-col justify-center items-center space-y-6">
          <h1 className="text-4xl font-bold text-center text-ct-blue-800">
            Build Secure, Scalable Video Calling in Next.js
          </h1>

          <p className="text-lg text-center text-gray-700 max-w-2xl">
            Integrate real-time video meetings using platforms like <strong>Daily.co</strong>, <strong>100ms.live</strong>, or <strong>Agora</strong>.
            Whether you need 1-on-1 calls or group conferencing, we help you embed it seamlessly in your Next.js 14 app using secure API routes and client-side SDKs.
          </p>

          <ul className="list-disc text-left text-gray-600 pl-6">
            <li>🧩 Serverless room creation with API routes</li>
            <li>🔐 API key security with environment variables</li>
            <li>📦 Easy embedding via React + SDKs</li>
            <li>📹 Support for screen sharing, mute, and leave</li>
          </ul>

          <Link href="/meeting">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start a Demo Call
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
