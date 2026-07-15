"use client";

import { motion } from "framer-motion";

interface ZoomLinkProps {
  meetingId: string;
  passcode: string;
  joinUrl: string;
}

export default function ZoomLink({ meetingId, passcode, joinUrl }: ZoomLinkProps) {
  const handleJoin = () => {
    // Attempt deep linking
    const deepLink = `zoomus://zoom.us/join?confno=${meetingId.replace(/\s/g, "")}&pwd=${passcode}`;
    
    // Create a fallback timeout
    const fallback = setTimeout(() => {
      window.open(joinUrl, "_blank");
    }, 1500);

    // Try to open deep link
    window.location.href = deepLink;

    // Clear timeout if the app opens and blurs the window
    window.onblur = () => {
      clearTimeout(fallback);
    };
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 text-center max-w-sm mx-auto mt-6">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8z" />
        </svg>
      </div>
      
      <h4 className="font-heading text-xl text-gray-800 mb-4">Akses Virtual Zoom</h4>
      
      <div className="space-y-2 mb-6 text-sm text-gray-600">
        <p className="flex justify-between border-b border-gray-200 pb-2">
          <span>Meeting ID:</span>
          <span className="font-medium font-accent text-gray-800 tracking-wider">{meetingId}</span>
        </p>
        <p className="flex justify-between pt-1">
          <span>Passcode:</span>
          <span className="font-medium font-accent text-gray-800 tracking-wider">{passcode}</span>
        </p>
      </div>
      
      <button
        onClick={handleJoin}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
      >
        <span>Join Zoom Meeting</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <p className="text-xs text-gray-400 mt-3">
        Tombol ini akan otomatis membuka aplikasi Zoom di perangkat Anda.
      </p>
    </div>
  );
}
