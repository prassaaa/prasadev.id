# prasadev.id — portofolio demo Stitch

Portofolio React + TypeScript dengan React Router Framework Mode, prerender statis,
Tailwind, komponen shadcn selektif, Motion, dan Lenis. Bukan aplikasi backend;
tidak ada form pengiriman, newsletter, atau layanan eksternal saat build konten.

## Menjalankan

Gunakan Node >=22.22.0 dan pnpm. Diverifikasi dengan Node 24.19.0/pnpm 10.33.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm build
pnpm lint
pnpm preview
```

`build` menjalankan typegen, TypeScript, lalu prerender. Output statis berada di
`build/client`. Preview tersedia pada port 4173 tanpa SPA fallback; setelah
build ulang, restart preview agar inventaris file sirv diperbarui.

## Halaman dan konten

- `/`: delapan section beranda, filter proyek, FAQ, tema, dan kontak.
- `/proyek/<slug>`: enam detail proyek dari `src/content/projects.ts`.
- `/artikel`: daftar dari `src/content/articles.ts`.
- `/artikel/membangun-komponen-portofolio-modular`: artikel MDX contoh.
- `/404`: halaman tidak ditemukan; wildcard menangani navigasi client.

Identitas, kontak, layanan, pengalaman, dan testimoni ada di
`src/content/site.ts`. Proyek dan artikel memiliki manifest TypeScript murni
untuk pemakaian bersama oleh halaman, route config, dan prerender.
Untuk artikel baru, tambahkan MDX tepercaya, module route yang mengimpor MDX,
dan entri manifest dengan `routeFile` yang sesuai. Jangan menerima MDX dari
pengunjung atau sumber tidak tepercaya.

`src/root.tsx` memiliki document/shell dan state tema; `src/routes` menyusun
halaman. Section beranda berada di `src/features/home`; ProjectCard digunakan
bersama oleh showcase dan detail. Token dan tipografi global ada di
`src/index.css`. Font Latin disajikan lokal melalui package Fontsource.

## Batas demo dan publikasi

Seluruh persona, metrik, proyek, testimoni, kontak, dan gambar merupakan contoh
Stitch, bukan data pribadi yang terverifikasi. `site.isDemo` menampilkan banner
dan `robots: noindex, nofollow`. Label artikel contoh dikontrol oleh
`article.isDemo`. Ganti dan verifikasi konten sebelum mengubah flag tersebut.
Domain, canonical, sitemap, structured data, dan deployment belum ditetapkan.

Sebelas gambar tetap menggunakan URL eksternal template; tidak ada klaim
kepemilikan/lisensi. Kegagalan gambar menampilkan fallback berlabel dengan rasio
tetap, termasuk ketika request gagal sebelum hydration. Kontak WhatsApp/email
dan sosial berlabel contoh; jangan mengirim pesan untuk pengujian.

Preview mengembalikan HTTP 404 untuk URL yang tidak dibangun. React Router juga
menghasilkan `__spa-fallback.html`, tetapi preview tidak memakainya untuk
menutupi URL tidak dikenal. Aturan HTTP 404 pada hosting perlu ditentukan
sesuai host; tidak ada deployment yang dilakukan.

## Interaksi dan pemeriksaan

Tema awal gelap; toggle bertahan lintas navigasi client dan reset saat reload.
Motion menghormati reduced motion; ticker memiliki kontrol jeda. Lenis dipasang
setelah hydration, dilepas ketika reduced motion aktif, dan tidak mengambil
alih anchor maupun ScrollRestoration. Touch tetap native.

Verifikasi mencakup build/lint, sepuluh URL prerender, metadata HTML, pembacaan
tanpa JavaScript, viewport desktop/tablet/mobile, filter dan FAQ keyboard,
menu/fokus, Back/hash, reduced motion, serta fallback gambar. Tidak ada framework
tes UI permanen. Source referensi dalam `templates/` tidak dimodifikasi.
