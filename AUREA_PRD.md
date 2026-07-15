# Product Requirements Document (PRD)

## Project Name

**Auréa — Luxury Wedding Invitation**

---

## 1. Product Overview

Auréa adalah website undangan pernikahan premium berbasis frontend yang dirancang untuk memberikan pengalaman digital yang mewah, interaktif, dan personal.

Website ini bukan sebuah platform atau SaaS, melainkan sebuah *luxury interactive landing page* yang dibuat khusus untuk satu pasangan pengantin dan digunakan selama periode acara pernikahan.

Karakteristik produk:

* Frontend-only.
* Tidak menggunakan database.
* Tidak menggunakan backend.
* Di-deploy menggunakan Vercel.
* Mendukung personalisasi nama tamu.
* Dioptimalkan untuk perangkat mobile.
* Didesain dengan pendekatan Luxury Minimalism.

---

## 2. Product Goals

### Primary Goals

* Memberikan pengalaman undangan digital yang eksklusif.
* Menampilkan informasi pernikahan secara elegan.
* Memiliki performa tinggi.
* Mendukung 300+ pengunjung secara bersamaan.
* Mudah di-deploy dan dipelihara.

### Secondary Goals

* Meningkatkan nilai jual jasa desain website pernikahan.
* Menjadi template premium untuk proyek berikutnya.
* Menjadi portfolio showcase.

---

## 3. Target Users

### Couple

* Pasangan usia 22–40 tahun.
* Menginginkan undangan digital premium.
* Memiliki budget pernikahan menengah hingga tinggi.

### Guest

* Tamu yang menerima link undangan melalui WhatsApp.
* Mayoritas mengakses melalui smartphone.

---

## 4. Success Metrics

| Metric                   | Target |
| ------------------------ | ------ |
| Lighthouse Score         | >95    |
| First Contentful Paint   | <1.5 s |
| Largest Contentful Paint | <2.5 s |
| CLS                      | <0.1   |
| Mobile Responsiveness    | 100%   |
| Concurrent Visitors      | 300+   |

---

## 5. Scope

### In Scope

* Loading Screen
* Interactive Envelope
* Dynamic Guest Name
* Hero Section
* Countdown
* Wedding Details
* Gallery
* Google Maps
* Digital Gift
* Music Player
* Closing Section

### Out of Scope

* Database
* RSVP
* Guest Book
* Dashboard
* Login
* Authentication
* Payment Gateway
* Multi Language
* Multi Theme
* CMS
* Analytics Dashboard

---

## 6. Design Direction

### Theme

> Luxury Minimalism

### Design Principles

* Elegant.
* Clean.
* Spacious.
* Cinematic.
* Premium.
* Timeless.

### Inspiration

* Cartier
* Dior
* Ritz Paris
* Four Seasons
* Apple Event

---

## 7. Color Palette

| Name           | Hex     |
| -------------- | ------- |
| Midnight Black | #0E0E0E |
| Ivory White    | #F8F6F2 |
| Champagne Gold | #D4B483 |
| Deep Emerald   | #153629 |
| Warm Gray      | #B5B5B5 |

---

## 8. Typography

### Heading

* Cormorant Garamond
* Playfair Display

### Body

* Inter
* Poppins

---

## 9. Technology Stack

| Layer                | Technology    |
| -------------------- | ------------- |
| Framework            | Next.js 16    |
| Styling              | TailwindCSS   |
| Animation            | GSAP          |
| Additional Animation | Framer Motion |
| Deployment           | Vercel        |

---

## 10. User Flow

```text
Open Link
    ↓
Loading Screen
    ↓
Envelope Animation
    ↓
Open Invitation
    ↓
Hero Section
    ↓
Countdown
    ↓
Wedding Details
    ↓
Gallery
    ↓
Venue
    ↓
Digital Gift
    ↓
Closing Section
```

---

## 11. Functional Requirements

### 11.1 Loading Screen

#### Description

Menampilkan identitas pasangan sebelum website dimulai.

#### Requirements

* Durasi 2–3 detik.
* Fade in.
* Fade out.
* Menampilkan inisial pasangan.

#### Example

```text
A & N

Loading Memories...
```

---

### 11.2 Interactive Envelope

#### Description

Amplop digital yang menjadi elemen pembuka.

#### Requirements

* Klik untuk membuka.
* Smooth transition.
* Wax seal animation.
* Membuka halaman utama.

---

