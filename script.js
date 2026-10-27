/* =====================================================================
  PORTOFOLIO — JS (UPGRADED)
  Semua tempat yang perlu kamu isi ditandai "GANTI DI SINI"
===================================================================== */

document.getElementById('yearNow') && (document.getElementById('yearNow').textContent = new Date().getFullYear());

/* =====================================================================
  1) DATA — GANTI DI SINI  (link kamu yang sudah ada, dipertahankan)
===================================================================== */

// GANTI DI SINI: gambar utama (background) Halaman 1 — tampil penuh selalu
const PAGE1_BG_IMG = 'https://i.imgur.com/fAORhp0.jpeg';

// GANTI DI SINI: gambar ke-2 Halaman 1 — cuma kelihatan di dalam bulatan
// noise yang mengikuti kursor (efeknya mirip Profil 1, tanpa 3D)
const PAGE1_OVERLAY_IMG = 'https://i.imgur.com/dkbwUaL.jpeg';

// GANTI DI SINI: radius bulatan noise (px) yang mengikuti kursor di Halaman 1
const CURSOR_SPOT_RADIUS = 150;

// GANTI DI SINI: tombol START NOW — png1 = kondisi normal, png2 = saat
// kursor datang (muncul dengan efek wipe kiri ke kanan)
const START_BTN_DEFAULT_IMG = 'https://i.imgur.com/4ubMm6V.png';
const START_BTN_HOVER_IMG = 'https://i.imgur.com/3vlXytg.png';

const CIRCLE_BTN_IMG   = '';
const CIRCLE_POPUP_IMG = '';

// PROFILE_SLIDES[0] dipakai khusus untuk PROFIL 1 (tumpukan 3 gambar):
// bg = gambar 1 (background), overlay = gambar 2 (orang, langsung tampil),
// overlay2 = gambar 3 (teks, baru muncul setelah tombol "tap to know me"
// diklik & gif transisi selesai — lihat PROFILE1_TAP_BTN_IMG &
// PROFILE1_TRANSITION_GIF di bawah). PROFILE_SLIDES[2] tetap dipakai apa
// adanya untuk Profil 2.
const PROFILE_SLIDES = [
  { bg: 'https://i.imgur.com/lS63uv5.png', overlay: 'https://i.imgur.com/pHZsp6z.png', overlay2: 'https://i.imgur.com/6cBjlQk.png' },
  { bg: 'https://i.imgur.com/E11DUKg.png', overlay: '', overlay2: '' },
  { bg: 'https://i.imgur.com/7ACj9T8.png', overlay: 'https://i.imgur.com/5c8cgBp.png', overlay2: 'https://i.imgur.com/c5mSTvt.png' },
];

// GANTI DI SINI: PNG tombol "tap to know me" (menggantikan teks) — muncul
// di tengah tumpukan Profil 1. Ukurannya diatur lewat --tap-btn-w di
// style.css (cari komentar ".profile-tap-btn"). Rasio yang disarankan: 1:1
// (persegi, mis. 300x300px), PNG background transparan.
const PROFILE1_TAP_BTN_IMG = 'https://i.imgur.com/4BJqbyM.png';

// GANTI DI SINI: GIF yang diputar sesaat setelah tombol di atas diklik,
// sebelum gambar 3 (teks) muncul. Sama seperti gambar lain, sebaiknya
// rasio/ukuran gif ini full 1 layar juga (object-fit:cover otomatis).
const PROFILE1_TRANSITION_GIF = 'https://i.imgur.com/Lp5W8Gg.gif';

// GANTI DI SINI: durasi gif di atas diputar (milidetik) sebelum gambar 3
// muncul. Samakan kira-kira dengan panjang 1x putaran gif kamu.
const PROFILE1_GIF_DURATION = 1200;

// GANTI DI SINI: 3 icon bulat untuk popup "Contact Me" (untuk sekarang dikasih contoh icon random)
const CONTACT_LINKS = [
  { icon: 'https://i.imgur.com/ZDU70vH.png', link: 'mailto:rafiadhi02@gmail.com' },
  { icon: 'https://i.imgur.com/uwXoHx3.png', link: 'https://www.behance.net/raffiadhiba' },
  { icon: 'https://i.imgur.com/8jshDJU.png', link: 'https://www.instagram.com/rafiadhibtr/' },
];

// GANTI DI SINI: PNG tombol "Contact Me" buatanmu sendiri (menggantikan teks)
const CONTACT_TOGGLE_IMG = 'https://i.imgur.com/gR3RlSO.png';

// GANTI DI SINI: PNG setengah lingkaran buatanmu sendiri untuk tombol reveal closing1
const CLOSING1_BTN_IMG = 'https://i.imgur.com/DBGYa9g.png';

// GANTI DI SINI: gambar background yang muncul saat closing1RevealBtn diklik
// (referensi: langit mendung + siluet biru jatuh)
const CLOSING1_REVEAL_IMG = 'https://i.imgur.com/cedM7GN.png';

// GANTI DI SINI: halaman popup buat tiap teks di closing1 (How I Work /
// Services & Pricing). Diklik -> buka popup yang sama kayak Design Archive,
// bisa banyak gambar per teks (di-scroll ke bawah kalau lebih dari 1).
// "link" di tiap gambar OPSIONAL.
// CATATAN: "Experience / Clients" TIDAK lagi pakai gambar -- dia membuka
// halaman "Selected Brands" (HTML) yang logonya diatur di BRAND_LOGOS di bawah.
const CLOSING1_LINE_PAGES = {
  howiwork: [
    { bg: '', link: '' },
  ],
  services: [
    { bg: '', link: '' },
  ],
};

// GANTI DI SINI: logo brand di halaman "Experience / Clients" (Selected Brands).
// Ada 25 kotak, tiap kotak = 1 baris { name, file, link }. Isi satu per satu:
//   name : nama brand (dipakai untuk teks alt / aksesibilitas)
//   file : link PNG logo (mis. link imgur). Kosong ('') = tampil placeholder "+ Logo"
//   link : (opsional) link tujuan saat kotak diklik (website / Instagram brand),
//          dibuka di tab baru. Kosong ('') = kotak tidak bisa diklik.
// Mau tambah/kurangi kotak? Tambah/hapus barisnya saja, grid menyesuaikan sendiri.
// Ukuran PNG yang disarankan: 512 x 512 px, persegi. Gambar akan MENUTUPI
// seluruh kotak (rounded ikut terpotong otomatis), jadi buat desainnya full-bleed.
const BRAND_LOGOS = [
  { name: 'Brand 1', file: 'https://i.imgur.com/Ibdckn8.png', link: '' },
  { name: 'Brand 2', file: 'https://i.imgur.com/MJI4juL.png', link: '' },
  { name: 'Brand 3', file: 'https://i.imgur.com/iTDxSk5.png', link: '' },
  { name: 'Brand 4', file: 'https://i.imgur.com/GSTrTqZ.png', link: '' },
  { name: 'Brand 5', file: 'https://i.imgur.com/xDTAVKp.png', link: '' },
  { name: 'Brand 6', file: 'https://i.imgur.com/FQfI3df.png', link: '' },
  { name: 'Brand 7', file: 'https://i.imgur.com/epm9xED.png', link: '' },
  { name: 'Brand 8', file: 'https://i.imgur.com/h9wmWqZ.png', link: '' },
  { name: 'Brand 9', file: 'https://i.imgur.com/kXgdbHr.png', link: '' },
  { name: 'Brand 10', file: 'https://i.imgur.com/gOitfMK.png', link: '' },
  { name: 'Brand 11', file: 'https://i.imgur.com/lDccu0A.png', link: '' },
  { name: 'Brand 12', file: 'https://i.imgur.com/jgk6lak.png', link: '' },
  { name: 'Brand 13', file: 'https://i.imgur.com/ItsDaNV.png', link: '' },
  { name: 'Brand 14', file: 'https://i.imgur.com/DSp2mPM.png', link: '' },
  { name: 'Brand 15', file: 'https://i.imgur.com/uioT7b6.png', link: '' },
  { name: 'Brand 16', file: 'https://i.imgur.com/Fly3nUN.png', link: '' },
  { name: 'Brand 17', file: 'https://i.imgur.com/HanUXRj.png', link: '' },
  { name: 'Brand 18', file: 'https://i.imgur.com/L1g6ueu.png', link: '' },
  { name: 'Brand 19', file: 'https://i.imgur.com/eiG8Z24.png', link: '' },
  { name: 'Brand 20', file: 'https://i.imgur.com/wMVOxZU.png', link: '' },
  { name: 'Brand 21', file: 'https://i.imgur.com/rc3TCAB.png', link: '' },
  { name: 'Brand 22', file: 'https://i.imgur.com/WbOHx33.png', link: '' },
  { name: 'Brand 23', file: 'https://i.imgur.com/O6usLdh.png', link: '' },
  { name: 'Brand 24', file: 'https://i.imgur.com/swLiI0p.png', link: '' },
  { name: 'Brand 25', file: 'https://i.imgur.com/c5Ysj7j.png', link: '' },
];

/* =====================================================================
  HALAMAN 3 — RIWAYAT (foto laptop/buku/kamera)
  Ke-4 gambar di bawah HARUS ukuran & rasio yang sama (kamu sudah samakan
  ini dengan gambar 1) supaya tidak "loncat" pas berganti.
===================================================================== */
const HISTORY_IMG_BASE   = 'https://i.imgur.com/SFMuNNJ.png'; // foto utama: laptop + buku + kamera, kondisi normal
const HISTORY_IMG_LAPTOP = 'https://i.imgur.com/x9RfFGl.png'; // foto saat area laptop di-hover/diklik
const HISTORY_IMG_CAMERA = 'https://i.imgur.com/2xq8ysk.png'; // foto saat area kamera di-hover/diklik
const HISTORY_IMG_BOOK   = 'https://i.imgur.com/C6uSgUY.png'; // foto saat area buku di-hover/diklik

