export const site = {
  brand: 'prasadev',
  publicationReady: false,
  name: 'Prasetyo Ari Wibowo',
  initials: 'PA',
  role: 'Software Engineer',
  headline: 'Membangun Aplikasi untuk Kebutuhan Kerja Sehari-hari.',
  summary:
    'Saya Prasetyo Ari Wibowo, software engineer yang mengembangkan website, sistem operasional, dan aplikasi mobile dengan Laravel, React, dan Flutter. Saya membantu menerjemahkan kebutuhan kerja Anda menjadi aplikasi yang saling terhubung.',
  location: 'Kediri',
  timezone: 'WIB (GMT+7)',
  availability: 'Mari Berdiskusi',
  capabilities: [
    { title: 'Web', label: 'Laravel & React' },
    { title: 'Mobile', label: 'Flutter' },
    { title: 'Integrasi', label: 'REST API' },
  ],
  stack: ['Laravel', 'React', 'Flutter', 'PHP', 'Dart', 'REST API'],
  portrait: {
    src: '/assets/portrait.jpg',
    alt: 'Ilustrasi portrait sementara, bukan foto Prasetyo Ari Wibowo',
  },
  terminal: {
    prompt: 'prasadev@terminal:~$',
    status: 'WEB + MOBILE',
    location: 'BERBASIS DI KEDIRI',
    stackLabel: 'Teknologi yang Saya Gunakan:',
  },
  email: {
    href: 'mailto:pras.ari69@gmail.com',
    value: 'pras.ari69@gmail.com',
    label: 'Email',
    icon: 'mail',
  },
  whatsapp: {
    href: 'https://wa.me/6289696673806',
    value: '+62 896-9667-3806',
    label: 'WhatsApp',
    icon: 'phone-call',
  },
  socials: [
    {
      name: 'LinkedIn',
      label: 'LinkedIn Prasetyo Ari Wibowo',
      href: 'https://www.linkedin.com/in/prastyarw/',
      icon: 'linkedin',
    },
  ],
  ticker: [
    { text: 'LARAVEL · REACT · FLUTTER', icon: 'sparkles' },
    { text: 'BERBASIS DI KEDIRI', icon: 'map-pin' },
    { text: 'WEBSITE · SISTEM OPERASIONAL · APLIKASI MOBILE', icon: 'zap' },
    { text: 'PRASETYO ARI WIBOWO — SOFTWARE ENGINEER', icon: 'award' },
  ],
  about: {
    eyebrow: 'PROFIL & PENDEKATAN',
    title: 'Berangkat dari Kebutuhan Orang yang Menggunakan Aplikasi.',
    description:
      'Saya lulusan Sistem Informasi Universitas Nusantara PGRI Kediri. Pengalaman saya mencakup pengembangan aplikasi di sektor kesehatan, manufaktur, pemerintahan, layanan sosial, dan usaha desa. Saat ini saya bekerja sebagai Software Developer di Rumah Sakit Bhayangkara Kediri.',
  },
  services: {
    eyebrow: 'KEAHLIAN & LAYANAN',
    title: 'Dari Website hingga Sistem Kerja yang Terhubung.',
    cta: 'Diskusikan Kebutuhan Anda',
  },
  portfolio: { eyebrow: 'PROYEK PILIHAN', title: 'Aplikasi untuk Beragam Kebutuhan Operasional.' },
  experience: { eyebrow: 'PENGALAMAN KERJA', title: 'Membangun Aplikasi di Berbagai Sektor.' },
  education: { eyebrow: 'PENDIDIKAN & KONTRIBUSI', title: 'Belajar, Berbagi, dan Berorganisasi.' },
  faq: { eyebrow: 'PERTANYAAN UMUM', title: 'Sebelum Memulai Diskusi.' },
  contact: {
    eyebrow: 'HUBUNGI SAYA',
    title: 'Mari Bahas Kebutuhan Anda Terlebih Dahulu.',
    description:
      'Anda sedang merencanakan aplikasi, ingin mengembangkan sistem yang sudah ada, atau mencari software engineer untuk tim? Ceritakan kebutuhan Anda melalui WhatsApp, email, atau LinkedIn.',
    locationLabel: 'BERBASIS DI',
    panelTitle: 'Mulai dari Diskusi',
    panelDescription:
      'Sampaikan tujuan aplikasi, alur kerja yang ingin didukung, dan kondisi sistem saat ini. Kita dapat membahas ruang lingkup dan langkah berikutnya sebelum menentukan waktu serta biaya pengerjaan.',
  },
  footer: {
    description:
      'prasadev adalah portofolio Prasetyo Ari Wibowo, Software Engineer di Kediri. Mengembangkan website, sistem operasional, dan aplikasi mobile menggunakan Laravel, React, dan Flutter.',
    navigationTitle: 'Jelajahi Portofolio',
    navigation: [
      { label: 'Beranda', href: '/#hero' },
      { label: 'Profil', href: '/#about' },
      { label: 'Layanan', href: '/#services' },
      { label: 'Proyek', href: '/#portfolio' },
      { label: 'Pengalaman', href: '/#experience' },
      { label: 'Pendidikan', href: '/#education' },
    ],
    technologyTitle: 'Teknologi',
    technologies: [
      'Laravel & PHP',
      'React & JavaScript',
      'Flutter & Dart',
      'MySQL & PostgreSQL',
      'REST API',
    ],
    contactTitle: 'Mari Berdiskusi',
    contactDescription: 'Hubungi saya untuk membahas kebutuhan aplikasi atau peluang kerja.',
    copyright: '© 2026 prasadev — Prasetyo Ari Wibowo.',
    status: 'KEDIRI · WEB & MOBILE',
  },
} as const

