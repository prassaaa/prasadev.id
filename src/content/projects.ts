export type Project = {
  slug: string
  title: string
  category: 'web' | 'systems' | 'mobile'
  categoryLabel: string
  client: string
  period: string
  description: string
  context: string
  contributions: string[]
  features: string[]
  tags: string[]
  image: { src: string; alt: string }
}

export const projects: Project[] = [
  {
    slug: 'simrs-bhayangkara',
    title: 'SIMRS & Aplikasi Android Bhayangkara',
    category: 'systems',
    categoryLabel: 'Sistem Operasional',
    client: 'Rumah Sakit Bhayangkara Kediri',
    period: 'Desember 2025 – sekarang',
    description:
      'Saya mengembangkan SIMRS berbasis web untuk data pasien, rekam medis, dan administrasi, serta aplikasi Android yang terhubung dengan backend API.',
    context:
      'Rumah Sakit Bhayangkara Kediri melayani anggota kepolisian, keluarga, dan masyarakat umum. Pekerjaan saya mencakup sistem web dan aplikasi mobile untuk kebutuhan layanan rumah sakit.',
    contributions: [
      'Mengembangkan dan mengimplementasikan SIMRS dengan pengelolaan data pasien, rekam medis, dan administrasi yang terintegrasi.',
      'Mengoptimalkan input data, validasi stok, dan kontrol transaksi.',
      'Membangun sistem secara modular agar dapat disesuaikan dengan kebutuhan tiap divisi.',
      'Mengembangkan dan merilis aplikasi Android di Google Play Store, serta mengintegrasikannya dengan backend API.',
    ],
    features: [
      'Data pasien dan rekam medis',
      'Administrasi rumah sakit',
      'Validasi stok dan kontrol transaksi',
      'Sinkronisasi data aplikasi Android melalui API',
    ],
    tags: ['Android', 'API'],
    image: {
      src: '/assets/project-1.jpg',
      alt: 'Ilustrasi sementara untuk proyek sistem rumah sakit',
    },
  },
  {
    slug: 'sistem-operasional-innapack',
    title: 'Sistem Operasional Innapack',
    category: 'systems',
    categoryLabel: 'Sistem Operasional',
    client: 'PT. Trimitra Indoplast Mandiri (Innapack)',
    period: 'September 2025 – April 2026',
    description:
      'Saya mengembangkan sistem Laravel–React dengan dashboard analitik, pelaporan real-time, validasi stok, dan kontrol transaksi untuk kebutuhan operasional Innapack.',
    context:
      'Innapack adalah perusahaan manufaktur kemasan fleksibel berbasis film LLDPE di Cikarang. Sistem dikembangkan secara modular untuk kebutuhan operasional tiap divisi.',
    contributions: [
      'Mengimplementasikan arsitektur full-stack Laravel–React.',
      'Menyediakan dashboard analitik dan pelaporan real-time untuk manajemen.',
      'Mengoptimalkan input data, validasi stok, dan kontrol transaksi.',
      'Mengembangkan struktur modular agar sistem dapat disesuaikan dengan kebutuhan tiap divisi.',
    ],
    features: ['Dashboard analitik', 'Pelaporan real-time', 'Validasi stok', 'Kontrol transaksi'],
    tags: ['Laravel', 'React'],
    image: {
      src: '/assets/project-2.jpg',
      alt: 'Ilustrasi sementara untuk proyek sistem operasional manufaktur',
    },
  },
  {
    slug: 'koperasi-merah-putih',
    title: 'Koperasi Merah Putih — Web & Mobile',
    category: 'mobile',
    categoryLabel: 'Aplikasi Mobile',
    client: 'Dinas Koperasi dan Usaha Mikro Kabupaten Tangerang',
    period: 'Oktober 2025 – Desember 2025',
    description:
      'Saya mengembangkan sistem koperasi berbasis Laravel dan aplikasi Flutter untuk layanan anggota, transaksi simpan pinjam, serta laporan keuangan.',
    context:
      'Sistem Koperasi Merah Putih dikembangkan untuk kebutuhan Dinas Koperasi dan Usaha Mikro Kabupaten Tangerang. Website dan aplikasi mobile terhubung melalui API Laravel.',
    contributions: [
      'Merancang dan mengembangkan website koperasi secara full-stack menggunakan Laravel.',
      'Membangun dan mengintegrasikan RESTful API untuk komunikasi data antar sistem.',
      'Mengembangkan aplikasi Flutter yang terhubung dengan API Laravel untuk akses layanan anggota melalui perangkat mobile.',
      'Mengoptimalkan performa dan keamanan melalui autentikasi, validasi data, serta penanganan error yang mudah dipahami.',
      'Berkolaborasi dengan tim untuk menyesuaikan solusi teknis dengan kebutuhan bisnis koperasi.',
    ],
    features: [
      'Manajemen anggota',
      'Transaksi simpan pinjam',
      'Laporan keuangan',
      'Akses layanan anggota melalui aplikasi mobile',
    ],
    tags: ['Laravel', 'Flutter', 'RESTful API'],
    image: {
      src: '/assets/project-3.jpg',
      alt: 'Ilustrasi sementara untuk proyek aplikasi koperasi',
    },
  },
  {
    slug: 'ambulans-dan-donasi',
    title: 'Pemesanan Ambulans & Kampanye Donasi',
    category: 'web',
    categoryLabel: 'Website',
    client: 'Yayasan Wahdah Inisiatif Kebaikan',
    period: 'Mei 2025 – Agustus 2025',
    description:
      'Saya membangun sistem pemesanan ambulans dan kampanye donasi dari awal, termasuk API penjadwalan serta integrasi payment gateway nasional.',
    context:
      'Yayasan Wahdah Inisiatif Kebaikan di Bandung bergerak di bidang kemanusiaan dan pemberdayaan lingkungan. Pekerjaan ini mencakup layanan pemesanan ambulans dan penggalangan dana online.',
    contributions: [
      'Membangun sistem pemesanan ambulans dari awal beserta API untuk pemesanan dan penjadwalan.',
      'Mengimplementasikan antarmuka responsif untuk pengguna dan admin.',
      'Membangun sistem kampanye donasi agar admin dapat membuat dan mempublikasikan program penggalangan dana.',
      'Mengintegrasikan payment gateway nasional untuk donasi online.',
    ],
    features: [
      'Pemesanan dan penjadwalan ambulans',
      'Antarmuka pengguna dan admin',
      'Publikasi kampanye donasi',
      'Pembayaran donasi online',
    ],
    tags: ['API', 'Payment Gateway'],
    image: {
      src: '/assets/project-4.jpg',
      alt: 'Ilustrasi sementara untuk proyek layanan ambulans dan donasi',
    },
  },
  {
    slug: 'aplikasi-operasional-asm',
    title: 'Website & Aplikasi Operasional ASM',
    category: 'systems',
    categoryLabel: 'Sistem Operasional',
    client: 'PT. ASM Tunas Muda',
    period: 'April 2025 – Juli 2025',
    description:
      'Saya mengembangkan website profil perusahaan, chatting internal real-time, manajemen inventaris, dan sistem kasir web yang terintegrasi dengan stok.',
    context:
      'PT. ASM Tunas Muda di Batam bergerak di bidang teknologi informasi. Kontribusi saya mencakup beberapa aplikasi web untuk profil perusahaan, komunikasi internal, persediaan, dan transaksi.',
    contributions: [
      'Membangun website profil perusahaan yang responsif dengan pendekatan mobile-first.',
      'Mengembangkan aplikasi chatting internal real-time berbasis socket dengan login multi-user, notifikasi pesan, dan riwayat percakapan.',
      'Merancang dan mengembangkan sistem inventaris dengan input stok, pengurangan saat transaksi, laporan bulanan, dan notifikasi stok menipis.',
      'Membangun kasir berbasis web dengan pemindaian produk, pencatatan transaksi, cetak struk, serta laporan harian dan bulanan.',
      'Mengintegrasikan kasir dengan inventaris untuk sinkronisasi stok otomatis.',
    ],
    features: [
      'Profil, layanan, galeri proyek, dan formulir inquiry',
      'Chatting internal real-time',
      'Manajemen dan laporan stok',
      'Kasir web terintegrasi inventaris',
    ],
    tags: ['Socket'],
    image: {
      src: '/assets/project-5.jpg',
      alt: 'Ilustrasi sementara untuk proyek aplikasi operasional perusahaan',
    },
  },
  {
    slug: 'pariwisata-kediri',
    title: 'Website Pariwisata & Kebudayaan Kediri',
    category: 'web',
    categoryLabel: 'Website',
    client: 'Dinas Pariwisata dan Kebudayaan Kabupaten Kediri',
    period: 'Februari 2025 – April 2025',
    description:
      'Saya mengembangkan dan memelihara website resmi dinas untuk informasi destinasi wisata dan kegiatan kebudayaan, dengan kalender event, galeri, serta layanan publik.',
    context:
      'Website Dinas Pariwisata dan Kebudayaan Kabupaten Kediri menjadi media informasi wisata, kebudayaan, dan komunikasi layanan kepada masyarakat.',
    contributions: [
      'Mengembangkan dan memelihara website resmi Dinas Pariwisata dan Kebudayaan Kabupaten Kediri.',
      'Mengimplementasikan kalender event, galeri multimedia, reservasi tur, dan formulir layanan publik.',
      'Bekerja sama dengan tim desain dan konten untuk menjaga tampilan informatif serta konsistensi identitas visual daerah.',
    ],
    features: [
      'Informasi destinasi wisata dan kebudayaan',
      'Kalender event',
      'Galeri multimedia',
      'Reservasi tur dan formulir layanan publik',
    ],
    tags: [],
    image: {
      src: '/assets/project-6.jpg',
      alt: 'Ilustrasi sementara untuk proyek website pariwisata',
    },
  },
  {
    slug: 'bumdes-wonorejo',
    title: 'Website & Layanan BUMDes Wonorejo',
    category: 'web',
    categoryLabel: 'Website',
    client: 'Badan Usaha Milik Desa Wonorejo, Kabupaten Kediri',
    period: 'Oktober 2024 – Desember 2024',
    description:
      'Saya membangun website BUMDes Wonorejo dengan informasi usaha dan kegiatan desa, manajemen produk UMKM, serta sistem pemesanan sederhana.',
    context:
      'BUMDes Wonorejo mengelola usaha desa dan layanan masyarakat. Website dikembangkan bersama pengurus BUMDes dan perangkat desa untuk mendukung kebutuhan usaha dan informasi publik.',
    contributions: [
      'Merancang dan membangun website resmi BUMDes Wonorejo dengan antarmuka responsif untuk berbagai perangkat.',
      'Mengintegrasikan berita desa, profil usaha, laporan kegiatan, dan kontak layanan.',
      'Mengimplementasikan manajemen produk UMKM dan sistem pemesanan sederhana.',
      'Berkolaborasi dengan pengurus BUMDes dan perangkat desa untuk menyesuaikan sistem dengan kebutuhan lokal.',
    ],
    features: [
      'Berita desa dan profil usaha',
      'Laporan kegiatan dan kontak layanan',
      'Manajemen produk UMKM',
      'Pemesanan sederhana',
    ],
    tags: [],
    image: { src: '/assets/project-6.jpg', alt: 'Ilustrasi sementara untuk proyek website BUMDes' },
  },
]