// GANTI DI SINI: daftar pengalaman kerja (laptop). Urutan sesuai urutan array.
const WORK_EXPERIENCE = [
  { role: 'Intern Editor Video', company: 'PT BBS TV', desc: 'Editing TV programs and various news segments.' },
  { role: 'Photographer & Editor', company: 'CV ARTISTIC PHOTO', desc: 'Documenting events, weddings, and graduations, and creating video and photo content through editing.' },
  { role: 'Content Creator & Editor', company: 'PT FAST PRINT INDONESIA', desc: 'Creating content for YouTube and appearing on-camera as a talent in the videos.' },
  { role: 'Freelance Design Graphic', company: 'BANTUJUANMU.ID', desc: 'Creating designs focused on brand identity and business growth.' },
  { role: 'Content Creator', company: 'PT RAISE INFINITY GLOBAL', desc: 'Creating video content and designs for several local fashion brands.' },
  { role: 'Photographer & Editor', company: 'PUKUDATA VISUAL', desc: 'Documenting events, weddings, and graduations, and creating video and photo content through editing.' },
  { role: 'Content Creator', company: 'RAFI ADHI', desc: 'This is my personal account, where I frequently create content featuring educational material, showreels, and behind-the-scenes looks at my projects.' },
  { role: 'Clothing Designer', company: 'MAJERROU', desc: 'Designing casual wear for a local brand.' },
  { role: 'Editor Video', company: 'WARKO CREATIVE', desc: 'Editing content for several brands focused on electronics.' },
  { role: 'Design Graphic', company: 'APK CREATIVE', desc: 'Designing for multiple brands and growing the business through a remote work system.' },
  { role: 'Freelance Design Graphic', company: 'RAFI ADHI', desc: 'Taking on remote freelance graphic design work for several brands.' },
];

// GANTI DI SINI: daftar riwayat sekolah (buku) — cuma 4 baris
const SCHOOL_HISTORY = [
  { name: 'SD Raden Patah', place: 'Surabaya' },
  { name: 'SMP Negeri 20', place: 'Surabaya' },
  { name: 'SMK Negeri 1 Surabaya', place: 'Broadcasting Department' },
  { name: 'Universitas Dr Soetomo', place: 'Surabaya - Communication Studies' },
];

// GANTI DI SINI: daftar skill kamu (tab "Skills" di panel kamera)
const SKILLS_LIST = [
  'Videography',
  'Photography',
  'Graphic Design',
  'Video Editing',
  'Content Writing',
];

// GANTI DI SINI: daftar software yang kamu bisa (tab "Software" di panel kamera)
const SOFTWARE_LIST = [
  'Adobe Premiere Pro',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'CapCut',
  'DaVinci Resolve',
];

// GANTI DI SINI: gambar 2 kotak pilihan di Halaman 4 (kiri = Design Archive,
// kanan = Content Archive). Boleh PNG/JPG, rasio bebas (otomatis cover).
const CHOOSE_LEFT_IMG  = 'https://i.imgur.com/GPcUkPa.png';
const CHOOSE_RIGHT_IMG = 'https://i.imgur.com/hBjzqxy.png';

const BACK_ICON = 'https://i.imgur.com/rfxoqAE.png';

// GANTI DI SINI: gambar & halaman detail buat 9 kategori Design Archive.
//   bg    = gambar background besar yang muncul di belakang saat teks
//           kategori itu di-hover (kalau tidak ada yang di-hover, otomatis
//           balik ke abu-abu gelap polos)
//   pages = daftar gambar yang muncul waktu teksnya diklik (buka 1 halaman
//           panjang, bisa di-scroll ke bawah) -- boleh nambah berapa pun
//           objek { bg, link } di dalam array-nya, tinggal copy-paste
//           barisnya. "link" di tiap gambar OPSIONAL, kosongin '' kalau
//           gambar itu tidak perlu bisa diklik ke link luar.
const DESIGN_ARCHIVE_CATEGORIES = {
  logo: {
    bg: 'https://i.imgur.com/0LDnTA8.png',
    pages: [
      { bg: '', link: '' },
    ],
  },
  brand: {
    bg: '',
    pages: [
      { bg: '', link: '' },
    ],
  },
  poster: {
    bg: '',
    pages: [
      { bg: '', link: '' },
    ],
  },
  socialmedia: {
    bg: '',
    pages: [
      { bg: '', link: '' },
    ],
  },
  carousel: {
    bg: '',
    pages: [
      { bg: '', link: '' },
    ],
  },
  advertisement: {
    bg: '',
    pages: [
      { bg: '', link: '' },
    ],
  },
  campaign: {
    bg: '',
    pages: [
      { bg: '', link: '' },
    ],
  },
  packaging: {
    bg: '',
    pages: [
      { bg: '', link: '' },
    ],
  },
  digitalimaging: {
    bg: '',
    pages: [
      { bg: '', link: '' },
    ],
  },
};

// GANTI DI SINI: CONTENT ARCHIVE (kolom kanan "Content Creator") — kode baru.
// Datanya diatur di blok di bawah ini: BRAND (teks kecil di atas halaman),
// COVER (setelan video cover kartu), dan D (daftar kategori + video tiap kategori).
// Logic-nya ada di bagian "14) KOTAK KANAN — CONTENT ARCHIVE" di bawah.
/* ============ EDIT BAGIAN INI ============ */
const BRAND = {
  left: "RAFIADHI",      // teks kecil kiri atas
  right: "PORTFOLIO",    // teks kecil kanan atas
  logo: "",              // contoh "assets/logo.png" (kosong = tidak tampil)
  intro: "An archive of short-form videos: UGC, commercial, product, and personal work."
};

/* Pengaturan cover (video pendek yang berulang di kartu)
   sec = lama cover (detik) | width = lebar video cover (px) | optimize = true: Cloudinary memotong, mengecilkan, & mengubah ke mp4.
   Kartu menampilkan gambar statis (diambil otomatis dari cover) dan baru memutar cover saat kursor datang.
   Di HP/tablet (tanpa kursor) cover diputar otomatis saat terlihat.
   Kalau cover tidak tampil, coba optimize: false (memakai file asli apa adanya). */
const COVER = { sec: 2, width: 1080, optimize: true, frame: 1 };   // 1080 = Full HD   // frame = detik ke berapa gambar statis kartu diambil dari cover

/* A(judul, sub teks, link, cover, poster)
   link   : Google Drive (atau TikTok / YouTube / Instagram) -> dibuka saat kartu diklik
   cover  : video Cloudinary untuk kartu. Boleh link penuh, atau cukup bagian setelah "/video/upload/"
            contoh: "v1793001431/1026_1_3_j4abj1.mov"
   poster : gambar sampul opsional (tampil sebelum cover dimuat) */
const A = (title, sub, url, cover = "", poster = "") => ({ title, sub, url, cover, poster });
const CL = "https://res.cloudinary.com/deqtu9q5f/video/upload/";
const DR = id => `https://drive.google.com/file/d/${id}/view`;
const TK = (u, id) => `https://www.tiktok.com/@${u}/video/${id}`;
const IG = p => `https://www.instagram.com/${p}/`;
const PB = "panarybody_shoes", SN = "snohund.id";

