# Panduan agent — prasadev.id

Ikuti instruksi global `~/.omp/agent/AGENTS.md`. Proyek tunggal React + TypeScript,
bukan monorepo. Gunakan pnpm dan lockfile existing; jangan mengganti framework.

## Identitas dan sumber konten

Brand prasadev, pemilik Prasetyo Ari Wibowo, positioning Software Engineer.
Audiens klien dan recruiter, bahasa Indonesia Saya–Anda yang lugas. Pengalaman,
pendidikan, kontak, dan tujuh proyek berdasarkan CV pemilik serta persetujuan
percakapan: sudah lulus Sistem Informasi dan masih bekerja di RS Bhayangkara.
Semua instansi boleh disebut, tetapi tidak ada izin membuka data internal/pasien.
Jangan mengarang metrik, testimoni, teknologi proyek, SLA, tarif, status tersedia,
atau hasil kerja. Alamat rumah/PDF CV tidak otomatis menjadi unduhan publik.

Domain yang disepakati https://prasadev.id, belum dibeli. `site.publicationReady`
masih false dan menghasilkan noindex/nofollow. Ini kontrol kesiapan publikasi;
jangan membuka indexing, deploy, atau menambahkan canonical/schema tanpa scope.
Artikel di `src/content/drafts` belum disetujui dan tidak menjadi route publik.

## Stack dan batas

React 19, TypeScript 6, Vite 8, React Router Framework Mode 8.4, Tailwind 4,
Motion 13, Lenis 1.3, shadcn selektif/Radix, Lucide. Framework standar, bukan RSC.
`src/root.tsx` memiliki document, shell dan tema. `src/routes.ts` mengatur routes;
`react-router.config.ts` menggunakan ssr:false dan daftar prerender dari manifest.
Tidak ada server runtime, API, database, autentikasi, atau pengiriman form.

Data biasa bertipe di `src/content`; sections di `src/features/home`; kartu proyek
reusable di `src/features/projects`; routes menyusun halaman dan loader build.
Alias @ mengarah src. Button/Accordion existing digunakan selektif, utility cn.
State filter/menu lokal; tema di Layout tanpa persistence. React Router/native
anchor memiliki scroll; Lenis tidak mengambil alih anchors, touch tetap native,
dan smoothing dilepas saat reduced motion. Konten SSR tidak disembunyikan animasi.

Gaya Neo/Cyber-Brutalist tetap mengikuti `templates/code.html` dan screenshot:
Syne/Space Grotesk/JetBrains Mono, neon, border 2px, hard shadow. Template hanya
referensi desain historis, bukan sumber fakta personal. Token bersama di index.css.
Font lokal; gambar JPEG di `public/assets`. Portrait dan gambar proyek masih
ilustrasi sementara yang akan diganti pemilik, bukan foto/karya asli. Avatar lama
serta peta lama disimpan tetapi tidak ditampilkan. Jangan mengklaim lisensi gambar.

## Skill dan tool

Pilih otomatis sesuai concern: copywriting untuk copy baru; copy-editing untuk
penyuntingan; vercel-react-best-practices untuk React; frontend-design untuk
perombakan portofolio; impeccable untuk polish terfokus (jangan keduanya);
senior-frontend untuk state/interaksi; senior-architect untuk batas modul.
Baca skill relevan terlebih dahulu. Tidak perlu skill database/backend tanpa fitur.
CodeGraph untuk impact bila indeks tersedia; periksa freshness. LSP untuk simbol
jika tersedia. Context7 untuk API tidak pasti; jangan kirim data privat. Browser
OMP untuk visual. Tidak memasang tooling tambahan atau menyalakan Live Mode/hooks
secara otomatis. gh untuk GitHub bila diminta; commit/push perlu izin tersendiri.

## Commands dan verifikasi

Node >=22.22.0; diperiksa dengan Node24.19.0 dan pnpm10.33.0.

- `pnpm install --frozen-lockfile`: setup, bukan otomatis untuk pembacaan.
- `pnpm dev`: React Router dev.
- `pnpm typecheck`: typegen lalu tsc -b.
- `pnpm build`: typecheck lalu prerender ke build/client.
- `pnpm lint`: ESLint.
- `pnpm preview`: sirv build/client port4173 tanpa fallback SPA.

Restart preview setelah build ulang. Sembilan URL publik diprerender: homepage,
tujuh detail proyek, /404. Artikel listing hanya aktif jika manifest publikasi
berisi artikel yang disetujui. Tidak ada framework tes; jangan mengarang pnpm test.
Verifikasi perubahan dengan build/lint dan browser sesuai scope: 320px hingga
desktop, keyboard, tema, filter, FAQ, reduced motion, fallback gambar, HTML tanpa
JS, dan URL langsung. Jangan klik kontak atau kirim pesan saat verifikasi.
Gunakan data sintetis untuk pengujian; jangan mengakses layanan produksi sebagai setup.