### 11.3 Dynamic Guest Name

#### Description

Nama tamu ditampilkan menggunakan URL parameter.

#### Example

```text
https://aurea.vercel.app/?to=Salman

https://aurea.vercel.app/?to=Keluarga%20Ahmad
```

#### Display

```text
Kepada Yth.

Salman
```

#### Requirements

* Mendukung minimal 500 nama.
* Menggunakan URL parameter.
* Tidak membutuhkan database.

---

### 11.4 Hero Section

#### Content

```text
Aulia
&
Nabila

12 December 2026

Save The Date
```

#### Requirements

* Fullscreen.
* Responsive.
* Smooth animation.
* Background image atau video.

---

### 11.5 Countdown

#### Requirements

* Real-time.
* Update setiap detik.

#### Example

```text
150 Days
10 Hours
20 Minutes
50 Seconds
```

---

### 11.6 Wedding Details

#### Information

* Akad Nikah.
* Resepsi.
* Lokasi.
* Dress Code.

#### Example

```text
Akad
09.00 WITA

Resepsi
19.00 WITA

Dress Code
Earth Tone
```

---

### 11.7 Gallery

#### Requirements

* Minimal 15 foto.
* Masonry layout.
* Lightbox.
* Swipe support.

#### Features

* Zoom image.
* Next image.
* Previous image.

---

### 11.8 Venue

#### Requirements

* Embedded Google Maps.
* Open Maps button.
* Menampilkan alamat lengkap.

#### Example

```text
Grand Ballroom Hotel XYZ

Jl. Example No. 123
Makassar
```

---

### 11.9 Digital Gift

#### Supported Methods

* QRIS.
* BCA.
* Mandiri.
* Dana.
* Gopay.

#### Features

* Copy account number.
* Preview QR Code.

---

### 11.10 Music Player

#### Features

* Play.
* Pause.
* Volume control.

#### Default Music

* Piano.
* Instrumental.
* Classical.

#### Requirements

* Tidak autoplay.
* Posisi fixed di pojok bawah.

---

### 11.11 Closing Section

#### Example

```text
Thank You

Your presence is the greatest gift.

Aulia & Nabila
```

#### Requirements

* Elegant typography.
* Fade animation.
* Closing illustration.

---

## 12. Non-Functional Requirements

### Performance

| Item | Target |
| ---- | ------ |
| FCP  | <1.5s  |
| LCP  | <2.5s  |
| CLS  | <0.1   |

### Browser Support

* Chrome
* Firefox
* Edge
* Safari

### Device Support

* 360px
* 390px
* 430px
* Tablet
* Desktop

---

## 13. Folder Structure

```text
src/
 ├─ app/
 ├─ components/
 ├─ sections/
 ├─ hooks/
 └─ lib/

public/
 ├─ images/
 ├─ music/
 ├─ videos/
 └─ icons/
```

---

## 14. Deployment Architecture

```text
Visitor
   ↓
Vercel CDN
   ↓
Next.js Application
   ↓
Static Assets
```

---

## 15. Performance Strategy

### Image Optimization

* Menggunakan next/image.
* WebP format.
* Lazy loading.

### Video Optimization

* Maksimal 10 MB.
* MP4 H.264.

### Asset Optimization

* Minify CSS.
* Minify JavaScript.
* Dynamic import.

---

## 16. Timeline

| Phase                | Duration |
| -------------------- | -------- |
| UI/UX Design         | 2 Hari   |
| Frontend Development | 4 Hari   |
| Animation            | 2 Hari   |
| Testing              | 1 Hari   |
| Deployment           | 1 Hari   |

### Total

> 10 Hari Kerja

---

## 17. Future Improvements

* RSVP.
* Guest Book.
* Admin Dashboard.
* Multiple Themes.
* QR Check-In.
* Live Streaming.
* Multi Event Support.

---

## 18. Final Recommendation

Untuk kebutuhan:

* Satu pasangan.
* Sekitar 300 tamu.
* Frontend-only.
* Deployment di Vercel.
* Dynamic Guest Name.
* Tampilan mewah.

Stack yang direkomendasikan:

```text
Next.js
TailwindCSS
GSAP
Framer Motion
Vercel
```

Dengan arsitektur tersebut, website dapat melayani ratusan pengunjung secara bersamaan tanpa backend, memiliki biaya operasional nol, serta memberikan pengalaman undangan digital yang elegan dan premium.
