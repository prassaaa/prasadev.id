export const site = {
  brand: 'prasadev',
  url: 'https://prasadev.id',
  ogImage: '/og.png',
  publicationReady: false,
  name: 'Prasetyo Ari Wibowo',
  initials: 'PA',
  role: 'Software Engineer',
  headline: 'Membangun Aplikasi untuk Kebutuhan Kerja Sehari-hari.',
  summary:
    'Fokus bikin software operasional: web dashboard, backend API, sampai aplikasi mobile yang siap dipakai kerja.',
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
    src: '/assets/images/pras.webp',
    alt: 'prasadev',
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
    {
      name: 'GitHub',
      label: 'GitHub Prasetyo Ari Wibowo',
      href: 'https://github.com/prassaaa',
      icon: 'github',
    },
  ],
  about: {
    eyebrow: 'PROFIL & PENDEKATAN',
    title: 'Berangkat dari Kebutuhan Orang yang Menggunakan Aplikasi.',
    description:
      'Saya lulusan Sistem Informasi Universitas Nusantara PGRI Kediri yang berfokus pada pengembangan website, sistem operasional, dan aplikasi mobile. Pengalaman saya mencakup berbagai sektor riil seperti kesehatan, manufaktur, pemerintahan, layanan sosial, dan usaha desa. Saat ini saya bekerja sebagai Software Developer di Rumah Sakit Bhayangkara Kediri.',
    sectors: [
      { name: 'Kesehatan', label: 'SIMRS & Rekam Medis', icon: 'activity' },
      { name: 'Manufaktur', label: 'Operasional & Produksi', icon: 'factory' },
      { name: 'Pemerintahan', label: 'Pariwisata Daerah', icon: 'building-2' },
      { name: 'Layanan Sosial', label: 'Ambulans & Donasi', icon: 'users' },
      { name: 'Koperasi & Desa', label: 'Kasir & Pengelolaan Usaha', icon: 'store' },
    ],
  },
  activity: {
    eyebrow: 'AKTIVITAS KODE & KONTRIBUSI',
    title: 'Konsistensi Pengerjaan & Jejak Komit GitHub.',
    description:
      'Aktivitas penulisan kode, pemeliharaan sistem, dan kontribusi tim pada berbagai repositori dalam 1 tahun terakhir.',
  },
  services: {
    eyebrow: 'KEAHLIAN & LAYANAN',
    title: 'Dari Website hingga Sistem Kerja yang Terhubung.',
    cta: 'Diskusikan Kebutuhan Anda',
  },
  portfolio: { eyebrow: 'PROYEK PILIHAN', title: 'Aplikasi untuk Beragam Kebutuhan Operasional.' },
  experience: { eyebrow: 'PENGALAMAN KERJA', title: 'Membangun Aplikasi di Berbagai Sektor.' },
  roots: {
    eyebrow: 'PONDASI SISTEM & RISET TEKNIS',
    title: 'Eksplorasi Kernel Android & Rekayasa Biner ARM64.',
    description:
      'Rekam jejak 8 tahun di level sistem berkinerja tinggi: dari kompilasi Linux Kernel Android (pediatutorialku) hingga riset reverse engineering biner dan proteksi memori (nusantarahax).',
  },
  education: { eyebrow: 'PENDIDIKAN & KONTRIBUSI', title: 'Belajar, Berbagi, dan Berorganisasi.' },
  evidence: {
    eyebrow: 'BUKTI FISIK & ARSIP DOKUMENTASI',
    title: 'Arsip Sertifikat Resmi & Dokumentasi Lapangan.',
    description:
      'Koleksi sertifikat kepakaran, hak cipta resmi HAKI, serta foto dokumentasi visual kegiatan lapangan yang dapat diverifikasi keasliannya.',
  },
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
    detail: 'Modul dengan batas jelas',
    icon: 'boxes',
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
  {
    number: '04',
    title: 'Keandalan & Integritas Data',
    description:
      'Saya memastikan validasi data yang ketat, konsistensi transaksi, dan struktur database yang solid agar sistem andal dalam jangka panjang.',
    detail: 'Validasi ketat & data konsisten',
    icon: 'shield-check',
    accent: 'cyan',
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
    title: 'Aplikasi Mobile Flutter',
    icon: 'smartphone',
    accent: 'cyan',
    description:
      'Pengembangan aplikasi mobile Flutter yang terhubung ke backend untuk menyediakan akses layanan melalui ponsel.',
    features: ['Flutter & Dart', 'Integrasi backend', 'Aplikasi Android'],
  },
  {
    title: 'Sistem Operasional',
    icon: 'layers',
    accent: 'pink',
    description:
      'Aplikasi untuk mendukung pencatatan dan proses kerja, dari persediaan barang hingga transaksi dan pelaporan.',
    features: ['Inventaris & kasir', 'Administrasi & transaksi', 'Dashboard & laporan'],
  },
  {
    title: 'API & Integrasi',
    icon: 'network',
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
    company: 'Rumah Sakit Bhayangkara Kediri',
    logo: '/assets/logos/rs-bhayangkara.png',
    accent: 'yellow',
    description:
      'Mengembangkan SIMRS berbasis web untuk data pasien, rekam medis, dan administrasi. Mengerjakan input data, validasi stok, kontrol transaksi, serta modul sesuai kebutuhan divisi. Mengembangkan aplikasi Android yang dipublikasikan di Google Play Store dan mengintegrasikannya dengan backend API.',
    tags: ['SIMRS', 'Aplikasi Android', 'Integrasi API'],
  },
  {
    location: 'Kota Kediri',
    title: 'Web Monitoring & IT Intern',
    company: 'Kepolisian Resor (Polres) Kediri Kota',
    logo: '/assets/logos/polres-kediri-kota.svg',
    photo: '/assets/evidence/dokumentasi-magang-polres.jpg',
    accent: 'cyan',
    description:
      'Melaksanakan praktik kerja lapangan (magang) berfokus pada monitoring dan pemeliharaan website resmi Polres Kediri Kota. Mengawasi stabilitas server portal informasi publik, ketersediaan layanan digital, serta dokumentasi infrastruktur IT instansi.',
    tags: ['Monitoring Web', 'Infrastruktur IT', 'Layanan Publik'],
  },
  {
    location: 'Kediri',
    title: 'Web Developer',
    company: 'Biji Cerita',
    logo: '/assets/logos/bijicerita.svg',
    accent: 'pink',
    description:
      'Membangun ekosistem sistem F&B lengkap untuk bijicerita.com — mulai dari aplikasi kasir Point of Sale (POS) hingga dashboard analitik manajemen operasional, pesanan, dan kontrol inventaris.',
    tags: ['Sistem POS', 'F&B & Kasir', 'Dashboard'],
  },
  {
    location: 'Grogol, Kediri',
    title: 'Web Developer',
    company: 'SMK Al-Huda Grogol',
    logo: '/assets/logos/smk-alhuda.png',
    accent: 'cyan',
    description:
      'Mengembangkan sistem informasi sekolah terpadu yang menyatukan basis data akademik, pengelolaan profil siswa, administrasi nilai, dan portal informasi terpusat bagi staf pengajar dan guru.',
    tags: ['Sistem Sekolah', 'Data Akademik', 'Aplikasi Web'],
  },
  {
    location: 'Cikarang Selatan',
    title: 'Website Developer',
    company: 'PT. Trimitra Indoplast Mandiri',
    logo: '/assets/logos/innapack.png',
    accent: 'lime',
    description:
      'Mengimplementasikan aplikasi full-stack Laravel–React untuk kebutuhan operasional manufaktur. Mengembangkan dashboard analitik dan pelaporan, input data, validasi stok, serta kontrol transaksi dengan pembagian sistem secara modular.',
    tags: ['Laravel', 'React', 'Sistem Operasional'],
  },
  {
    location: 'Kabupaten Tangerang',
    title: 'FullStack Developer',
    company: 'Dinas Koperasi dan Usaha Mikro',
    logo: '/assets/logos/tangerang.svg',
    accent: 'yellow',
    description:
      'Mengembangkan sistem Koperasi Merah Putih menggunakan Laravel, mencakup manajemen anggota, transaksi simpan pinjam, dan laporan keuangan. Membangun REST API serta aplikasi Flutter untuk akses layanan anggota, termasuk autentikasi dan validasi data.',
    tags: ['Laravel', 'Flutter', 'REST API'],
  },
  {
    location: 'Kediri',
    title: 'Web Developer',
    company: 'PT. Dwi Agung Sentosa',
    logo: '/assets/logos/dwi-agung.png',
    accent: 'pink',
    description:
      'Membangun website resmi perusahaan kontraktor dan sistem e-katalog produk konstruksi — mencakup galeri proyek terverifikasi, pencarian spesifikasi material bangunan, dan formulir permintaan penawaran harga.',
    tags: ['Profil Perusahaan', 'E-Katalog', 'Situs Web'],
  },
  {
    location: 'Bandung',
    title: 'Website Developer',
    company: 'Yayasan Wahdah Inisiatif Kebaikan',
    logo: '/assets/logos/inisiatif-kebaikan.png',
    accent: 'cyan',
    description:
      'Membangun sistem pemesanan dan penjadwalan ambulans beserta API dan antarmuka pengguna serta admin. Mengembangkan sistem kampanye donasi dan mengintegrasikan payment gateway untuk donasi online.',
    tags: ['Pemesanan Ambulans', 'Donasi', 'Payment Gateway'],
  },
  {
    location: 'Batam',
    title: 'Website Developer',
    company: 'PT. ASM Tunas Muda',
    logo: '/assets/logos/asm-tunas-muda.png',
    accent: 'lime',
    description:
      'Mengembangkan website profil perusahaan, aplikasi chatting real-time, sistem inventaris, dan kasir berbasis web. Mengerjakan fungsi pencatatan transaksi, laporan, riwayat percakapan, serta sinkronisasi stok antara kasir dan inventaris.',
    tags: ['Website Profil', 'Chat Real-time', 'Inventaris & Kasir'],
  },
  {
    location: 'Kabupaten Kediri',
    title: 'Website Developer & Pemateri',
    company: 'Dinas Pariwisata dan Kebudayaan',
    logo: '/assets/logos/kab-kediri.svg',
    accent: 'yellow',
    description:
      'Membangun website resmi Pusakakediri.com (2025) serta dipercaya menjadi pemateri Workshop "Penguatan Peran Juru Pelihara dan Masyarakat dalam Pengembangan Kebudayaan secara Digital" untuk edukasi website internal (2026) dan juri Lomba Lawatan Budaya SMA/SMK se-Kabupaten Kediri (2025).',
    tags: ['Pusakakediri.com', 'Pemateri Workshop', 'Juri Lawatan Budaya'],
  },
  {
    location: 'Wonorejo, Kabupaten Kediri',
    title: 'Website Developer',
    company: 'Badan Usaha Milik Desa Wonorejo',
    logo: '/assets/logos/bumdes-wonorejo.svg',
    accent: 'pink',
    description:
      'Membangun website BUMDes dengan berita desa, profil usaha, laporan kegiatan, dan kontak layanan. Mengembangkan pengelolaan produk UMKM serta pemesanan sederhana bersama pengurus BUMDes dan perangkat desa.',
    tags: ['BUMDes', 'Produk UMKM', 'Pemesanan'],
  },
] as const
export const technicalRoots = [
  {
    period: '2016 — 2019',
    brand: 'pediatutorialku',
    category: 'SISTEM OPERASI & KERNEL LINUX',
    title: 'Android OS Porting & Kernel Engineering',
    image: '/assets/images/pediatutorialku.jpg',
    url: 'https://www.facebook.com/pediatutorialku/',
    urlDisplay: 'facebook.com/pediatutorialku',
    platform: 'Facebook Page',
    accent: 'cyan',
    summary:
      'Membangun dan mem-porting custom ROM berbasis Android Open Source Project (AOSP) dan LineageOS lintas vendor/chipset. Mengerjakan penyesuaian device trees, kompilasi kernel Linux Android dari source code, integrasi proprietary vendor blobs, serta optimalisasi stabilitas hardware level rendah.',
    capabilities: [
      'Kompilasi Linux Kernel Android dari Source',
      'Porting Custom ROM (AOSP & LineageOS)',
      'Modifikasi Device Tree & Vendor Blobs',
      'Root, TWRP Recovery & Fastboot Tooling',
    ],
    stack: ['C', 'Linux Kernel', 'AOSP', 'Bash', 'Makefile', 'Git'],
  },
  {
    period: '2019 — 2024',
    brand: 'nusantarahax',
    category: 'REVERSE ENGINEERING & KEAMANAN BINER',
    title: 'ARM64 Binary Analysis & Runtime Memory Hooking',
    image: '/assets/images/nusantarahax.jpg',
    url: 'https://t.me/NusantaraHAX',
    urlDisplay: 't.me/NusantaraHAX',
    platform: 'Telegram Channel',
    accent: 'pink',
    summary:
      'Melakukan riset rekayasa balik (reverse engineering) pada aplikasi dan game engine Android kompleks (Unreal Engine & Unity). Menganalisis instruksi biner ARM/ARM64, dekompilasi native shared library (.so) via IDA Pro & Ghidra, runtime memory inspection, function hooking, serta membedah mekanisme proteksi anti-tamper dan verifikasi integritas memori.',
    capabilities: [
      'Static & Dynamic Binary Disassembly',
      'Instruksi ARM & ARM64 Assembly',
      'Runtime Memory Hooking & Function Patching',
      'Analisis Anti-Tamper & Integritas Memori',
    ],
    stack: ['C/C++', 'ARM64 Assembly', 'IDA Pro', 'Ghidra', 'Frida', 'Linux Memory Inspection'],
  },
] as const
export const education = {
  institution: 'Universitas Nusantara PGRI Kediri',
  degree: 'Sarjana Sistem Informasi',
  period: '2021–2025',
  gpa: 'IPK 3,52 / 4,00',
  contributions: [
    {
      title: 'Pemateri Workshop Kebudayaan Digital Pusakakediri.com (2026)',
      category: 'PEMATERI RESMI DINAS',
      period: '2026',
      description:
        'Pemateri Workshop "Penguatan Peran Juru Pelihara dan Masyarakat dalam Pengembangan Kebudayaan secara Digital" oleh Disparbud Kabupaten Kediri untuk mengenalkan dan melatih operasional website Pusakakediri.com secara internal.',
    },
    {
      title: 'Juri Lomba Lawatan Budaya SMA/SMK se-Kabupaten Kediri',
      category: 'JURI RESMI PEMKAB',
      period: '2025',
      description:
        'Sertifikat resmi Kepala Dinas (No. 400.6.4.1/899/418.21/2025) sebagai Juri Lomba kegiatan "Lawatan Budaya SMA/SMK se-Kabupaten Kediri Tahun 2025" bertema "Kebangkitan Pemuda Kabupaten Kediri : Dulu, Kini, dan Nanti" di Kompleks Gedung Museum dan Kesenian.',
    },
    {
      title: 'Aplikasi Mobile "HortiKita" Bersertifikat HAKI',
      category: 'HAK CIPTA (HAKI) RESMI',
      period: '2025',
      verificationUrl:
        'https://hakcipta.dgip.go.id/legal/c/NTYyYTMyMGIwZTM3NmE5ZTNhOTM4YTEzYzlmNDA1YjM=',
      description:
        'Pencipta program komputer aplikasi mobile "HortiKita" (No. Permohonan EC002025088352, No. Pencatatan 000928613) yang resmi terdaftar dan memperoleh pelindungan Hak Cipta dari DJKI Kementerian Hukum Republik Indonesia.',
    },
    {
      title: 'Pemateri Workshop Mengenal WordPress & Instalasi CMS',
      category: 'SERTIFIKAT PEMATERI RESMI',
      period: '2023',
      description:
        'Sertifikat resmi (No. 11.033/SRT/HIMAPRODI-SI/UNP-Kdr/XII/2023) sebagai Pemateri kegiatan "Workshop Mengenal WordPress: Instalasi CMS untuk Pengembangan WEB" oleh HIMAPRODI SI Universitas Nusantara PGRI Kediri.',
    },
    {
      title: 'Asisten Dosen Praktek Dasar Pemrograman Web',
      category: 'SURAT KETERANGAN RESMI',
      period: '2023–2024',
      description:
        'Surat Keterangan resmi Dekan FTIK UNP Kediri (No. 0390/FTIK-UN PGRI Kd/C/XII/2023) penugasan sebagai Asisten Dosen mata kuliah Praktek Dasar Pemrograman Web (SIF1408) semester ganjil 2023/2024.',
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
export const evidenceItems = [
  {
    id: 'evidence-workshop-kampus',
    type: 'certificate',
    category: 'SERTIFIKAT PEMATERI',
    title: 'Sertifikat Pemateri Workshop Mengenal WordPress & CMS',
    issuer: 'HIMAPRODI SI UNP Kediri · No. 11.033/SRT/2023',
    year: '2023',
    image: '/assets/evidence/sertifikat-workshop-kampus.jpg',
    accent: 'yellow',
    description:
      'Sertifikat resmi apresiasi sebagai Pemateri kegiatan Workshop "Mengenal WordPress: Instalasi CMS untuk Pengembangan WEB" tertanggal 17 Desember 2023 oleh HIMAPRODI Sistem Informasi UNP Kediri.',
  },
  {
    id: 'evidence-juri-lawatan',
    type: 'certificate',
    category: 'SERTIFIKAT RESMI',
    title: 'Sertifikat Juri Lomba Lawatan Budaya SMA/SMK',
    issuer: 'Pemerintah Kabupaten Kediri · No. 400.6.4.1/899/2025',
    year: '2025',
    image: '/assets/evidence/sertifikat-juri-lawatan.jpg',
    accent: 'cyan',
    description:
      'Sertifikat penetapan resmi Kepala Dinas (No. 400.6.4.1/899/418.21/2025) sebagai Juri Lomba dalam kegiatan Lawatan Budaya SMA/SMK se-Kabupaten Kediri Tahun 2025.',
  },
  {
    id: 'evidence-haki-flutter',
    type: 'certificate',
    category: 'HAK CIPTA (HAKI)',
    title: 'Surat Pencatatan Hak Cipta Aplikasi Mobile "HortiKita"',
    issuer: 'DJKI Kementerian Hukum RI · No. 000928613',
    year: '2025',
    image: '/assets/evidence/sertifikat-haki-flutter.jpg',
    verificationUrl:
      'https://hakcipta.dgip.go.id/legal/c/NTYyYTMyMGIwZTM3NmE5ZTNhOTM4YTEzYzlmNDA1YjM=',
    accent: 'lime',
    description:
      'Pencatatan resmi Hak Cipta jenis Program Komputer "HortiKita" (Prasetyo Ari Wibowo, Sucipto dkk) dengan nomor pencatatan 000928613 yang terverifikasi dalam database DJKI Kemenkumham RI.',
  },
  {
    id: 'evidence-asisten-dosen',
    type: 'certificate',
    category: 'SURAT KETERANGAN RESMI',
    title: 'Surat Keterangan Asisten Dosen Pemrograman Web',
    issuer: 'FTIK Universitas Nusantara PGRI Kediri · No. 0390/FTIK/2023',
    year: '2023',
    image: '/assets/evidence/sertifikat-asisten-dosen.jpg',
    accent: 'pink',
    description:
      'Surat Keterangan resmi Dekan Fakultas Teknik & Ilmu Komputer UNP Kediri (No. 0390/FTIK-UN PGRI Kd/C/XII/2023) penugasan Asisten Dosen mata kuliah Praktek Dasar Pemrograman Web (SIF1408).',
  },
  {
    id: 'evidence-dokumentasi-disparbud',
    type: 'documentation',
    category: 'DOKUMENTASI PEMATERI',
    title: 'Dokumentasi Pemateri Kebudayaan Digital Pusakakediri.com',
    issuer: 'Dinas Pariwisata dan Kebudayaan Kabupaten Kediri · 2026',
    year: '2026',
    image: '/assets/evidence/dokumentasi-pemateri-disparbud.jpg',
    accent: 'yellow',
    description:
      'Dokumentasi foto bersama peserta dan jajaran dinas saat menjadi Pemateri Workshop "Penguatan Peran Juru Pelihara dan Masyarakat dalam Pengembangan Kebudayaan secara Digital" untuk pengenalan dan pelatihan teknis website Pusakakediri.com secara internal.',
  },
  {
    id: 'evidence-magang-polres',
    type: 'documentation',
    category: 'DOKUMENTASI MAGANG',
    title: 'Foto Bersama Penyerahan Sertifikat dengan Kepala TIK Polres',
    issuer: 'Kepolisian Resor (Polres) Kediri Kota · 2025',
    year: '2025',
    image: '/assets/evidence/dokumentasi-magang-polres.jpg',
    accent: 'cyan',
    description:
      'Dokumentasi resmi penyerahan sertifikat bersama Kepala Seksi Teknologi Informasi dan Komunikasi (TIK) Polres Kediri Kota atas penyelesaian praktik kerja monitoring website resmi.',
  },
] as const

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