const D = [
  ["UGC", [
    A("Too Creative", "Comedy content for Panarybody", DR("1GBHGMqNABO2XyxAIstWpxzB_r8Ebv2IT"), "v1793001431/1026_1_3_j4abj1.mov"),
    A("Thought It Was Full", "Comedy content for Boemi", DR("1Pgo9Lz8CfD4aCxELNsuUNjvPBnsVUOxP"), "v1793001432/1026_1_pt3qfs.mov"),
    A("Make Sense", "Comedy content for Panarybody", DR("1jFaqYUuQqzDk0qBY0RtYsR0X28vxyWS5"), "v1793001431/1026_1_-copy_qby9dp.mov"),
    A("Nowhere to Go", "Comedy content for Boemi", DR("1ju9hrHFFdyxyN2c8WEr5-4-Nb_-cMswW"), "v1793001536/1026_1_-copy_2_rw7y9y.mov"),
    A("Made for Gen Z", "Comedy content for Panarybody", DR("1NBKpGkGdeaTAUvgxrxh5av2N8Ao1b-PT"), "v1793001431/1026_1_1_aota6a.mov"),
    A("So Confused", "Comedy content for Boemi", DR("1_J-pejVtBMzIgSikEClZypZtaBZYHkxT"), "v1793001537/1026_1_-copy_5_x8ipl2.mov"),
    A("Keep Strong", "Comedy content for Boemi", DR("1P-sxr4HFllBRJ-DaZu9XEtt133wX7U6n"), "v1793001536/1026_1_-copy_1_g0nduq.mov"),
    A("Its Weird", "Comedy content for Panarybody", DR("1ye8pRG3j9tj0wmJzyiw5FzEDa1c2dGIb"), "v1793001440/1026_1_2_d0bjy9.mov"),
    A("Miss Focus", "Comedy content for Boemi", DR("16YqM2pYWgoYTveU1ywBpffi5U5lvvI6D"), "v1793001536/1026_1_-copy_3_dajczz.mov"),
    A("Wait! What?", "Comedy content for Boemi", DR("1j3xvlRHO58CNejhPgu-3QljEV5nZ16xl"), "v1793001536/1026_1_-copy_4_gsjycs.mov")
  ]],
  ["Commercial", [
    A("Lintar & Dewi", "Cinematic wedding film", DR("1UK4a3t8Ol_bPT9mlaKRrYvJZpIMITfYm"), "v1793006666/1026_1_-copy_14_cwpgxo.mov"),
    A("Techwear Jacket", "Collaboration with Renaldy", DR("1owtLUYlAPRH9Wt4myZ8Vhn1P0nL0Vo1W"), "v1793007349/1026_1_-copy_15_i20lyo.mov"),
    A("Smaniw Event", "Cinematic event film", DR("12UuTDI_-Ox_RdEonVjTQi3AGdG5pYWoj"), "v1793007602/1026_1_-copy_16_zn305i.mov"),
    A("The Lincoln Story", "A story of perseverance and never giving up", DR("1jHB28qSqCkCMJF4a4Gsar7CB7q5zCokb"), "v1793074099/1026_1_-copy_18_ebfu2s.mov"),
    A("Dian & Diski", "Cinematic wedding film", DR("1M-w5cSxGBWeJ-_dWlxEEa7MoloxJFIdy"), "v1793006659/1026_1_-copy_13_pxur6q.mov"),
    A("Affordable Printers", "Printer recommendations by Fast Print", DR("1mqTT6u56gL1jpjowKBkHNnfX2mJof9QJ"), "v1793007608/1026_1_-copy_17_sltuv8.mov"),
    A("COVID Campaign Breakdown", "Breaking down a public health awareness campaign", DR("1azsDfR71SxJnmRihfBlRtBRYfrTQFkaf"), "v1793074098/1026_1_-copy_19_fvi3pi.mov"),
    A("Happy Day", "Everyday sneakers", DR("1eE7_vZDR3GCzd92rwJ_bpB5MzZitIx67"), "v1793008163/1026_2_1_fyoykx.mov")
  ]],
  ["Product", [
    A("Batik Sneakers", "Stylish sneakers with a batik touch", DR("1umxXxfJXkFxP-rwY02j5K0uAJJ3e8eOo"), "v1793072487/1026_1_15_xaqpqi.mov"),
    A("Seagate Hard Drive", "Keep your files safe and secure", DR("1B3EFCuOykO16-S2oHPgDGr6_LbXuCj_p"), "v1793003323/1026_1_-copy_6_ijdmbi.mov"),
    A("Aessager Charger", "Powerful charging at a surprising price", DR("1qer1S9CTJNetZVHcaCx3TozqIMbF3XVH"), "v1793003318/1026_1_7_b5mohi.mov"),
    A("Work Bag Essentials", "Getting ready for work with me", DR("1hLO5ctNh8gKL1l7dK9NxC_O7G-nMZyr-"), "v1793073277/1026_1_23_bfojek.mov"),
    A("Japan Indo Retro", "Outfit inspiration for Japanese lovers", DR("1lRSjQXx1pMsbvPL2T8XCWWhBsKlOsfiC"), "v1793072480/1026_1_14_jatxnl.mov"),
    A("Clean Bag Design", "Look sharper with a stylish bag", DR("1xfZdq6pFM9iK7I7W-emX6nHLcAB1cGJJ"), "v1793073269/1026_1_21_sfybum.mov"),
    A("Payday Shoe Haul", "Time to treat myself to new kicks", DR("1Q_fQl8Dpa5qti-HiLGQaBS0qpNXH12qn"), "v1793072479/1026_1_17_xxfwrk.mov"),
    A("Totoro Toys", "Happy with Inner Child", DR("1Ccm82OBqKT6JlRndm2uQ2fSK4nsNsYrO"), "v1793003322/1026_1_6_gwitkl.mov"),
    A("Bold Sneakers", "Sneakers for a bold, masculine look", DR("1ZPeAcfwqRpEqK8ydSPYQvxSOl2akiFAf"), "v1793072477/1026_1_19_yt0mjm.mov"),
    A("Kawai Lights", "Nice dreams with this Stuff", DR("1Um1b5RV2nchlRsyL4Y0CUVz7WD9cwD7w"), "v1793003320/1026_1_-copy_8_buq7w6.mov"),
    A("The Calm Guy", "Simple bag, effortless style", DR("1SUnQ0WWaYEVqMIhEt6kfFwUeqRKFrh4b"), "v1793073269/1026_1_24_wrgcjt.mov"),
    A("Fiery Red Duo", "Two pairs, one bold statement", DR("1JxtYK9LByphUm7t9YKeo04DdvJbl1Izx"), "v1793072471/1026_1_20_s4ipha.mov"),
    A("Worth It TWS?", "By Soundcore", DR("1SNhOPNMgp2If-kOqgPFO1VcAoLKNYFfd"), "v1793003322/1026_1_4_djic5z.mov"),
    A("Simple Style", "No-fuss sneakers for everyday wear", DR("1DSaj9aJBnHktaFusLCD1PNfIPh9-88y8"), "v1793072479/1026_1_16_owwsux.mov"),
    A("Ready for Anything", "One bag for all your daily activities", DR("13W5Zk5q0D0TPex1VHk5VdHdGLrPyTLJj"), "v1793073270/1026_1_22_siysbv.mov"),
    A("One Item Upgrade", "Sneakers that make you look sharper", DR("1z8EFQkAoL1bHBI77kipk0wv6erY_62KB"), "v1793072480/1026_1_18_d3fbhr.mov")
  ]],
  ["Personal", [
    A("Suitcase", "A short film by Rafiadhi", DR("1I-03FnD8w1mhwdHDiv0nf8GN8YgqAn3P"), "v1793003321/1026_1_-copy_10_eozqrh.mov"),
    A("Pergi Jauh", "A short film by Rafiadhi", DR("1OSv9S2pd6rXYDkvmf2RPYbLbp3Y9ETFc"), "v1793005990/1026_1_-copy_11_rva80f.mov"),
    A("Fix Sony Lens", "This is not just a lens", DR("1HT2Mmr3VjUVnoqE38kc3EJ5LXEcY-1Aj"), "v1793003237/1026_1_8_ddkdwk.mov"),
    A("My Content Lost", "A story about how hard it is to go viral", DR("1vX5XOSQgb5BT2mOsxZ5nSz92NwBi_KJ2"), "v1793003323/1026_1_-copy_9_yyjhlk.mov"),
    A("Lazy People", "Talk to much", DR("1Mf-fguoZpDmJgQvNO5J3xTKjZORZpiX4"), "v1793003321/1026_1_5_msukjw.mov"),
    A("Creative Industry", "Really easy work?", DR("1W0OXNegzWbbkQDPTteVeJZVSpa23BIY6"), "v1793003506/1026_1_10_wrsbef.mov"),
    A("U Sure?", "Its Halal Project?", DR("1xJ5QC36bVVcHtzBm32Fb4G6-gd-yqqcq"), "v1793006657/1026_1_13_k0jgih.mov"),
    A("Need Lightroom?", "Are you oke with that?", DR("1FVDEn0WLDdg1i5ne-Ip8j-hR5jaH6E-j"), "v1793006666/1026_1_12_ufxvje.mov"),
    A("Camera Office", "Real kah bwang?", DR("1ZZZ-4M8zZ6GsL4PpLGDiWejbfxoXem8U"), "v1793006657/1026_1_11_dpgpmt.mov")
  ]]
];
/* ============ SELESAI ============ */

/* =====================================================================
  2) PRELOADER — progress real berdasar aset yang sedang dimuat
===================================================================== */

const preloaderEl     = document.getElementById('preloader');
const preloaderPercent = document.getElementById('preloaderPercent');
const preloaderFill    = document.getElementById('preloaderFill');