export const principles = [
  {
    number: '01',
    title: 'Kebutuhan Operasional',
    description:
      'Saya memulai dari alur kerja pengguna: data yang dicatat, transaksi yang diproses, dan laporan yang dibutuhkan. Kebutuhan tersebut menjadi dasar fitur aplikasi.',
    detail: 'Alur kerja sebelum fitur',
    icon: 'gauge',
    accent: 'yellow',
  },
  {
    number: '02',
    title: 'Tanggung Jawab Modular',
    description:
      'Saya memisahkan fungsi aplikasi ke dalam modul dengan tanggung jawab yang jelas, agar perubahan pada satu bagian tidak mencampur kebutuhan bagian lain.',
    detail: 'Modul dengan fungsi yang jelas',
    icon: 'component',
    accent: 'pink',
  },
  {
    number: '03',
    title: 'Integrasi Web & Mobile',
    description:
      'Saya menghubungkan aplikasi web dan mobile melalui API agar proses dan data dapat digunakan dari perangkat yang sesuai dengan kebutuhan pengguna.',
    detail: 'Laravel API & Flutter',
    icon: 'git-fork',
    accent: 'lime',
  },
] as const

export const services = [
  {
    title: 'Website & Aplikasi Web',
    icon: 'code-2',
    accent: 'yellow',
    description:
      'Pengembangan website profil dan aplikasi web untuk menyajikan informasi maupun menjalankan layanan Anda.',
    features: ['Laravel & React', 'Antarmuka responsif', 'Pengelolaan konten'],
  },
  {
    title: 'Sistem Operasional',
    icon: 'palette',
    accent: 'pink',
    description:
      'Aplikasi untuk mendukung pencatatan dan proses kerja, dari persediaan barang hingga transaksi dan pelaporan.',
    features: ['Inventaris & kasir', 'Administrasi & transaksi', 'Dashboard & laporan'],
  },
  {
    title: 'Aplikasi Mobile Flutter',
    icon: 'activity',
    accent: 'cyan',
    description:
      'Pengembangan aplikasi mobile Flutter yang terhubung ke backend untuk menyediakan akses layanan melalui ponsel.',
    features: ['Flutter & Dart', 'Integrasi backend', 'Aplikasi Android'],
  },
  {
    title: 'API & Integrasi',
    icon: 'sparkles',
    accent: 'lime',
    description:
      'Pengembangan REST API dan integrasi layanan untuk menghubungkan fungsi aplikasi yang Anda gunakan.',
    features: ['REST API Laravel', 'Autentikasi & validasi data', 'Integrasi payment gateway'],
  },
] as const

