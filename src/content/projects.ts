export type Project = {
  slug: string
  title: string
  category: 'saas' | 'design-system' | 'creative'
  categoryLabel: string
  status: string
  client: string
  period: string
  description: string
  tags: string[]
  image: { src: string; alt: string }
}

// Konten dan aset gambar eksternal berikut merupakan data demo dari template Stitch.
export const projects: Project[] = [
  {
    "slug": "finflow",
    "title": "FinFlow — AI Financial Intelligence Suite",
    "category": "saas",
    "categoryLabel": "SAAS & FINTECH",
    "status": "LIVE PRODUCTION",
    "client": "FINFLOW ASIA",
    "period": "2024",
    "description": "Arsitektur frontend dashboard finansial waktu nyata (*real-time WebSocket*) menangani lebih dari 2.5 juta transaksi per hari dengan zero lag.",
    "tags": [
      "Next.js 14",
      "Tailwind",
      "Apache ECharts"
    ],
    "image": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDpOPwAPvSGxr8_zzukQKja0iTxxytVC-SuKOwiP3QLVdHvfRr1PeY3Vfk6qH84tlSYIZILuUV5gy9ohbGLENZWgTX_qqdy5tLmufqfbfCZ4raU2MsFfsbQoiDATQ6vdkLuMN5GgHFB6pV4D2qZeYtMFlMQFl6bQ401qkjWNkfCSzoIPHLOwaLltGz0eTWGJM-gwGPcnAVuWcn9Sd62dJcotf-l52dMFpfKFt6fOypnZYnIvry0RM_Mqg",
      "alt": "FinFlow Analytics Dashboard"
    }
  },
  {
    "slug": "nusantara-ui",
    "title": "Nusantara UI — Multi-Brand Component Engine",
    "category": "design-system",
    "categoryLabel": "DESIGN SYSTEM",
    "status": "OPEN SOURCE",
    "client": "TELCO ENTERPRISE",
    "period": "2023 - 2024",
    "description": "Pustaka komponen monorepo dengan 65+ komponen aksesibel, mendukung 4 brand berbeda dengan penggantian token dinamis satu klik.",
    "tags": [
      "Turborepo",
      "Storybook 8",
      "Radix Primitives"
    ],
    "image": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuA6t-Vk57zB8Zby2PJsp1kmHecetb-Dnv9o2VDkcbwq7096ds6HcxwgtDPhwPEzasKQyqgzRVbJlUrVAqM3PxgjxQl4DE57GKkJMsXa-NYrvpQqQFyv39SrLpEiEDmN_JKsL4Wg9WTCLwnjmVAE7GNus6A8_O2NkmJ88VDE4KvnYNhcNF26erToFNF0tIs-mR9FAho74kGh0WLdPoA3P5_bFxe3QMwAuL-kdaSfrHRBcJQBTG6DwL9X-A",
      "alt": "Nusantara Design System"
    }
  },
  {
    "slug": "aura-meta-gallery",
    "title": "Aura Meta-Gallery — Virtual 3D Pavilion",
    "category": "creative",
    "categoryLabel": "CREATIVE & 3D",
    "status": "FWA OF THE DAY",
    "client": "GALERI SENI NASIONAL",
    "period": "2024",
    "description": "Ruang pamer virtual interaktif 60 FPS pada browser ponsel dan desktop tanpa plugin eksternal, memanfaatkan GLSL custom post-processing.",
    "tags": [
      "Three.js",
      "GLSL Shaders",
      "WebAudio API"
    ],
    "image": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDEmgXrAJEGimqh7kJCh5wLUFbwrwBRZ2qmLy3Sl8g7ayQ__FEKOvjBeFj5BistsFLlV3VpJdY0wY0y8xbovjDc2kru214BVbcFHznbVvBYbWCNw8zmCSEI59n4jU-A9HFB0km2gtBrVl8CgBZsujP2Z7Zhpf_qntLaIz4r5jZUM3tHbXn63jgcSf5gvd0qvqS13fJ_ZaXKBLhH5r3nUfrwGV7ByDtlSaUwUSfF4PaLdlXkM9g6MAJrqA",
      "alt": "Aura WebGL 3D Exhibition"
    }
  },
  {
    "slug": "kargopulse",
    "title": "KargoPulse — Smart Fleet Dispatcher",
    "category": "saas",
    "categoryLabel": "SAAS & LOGISTIK",
    "status": "SERIES-B FUNDED",
    "client": "KARGOLOGISTIX",
    "period": "2023",
    "description": "Sistem monitoring rute armada logistik skala nasional dengan visualisasi peta interaktif Mapbox GL, GPS clustering, dan otomasi dispatch.",
    "tags": [
      "React 18",
      "Mapbox GL",
      "Redux Toolkit"
    ],
    "image": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDt5D66uJh59bg_EriuaBU9meQm2yPZmk6ZrW0qLscyjXMZuSMulvXl37wnLOfGJWM_uE7AWyfVlwGOz2HqYdrmqcWpRWZceF1R90r__lVTqSpXAe-m57wUZ8IPD-T_Da6YVBdYhMwT7CT6dlrIoOm9M5SoOYEXEK07X616-gOS1hH8Jur8UrdantS-7r0vbbxFg2vVrWULsyLaYOLb1eRJZYk-3yeTbrwJJdUO0P76TKThagDzV0aGgw",
      "alt": "KargoLogistix Freight System"
    }
  },
  {
    "slug": "aksesbisa",
    "title": "AksesBisa — Portal Layanan Inklusif",
    "category": "design-system",
    "categoryLabel": "GOVTECH & ACCESSIBILITY",
    "status": "WCAG AAA",
    "client": "INISIATIF PUBLIK",
    "period": "2024",
    "description": "Pengembangan portal layanan sipil publik dengan dukungan penuh pembaca layar (*screen reader*), navigasi keyboard 100%, dan kontras adaptif.",
    "tags": [
      "Astro 4",
      "ARIA Spec",
      "Zero-JS Default"
    ],
    "image": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDDZTS8Qlcz6tkB7__nkRZINQhhwOlPGwUzkfdkLOAIyMehX6IIE-UPM5Q9QZHl5DN_OMb76H5wmC-mRWwO6EQOuNViNNvNuZ71CN8Dvhb4fC1GsjTedryBr12bMjxAyfrUacZLrda9aqa-pKlG6RrZWONBIuY21jvfXF00NfJEoeJ6IVVViE7QOEr2bh0Z23I1RbtXePHumZqPaf0AtNZRmZJXaR5Q4fm3gKaZDGMKM2n4Kg0qFzNN4A",
      "alt": "GovTech Indonesia Accessibility Portal"
    }
  },
  {
    "slug": "resonance",
    "title": "Resonance — Generative Audio Canvas",
    "category": "creative",
    "categoryLabel": "CREATIVE DEV",
    "status": "INTERACTIVE LAB",
    "client": "SOUNDPULSE STUDIO",
    "period": "2023",
    "description": "Eksperimen visualisasi spektrum audio sintetis secara real-time di browser menggunakan WebAudio API dan partikel Canvas berkinerja tinggi.",
    "tags": [
      "WebAudio API",
      "HTML5 Canvas",
      "Vanilla JS"
    ],
    "image": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCrSbJCCBZi3tsQPrB6QCDmT-SY9rwD6iirEWvUbFoysZ5U9YxF9JVStby7o7MsVcTHbku14xcJ_mt6vpqKttKOOrHvAxahPWc3GggL1Vp2U5ukeGW373vB-Dham-DEMaS27uagGZj3raCw07vR8YtcWj4Z6-VPbrzkhKqBflJU-JDlqwd80GMmxv_FuyVA3bpSz9W4PDN7RGLyP_flQXwk01i93t-Q7cwXv_rcZl38xt0i37ZdFtP72g",
      "alt": "SoundPulse Audio Visualizer"
    }
  }
]
