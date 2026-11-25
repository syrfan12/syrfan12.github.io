# Portofolio Syahid Al Irfan

Website portofolio statis untuk AI engineering, medical imaging, penelitian, dan proyek Syahid Al Irfan. Dibuat dengan HTML, CSS, dan JavaScript tanpa framework atau dependensi runtime. Tersedia bahasa Inggris dan Indonesia, navigasi responsif, tautan proyek/publikasi, serta unduhan CV.

## Preview lokal

Dengan Node.js versi 18 atau lebih baru:

```sh
npm run dev
```

Atau jalankan langsung tanpa npm:

```sh
node scripts/serve.mjs
```

Buka [preview lokal](http://127.0.0.1:4173). Tidak perlu `npm install` atau proses build. Hentikan server dengan `Ctrl+C`. Untuk port berbeda di PowerShell:

```powershell
$env:PORT = '8080'
node scripts/serve.mjs
```

## Hosting di GitHub Pages

1. Buat repository GitHub public. Gunakan nama `syrfan12.github.io` untuk alamat utama akun, atau nama lain seperti `portfolio` untuk website proyek.
2. Unggah seluruh isi folder proyek ke branch `main`, termasuk folder tersembunyi `.github` dan file `.nojekyll`. `index.html` harus berada di root repository, bukan dalam subfolder tambahan.
3. Buka **Settings → Pages → Build and deployment**. Pilih **GitHub Actions** sebagai **Source**.
4. Buka tab **Actions**, pilih **Deploy portfolio to GitHub Pages**, lalu **Run workflow** pada branch `main`. Push berikutnya ke `main` akan menjalankan deployment otomatis.
5. Tunggu workflow selesai. Alamat website tersedia pada deployment `github-pages` dan halaman **Settings → Pages**.

Alamat setelah deployment berhasil:

- Repository `syrfan12.github.io`: `https://syrfan12.github.io/`
- Repository `portfolio`: `https://syrfan12.github.io/portfolio/`

Tautan aset menggunakan path relatif agar kompatibel dengan kedua jenis alamat. Konfigurasi deployment hanya mengunggah `index.html`, `styles.css`, `app.js`, `.nojekyll`, dan `assets/`. Website ini belum otomatis dipublikasikan hanya dengan adanya file lokal.

Workflow mengikuti [dokumentasi resmi custom workflow GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Mengubah konten

- `index.html`: struktur halaman, konten, tautan, metadata SEO, dan teks alternatif gambar.
- `app.js`: interaksi website dan teks yang berubah saat mengganti bahasa. Perbarui padanan Inggris dan Indonesia bersamaan.
- `styles.css`: warna, tipografi, jarak, dan tata letak untuk desktop/mobile.
- `assets/`: gambar, ilustrasi, font jika ada, dan CV PDF. Saat mengganti nama file, sesuaikan tautannya di HTML.
- `.github/workflows/deploy.yml`: konfigurasi GitHub Pages. Sesuaikan `branches` jika menggunakan nama branch selain `main`.

Untuk memeriksa sintaks JavaScript:

```sh
npm run check
```

## Sumber profil

Konten disusun dari CV **Syahid Al Irfan — Medical AI Engineer Resume** yang diberikan pemilik dan profil publik berikut:

- [LinkedIn](https://www.linkedin.com/in/syahid-al-irfan-0868a7a8/)
- [GitHub](https://github.com/syrfan12)
- [ResearchGate](https://www.researchgate.net/profile/Syahid-Irfan)

Perbarui pengalaman, status pendidikan, publikasi, dan CV ketika ada perubahan. Tautan proyek mengarah ke sumber aslinya; website tidak membutuhkan API key, database, atau layanan backend.

Sumber publikasi dan penghargaan: [Sensors 2026](https://doi.org/10.3390/s26134080), [paper ACHI 2026](https://www.thinkmind.org/library/ACHI/ACHI_2026/achi_2026_1_40_20024.html), [Best Paper ACHI 2026](https://www.iaria.org/conferences2026/AwardsACHI26.html), [CORE-ReID V2](https://doi.org/10.3390/aisens1010004), dan [CNN R-SCUAD](https://doi.org/10.12928/biste.v2i1.985). LinkedIn ditautkan sebagai kontak; detail biografi terutama mengikuti CV karena akses otomatis LinkedIn terbatas.

Visualisasi ultrasound, antarmuka MedView, serta diagram proyek adalah ilustrasi konsep buatan untuk website ini, bukan data pasien atau screenshot aplikasi. Proyek tanaman diberi atribusi sebagai proyek tim. Font Manrope disimpan lokal dengan lisensi SIL Open Font License di `assets/Manrope-LICENSE.txt`.

CV unduhan adalah salinan lengkap dokumen yang diberikan, termasuk informasi kontak di dalamnya. Ubah `assets/Syahid-Al-Irfan-Resume.pdf` jika ingin menggunakan versi CV khusus publik.
