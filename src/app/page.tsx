"use client";

import { useState, useCallback, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { useGuestName } from "@/hooks/useGuestName";

import LoadingScreen from "@/sections/LoadingScreen";
import Envelope from "@/sections/Envelope";
import HeroSection from "@/sections/HeroSection";
import QuoteSection from "@/sections/QuoteSection";
import CoupleProfile from "@/sections/CoupleProfile";
import CountdownSection from "@/sections/CountdownSection";
import WeddingDetails from "@/sections/WeddingDetails";
import Gallery from "@/sections/Gallery";
import Venue from "@/sections/Venue";
import DigitalGift from "@/sections/DigitalGift";
import ClosingSection from "@/sections/ClosingSection";
import MusicPlayer from "@/components/MusicPlayer";
import BottomNav from "@/components/BottomNav";
import AntiInspect from "@/components/AntiInspect";
import FloatingParticles from "@/components/FloatingParticles";

type AppPhase = "loading" | "envelope" | "main";

function InvitationContent() {
  const guestName = useGuestName();
  const [phase, setPhase] = useState<AppPhase>("loading");

  const handleLoadingComplete = useCallback(() => {
    setPhase("envelope");
  }, []);

  const handleEnvelopeOpen = useCallback(() => {
    // Scroll to top before showing main content
    window.scrollTo(0, 0);
    setPhase("main");
  }, []);

  return (
    <>
      {/* Phase 1: Loading */}
      <AnimatePresence>
        {phase === "loading" && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Phase 2: Envelope */}
      <AnimatePresence>
        {phase === "envelope" && (
          <Envelope guestName={guestName} onOpen={handleEnvelopeOpen} />
        )}
      </AnimatePresence>

      {/* Phase 3: Main Content */}
      {phase === "main" && (
        <>
          <AntiInspect />
          <FloatingParticles />
          <main className="overflow-hidden pb-24">
            <HeroSection />
            <QuoteSection />
            <CoupleProfile />
            <CountdownSection />
            <WeddingDetails />
            <Gallery />
            <Venue />
            <DigitalGift />
            <ClosingSection />
          </main>
          <BottomNav />
          <MusicPlayer />
        </>
      )}
    </>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 bg-midnight flex items-center justify-center">
          <div className="text-gold font-heading text-xl animate-pulse tracking-widest">A & N</div>
        </div>
      }
    >
      <InvitationContent />
    </Suspense>
  );
}
