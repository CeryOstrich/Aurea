// ============================================
// AURÉA — All Static Data & Constants
// ============================================

export const COUPLE = {
  groomName: "Erik",
  brideName: "Tiara",
  groomFullName: "Erianto",
  brideFullName: "Tiara",
  groomParents: "Bapak Tamrin & Ibu Hj. Ramlah",
  brideParents: "Alm Bpk Abd. Rahim & Ibu Hj. Evi",
  initials: "T & E",
  hashtag: "#TiaraErianto",
};

export const WEDDING_DATE = new Date("2026-07-19T09:00:00+08:00");

export const EVENTS = {
  akad: {
    title: "Akad Nikah",
    time: "Sabtu, 18 Juli | 11.00 WITA",
    icon: "ring",
  },
  resepsi: {
    title: "Resepsi",
    time: "Minggu, 19 Juli | 09.00 WITA",
    icon: "party",
  },
  dressCode: {
    title: "Dress Code",
    value: "Bebas & Rapi",
    icon: "palette",
  },
};

export const VENUE = {
  name: "Labekkang",
  address: "Desa Botto",
  city: "Kec. Pitu Riase, Kab. Sidrap",
  fullAddress: "Labekkang, Desa Botto, Kec. Pitu Riase, Kabupaten Sidenreng Rappang (Sidrap)",
  mapsUrl: "https://maps.google.com/?q=Desa+Botto+Pitu+Riase+Sidrap",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2!2d120.1!3d-3.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTQnMDAuMCJTIDEyMMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1",
};

export const DIGITAL_GIFTS = [
  {
    id: "dana",
    method: "E-Wallet",
    name: "Dana",
    accountNumber: "087784161383",
    accountHolder: "Tiara",
    icon: "wallet",
    hasQR: false,
  },
];

const galleryFiles = [
  "JNY08528.webp", "JNY08543.webp", "JNY08557.webp", "JNY08565.webp",
  "JNY08574.webp", "JNY08581.webp", "JNY08592.webp", "JNY08600.webp",
  "JNY08614.webp", "JNY08627.webp", "JNY08629.webp", "JNY08634.webp",
  "JNY08660.webp", "JNY08668.webp", "JNY08696.webp", "JNY08711.webp"
];

export const GALLERY_IMAGES = galleryFiles.map((filename, i) => ({
  id: i + 1,
  src: `/images/gallery/${filename}`,
  alt: `Tiara & Erianto - Moments ${i + 1}`,
  width: i % 3 === 0 ? 800 : 600,
  height: i % 3 === 0 ? 1200 : i % 3 === 1 ? 800 : 900,
}));

export const MUSIC = {
  src: "https://youtu.be/1WCIrw85zbQ",
  title: "Background Music",
};