(function runPreloader(){
  let progress = 0;
  const target = { value: 0 };
  let finished = false;

  function setProgress(p){
    target.value = Math.max(target.value, Math.min(p, 100));
  }

  // anggap bg + overlay halaman 1 + 3 profile bg sebagai aset utama yang ditunggu
  const assetsToTrack = [PAGE1_BG_IMG, PAGE1_OVERLAY_IMG, PROFILE_SLIDES[0].overlay, PROFILE_SLIDES[0].overlay2, PROFILE1_TAP_BTN_IMG, PROFILE1_TRANSITION_GIF, HISTORY_IMG_BASE, HISTORY_IMG_LAPTOP, HISTORY_IMG_CAMERA, HISTORY_IMG_BOOK, ...PROFILE_SLIDES.map(s => s.bg)].filter(Boolean);
  let loaded = 0;
  const totalAssets = Math.max(assetsToTrack.length, 1);

  assetsToTrack.forEach(src => {
    const img = new Image();
    img.onload = img.onerror = () => {
      loaded++;
      setProgress((loaded / totalAssets) * 90);
    };
    img.src = src;
  });

  // failsafe: paksa selesai maksimal 2.4s supaya tidak stuck kalau ada aset gagal load
  const forceDone = setTimeout(() => setProgress(100), 2400);

  const tick = () => {
    progress += (target.value - progress) * 0.18;
    if (target.value >= 100 && progress > 99) progress = 100;
    preloaderPercent.textContent = Math.round(progress);
    preloaderFill.style.width = progress + '%';

    if (progress >= 100 && !finished) {
      finished = true;
      clearTimeout(forceDone);
      setTimeout(() => {
        preloaderEl.classList.add('is-done');
      }, 250);
      return;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  setTimeout(() => setProgress(100), 2600);
})();

/* =====================================================================
  3) ISI ELEMEN DENGAN DATA
  (dibungkus try/catch: kalau ada 1 error di sini, sisa fitur di bawahnya
  tetap jalan, tidak ikut freeze seperti kasus sebelumnya)
===================================================================== */
try {

const page1BgEl = document.getElementById('page1BgImg');
if (page1BgEl) page1BgEl.src = PAGE1_BG_IMG;

const page1OverlayEl = document.getElementById('page1OverlayImg');
if (page1OverlayEl) page1OverlayEl.src = PAGE1_OVERLAY_IMG;

const startBtnDefaultEl = document.getElementById('startBtnDefaultImg');
if (startBtnDefaultEl) startBtnDefaultEl.src = START_BTN_DEFAULT_IMG;

const startBtnHoverEl = document.getElementById('startBtnHoverImg');
if (startBtnHoverEl) startBtnHoverEl.src = START_BTN_HOVER_IMG;

document.getElementById('circleImg').src = CIRCLE_BTN_IMG;
document.getElementById('circlePopupImg').src = CIRCLE_POPUP_IMG;

// PROFIL 1 (slide0) — tumpukan gambar 1 & 2 + gambar 3 (reveal saat diklik)
const profileStackImg1El = document.getElementById('profileStackImg1');
const profileStackImg2El = document.getElementById('profileStackImg2');
const profileStackImg3El = document.getElementById('profileStackImg3');
if (profileStackImg1El) profileStackImg1El.src = PROFILE_SLIDES[0].bg;
if (profileStackImg2El) profileStackImg2El.src = PROFILE_SLIDES[0].overlay;
if (profileStackImg3El) profileStackImg3El.src = PROFILE_SLIDES[0].overlay2;

const profileTapBtnImgEl = document.getElementById('profileTapBtnImg');
if (profileTapBtnImgEl) profileTapBtnImgEl.src = PROFILE1_TAP_BTN_IMG;

const profileGifTransitionEl = document.getElementById('profileGifTransition');
if (profileGifTransitionEl) profileGifTransitionEl.src = PROFILE1_TRANSITION_GIF;

const historyImgBaseEl   = document.getElementById('historyImgBase');
const historyImgLaptopEl = document.getElementById('historyImgLaptop');
const historyImgCameraEl = document.getElementById('historyImgCamera');
const historyImgBookEl   = document.getElementById('historyImgBook');
if (historyImgBaseEl)   historyImgBaseEl.src   = HISTORY_IMG_BASE;
if (historyImgLaptopEl) historyImgLaptopEl.src = HISTORY_IMG_LAPTOP;
if (historyImgCameraEl) historyImgCameraEl.src = HISTORY_IMG_CAMERA;
if (historyImgBookEl)   historyImgBookEl.src   = HISTORY_IMG_BOOK;

// Profil 2 (& slide lain yang masih pakai .profile-bg/.profile-overlay/.profile-overlay-alt)
document.querySelectorAll('.profile-slide').forEach((el, i) => {
  if (i === 0) return; // slide0 sudah ditangani terpisah di atas
  if (i >= PROFILE_SLIDES.length) return;
  const bgEl = el.querySelector('.profile-bg');
  const ovEl = el.querySelector('.profile-overlay');
  const ovAltEl = el.querySelector('.profile-overlay-alt');
  if (bgEl) bgEl.style.backgroundImage = `url('${PROFILE_SLIDES[i].bg}')`;
  if (ovEl) ovEl.src = PROFILE_SLIDES[i].overlay;
  if (ovAltEl) ovAltEl.src = PROFILE_SLIDES[i].overlay2 || '';
});

document.querySelectorAll('.contact-popup').forEach(popup => {
  popup.querySelectorAll('.contact-icon-btn').forEach((a, i) => {
    const data = CONTACT_LINKS[i] || { icon: '', link: '' };
    a.href = data.link || '#';
    const img = a.querySelector('img');
    if (img) img.src = data.icon;
  });
});

document.querySelectorAll('.contact-toggle-btn img').forEach(img => { img.src = CONTACT_TOGGLE_IMG; });

const closing1BtnImgEl = document.querySelector('#closing1RevealBtn img');
if (closing1BtnImgEl) closing1BtnImgEl.src = CLOSING1_BTN_IMG;

const closing1RevealImgEl = document.getElementById('closing1RevealImg');
if (closing1RevealImgEl) closing1RevealImgEl.src = CLOSING1_REVEAL_IMG;

// 2 kotak pilihan di Halaman 4 (gambar masuk lewat variabel CSS --img)
[['#boxLeft', CHOOSE_LEFT_IMG], ['#boxRight', CHOOSE_RIGHT_IMG]].forEach(([sel, img]) => {
  const media = document.querySelector(sel + ' .choose-card__media');
  if (media && img) media.style.setProperty('--img', `url('${img}')`);
});

document.querySelectorAll('.back-btn img').forEach(img => img.src = BACK_ICON);

/* =====================================================================
  3b) HALAMAN 1 — OVERLAY BULATAN NOISE MENGIKUTI KURSOR
  (mirip mekanisme profile-overlay-alt di Profil 1, tapi TANPA efek 3D/
  tilt — cuma posisi bulatan yang menyusul kursor dengan lag halus,
  tepinya kasar/noise lewat <mask id="cursorNoiseMask"> di HTML)
===================================================================== */
(function(){
  const page1El = document.getElementById('page1');
  const overlayImg = document.getElementById('page1OverlayImg');
  const maskCircle = document.getElementById('cursorMaskCircle');
  if (!page1El || !overlayImg || !maskCircle) return;

  maskCircle.setAttribute('r', CURSOR_SPOT_RADIUS);

  let targetX = 0, targetY = 0;
  let curX = 0, curY = 0;
  let primed = false;

  function setCenter(){
    const rect = page1El.getBoundingClientRect();
    targetX = rect.width / 2;
    targetY = rect.height / 2;
    curX = targetX; curY = targetY;
  }
  setCenter();
  window.addEventListener('resize', setCenter);

  page1El.addEventListener('mousemove', (e) => {
    const rect = page1El.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
    if (!primed) { curX = targetX; curY = targetY; primed = true; }
    page1El.classList.add('overlay-ready');
  });
  page1El.addEventListener('mouseenter', () => page1El.classList.add('overlay-ready'));

  (function noiseSpotLoop(){
    curX += (targetX - curX) * 0.16;
    curY += (targetY - curY) * 0.16;
    maskCircle.setAttribute('cx', curX);
    maskCircle.setAttribute('cy', curY);
    requestAnimationFrame(noiseSpotLoop);
  })();
})();

/* =====================================================================
  4) CUSTOM CURSOR
===================================================================== */

const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
const cursorLabel = document.getElementById('cursorLabel');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
});

(function cursorLoop(){
  ringX += (mouseX - ringX) * 0.16;
  ringY += (mouseY - ringY) * 0.16;
  cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
  requestAnimationFrame(cursorLoop);
})();

document.querySelectorAll('[data-cursor]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorRing.classList.add('is-hover');
    cursorLabel.textContent = el.dataset.cursor;
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.classList.remove('is-hover');
    cursorLabel.textContent = '';
  });
});

/* =====================================================================
  5) MAGNETIC BUTTONS
===================================================================== */

document.querySelectorAll('[data-magnetic]').forEach(el => {
  const strength = 0.35;
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0,0)';
  });
});

/* =====================================================================
  6) FILM GRAIN FLICKER
===================================================================== */

const grainTurb = document.getElementById('grainTurb');
setInterval(() => {
  const seed = Math.floor(Math.random() * 100);
  grainTurb.setAttribute('seed', seed);
}, 120);

/* =====================================================================
  7) TRANSISI PIXEL/MOSAIC
===================================================================== */

const PT_COLS = 14, PT_ROWS = 8;
const pixelTransitionEl = document.getElementById('pixelTransition');
pixelTransitionEl.style.setProperty('--pt-cols', PT_COLS);
pixelTransitionEl.style.setProperty('--pt-rows', PT_ROWS);

for (let r = 0; r < PT_ROWS; r++) {
  for (let c = 0; c < PT_COLS; c++) {
    const tile = document.createElement('div');
    tile.className = 'pixel-tile';
    const wave = (c + r) / (PT_COLS + PT_ROWS - 2); // 0 -> 1, gelombang diagonal
    const delay = wave * 0.32 + Math.random() * 0.1;
    tile.style.transitionDelay = delay.toFixed(3) + 's';
    pixelTransitionEl.appendChild(tile);
  }
}

/**
 * Versi simpel: kotak-kotak warna solid menutup layar, jalankan `duringCover`
 * pas layar full tertutup, lalu buka lagi. Dipakai buat klik kolom
 * Design/Content -> subpage.
 */
function pixelTransitionRun(duringCover){
  pixelTransitionEl.style.pointerEvents = 'auto';
  pixelTransitionEl.classList.add('covering');
  setTimeout(() => {
    duringCover();
    requestAnimationFrame(() => {
      pixelTransitionEl.classList.remove('covering');
      setTimeout(() => { pixelTransitionEl.style.pointerEvents = 'none'; }, 750);
    });
  }, 850);
}

/**
 * Transisi klik START NOW — pakai animasi kotak-kotak pixel yang sama
 * (warna solid, TANPA gambar sama sekali biar ringan), teks "wait a
 * second!" nongol pas layar lagi ketutup penuh.
 */
const startTransitionTextEl = document.getElementById('startTransitionText');
function startTransitionRun(duringCover){
  pixelTransitionEl.style.pointerEvents = 'auto';
  pixelTransitionEl.classList.add('covering');
  startTransitionTextEl.classList.add('is-visible');
  setTimeout(() => {
    duringCover();
    startTransitionTextEl.classList.remove('is-visible');
    requestAnimationFrame(() => {
      pixelTransitionEl.classList.remove('covering');
      setTimeout(() => { pixelTransitionEl.style.pointerEvents = 'none'; }, 750);
    });
  }, 850);
}

const openBtn = document.getElementById('openPortfolioBtn');
const page2   = document.getElementById('page2');
const htmlEl  = document.documentElement;

/* Kunci scroll (wheel/touch/keyboard) selama masih di halaman 1,
   supaya user harus klik tombol "START NOW!" untuk lanjut. */
htmlEl.classList.add('pre-start');
let started = false;

function blockScrollIfNotStarted(e){
  if (!started) e.preventDefault();
}
window.addEventListener('wheel', blockScrollIfNotStarted, { passive:false });
window.addEventListener('touchmove', blockScrollIfNotStarted, { passive:false });
window.addEventListener('keydown', (e) => {
  if (started) return;
  const blockedKeys = ['ArrowDown','ArrowUp','PageDown','PageUp',' ','Spacebar','Home','End'];
  if (blockedKeys.includes(e.key)) e.preventDefault();
});

openBtn.addEventListener('click', () => {
  startTransitionRun(() => {
    started = true;
    htmlEl.classList.remove('pre-start');
    htmlEl.classList.add('started'); // #page1 langsung disembunyikan permanen lewat CSS
    document.getElementById('scrollDots').classList.add('is-visible');
    page2.scrollIntoView({ behavior: 'auto' });
  });
});

/* =====================================================================
  8) TOMBOL BULAT RAHASIA -> POPUP PNG
===================================================================== */

const hiddenCircleBtn    = document.getElementById('hiddenCircleBtn');
const circlePopupOverlay = document.getElementById('circlePopupOverlay');
const closeCirclePopup   = document.getElementById('closeCirclePopup');

hiddenCircleBtn.addEventListener('click', () => {
  circlePopupOverlay.classList.remove('hidden');
  requestAnimationFrame(() => circlePopupOverlay.classList.add('visible'));
});
closeCirclePopup.addEventListener('click', () => closePopupOverlay(circlePopupOverlay));
circlePopupOverlay.addEventListener('click', (e) => {
  if (e.target === circlePopupOverlay) closePopupOverlay(circlePopupOverlay);
});

