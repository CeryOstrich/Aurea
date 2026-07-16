"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================
// CONFIGURATION — Replace with your Google Apps Script URL
// ============================================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz_Zippa8Dkg6M7QQ810AvNd_t8D1DdQuCeLixsSX0E04zdrqevxTqG37-opgezNvk/exec";

interface GuestMessage {
  name: string;
  message: string;
  attendance: string;
  timestamp: string;
}

export default function RSVPForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir" | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  // ── JSONP helper: inject a script tag to bypass CORS completely ──
  const jsonp = useCallback((url: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      const callbackName = "rsvp_cb_" + Date.now() + "_" + Math.random().toString(36).slice(2);
      const script = document.createElement("script");

      // Timeout setelah 15 detik
      const timer = setTimeout(() => {
        cleanup();
        reject(new Error("Timeout"));
      }, 15000);

      function cleanup() {
        clearTimeout(timer);
        delete (window as any)[callbackName];
        if (script.parentNode) script.parentNode.removeChild(script);
      }

      (window as any)[callbackName] = (data: any) => {
        cleanup();
        resolve(data);
      };

      script.src = url + (url.includes("?") ? "&" : "?") + "callback=" + callbackName;
      script.onerror = () => {
        cleanup();
        reject(new Error("Script load error"));
      };

      document.head.appendChild(script);
    });
  }, []);

  // Fetch existing messages from Google Sheets via JSONP
  const fetchMessages = useCallback(async () => {
    if (!SCRIPT_URL) {
      setLoadingMessages(false);
      return;
    }
    try {
      const data = await jsonp(`${SCRIPT_URL}?action=read`);
      if (data.status === "success" && Array.isArray(data.data)) {
        setMessages(data.data.reverse()); // newest first
      }
    } catch {
      // Silently fail — messages will just be empty
    } finally {
      setLoadingMessages(false);
    }
  }, [jsonp]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendance) return;
    if (!name.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    const formattedAttendance = attendance === "hadir" ? "Hadir" : "Tidak Hadir";
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!SCRIPT_URL) {
      setStatus("success");
      const newMsg: GuestMessage = {
        name: trimmedName,
        message: trimmedMessage,
        attendance: formattedAttendance,
        timestamp: new Date().toLocaleString("id-ID"),
      };
      setMessages((prev) => [newMsg, ...prev]);
      setName("");
      setMessage("");
      setAttendance(null);
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      // Kirim data via JSONP (GET request lewat script tag — bypass CORS 100%)
      const params = new URLSearchParams({
        action: "write",
        name: trimmedName,
        message: trimmedMessage,
        attendance: formattedAttendance,
      });

      await jsonp(`${SCRIPT_URL}?${params.toString()}`);

      setStatus("success");

      const newMsg: GuestMessage = {
        name: trimmedName,
        message: trimmedMessage,
        attendance: formattedAttendance,
        timestamp: new Date().toLocaleString("id-ID"),
      };
      setMessages((prev) => [newMsg, ...prev]);
      setName("");
      setMessage("");
      setAttendance(null);
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setErrorMsg("Gagal mengirim. Silakan coba lagi.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  // Format timestamp for display
  const formatTime = (ts: string) => {
    if (!ts) return "";
    try {
      const d = new Date(ts);
      if (isNaN(d.getTime())) return ts;
      return d.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return ts;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* ─── Form Card ─── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-emerald-light)] to-[var(--color-emerald)]" />

        <h3 className="text-2xl font-heading text-center mb-1 text-[var(--color-emerald-dark)]">
          Ucapan & Doa
        </h3>
        <p className="text-center text-xs text-gray-400 font-accent mb-6 tracking-wider">
          Berikan ucapan dan konfirmasi kehadiran
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-6"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3 text-[var(--color-emerald)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-medium text-gray-800">Terkirim!</p>
              <p className="text-xs text-gray-500 mt-1">Terima kasih atas ucapan dan doa Anda.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-emerald)]/20 focus:border-[var(--color-emerald)] transition-colors text-gray-800 text-sm"
                  placeholder="Nama Kamu"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-emerald)]/20 focus:border-[var(--color-emerald)] transition-colors text-gray-800 text-sm resize-y"
                  placeholder="Berikan Ucapan & Doa"
                />
              </div>

              {/* Attendance */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Konfirmasi Kehadiran ?</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance("hadir")}
                    className={`py-2.5 px-4 rounded-lg border-2 font-medium transition-all text-sm flex items-center justify-center gap-2 ${
                      attendance === "hadir"
                        ? "border-[var(--color-emerald)] bg-[var(--color-emerald)]/5 text-[var(--color-emerald-dark)]"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={attendance === "hadir" ? "text-[var(--color-emerald)]" : "text-gray-400"}>
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance("tidak_hadir")}
                    className={`py-2.5 px-4 rounded-lg border-2 font-medium transition-all text-sm flex items-center justify-center gap-2 ${
                      attendance === "tidak_hadir"
                        ? "border-red-400 bg-red-50 text-red-600"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={attendance === "tidak_hadir" ? "text-red-500" : "text-gray-400"}>
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Tidak Hadir
                  </button>
                </div>
              </div>

              {/* Error */}
              {errorMsg && (
                <p className="text-xs text-red-500 text-center">{errorMsg}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || !attendance}
                className={`w-full py-3 rounded-lg font-medium text-white transition-all flex items-center justify-center gap-2 text-sm ${
                  !attendance
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[var(--color-emerald)] hover:bg-[var(--color-emerald-dark)] shadow-md shadow-emerald-500/20"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  "Kirim"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Guestbook / Messages List ─── */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-700 font-accent tracking-wider uppercase">
            Ucapan Tamu
          </h4>
          <span className="text-xs text-gray-400 font-accent">
            {messages.length} ucapan
          </span>
        </div>

        {/* Messages */}
        <div className="max-h-[360px] overflow-y-auto overscroll-contain rsvp-scrollbar">
          {loadingMessages ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[var(--color-emerald)]/40 animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2 h-2 rounded-full bg-[var(--color-emerald)]/40 animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2 h-2 rounded-full bg-[var(--color-emerald)]/40 animate-bounce" />
              </div>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-12 px-6">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-sm text-gray-400">Belum ada ucapan</p>
              <p className="text-xs text-gray-300 mt-1">Jadilah yang pertama!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={`${msg.name}-${i}`}
                  initial={i < 3 ? { opacity: 0, y: 10 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="px-6 py-4 hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex gap-3">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-[var(--color-emerald-dark)]">
                        {msg.name.charAt(0).toUpperCase()}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-gray-800">
                          {msg.name}
                        </span>
                        {msg.attendance && (
                          <span className={`inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                            msg.attendance === "Hadir"
                              ? "bg-emerald-50 text-[var(--color-emerald-dark)]"
                              : "bg-red-50 text-red-600"
                          }`}>
                            {msg.attendance === "Hadir" ? (
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            ) : (
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                            {msg.attendance}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        {formatTime(msg.timestamp)}
                      </p>
                      {msg.message && (
                        <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                          {msg.message}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
