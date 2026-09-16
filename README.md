# prasadev

Portofolio Prasetyo Ari Wibowo — Software Engineer untuk pengembangan web dan mobile.
Konten profil, pengalaman, pendidikan, dan tujuh proyek bersumber dari CV yang disetujui pemilik.

## Pengembangan

Node >=22.22.0, pnpm. Stack: React, TypeScript, React Router Framework Mode,
Tailwind, shadcn selektif, Motion, Lenis, dan MDX.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

Build menjalankan typegen dan TypeScript sebelum prerender. Output `build/client`;
preview port 4173 tanpa SPA fallback. Restart preview setelah build ulang.

## Konten

- `src/content/site.ts`: identitas, kontak, layanan, pengalaman, pendidikan, FAQ.
- `src/content/projects.ts`: tujuh proyek beserta kontribusi dan fitur berdasarkan CV.
- `src/content/drafts/komponen-portofolio.mdx`: draf editorial, tidak dibundel atau dipublikasikan.
- `src/content/articles.ts`: manifest publikasi; kosong sampai artikel disetujui.

Halaman aktif: `/`, tujuh `/proyek/<slug>`, dan `/404`. Artikel tidak memiliki route
publik atau tautan navigasi selama manifest publikasi kosong.

## Aset dan kesiapan publikasi

Gambar lama telah diunduh sebagai JPEG ke `public/assets/`, agar manifest yang
digunakan config Node tetap berupa TypeScript murni tanpa import binary.
`portrait.jpg` dan `project-1.jpg` sampai `project-6.jpg` masih gambar sementara,
bukan foto pemilik atau dokumentasi proyek. Ganti file tersebut dengan gambar asli;
dua proyek terakhir sementara memakai `project-6.jpg`. Perbarui alt/caption setelah
penggantian. `previous-avatar-1.jpg` sampai `previous-avatar-3.jpg` dan
`previous-map.jpg` disimpan tetapi tidak digunakan; testimoni fiktif dan peta Jakarta
sudah tidak tampil. Asal gambar tidak memberikan klaim kepemilikan atau lisensi.

URL yang disepakati: https://prasadev.id; domain belum dibeli. `publicationReady`
masih false sehingga `noindex, nofollow` tetap berlaku sebagai kontrol publikasi.
Tidak ada canonical, sitemap, deployment, atau pengiriman pesan otomatis.
Alamat rumah dan PDF CV tidak disajikan sebagai aset publik.

Tema gelap/terang, filter kategori, menu keyboard, FAQ, dan reduced motion tetap
tersedia. Lenis tidak mengambil alih hash/ScrollRestoration; touch tetap native.
Referensi desain di `templates/` dipertahankan sebagai sumber historis, bukan konten situs.