function closePopupOverlay(el) {
  el.classList.remove('visible');
  setTimeout(() => el.classList.add('hidden'), 400);
  if (el === brandModal || el === experienceModal || el === servicesModal) document.body.classList.remove('modal-scroll-lock');
}

/* =====================================================================
  9) SCROLL REVEAL — HALAMAN PROFIL
===================================================================== */

const profileObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.5 });

document.querySelectorAll('.profile-slide').forEach(el => profileObserver.observe(el));

/* =====================================================================
  9b) SPOTLIGHT OVERLAY 2 — bulatan "cairan" tepi tegas ikut kursor di profil 1 & 2
===================================================================== */
document.querySelectorAll('.profile-slide').forEach(slide => {
  const altImg = slide.querySelector('.profile-overlay-alt');
  if (!altImg) return; // slide1 (desk) tidak punya overlay ke-2, aman dilewati

  let targetX = 50, targetY = 50; // posisi kursor sebenarnya (dalam %)
  let curX = 50, curY = 50;       // posisi yang dipakai buat render (nyusul dgn lag halus)
  let primed = false;

  slide.addEventListener('mousemove', (e) => {
    const rect = slide.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width) * 100;
    targetY = ((e.clientY - rect.top) / rect.height) * 100;
    if (!primed) { curX = targetX; curY = targetY; primed = true; } // biar begitu masuk langsung pas, tidak "berenang" dari titik lama
  });
  slide.addEventListener('mouseleave', () => { primed = false; });

  (function liquidLoop(){
    curX += (targetX - curX) * 0.16;
    curY += (targetY - curY) * 0.16;
    altImg.style.setProperty('--mx', curX + '%');
    altImg.style.setProperty('--my', curY + '%');
    requestAnimationFrame(liquidLoop);
  })();
});

