// ============================================
// AURÉA — All Static Data & Constants
// ============================================

export const COUPLE = {
  groomName: "Aulia",
  brideName: "Nabila",
  groomFullName: "Aulia Rahman, S.Kom.",
  brideFullName: "Nabila Syakieb, S.M.",
  groomParents: "Bapak Rahman & Ibu Siti",
  brideParents: "Bapak Syakieb & Ibu Aminah",
  initials: "A & N",
  hashtag: "#AureaNabila",
};

export const WEDDING_DATE = new Date("2026-12-12T09:00:00+08:00");

export const EVENTS = {
  akad: {
    title: "Akad Nikah",
    time: "09.00 WITA",
    icon: "ring",
  },
  resepsi: {
    title: "Resepsi",
    time: "19.00 WITA",
    icon: "party",
  },
  dressCode: {
    title: "Dress Code",
    value: "Earth Tone",
    icon: "palette",
  },
};

export const VENUE = {
  name: "Grand Ballroom Hotel XYZ",
  address: "Jl. Example No. 123",
  city: "Makassar",
  fullAddress: "Grand Ballroom Hotel XYZ, Jl. Example No. 123, Makassar, Sulawesi Selatan",
  mapsUrl: "https://maps.google.com/?q=Grand+Ballroom+Hotel+XYZ+Makassar",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7!2d119.41!3d-5.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDgnMjQuMCJTIDExOcKwMjQnMzYuMCJF!5e0!3m2!1sen!2sid!4v1",
};

export const DIGITAL_GIFTS = [
  {
    id: "qris",
    method: "QRIS",
    name: "Scan QRIS",
    accountNumber: "",
    icon: "qris",
    hasQR: true,
  },
  {
    id: "bca",
    method: "Bank Transfer",
    name: "BCA",
    accountNumber: "1234567890",
    accountHolder: "Aulia",
    icon: "bank",
    hasQR: false,
  },
  {
    id: "mandiri",
    method: "Bank Transfer",
    name: "Mandiri",
    accountNumber: "0987654321",
    accountHolder: "Nabila",
    icon: "bank",
    hasQR: false,
  },
  {
    id: "dana",
    method: "E-Wallet",
    name: "Dana",
    accountNumber: "081234567890",
    accountHolder: "Aulia",
    icon: "wallet",
    hasQR: false,
  },
  {
    id: "gopay",
    method: "E-Wallet",
    name: "GoPay",
    accountNumber: "081234567890",
    accountHolder: "Nabila",
    icon: "wallet",
    hasQR: false,
  },
];

export const GALLERY_IMAGES = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/gallery-${i + 1}.webp`,
  alt: `Pre-wedding photo ${i + 1}`,
  width: i % 3 === 0 ? 800 : 600,
  height: i % 3 === 0 ? 1200 : i % 3 === 1 ? 800 : 900,
}));

export const MUSIC = {
  src: "/music/background.mp3",
  title: "Wedding Instrumental",
};