export const experience = [
  {
    location: 'Kediri',
    title: 'Software Developer',
    company: 'Rumah Sakit Bhayangkara',
    accent: 'yellow',
    description:
      'Mengembangkan SIMRS berbasis web untuk data pasien, rekam medis, dan administrasi. Mengerjakan input data, validasi stok, kontrol transaksi, serta modul sesuai kebutuhan divisi. Mengembangkan aplikasi Android yang dipublikasikan di Google Play Store dan mengintegrasikannya dengan backend API.',
    tags: ['SIMRS', 'Aplikasi Android', 'Integrasi API'],
  },
  {
    location: 'Cikarang Selatan',
    title: 'Website Developer',
    company: 'PT. Trimitra Indoplast Mandiri',
    accent: 'pink',
    description:
      'Mengimplementasikan aplikasi full-stack Laravel–React untuk kebutuhan operasional manufaktur. Mengembangkan dashboard analitik dan pelaporan, input data, validasi stok, serta kontrol transaksi dengan pembagian sistem secara modular.',
    tags: ['Laravel', 'React', 'Sistem Operasional'],
  },
  {
    location: 'Kabupaten Tangerang',
    title: 'FullStack Developer',
    company: 'Dinas Koperasi dan Usaha Mikro',
    accent: 'cyan',
    description:
      'Mengembangkan sistem Koperasi Merah Putih menggunakan Laravel, mencakup manajemen anggota, transaksi simpan pinjam, dan laporan keuangan. Membangun REST API serta aplikasi Flutter untuk akses layanan anggota, termasuk autentikasi dan validasi data.',
    tags: ['Laravel', 'Flutter', 'REST API'],
  },
  {
    location: 'Bandung',
    title: 'Website Developer',
    company: 'Yayasan Wahdah Inisiatif Kebaikan',
    accent: 'yellow',
    description:
      'Membangun sistem pemesanan dan penjadwalan ambulans beserta API dan antarmuka pengguna serta admin. Mengembangkan sistem kampanye donasi dan mengintegrasikan payment gateway untuk donasi online.',
    tags: ['Pemesanan Ambulans', 'Donasi', 'Payment Gateway'],
  },
  {
    location: 'Batam',
    title: 'Website Developer',
    company: 'PT. ASM Tunas Muda',
    accent: 'pink',
    description:
      'Mengembangkan website profil perusahaan, aplikasi chatting real-time, sistem inventaris, dan kasir berbasis web. Mengerjakan fungsi pencatatan transaksi, laporan, riwayat percakapan, serta sinkronisasi stok antara kasir dan inventaris.',
    tags: ['Website Profil', 'Chat Real-time', 'Inventaris & Kasir'],
  },
  {
    location: 'Kabupaten Kediri',
    title: 'Website Developer',
    company: 'Dinas Pariwisata dan Kebudayaan',
    accent: 'cyan',
    description:
      'Mengembangkan dan memelihara website resmi untuk informasi destinasi wisata dan kegiatan kebudayaan. Mengerjakan kalender event, galeri multimedia, reservasi tur, dan formulir layanan publik bersama tim desain dan konten.',
    tags: ['Website Pemerintahan', 'Informasi Wisata', 'Layanan Publik'],
  },
  {
    location: 'Wonorejo, Kabupaten Kediri',
    title: 'Website Developer',
    company: 'Badan Usaha Milik Desa Wonorejo',
    accent: 'yellow',
    description:
      'Membangun website BUMDes dengan berita desa, profil usaha, laporan kegiatan, dan kontak layanan. Mengembangkan pengelolaan produk UMKM serta pemesanan sederhana bersama pengurus BUMDes dan perangkat desa.',
    tags: ['BUMDes', 'Produk UMKM', 'Pemesanan'],
  },
] as const

export const education = {
  institution: 'Universitas Nusantara PGRI Kediri',
  degree: 'Sarjana Sistem Informasi',
  period: '2021–2025',
  gpa: 'IPK 3,52 / 4,00',
  contributions: [
    {
      title: 'Asisten Dosen Pemrograman Web',
      description:
        'Membantu penyampaian materi, membimbing praktikum, dan mengevaluasi tugas mahasiswa.',
    },
    {
      title: 'Pemateri Workshop Website',
      description:
        'Berbagi materi pembuatan website, dasar WordPress, dan penggunaan framework modern untuk mahasiswa serta pelajar umum.',
    },
    {
      title: 'Aplikasi Flutter Bersertifikat HAKI',
      description:
        'Mengembangkan aplikasi mobile berbasis Flutter yang memperoleh sertifikat Hak Kekayaan Intelektual.',
    },
  ],
  organizations: [
    {
      name: 'BEM Universitas Nusantara PGRI Kediri',
      role: 'Direktur Jenderal Hubungan Organisasi, Kementrian Luar Negeri',
      period: 'May 2023 - Jun 2024',
    },
    {
      name: 'Ikatan Mahasiswa Sistem Informasi Indonesia, Korwil 7',
      role: 'Wakil Ketua Hubungan Eksternal',
      period: 'Mar 2022 - Jul 2025',
    },
    {
      name: 'HIROSI — Universitas Nusantara PGRI Kediri',
      role: 'Kepala Divisi Hubungan Eksternal',
      period: 'Sep 2021 - Aug 2024',
    },
  ],
} as const

export const faqs = [
  {
    question: 'Kebutuhan aplikasi seperti apa yang bisa kita bahas?',
    answer:
      'Anda dapat menghubungi saya untuk website profil, aplikasi web, sistem operasional, aplikasi mobile Flutter, atau integrasi API. Ceritakan pengguna, alur kerja, dan fitur yang Anda perlukan agar kita dapat menentukan ruang lingkupnya.',
  },
  {
    question: 'Bagaimana jika saya sudah memiliki aplikasi?',
    answer:
      'Kita mulai dengan meninjau kondisi aplikasi, teknologi yang digunakan, kendala pengguna, dan perubahan yang Anda inginkan. Dari penilaian awal tersebut, kita dapat membahas bagian yang perlu diperbaiki atau dikembangkan.',
  },
  {
    question: 'Bagaimana menentukan waktu dan biaya pengerjaan?',
    answer:
      'Waktu dan biaya dibahas setelah kebutuhan serta ruang lingkup cukup jelas, termasuk fitur, integrasi, kondisi sistem yang ada, dan prioritas Anda. Saya tidak menetapkan estimasi yang sama untuk semua aplikasi.',
  },
  {
    question: 'Informasi apa yang dapat saya kirim sebagai recruiter?',
    answer:
      'Silakan kirim deskripsi posisi, tanggung jawab, teknologi yang digunakan, lokasi atau pola kerja, dan tahapan rekrutmen melalui email atau LinkedIn. Saya lulusan Sistem Informasi dan saat ini bekerja sebagai Software Developer di Rumah Sakit Bhayangkara Kediri.',
  },
] as const