/* =====================================================================
  9b-2) TUMPUKAN PROFIL 1 — parallax 3D halus (gambar 1, 2 & 3) + tombol
        "tap to know me" (PNG) yang memicu gif transisi, baru gambar 3
        muncul. Cuma di profil 1 (slide0), tidak di slide lain.
===================================================================== */
(function(){
  const slide0 = document.getElementById('slide0');
  const stack = document.getElementById('profileStack');
  const img1 = document.getElementById('profileStackImg1');
  const img2 = document.getElementById('profileStackImg2');
  const img3 = document.getElementById('profileStackImg3');
  const tapBtn = document.getElementById('profileTapBtn');
  if (!slide0 || !stack || !img1 || !img2 || !img3) return;

  // --- Parallax 3D "sedikit" mengikuti kursor (gambar 1, 2 & 3) ---
  // GANTI DI SINI kalau mau efeknya lebih/kurang terasa:
  const FLOAT_RANGE = 8;   // px, jarak geser maksimum dari titik tengah (sebelumnya 14 — diperkecil biar "dikit aja")
  const MAX_TILT = 2;      // derajat, kemiringan maksimum (sebelumnya 5)
  const DEPTH_1 = 0.4;     // gambar 1 (background) geraknya paling sedikit
  const DEPTH_2 = 1;     // gambar 2 (orang) geraknya sedang
  const DEPTH_3 = 1.4;     // gambar 3 (teks) geraknya paling banyak -> paling "muncul ke depan"
  // "Bantalan" scale supaya waktu digeser/dimiringkan tidak kelihatan tepi
  // kosong di pinggir gambar. Sebelumnya nempel hardcode 1.06 (itu penyebab
  // gambar kelihatan kezoom terus-terusan) — sekarang dipisah jadi angka
  // sendiri, dan boleh diperkecil lagi karena jarak geraknya sudah kecil.
  const HOVER_SCALE = 1.015;

  let floatTargetX = 0, floatTargetY = 0;
  let floatCurX = 0, floatCurY = 0;
  let floatActive = false;

  slide0.addEventListener('mousemove', (e) => {
    if (!slide0.classList.contains('in-view')) return; // biar tidak nabrak animasi reveal awal
    if (!floatActive) {
      floatActive = true;
      // lepas transition transform bawaan (punya CSS entrance) khusus utk elemen ini,
      // biar gerakan mengambang selanjutnya full diatur lerp JS, tidak dobel-easing.
      img1.style.transition = 'opacity 1s var(--ease)';
      img2.style.transition = 'opacity 1s var(--ease)';
      img3.style.transition = 'opacity .6s var(--ease)';
    }
    const rect = slide0.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    floatTargetX = px * FLOAT_RANGE * 2;
    floatTargetY = py * FLOAT_RANGE * 2;
  });
  slide0.addEventListener('mouseleave', () => {
    floatTargetX = 0; floatTargetY = 0;
  });

  function applyTilt(el, depth){
    const x = floatCurX * depth;
    const y = floatCurY * depth;
    const tiltY = (x / FLOAT_RANGE) * MAX_TILT;
    const tiltX = (y / FLOAT_RANGE) * -MAX_TILT;
    // scale(HOVER_SCALE) = "bantalan" biar waktu digeser/dimiringkan tidak
    // kelihatan tepi kosong di pinggir gambar (gambar tetap object-fit:cover
    // penuh layar). Nilainya sekarang kecil karena jarak geser juga kecil.
    el.style.transform = `perspective(1000px) scale(${HOVER_SCALE}) translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
  }

  (function floatLoop(){
    floatCurX += (floatTargetX - floatCurX) * 0.08;
    floatCurY += (floatTargetY - floatCurY) * 0.08;
    if (floatActive) {
      applyTilt(img1, DEPTH_1);
      applyTilt(img2, DEPTH_2);
      applyTilt(img3, DEPTH_3);
    }
    requestAnimationFrame(floatLoop);
  })();

  // --- Klik tombol "tap to know me" -> gif transisi main sebentar ->
  //     gambar 3 (teks) muncul & ikut parallax bareng gambar 1 & 2 ---
  let profile1Revealed = false;
  function playProfile1Reveal(){
    if (profile1Revealed) return;
    profile1Revealed = true;
    slide0.classList.add('is-transitioning'); // sembunyikan tombol, tampilkan gif
    setTimeout(() => {
      slide0.classList.remove('is-transitioning');
      slide0.classList.add('is-revealed'); // gif hilang, gambar 3 muncul
    }, PROFILE1_GIF_DURATION);
  }
  if (tapBtn) tapBtn.addEventListener('click', playProfile1Reveal);
})();

/* =====================================================================
  9c) TOMBOL "CONTACT ME" -> POPUP 3 ICON BULAT
===================================================================== */
document.querySelectorAll('.contact-toggle-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const box = btn.closest('.profile-contact');
    const isOpen = box.classList.contains('open');
    document.querySelectorAll('.profile-contact.open').forEach(b => b.classList.remove('open'));
    if (!isOpen) box.classList.add('open');
  });
});
document.addEventListener('click', (e) => {
  document.querySelectorAll('.profile-contact.open').forEach(box => {
    if (!box.contains(e.target)) box.classList.remove('open');
  });
});

/* =====================================================================
  10) SCROLL PROGRESS DOTS
===================================================================== */

const dotButtons = document.querySelectorAll('#scrollDots button');
const dotSections = ['slide0','slide1','slide2','page4'].map(id => document.getElementById(id));

dotButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => dotSections[i].scrollIntoView({ behavior:'smooth' }));
});

const dotsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const idx = dotSections.indexOf(entry.target);
    if (entry.isIntersecting && idx > -1) {
      dotButtons.forEach(b => b.classList.remove('is-active'));
      dotButtons[idx].classList.add('is-active');
    }
  });
}, { threshold: 0.6 });

dotSections.forEach(sec => sec && dotsObserver.observe(sec));

/* =====================================================================
  11) KINETIC TEXT (closing headline) — split per baris + mask reveal
===================================================================== */

document.querySelectorAll('.kinetic-text').forEach(el => {
  const words = el.textContent.trim();
  el.innerHTML = `<span class="kinetic-line">${words}</span>`;
});

const kineticObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.4 });

document.querySelectorAll('.kinetic-text').forEach(el => kineticObserver.observe(el));

/* =====================================================================
  12) PAGE 4 — HOVER POP KIRI / KANAN + cursor-tilt parallax
===================================================================== */

const boxLeft  = document.getElementById('boxLeft');
const boxRight = document.getElementById('boxRight');
const leftSubpage  = document.getElementById('leftSubpage');
const rightSubpage = document.getElementById('rightSubpage');

/* 2 kotak 3D: miring mengikuti kursor (lerp halus), kilau & parallax gambar.
   Klik (atau Enter/Spasi) -> transisi pixel -> buka subpage kiri/kanan. */
(function(){
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lerp = (a, b, n) => a + (b - a) * n;
  let opening = false;

  [[boxLeft, leftSubpage], [boxRight, rightSubpage]].forEach(([card, subpage]) => {
    if (!card || !subpage) return;
    const tilt = card.querySelector('.choose-card__tilt');
    const target = { rx: 0, ry: 0, s: 1, lift: 0, mx: 50, my: 50, px: 0, py: 0 };
    const now    = { ...target };
    let raf = null;

    const render = () => {
      let moving = false;
      for (const k in now) {
        now[k] = lerp(now[k], target[k], 0.12);
        if (Math.abs(now[k] - target[k]) > 0.01) moving = true;
      }
      tilt.style.setProperty('--rx', now.rx.toFixed(2) + 'deg');
      tilt.style.setProperty('--ry', now.ry.toFixed(2) + 'deg');
      tilt.style.setProperty('--s', now.s.toFixed(3));
      tilt.style.setProperty('--lift', now.lift.toFixed(1) + 'px');
      tilt.style.setProperty('--mx', now.mx.toFixed(1) + '%');
      tilt.style.setProperty('--my', now.my.toFixed(1) + '%');
      tilt.style.setProperty('--px', now.px.toFixed(3));
      tilt.style.setProperty('--py', now.py.toFixed(3));
      raf = moving ? requestAnimationFrame(render) : null;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(render); };

    const reset = () => {
      Object.assign(target, { rx: 0, ry: 0, s: 1, lift: 0, mx: 50, my: 50, px: 0, py: 0 });
      kick();
    };

    card.addEventListener('pointermove', (e) => {
      if (reduceMotion || opening) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      target.ry = (x - 0.5) * 18;
      target.rx = (0.5 - y) * 14;
      target.px = x - 0.5;
      target.py = y - 0.5;
      target.mx = x * 100;
      target.my = y * 100;
      target.lift = 30;
      target.s = 1.02;
      kick();
    });

    card.addEventListener('pointerleave', () => { if (!opening) reset(); });
    card.addEventListener('pointerdown', () => { if (opening) return; target.s = 0.97; target.lift = 0; kick(); });
    card.addEventListener('pointerup',   () => { if (opening) return; target.s = 1.02; target.lift = 30; kick(); });

    // fokus keyboard: angkat kotak tanpa miring
    card.addEventListener('focus', () => { if (opening) return; target.lift = 30; target.s = 1.02; kick(); });
    card.addEventListener('blur', () => { if (!opening) reset(); });

    // klik: kotak membesar sedikit, transisi pixel menutup layar, lalu subpage dibuka
    const open = () => {
      if (opening) return;
      opening = true;
      card.classList.add('is-leaving');
      target.s = 1.06; target.lift = 0; kick();
      pixelTransitionRun(() => {
        openSubpage(subpage);
        card.classList.remove('is-leaving');
        opening = false;
        reset();
      });
    };
    card.addEventListener('click', open);
    // elemennya <div role="button">, jadi Enter/Spasi dipasang manual
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });
})();

function openSubpage(el) {
  el.classList.remove('hidden');
  requestAnimationFrame(() => el.classList.add('visible'));
  if (el === rightSubpage) contentArchive.init();
}
function closeSubpage(el) {
  if (el === rightSubpage) contentArchive.closeModal(); // hentikan video kalau pemutar masih terbuka
  el.classList.remove('visible');
  setTimeout(() => { el.classList.add('hidden'); }, 800);
}

document.querySelectorAll('.subpage .back-btn').forEach(btn => {
  btn.addEventListener('click', () => closeSubpage(btn.closest('.subpage')));
});

/* =====================================================================
  13) KOTAK KIRI — DESIGN ARCHIVE (9 kategori, teks bisa diklik)

  Kursor datang ke salah satu teks -> background besar di belakang ganti
  jadi punya kategori itu (2 layer crossfade, sama seperti sebelumnya).
  Kursor keluar dari SELURUH daftar -> background balik ke abu-abu gelap
  polos (bukan hilang total, karena #leftSubpage sekarang punya
  background-color sendiri di CSS). Diklik -> buka popup, bisa banyak
  gambar per kategori (scroll ke bawah di dalam popup-nya).
===================================================================== */

/* --- background reveal (gambar beda per kategori), 2 layer gantian buat crossfade --- */
const archiveBgA = document.getElementById('archiveBgA');
const archiveBgB = document.getElementById('archiveBgB');
let archiveBgFlip = false;

function setArchiveBg(url) {
  if (!url) {
    archiveBgA.classList.remove('is-visible');
    archiveBgB.classList.remove('is-visible');
    return;
  }
  const showEl = archiveBgFlip ? archiveBgB : archiveBgA;
  const hideEl = archiveBgFlip ? archiveBgA : archiveBgB;
  showEl.style.backgroundImage = `url('${url}')`;
  showEl.classList.add('is-visible');
  hideEl.classList.remove('is-visible');
  archiveBgFlip = !archiveBgFlip;
}

const archiveCatList = document.getElementById('archiveCatList');

document.querySelectorAll('.archive-cat-line').forEach(line => {
  const data = DESIGN_ARCHIVE_CATEGORIES[line.dataset.cat];

  line.addEventListener('mouseenter', () => setArchiveBg(data.bg));

  line.addEventListener('click', () => openBrandModal(data.pages));
  // biar bisa dibuka pakai keyboard juga (Enter/Space), soalnya elemennya <span>
  line.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openBrandModal(data.pages);
    }
  });
});

// begitu kursor benar-benar keluar dari seluruh daftar (bukan pindah antar
// teks), background balik ke abu-abu gelap polos
archiveCatList.addEventListener('mouseleave', () => setArchiveBg(null));

/* =====================================================================
  14) KOTAK KANAN — CONTENT ARCHIVE (kode baru)
  Hero "CONTENT ARCHIVE" 3D, menu kategori (UGC / Commercial / Product /
  Personal), grid video, dan pemutar popup. Datanya (judul, link, cover)
  diatur di blok "GANTI DI SINI: CONTENT ARCHIVE" di bagian atas file ini
  (BRAND, COVER, D). Elemen HTML-nya ada di #rightSubpage (index.html),
  CSS-nya di bagian "RIGHT SUBPAGE" style.css.
  Dibungkus fungsi supaya nama variabelnya tidak bentrok dengan bagian lain.
  Yang dipanggil dari luar cuma: init() / closeModal() / isModalOpen().
===================================================================== */
const contentArchive = (function(){
  const byId = (id) => document.getElementById(id);
  const home = byId('caHome'), grid = byId('caGrid'), menu = byId('caMenu'),
        hero = byId('caHero'), dock = byId('caDock'), modal = byId('caModal'),
        phone = byId('caPhone'), infoEl = byId('caMi');
  if (!home || !grid || !menu || !hero || !dock || !modal || !phone || !infoEl) {
    return { init(){}, closeModal(){}, isModalOpen(){ return false; } };
  }

  let ci = 0, mi = 0;
  const pad = (n) => String(n + 1).padStart(2, '0');

  /* deteksi jenis link */
  const TT = 'https://www.tiktok.com/player/v1/', YT = 'https://www.youtube.com/embed/';
  const tt = (u) => (u.match(/tiktok\.com\/.*?video\/(\d+)/) || [])[1];
  const yt = (u) => (u.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/) || [])[1];
  const dr = (u) => (u.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || [])[1];
  const ig = (u) => { const m = u.match(/instagram\.com\/(p|reel|reels|tv)\/([\w-]+)/); return m ? `https://www.instagram.com/${m[1] === 'reels' ? 'reel' : m[1]}/${m[2]}/embed` : ''; };
  const driveThumb = (v) => dr(v.url) ? `https://drive.google.com/thumbnail?id=${dr(v.url)}&sz=w1000` : '';
  const still = (u) => (u.startsWith('http') ? u : CL + u).replace('/video/upload/', `/video/upload/so_${COVER.frame},c_limit,w_${COVER.width},q_auto:good/`).replace(/\.[a-z0-9]+$/i, '.jpg');
  const poster = (v) => v.poster || (v.cover ? still(v.cover) : driveThumb(v));
  const cov = (u) => {
    if (!u) return '';
    const url = u.startsWith('http') ? u : CL + u;
    if (!COVER.optimize || !url.includes('/video/upload/')) return url;
    return url.replace('/video/upload/', `/video/upload/so_0,du_${COVER.sec},c_limit,w_${COVER.width},q_auto:good,ac_none,vc_h264/`).replace(/\.[a-z0-9]+$/i, '.mp4');
  };

  /* kursor: pakai kursor custom portofolio (#cursorRing). Untuk elemen yang
     dibuat lewat JS (kartu), listener-nya dipasang manual di sini. */
  const resetCursor = () => { cursorRing.classList.remove('is-hover'); cursorLabel.textContent = ''; };
  const bindCursor = (node, label) => {
    node.addEventListener('mouseenter', () => { cursorRing.classList.add('is-hover'); cursorLabel.textContent = label; });
    node.addEventListener('mouseleave', resetCursor);
  };

  /* teks atas */
  byId('caNl').innerHTML = (BRAND.logo ? `<img src="${BRAND.logo}" alt="">` : '') + BRAND.left;
  byId('caNr').textContent = BRAND.right;
  byId('caIntro').textContent = BRAND.intro;

  /* judul CONTENT ARCHIVE + efek miring saat kursor datang */
  const split = (el, t, o = 0) => { el.innerHTML = [...t].map((c, i) => `<span style="--i:${i + o}">${c}</span>`).join(''); };
  split(byId('caL1'), 'CONTENT'); split(byId('caL2'), 'ARCHIVE', 7);
  let heroTimer = null;
  function playHero(){            // putar ulang animasi huruf tiap halaman dibuka
    clearTimeout(heroTimer);
    hero.classList.remove('in');
    void hero.offsetWidth;        // paksa browser menghitung ulang posisi awal
    heroTimer = setTimeout(() => hero.classList.add('in'), 80);
  }
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    hero.style.transform = `perspective(1000px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
  });
  hero.addEventListener('mouseleave', () => { hero.style.transform = ''; });

  /* menu kategori */
  menu.innerHTML = D.map((d, i) => `<li data-i="${i}"><a href="#${d[0].toLowerCase()}"><span class="wipe">${d[0].toUpperCase()}</span></a></li>`).join('');
  const setActive = () => {
    [...menu.children].forEach((li, i) => li.classList.toggle('on', i === ci));
    [...dock.children].forEach((a, i) => a.classList.toggle('on', i === ci));
  };
  menu.addEventListener('click', (e) => {
    const li = e.target.closest('li'); if (!li) return;
    e.preventDefault();
    if (+li.dataset.i === ci) return;
    ci = +li.dataset.i; setActive(); render();
  });

  /* menu kategori yang menempel di atas: muncul saat menu besar sudah ter-scroll keluar layar */
  dock.innerHTML = D.map((d, i) => `<a href="#${d[0].toLowerCase()}" data-i="${i}"><span class="wipe">${d[0].toUpperCase()}</span></a>`).join('');
  new IntersectionObserver(([e]) => dock.classList.toggle('show', !e.isIntersecting && e.boundingClientRect.top < 0), { root: home }).observe(menu);
  dock.addEventListener('click', (e) => {
    const a = e.target.closest('a'); if (!a) return;
    e.preventDefault();
    if (+a.dataset.i !== ci) { ci = +a.dataset.i; setActive(); render(); }
    home.scrollTo({ top: Math.max(0, grid.offsetTop - 90), behavior: 'smooth' });   // kembali ke awal grid kategori
  });

  /* kemunculan kartu + iframe TikTok/YouTube dimuat saat terlihat */
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    const f = e.target.querySelector('iframe.tt');
    if (f) f.src = TT + f.dataset.id + '?autoplay=1&muted=1&loop=1&controls=0&music_info=0&description=0&rel=0';
    const y = e.target.querySelector('iframe.yt');
    if (y) y.src = `${YT}${y.dataset.id}?autoplay=1&mute=1&loop=1&playlist=${y.dataset.id}&controls=0&playsinline=1&rel=0&modestbranding=1`;
    io.unobserve(e.target);
  }), { root: home, threshold: .12 });

  /* cover video: dimuat & diputar saat kursor datang (di layar sentuh: otomatis saat terlihat) */
  const TOUCH = matchMedia('(hover: none)').matches;
  const cvIO = new IntersectionObserver((es) => es.forEach((e) => {
    const v = e.target;
    if (!TOUCH) return;   // di desktop, cover dimuat saat kursor datang
    if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); } else v.pause();
  }), { root: home, threshold: .25 });

  function render(){
    const items = D[ci][1];
    io.disconnect(); cvIO.disconnect();
    grid.innerHTML = items.map((v, k) => {
      const p = poster(v), id = tt(v.url), yid = yt(v.url), c = cov(v.cover);
      return `
      <article class="card" data-k="${k}">
        <div class="ph" style="--p:${14 + k * 6}%"><span class="num">${pad(k)}</span>
          ${p ? `<img src="${p}" data-f="${p === driveThumb(v) ? '' : driveThumb(v)}" alt="${v.title}" loading="lazy" referrerpolicy="no-referrer" onerror="if(this.dataset.f){this.src=this.dataset.f;this.dataset.f=''}else this.remove()">` : ''}
          ${c ? `<video class="cv" data-src="${c}" muted loop playsinline preload="auto"></video>` : ''}
          ${id && !c ? `<iframe class="tt" data-id="${id}" title="${v.title}" allow="autoplay" tabindex="-1"></iframe>` : ''}
          ${yid && !c ? `<iframe class="yt" data-id="${yid}" title="${v.title}" allow="autoplay" tabindex="-1"></iframe>` : ''}
        </div>
        <h3>${v.title}</h3><p>${v.sub}</p>
      </article>`;
    }).join('');
    grid.querySelectorAll('.card').forEach((el) => { io.observe(el); bindCursor(el, 'LIHAT'); });
    grid.querySelectorAll('video.cv').forEach((el) => {
      el.addEventListener('timeupdate', () => { if (el.currentTime >= COVER.sec) el.currentTime = 0; });   // batasi loop ke durasi cover
      el.addEventListener('playing', () => el.classList.add('on'));
      cvIO.observe(el);
    });
  }

  grid.addEventListener('mousemove', (e) => {
    const p = e.target.closest('.ph'); if (!p) return;
    const r = p.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    p.style.setProperty('--rx', -y * 14 + 'deg'); p.style.setProperty('--ry', x * 14 + 'deg');
    p.style.setProperty('--gx', (x + .5) * 100 + '%'); p.style.setProperty('--gy', (y + .5) * 100 + '%');
  });
  grid.addEventListener('mouseout', (e) => {
    const p = e.target.closest('.ph');
    if (p && !p.contains(e.relatedTarget)) { p.style.setProperty('--rx', '0deg'); p.style.setProperty('--ry', '0deg'); }
  });
  /* kursor datang -> putar cover; kursor pergi -> kembali ke gambar statis */
  const cvOf = (e) => { const c = e.target.closest('.card'); return c && !c.contains(e.relatedTarget) ? c.querySelector('video.cv') : null; };
  grid.addEventListener('mouseover', (e) => { const v = cvOf(e); if (v) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); } });
  grid.addEventListener('mouseout', (e) => { const v = cvOf(e); if (v && !TOUCH) { v.pause(); v.currentTime = 0; v.classList.remove('on'); } });
  grid.addEventListener('click', (e) => { const c = e.target.closest('.card'); if (c) openM(+c.dataset.k); });

  /* modal pemutar (semua portrait) */
  function openM(k){
    const list = D[ci][1]; mi = (k + list.length) % list.length;
    const v = list[mi], id = tt(v.url), yid = yt(v.url), igu = ig(v.url), d = dr(v.url);
    phone.className = 'phone';
    phone.innerHTML = yid ? `<iframe src="${YT}${yid}?autoplay=1&rel=0&playsinline=1" allow="autoplay;fullscreen" allowfullscreen></iframe>`
      : id ? `<iframe src="${TT}${id}?autoplay=1&loop=1&controls=1&music_info=0&description=0&rel=0" allow="autoplay;fullscreen" allowfullscreen></iframe>`
      : igu ? `<iframe src="${igu}" scrolling="no" allow="autoplay;fullscreen;encrypted-media" allowfullscreen></iframe>`
      : d ? `<iframe src="https://drive.google.com/file/d/${d}/preview" allow="autoplay;fullscreen" allowfullscreen></iframe>`
      : `<div class="ph"><span class="num">${pad(mi)}</span></div>`;
    infoEl.textContent = `${pad(mi)} — ${v.title}`;
    modal.classList.add('open');
  }
  function closeM(){ modal.classList.remove('open'); phone.innerHTML = ''; }
  byId('caMx').addEventListener('click', closeM);
  byId('caMp').addEventListener('click', () => openM(mi - 1));
  byId('caMn').addEventListener('click', () => openM(mi + 1));
  modal.addEventListener('click', (e) => { if (e.target === modal) closeM(); });
  /* tombol Esc ditangani di bagian "16) ESC" (supaya Esc pertama cuma menutup
     pemutar, bukan langsung menutup seluruh halaman Content Archive) */
  addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') openM(mi - 1);
    if (e.key === 'ArrowRight') openM(mi + 1);
  });

  /* dipanggil tiap kali halaman Content Archive dibuka (lihat openSubpage) */
  function init(){
    resetCursor();
    ci = 0; setActive(); render();
    home.scrollTop = 0;
    dock.classList.remove('show');
    playHero();
  }

  setActive();
  return { init, closeModal: closeM, isModalOpen: () => modal.classList.contains('open') };
})();

/* =====================================================================
  15) MODAL ISI BRAND — jumlah halaman dinamis (1 buat Content Archive,
===================================================================== */

const brandModal      = document.getElementById('brandModal');
const brandModalTrack = document.getElementById('brandModalTrack');
const closeBrandModalBtn = document.getElementById('closeBrandModal');

function openBrandModal(pages) {
  brandModalTrack.innerHTML = '';
  (pages || []).forEach(data => {
    const pageEl = document.createElement('div');
    pageEl.className = 'brand-modal-page';

    const imgEl = document.createElement('img');
    imgEl.className = 'brand-modal-img';
    imgEl.src = data.bg;
    imgEl.alt = '';
    pageEl.appendChild(imgEl);

    if (data.link) {
      const linkEl = document.createElement('a');
      linkEl.className = 'brand-link';
      linkEl.href = data.link;
      linkEl.target = '_blank';
      linkEl.rel = 'noopener';
      pageEl.appendChild(linkEl);
    }

    brandModalTrack.appendChild(pageEl);
  });
  brandModalTrack.scrollTop = 0;
  brandModal.classList.remove('hidden');
  requestAnimationFrame(() => brandModal.classList.add('visible'));
  document.body.classList.add('modal-scroll-lock'); // kunci scroll halaman utama selagi popup terbuka
}

closeBrandModalBtn.addEventListener('click', () => closePopupOverlay(brandModal));
brandModal.addEventListener('click', (e) => {
  if (e.target === brandModal) closePopupOverlay(brandModal);
});

/* =====================================================================
  15b) MODAL EXPERIENCE / CLIENTS — halaman "Selected Brands" (HTML)
  Dipakai menggantikan gambar lama. Kotak logo dibuat sekali di sini
  dari array BRAND_LOGOS (lihat bagian GANTI DI SINI di atas).
===================================================================== */
const experienceModal         = document.getElementById('experienceModal');
const experienceModalTrack    = document.getElementById('experienceModalTrack');
const closeExperienceModalBtn = document.getElementById('closeExperienceModal');
const brandsGrid              = document.getElementById('brandsGrid');
let brandsRevealTimer = null;

BRAND_LOGOS.forEach((brand) => {
  // ada link -> kotak jadi <a> yang bisa diklik (tab baru); tidak ada -> <div> biasa
  const box = document.createElement(brand.link ? 'a' : 'div');
  box.className = 'brand-box';
  if (brand.link) {
    box.href = brand.link;
    box.target = '_blank';
    box.rel = 'noopener';
    box.setAttribute('aria-label', brand.name);
    box.classList.add('is-link');
    // kursor custom: kotak dibuat lewat JS, jadi listener-nya dipasang manual di sini
    box.addEventListener('mouseenter', () => { cursorRing.classList.add('is-hover'); cursorLabel.textContent = 'BUKA'; });
    box.addEventListener('mouseleave', () => { cursorRing.classList.remove('is-hover'); cursorLabel.textContent = ''; });
  }

  const img = document.createElement('img');
  img.className = 'brand-box__logo';
  img.alt = brand.name;
  img.loading = 'lazy';
  img.addEventListener('error', () => box.classList.add('is-empty'), { once: true });

  const placeholder = document.createElement('span');
  placeholder.className = 'brand-box__placeholder';
  placeholder.setAttribute('aria-hidden', 'true');
  placeholder.innerHTML = '<span class="brand-box__placeholder-ring">+</span><span>Logo</span>';

  // file kosong -> langsung placeholder, tanpa mencoba memuat gambar
  if (brand.file) img.src = brand.file;
  else box.classList.add('is-empty');

  box.append(img, placeholder);
  brandsGrid.appendChild(box);
});

function openExperienceModal() {
  clearTimeout(brandsRevealTimer);
  brandsGrid.classList.remove('is-visible');     // reset supaya animasi muncul lagi tiap dibuka
  experienceModal.classList.remove('hidden');
  experienceModalTrack.scrollTop = 0;            // harus setelah 'hidden' dilepas
  requestAnimationFrame(() => experienceModal.classList.add('visible'));
  document.body.classList.add('modal-scroll-lock');
  brandsRevealTimer = setTimeout(() => brandsGrid.classList.add('is-visible'), 250);
}

closeExperienceModalBtn.addEventListener('click', () => closePopupOverlay(experienceModal));

/* =====================================================================
  15c) MODAL SERVICES & PRICING — halaman lengkap (dulu index_pen.html)
  Isinya diambil dari <script type="text/html" id="servicesPageSource">
  di index.html, lalu dimasukkan ke <iframe> (srcdoc) SEKALI saat pertama
  dibuka. Iframe dipakai supaya CSS halaman itu tidak bentrok dengan
  portofolio utama.
===================================================================== */
const servicesModal         = document.getElementById('servicesModal');
const servicesFrame         = document.getElementById('servicesFrame');
const closeServicesModalBtn = document.getElementById('closeServicesModal');
let servicesLoaded = false;

// Script kecil yang disuntik ke dalam halaman Services, supaya:
//  - kursor custom portofolio tetap ikut bergerak di atas iframe
//  - tombol ESC tetap menutup modal walau fokus ada di dalam iframe
const SERVICES_BRIDGE = `
<style>@media (hover:hover) and (pointer:fine){html,body,a,button{cursor:none !important}}</style>
<script>
  document.addEventListener('mousemove', function(e){
    parent.postMessage({ type:'servicesMouse', x:e.clientX, y:e.clientY }, '*');
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') parent.postMessage({ type:'servicesClose' }, '*');
  });
<\/script>`;

function loadServicesPage() {
  if (servicesLoaded) return;
  const srcEl = document.getElementById('servicesPageSource');
  if (!srcEl || !servicesFrame) return;
  servicesLoaded = true;
  // balikin tag <script> yang tadi di-escape supaya bisa dibungkus di HTML utama
  let html = srcEl.textContent.replace(/<\\(\/?script)/g, '<$1');
  html = html.replace('</body>', SERVICES_BRIDGE.replace(/<\\\//g, '</') + '</body>');
  servicesFrame.srcdoc = html;
}

function openServicesModal() {
  loadServicesPage();
  servicesModal.classList.remove('hidden');
  requestAnimationFrame(() => servicesModal.classList.add('visible'));
  document.body.classList.add('modal-scroll-lock');
  try { servicesFrame.contentWindow.scrollTo(0, 0); } catch (e) {}
}

closeServicesModalBtn.addEventListener('click', () => closePopupOverlay(servicesModal));

window.addEventListener('message', (e) => {
  if (!servicesFrame || e.source !== servicesFrame.contentWindow || !e.data) return;
  if (e.data.type === 'servicesMouse') {
    // iframe-nya fullscreen, jadi koordinat di dalam = koordinat di layar
    mouseX = e.data.x; mouseY = e.data.y;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
  } else if (e.data.type === 'servicesClose') {
    if (servicesModal.classList.contains('visible')) closePopupOverlay(servicesModal);
  }
});

/* =====================================================================
  16) ESC menutup popup/modal/subpage
===================================================================== */

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (servicesModal.classList.contains('visible')) closePopupOverlay(servicesModal);
  else if (experienceModal.classList.contains('visible')) closePopupOverlay(experienceModal);
  else if (brandModal.classList.contains('visible')) closePopupOverlay(brandModal);
  else if (circlePopupOverlay.classList.contains('visible')) closePopupOverlay(circlePopupOverlay);
  else if (contentArchive.isModalOpen()) contentArchive.closeModal();   // pemutar video Content Archive
  else if (leftSubpage.classList.contains('visible')) closeSubpage(leftSubpage);
  else if (rightSubpage.classList.contains('visible')) closeSubpage(rightSubpage);
});
/* =====================================================================
  16b) CLOSING 1 — box putih membuka background hitam jadi PNG
===================================================================== */
const closing1Section  = document.getElementById('closing1');
const closing1Bg2      = document.getElementById('closing1Bg');
const closing1RevealBtn = document.getElementById('closing1RevealBtn');
let closing1Done = false;

closing1RevealBtn.addEventListener('click', () => {
  if (closing1Done) return;
  closing1Done = true;

  const btnRect = closing1RevealBtn.getBoundingClientRect();
  const secRect = closing1Section.getBoundingClientRect();
  const rx = ((btnRect.left + btnRect.width / 2 - secRect.left) / secRect.width) * 100;
  const ry = ((btnRect.top + btnRect.height / 2 - secRect.top) / secRect.height) * 100;

  closing1Bg2.style.setProperty('--rx', rx + '%');
  closing1Bg2.style.setProperty('--ry', ry + '%');
  closing1Bg2.classList.add('revealed');
  closing1RevealBtn.classList.add('used');
});

/* klik salah satu teks (How I Work / Experience / Services) -> buka popup
   brandModal yang sama kayak Design Archive, isinya beda per teks lewat
   CLOSING1_LINE_PAGES */
document.querySelectorAll('.closing1-line').forEach(line => {
  const key = line.dataset.line;
  // "experience" -> Selected Brands (HTML); "services" -> Services & Pricing (HTML/iframe); sisanya -> popup gambar biasa
  const openPage = () => {
    if (key === 'experience') openExperienceModal();
    else if (key === 'services') openServicesModal();   // halaman Services & Pricing (iframe)
    else openBrandModal(CLOSING1_LINE_PAGES[key]);
  };
  line.addEventListener('click', openPage);
  // biar bisa dibuka pakai keyboard juga (Enter/Space), soalnya elemennya <span>
  line.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPage();
    }
  });
});

/* =====================================================================
  17) HALAMAN 3 — FOTO LAPTOP/BUKU/KAMERA: hover ganti foto, klik buka panel
===================================================================== */
(function(){
  const wrap = document.getElementById('historyPhotoWrap');
  const hotspotLaptop = document.getElementById('hotspotLaptop');
  const hotspotBook = document.getElementById('hotspotBook');
  const hotspotCamera = document.getElementById('hotspotCamera');
  const panelLeft = document.getElementById('panelLeft');
  const panelLeftTitle = document.getElementById('panelLeftTitle');
  const panelLeftBody = document.getElementById('panelLeftBody');
  const panelLeftClose = document.getElementById('panelLeftClose');
  const panelRight = document.getElementById('panelRight');
  const panelRightClose = document.getElementById('panelRightClose');
  const tabSkillsBtn = document.getElementById('tabSkillsBtn');
  const tabSoftwareBtn = document.getElementById('tabSoftwareBtn');
  const panelRightBodySkills = document.getElementById('panelRightBodySkills');
  const panelRightBodySoftware = document.getElementById('panelRightBodySoftware');
  if (!wrap || !hotspotLaptop || !hotspotBook || !hotspotCamera) return;

  // Render list sekali di awal (isinya statis, tinggal diganti dari CONFIG di atas)
  panelRightBodySkills.innerHTML = SKILLS_LIST
    .map(item => `<div class="history-list-item history-list-item--plain">${item}</div>`).join('');
  panelRightBodySoftware.innerHTML = SOFTWARE_LIST
    .map(item => `<div class="history-list-item history-list-item--plain">${item}</div>`).join('');

  function renderWork(){
    panelLeftBody.innerHTML = WORK_EXPERIENCE.map(item => `
      <div class="history-list-item">
        <h4>${item.role}</h4>
        <span>${item.company}</span>
        <p>${item.desc}</p>
      </div>
    `).join('');
  }
  function renderSchool(){
    panelLeftBody.innerHTML = SCHOOL_HISTORY.map(item => `
      <div class="history-list-item history-list-item--compact">
        <h4>${item.name}</h4>
        <span>${item.place}</span>
      </div>
    `).join('');
  }

  let activePanel = null; // null | 'laptop' | 'book' | 'camera'
  let hoveredSpot = null;

  function refreshPhoto(){
    const key = activePanel || hoveredSpot;
    wrap.classList.remove('show-laptop', 'show-camera', 'show-book');
    if (key) wrap.classList.add('show-' + key);
  }

  function closeAllPanels(){
    panelLeft.classList.remove('is-open');
    panelRight.classList.remove('is-open');
  }

  function setRightTab(tab){
    tabSkillsBtn.classList.toggle('is-active', tab === 'skills');
    tabSoftwareBtn.classList.toggle('is-active', tab === 'software');
    panelRightBodySkills.hidden = tab !== 'skills';
    panelRightBodySoftware.hidden = tab !== 'software';
  }

  function openPanel(key){
    if (activePanel === key) { // klik lagi -> tutup
      activePanel = null;
      closeAllPanels();
      refreshPhoto();
      return;
    }
    activePanel = key;
    closeAllPanels();
    if (key === 'laptop') {
      panelLeftTitle.textContent = 'Pengalaman Kerja';
      panelLeft.classList.remove('is-compact');
      renderWork();
      panelLeft.classList.add('is-open');
    } else if (key === 'book') {
      panelLeftTitle.textContent = 'Riwayat Sekolah';
      panelLeft.classList.add('is-compact');
      renderSchool();
      panelLeft.classList.add('is-open');
    } else if (key === 'camera') {
      setRightTab('skills');
      panelRight.classList.add('is-open');
    }
    refreshPhoto();
  }

  hotspotLaptop.addEventListener('click', () => openPanel('laptop'));
  hotspotBook.addEventListener('click', () => openPanel('book'));
  hotspotCamera.addEventListener('click', () => openPanel('camera'));

  [[hotspotLaptop, 'laptop'], [hotspotBook, 'book'], [hotspotCamera, 'camera']].forEach(([el, key]) => {
    el.addEventListener('mouseenter', () => { hoveredSpot = key; refreshPhoto(); });
    el.addEventListener('mouseleave', () => { hoveredSpot = null; refreshPhoto(); });
  });

  panelLeftClose.addEventListener('click', () => { activePanel = null; closeAllPanels(); refreshPhoto(); });
  panelRightClose.addEventListener('click', () => { activePanel = null; closeAllPanels(); refreshPhoto(); });
  tabSkillsBtn.addEventListener('click', () => setRightTab('skills'));
  tabSoftwareBtn.addEventListener('click', () => setRightTab('software'));
})();

} catch (err) {
  // Kalau ada error di salah satu fitur interaktif di atas, preloader di
  // bagian (2) tetap sudah jalan duluan dan tidak akan ikut stuck.
  console.error('Ada error di bagian interaktif halaman:', err);
}
