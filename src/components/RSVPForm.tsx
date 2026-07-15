"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir" | null>(null);
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+62");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendance) return;
    
    setStatus("loading");
    
    const formattedAttendance = attendance === "hadir" ? "Hadir" : "Tidak Hadir";
    const textMessage = `Halo Tiara & Erianto,\n\nSaya ingin konfirmasi kehadiran untuk acara pernikahan Anda.\n\nDetail Konfirmasi:\n- Nama: ${name}\n- No. WhatsApp: ${countryCode}${whatsapp}\n- Status: ${formattedAttendance}\n\nTerima kasih!`;
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/6287784161383?text=${encodedMessage}`;

    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-emerald-light)] to-[var(--color-emerald)]" />
      
      <h3 className="text-2xl font-heading text-center mb-6 text-[var(--color-emerald-dark)]">Konfirmasi Kehadiran</h3>
      
      {status === "success" ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-emerald)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="font-medium text-lg text-gray-800">Terkirim!</p>
          <p className="text-sm text-gray-500 mt-2">Terima kasih atas konfirmasi Anda. WhatsApp Anda akan terbuka untuk mengirimkan pesan konfirmasi.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-emerald)]/20 focus:border-[var(--color-emerald)] transition-colors text-gray-800"
              placeholder="Masukkan nama Anda"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
            <div className="flex">
              <select 
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-l-lg border-r-0 focus:outline-none focus:ring-2 focus:ring-[var(--color-emerald)]/20 text-gray-600"
              >
                <option value="+62">🇮🇩 +62</option>
                <option value="+60">🇲🇾 +60</option>
                <option value="+65">🇸🇬 +65</option>
              </select>
              <input 
                type="tel" 
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-emerald)]/20 focus:border-[var(--color-emerald)] transition-colors text-gray-800"
                placeholder="81234567890"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kehadiran</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAttendance("hadir")}
                className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                  attendance === "hadir" 
                    ? "border-[var(--color-emerald)] bg-[var(--color-emerald)]/5 text-[var(--color-emerald-dark)]" 
                    : "border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                Hadir
              </button>
              <button
                type="button"
                onClick={() => setAttendance("tidak_hadir")}
                className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                  attendance === "tidak_hadir" 
                    ? "border-red-500 bg-red-50 text-red-700" 
                    : "border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                Tidak Hadir
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={status === "loading" || !attendance}
            className={`w-full py-3.5 rounded-lg font-medium text-white transition-all flex items-center justify-center gap-2 ${
              !attendance ? "bg-gray-300 cursor-not-allowed" : "bg-[var(--color-emerald)] hover:bg-[var(--color-emerald-dark)] shadow-md shadow-emerald-500/20"
            }`}
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Mengirim...
              </>
            ) : "Kirim Konfirmasi"}
          </button>
        </form>
      )}
    </div>
  );
}
