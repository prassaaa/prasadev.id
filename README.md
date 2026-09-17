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
`pras.webp` adalah foto pemilik (Prasetyo Ari Wibowo). `favicon.svg`/`icons.svg`
adalah logo situs (favicon tab dan logo header/footer), `og.png` dipakai sebagai
gambar Open Graph. `project-1.jpg` sampai
`project-6.jpg` masih gambar sementara, bukan dokumentasi proyek; ganti file
tersebut dengan tangkapan layar asli dan perbarui alt di `src/content/projects.ts`;
dua proyek terakhir sementara memakai `project-6.jpg`. `previous-avatar-1.jpg`
sampai `previous-avatar-3.jpg` dan `previous-map.jpg` disimpan tetapi tidak
digunakan. Asal gambar tidak memberikan klaim kepemilikan atau lisensi.

URL yang disepakati: https://prasadev.id; domain belum dibeli. `publicationReady`
masih false sehingga `noindex, nofollow` tetap berlaku sebagai kontrol publikasi.
Metadata SEO (canonical, Open Graph, Twitter, JSON-LD) memakai `site.url`;
`public/sitemap.xml` digenerate dari manifest konten saat build, dan
`public/robots.txt` menunjuk sitemap tersebut. Belum ada deployment atau
pengiriman pesan otomatis.
Alamat rumah dan PDF CV tidak disajikan sebagai aset publik.

Tema gelap/terang, filter kategori, menu keyboard, FAQ, dan reduced motion tetap
tersedia. Lenis tidak mengambil alih hash/ScrollRestoration; touch tetap native.
Referensi desain di `templates/` dipertahankan sebagai sumber historis, bukan konten situs.
