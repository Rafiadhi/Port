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

// GANTI DI SINI: pengaturan loading awal & scroll antar halaman
const PRELOADER_MIN_MS = 3600;   // loading minimal (ms) — makin besar makin lama, biar semua aset siap & tanpa lag
const PRELOADER_MAX_MS = 16000;  // batas paling lama (ms) kalau ada aset yang macet
const PAGE_SCROLL_MS   = 1100;   // lama animasi pindah halaman (ms) — makin besar makin pelan & halus

// Gambar PROFIL 1 (tumpukan 3 lapis): bg = background, overlay = orang,
// overlay2 = teks (baru muncul setelah tombol "tap to know me" diklik &
// gif transisi selesai — lihat PROFILE1_TAP_BTN_IMG & PROFILE1_TRANSITION_GIF).
const PROFILE1 = { bg: 'https://i.imgur.com/lS63uv5.png', overlay: 'https://i.imgur.com/pHZsp6z.png', overlay2: 'https://i.imgur.com/6cBjlQk.png' };
// Gambar PROFIL 2 (halaman statistik angka naik)
const PROFILE2 = { bg: 'https://i.imgur.com/7ACj9T8.png', overlay: 'https://i.imgur.com/cDFvwlR.png', overlay2: 'https://i.imgur.com/l43olKq.png' };

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

// GANTI DI SINI: teks statistik di Profil 2 (angkanya naik / count-up tiap halamannya tampil).
// value = angka akhir, prefix/suffix = teks sebelum/sesudah angka, label = judul kecil,
// desc = deskripsi (\n = pindah baris), x = posisi kiri kolom (piksel pada gambar 2560 lebar).
// Font/ukuran/posisi vertikal: lihat ".profile-stat" di style.css.
const PROFILE2_STATS = [
  { value: 50,  prefix: '', suffix: '+', x: 216,  label: 'BRANDS COLLABORATED',
    desc: 'Partnering with local and growing brands\nto craft impactful visual identities and engaging content.' },
  { value: 6,   prefix: '', suffix: '+', x: 1003, label: 'YEARS OF EXPERIENCE',
    desc: 'Years of hands-on experience delivering creative\nsolutions across branding, social media, and digital campaigns.' },
  { value: 300, prefix: '', suffix: '+', x: 1686, label: 'CREATIVE PROJECTS',
    desc: 'Successfully completed hundreds of design and content\nprojects with a focus on quality, consistency, and results.' },
];
const PROFILE2_COUNT_MS = 1800;   // lama animasi naik tiap angka (ms)
const PROFILE2_STAGGER_MS = 150;  // jeda antar angka (ms)

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
  HALAMAN 2 — ARCHIVE (School / Experience / Skills / Programs)
  GANTI DI SINI: isi tiap tab. Tiap item: title / place (opsional) / note (opsional)
===================================================================== */
const HISTORY_DATA = {
  school: {
    n: "01", title: "School", sub: "Where I studied", meta: "4 schools",
    items: [
      { title: "SD Raden Patah", place: "Surabaya" },
      { title: "SMP Negeri 20", place: "Surabaya" },
      { title: "SMK Negeri 1 Surabaya", place: "Broadcasting Department" },
      { title: "Universitas Dr Soetomo", place: "Surabaya – Communication Studies" }
    ]
  },
  experience: {
    n: "02", title: "Experience", sub: "Work and collaborations", meta: "11 roles", full: true,
    items: [
      { title: "Intern Editor Video", place: "PT BBS TV", note: "Editing TV programs and various news segments." },
      { title: "Photographer & Editor", place: "CV Artistic Photo", note: "Documenting events, weddings, and graduations, and creating video and photo content through editing." },
      { title: "Content Creator & Editor", place: "PT Fast Print Indonesia", note: "Creating content for YouTube and appearing on-camera as a talent in the videos." },
      { title: "Freelance Design Graphic", place: "Bantujuanmu.id", note: "Creating designs focused on brand identity and business growth." },
      { title: "Content Creator", place: "PT Raise Infinity Global", note: "Creating video content and designs for several local fashion brands." },
      { title: "Photographer & Editor", place: "Pukudata Visual", note: "Documenting events, weddings, and graduations, and creating video and photo content through editing." },
      { title: "Content Creator", place: "Rafi Adhi", note: "This is my personal account, where I frequently create content featuring educational material, showreels, and behind-the-scenes looks at my projects." },
      { title: "Clothing Designer", place: "Majerrou", note: "Designing casual wear for a local brand." },
      { title: "Editor Video", place: "Warko Creative", note: "Editing content for several brands focused on electronics." },
      { title: "Design Graphic", place: "APK Creative", note: "Designing for multiple brands and growing the business through a remote work system." },
      { title: "Freelance Design Graphic", place: "Rafi Adhi", note: "Taking on remote freelance graphic design work for several brands." }
    ]
  },
  skills: {
    n: "03", title: "Skills", sub: "What I do", meta: "10 skills",
    items: ["Graphic Design", "Video Editing", "Videography", "Photography", "AI Prompt Engineering", "Content Strategy", "Content Management", "Content Writing", "Team Leadership", "Task & Workflow Management"].map(t => ({ title: t }))
  },
  programs: {
    n: "04", title: "Programs", sub: "Software I work with", meta: "8 programs",
    items: ["Adobe Premiere Pro", "Adobe Photoshop", "Adobe Illustrator", "CapCut", "DaVinci Resolve", "Figma", "Adobe Lightroom", "Corel Draw"].map(t => ({ title: t }))
  }
};

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
  2) PRELOADER — memuat SEMUA isi web dulu (gambar, GIF, font) lalu di-decode,
  baru halaman dibuka. Hasilnya: scroll & animasi setelah itu tidak lag.
  Lama minimal: PRELOADER_MIN_MS. Aset yang macet tidak menahan > PRELOADER_MAX_MS.
===================================================================== */

const preloaderEl      = document.getElementById('preloader');
const preloaderPercent = document.getElementById('preloaderPercent');
const preloaderFill    = document.getElementById('preloaderFill');
const preloaderTag     = document.getElementById('preloaderTag');

const Preload = (function(){
  const seen = new Set(), keep = [], warmQ = [];
  let total = 0, done = 0;

  function add(list, opts){            // aset yang DITUNGGU preloader
    [].concat(list).forEach(url => {
      if (!url || seen.has(url)) return;
      seen.add(url); total++;
      let ended = false;
      const end = () => { if (!ended) { ended = true; done++; } };
      const img = new Image();
      if (opts && opts.noRef) img.referrerPolicy = 'no-referrer';
      img.onload  = () => (img.decode ? img.decode().catch(() => {}) : Promise.resolve()).then(end);
      img.onerror = end;
      setTimeout(end, 12000);          // 1 aset macet tidak boleh menahan seluruh web
      img.src = url;
      keep.push(img);                  // simpan referensi supaya hasil decode tidak cepat dibuang
    });
  }
  function fonts(list){
    list.forEach(f => {
      total++;
      let ended = false;
      const end = () => { if (!ended) { ended = true; done++; } };
      (document.fonts ? document.fonts.load(f) : Promise.resolve()).then(end, end);
      setTimeout(end, 8000);
    });
  }
  function warm(list, opts){           // aset berat: dimuat di background SETELAH web terbuka
    [].concat(list).forEach(url => { if (url && !seen.has(url)) { seen.add(url); warmQ.push([url, opts]); } });
  }
  function runWarm(){
    let active = 0;
    const next = () => {
      while (active < 2 && warmQ.length) {
        const [url, opts] = warmQ.shift();
        const img = new Image();
        if (opts && opts.noRef) img.referrerPolicy = 'no-referrer';
        active++;
        img.onload = img.onerror = () => { active--; setTimeout(next, 60); };
        img.src = url;
        keep.push(img);
      }
    };
    if (window.requestIdleCallback) requestIdleCallback(next, { timeout: 1500 }); else setTimeout(next, 300);
  }
  return { add, fonts, warm, runWarm, get total(){ return total; }, get done(){ return done; } };
})();

// aset yang ditunggu: semua gambar tampilan + logo brand + background kategori
Preload.add([
  PAGE1_BG_IMG, PAGE1_OVERLAY_IMG, START_BTN_DEFAULT_IMG, START_BTN_HOVER_IMG,
  PROFILE1.bg, PROFILE1.overlay, PROFILE1.overlay2, PROFILE1_TAP_BTN_IMG, PROFILE1_TRANSITION_GIF,
  PROFILE2.bg, PROFILE2.overlay, PROFILE2.overlay2,
  ...CONTACT_LINKS.map(c => c.icon), CONTACT_TOGGLE_IMG,
  CLOSING1_BTN_IMG, CLOSING1_REVEAL_IMG, CHOOSE_LEFT_IMG, CHOOSE_RIGHT_IMG, BACK_ICON,
  ...BRAND_LOGOS.map(b => b.file),
  ...Object.values(DESIGN_ARCHIVE_CATEGORIES).map(c => c.bg)
]);
Preload.fonts(['400 1em "Cal Sans"', '800 1em "Cal Sans"', '500 1em Montserrat', '700 1em Montserrat',
               '800 1em Montserrat', '400 1em Inter', '600 1em "Space Grotesk"', '400 1em "Space Mono"']);
// gambar halaman popup (Design Archive / How I Work): dimuat di background setelah web terbuka
Preload.warm([
  ...Object.values(DESIGN_ARCHIVE_CATEGORIES).flatMap(c => c.pages.map(p => p.bg)),
  ...Object.values(CLOSING1_LINE_PAGES).flatMap(a => a.map(p => p.bg))
]);

(function runPreloader(){
  const t0 = performance.now();
  let shown = 0, finished = false;

  const finish = () => {
    Promise.resolve(document.fonts && document.fonts.ready).catch(() => {}).then(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(() => {
        preloaderEl.classList.add('is-done');
        document.documentElement.classList.add('loaded');
        Preload.runWarm();
        setTimeout(() => preloaderEl.remove(), 1400);   // lepas layer layar penuh dari DOM
      }, 350)));
    });
  };

  const tick = (now) => {
    const el = now - t0;
    const assets = Preload.total ? Preload.done / Preload.total : 0;
    const allDone = Preload.total > 0 && Preload.done >= Preload.total;
    const ready = (allDone && el >= PRELOADER_MIN_MS) || el >= PRELOADER_MAX_MS;
    // angka tidak boleh lebih cepat dari waktu minimal & progress aset (maks 96% sampai benar-benar siap)
    const target = ready ? 100 : Math.min(assets, el / PRELOADER_MIN_MS) * 96;
    shown += (target - shown) * 0.07;
    if (ready && shown > 99.4) shown = 100;
    preloaderPercent.textContent = Math.round(shown);
    preloaderFill.style.width = shown + '%';
    if (preloaderTag) preloaderTag.textContent = shown >= 100 ? 'SIAP' : `MEMUAT PORTFOLIO  ${Preload.done}/${Preload.total}`;
    if (shown >= 100 && !finished) { finished = true; finish(); return; }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
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

// PROFIL 1 (slide0) — tumpukan gambar 1 & 2 + gambar 3 (reveal saat diklik)
const profileStackImg1El = document.getElementById('profileStackImg1');
const profileStackImg2El = document.getElementById('profileStackImg2');
const profileStackImg3El = document.getElementById('profileStackImg3');
if (profileStackImg1El) profileStackImg1El.src = PROFILE1.bg;
if (profileStackImg2El) profileStackImg2El.src = PROFILE1.overlay;
if (profileStackImg3El) profileStackImg3El.src = PROFILE1.overlay2;

const profileTapBtnImgEl = document.getElementById('profileTapBtnImg');
if (profileTapBtnImgEl) profileTapBtnImgEl.src = PROFILE1_TAP_BTN_IMG;

const profileGifTransitionEl = document.getElementById('profileGifTransition');
if (profileGifTransitionEl) profileGifTransitionEl.src = PROFILE1_TRANSITION_GIF;

// Profil 2 (halaman statistik)
(function(){
  const el = document.getElementById('slide2');
  if (!el) return;
  const bgEl = el.querySelector('.profile-bg');
  const ovEl = el.querySelector('.profile-overlay');
  const ovAltEl = el.querySelector('.profile-overlay-alt');
  if (bgEl) bgEl.style.backgroundImage = `url('${PROFILE2.bg}')`;
  if (ovEl) ovEl.src = PROFILE2.overlay;
  if (ovAltEl && PROFILE2.overlay2) ovAltEl.src = PROFILE2.overlay2;
})();

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
  (tanpa efek 3D; loop animasi hanya jalan saat kursor bergerak dan
  berhenti otomatis kalau sudah menyusul — dulu jalan terus tiap frame)
===================================================================== */
(function(){
  const page1El = document.getElementById('page1');
  const overlayImg = document.getElementById('page1OverlayImg');
  const maskCircle = document.getElementById('cursorMaskCircle');
  if (!page1El || !overlayImg || !maskCircle) return;

  maskCircle.setAttribute('r', CURSOR_SPOT_RADIUS);

  let targetX = 0, targetY = 0, curX = 0, curY = 0, primed = false, raf = 0;

  function paint(){
    maskCircle.setAttribute('cx', curX.toFixed(1));
    maskCircle.setAttribute('cy', curY.toFixed(1));
  }
  function setCenter(){
    const rect = page1El.getBoundingClientRect();
    targetX = curX = rect.width / 2;
    targetY = curY = rect.height / 2;
    paint();
  }
  setCenter();
  window.addEventListener('resize', setCenter);

  function frame(){
    curX += (targetX - curX) * 0.16;
    curY += (targetY - curY) * 0.16;
    paint();
    raf = (Math.abs(targetX - curX) > 0.2 || Math.abs(targetY - curY) > 0.2) ? requestAnimationFrame(frame) : 0;
  }

  page1El.addEventListener('mousemove', (e) => {
    const rect = page1El.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
    if (!primed) { curX = targetX; curY = targetY; primed = true; }
    page1El.classList.add('overlay-ready');
    if (!raf) raf = requestAnimationFrame(frame);
  }, { passive: true });
  page1El.addEventListener('mouseenter', () => page1El.classList.add('overlay-ready'));
})();

/* =====================================================================
  4) CUSTOM CURSOR (loop berhenti saat kursor diam)
===================================================================== */

const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
const cursorLabel = document.getElementById('cursorLabel');

let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, cursorPrimed = false, cursorRaf = 0;

function cursorFrame(){
  ringX += (mouseX - ringX) * 0.18;
  ringY += (mouseY - ringY) * 0.18;
  cursorRing.style.transform = `translate(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px) translate(-50%,-50%)`;
  cursorRaf = (Math.abs(mouseX - ringX) > 0.1 || Math.abs(mouseY - ringY) > 0.1) ? requestAnimationFrame(cursorFrame) : 0;
}
function kickCursor(){
  if (!cursorPrimed) { ringX = mouseX; ringY = mouseY; cursorPrimed = true; }
  if (!cursorRaf) cursorRaf = requestAnimationFrame(cursorFrame);
}

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
  kickCursor();
}, { passive: true });

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
  8) POPUP — helper tutup + kunci scroll halaman utama selagi popup/subpage terbuka
===================================================================== */

// kunci scroll halaman utama selama ada subpage/popup yang tampil
function syncScrollLock() {
  const open = document.querySelector('.subpage:not(.hidden), .popup-overlay:not(.hidden)');
  htmlEl.classList.toggle('modal-scroll-lock', !!open);
}

function closePopupOverlay(el) {
  el.classList.remove('visible');
  setTimeout(() => { el.classList.add('hidden'); syncScrollLock(); }, 400);
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
  9a) PROFIL 2 — TEKS STATISTIK: angka naik + cerah di sekitar kursor
===================================================================== */
(function(){
  const slide = document.getElementById('slide2');
  const box = document.getElementById('profileStats');
  if (!slide || !box || !PROFILE2_STATS.length) return;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1) isi 2 lapis (redup & cerah) dengan teks yang sama persis
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const html = PROFILE2_STATS.map((it, i) => `
    <div class="profile-stat" style="--x:${it.x}">
      <div class="profile-stat-num" data-i="${i}">${it.prefix || ''}0${it.suffix || ''}</div>
      <div class="profile-stat-label">${esc(it.label)}</div>
      <div class="profile-stat-rule"></div>
      <p class="profile-stat-desc">${esc(it.desc).replace(/\n/g, '<br>')}</p>
    </div>`).join('');
  box.querySelectorAll('.profile-stats-layer').forEach(l => { l.innerHTML = html; });

  // 2) angka naik (kedua lapis dianimasikan bersamaan)
  const nums = [...box.querySelectorAll('.profile-stat-num')];
  const paint = (el, k) => {
    const it = PROFILE2_STATS[el.dataset.i];
    el.textContent = (it.prefix || '') + Math.round(it.value * k) + (it.suffix || '');
  };
  const setAll = (k) => nums.forEach(el => paint(el, k));
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  let raf = null;

  const run = () => {
    const t0 = performance.now();
    const tick = (now) => {
      let done = true;
      nums.forEach(el => {
        const t = Math.min(1, Math.max(0, (now - t0 - el.dataset.i * PROFILE2_STAGGER_MS) / PROFILE2_COUNT_MS));
        paint(el, easeOut(t));
        if (t < 1) done = false;
      });
      raf = done ? null : requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  };

  new IntersectionObserver(([e]) => {
    cancelAnimationFrame(raf);
    if (!e.isIntersecting) { setAll(0); return; }   // keluar layar -> reset, biar bisa naik lagi
    if (reduceMotion) { setAll(1); return; }
    setAll(0);
    run();
  }, { threshold: 0.5 }).observe(slide);

  // 3) bulatan cerah mengikuti kursor (menyusul dengan lag halus)
  let tx = 0, ty = 0, cx = 0, cy = 0, primed = false, spotRaf = null;
  const spotLoop = () => {
    cx += (tx - cx) * 0.16;
    cy += (ty - cy) * 0.16;
    box.style.setProperty('--mx', cx.toFixed(1) + 'px');
    box.style.setProperty('--my', cy.toFixed(1) + 'px');
    spotRaf = (Math.abs(tx - cx) > 0.3 || Math.abs(ty - cy) > 0.3) ? requestAnimationFrame(spotLoop) : null;
  };
  slide.addEventListener('mousemove', (e) => {
    const r = box.getBoundingClientRect();
    tx = e.clientX - r.left;
    ty = e.clientY - r.top;
    if (!primed) { cx = tx; cy = ty; primed = true; }  // begitu masuk langsung pas, tidak "berenang"
    box.classList.add('is-near');
    if (!spotRaf) spotRaf = requestAnimationFrame(spotLoop);
  });
  slide.addEventListener('mouseleave', () => { primed = false; box.classList.remove('is-near'); });
})();

/* =====================================================================
  9b) SPOTLIGHT OVERLAY 2 — bulatan lembut ikut kursor di profil 2
  (loop hanya jalan saat kursor bergerak)
===================================================================== */
document.querySelectorAll('.profile-slide').forEach(slide => {
  const altImg = slide.querySelector('.profile-overlay-alt');
  if (!altImg) return;

  let tx = 50, ty = 50, cx = 50, cy = 50, primed = false, raf = 0;
  const frame = () => {
    cx += (tx - cx) * 0.16;
    cy += (ty - cy) * 0.16;
    altImg.style.setProperty('--mx', cx.toFixed(2) + '%');
    altImg.style.setProperty('--my', cy.toFixed(2) + '%');
    raf = (Math.abs(tx - cx) > 0.02 || Math.abs(ty - cy) > 0.02) ? requestAnimationFrame(frame) : 0;
  };

  slide.addEventListener('mousemove', (e) => {
    const rect = slide.getBoundingClientRect();
    tx = ((e.clientX - rect.left) / rect.width) * 100;
    ty = ((e.clientY - rect.top) / rect.height) * 100;
    if (!primed) { cx = tx; cy = ty; primed = true; }
    if (!raf) raf = requestAnimationFrame(frame);
  }, { passive: true });
  slide.addEventListener('mouseleave', () => { primed = false; });
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
    kickFloat();
  }, { passive: true });
  slide0.addEventListener('mouseleave', () => {
    floatTargetX = 0; floatTargetY = 0;
    kickFloat();
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

  // loop hanya jalan selama gambar masih bergerak, lalu berhenti sendiri
  let floatRaf = 0;
  function floatFrame(){
    floatCurX += (floatTargetX - floatCurX) * 0.08;
    floatCurY += (floatTargetY - floatCurY) * 0.08;
    const moving = Math.abs(floatTargetX - floatCurX) > 0.01 || Math.abs(floatTargetY - floatCurY) > 0.01;
    if (!moving) { floatCurX = floatTargetX; floatCurY = floatTargetY; }
    if (floatActive) {
      applyTilt(img1, DEPTH_1);
      applyTilt(img2, DEPTH_2);
      applyTilt(img3, DEPTH_3);
    }
    floatRaf = moving ? requestAnimationFrame(floatFrame) : 0;
  }
  function kickFloat(){ if (!floatRaf) floatRaf = requestAnimationFrame(floatFrame); }

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
  btn.addEventListener('click', () => goToSection(dotSections[i]));
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
  10b) SCROLL ANTAR HALAMAN — 1 gulir = 1 halaman, dianimasikan JS (easing halus)
  Halaman: Profil 1 -> Archive (School/Experience/...) -> Profil 2 -> Pilih Arsip -> Closing.
  - Desktop: roda mouse / trackpad / keyboard dipandu animasi easing (PAGE_SCROLL_MS).
  - Kotak yang punya scroll sendiri (daftar Experience, popup) tetap discroll normal dulu;
    baru kalau sudah mentok & digulir lagi, pindah halaman.
  - HP / layar sentuh: scroll native + snap per halaman (lihat style.css).
===================================================================== */
const pageSections = ['slide0','slide1','slide2','page4','closing1','closing2']
  .map(id => document.getElementById(id)).filter(Boolean);
const scroller = document.scrollingElement || document.documentElement;
const reduceMotionPaging = matchMedia('(prefers-reduced-motion: reduce)').matches;
const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let pagingBusy = false, pagingRaf = 0, lockUntil = 0, lastWheelT = 0, lastWheelAbs = 0, lastInnerT = 0;

const sectionTop = (el) => el.getBoundingClientRect().top + scroller.scrollTop;
function nearestSection(){
  const y = scroller.scrollTop;
  let best = 0, bd = Infinity;
  pageSections.forEach((s, i) => { const d = Math.abs(sectionTop(s) - y); if (d < bd) { bd = d; best = i; } });
  return best;
}

function scrollToY(y, dur){
  cancelAnimationFrame(pagingRaf);
  const from = scroller.scrollTop, dist = y - from;
  if (Math.abs(dist) < 1 || reduceMotionPaging || dur <= 0) { scroller.scrollTop = y; return; }
  pagingBusy = true;
  htmlEl.classList.add('no-snap');
  const t0 = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - t0) / dur);
    scroller.scrollTop = from + dist * easeInOutCubic(t);
    if (t < 1) pagingRaf = requestAnimationFrame(step);
    else { pagingBusy = false; lockUntil = performance.now() + 220; htmlEl.classList.remove('no-snap'); }
  };
  pagingRaf = requestAnimationFrame(step);
}

function goToIndex(i){
  i = Math.max(0, Math.min(pageSections.length - 1, i));
  const dist = Math.abs(i - nearestSection());
  scrollToY(sectionTop(pageSections[i]), Math.min(1800, PAGE_SCROLL_MS + (dist - 1) * 260));
}
function goToSection(el){ const i = pageSections.indexOf(el); if (i > -1) goToIndex(i); }

// apakah ada kotak scroll (overflow auto) di bawah kursor yang masih bisa digulir ke arah ini?
function innerScrollState(target, dy){
  for (let el = target; el && el !== document.body && el !== document.documentElement; el = el.parentElement) {
    if (!(el instanceof Element)) break;
    const oy = getComputedStyle(el).overflowY;
    if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 1) {
      if (dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) return 'scroll';
      if (dy < 0 && el.scrollTop > 0) return 'scroll';
      return 'edge';
    }
  }
  return 'none';
}

window.addEventListener('wheel', (e) => {
  if (!started || e.ctrlKey) return;                          // sebelum START: sudah diblok di atas
  if (htmlEl.classList.contains('modal-scroll-lock')) return; // popup/subpage terbuka: biarkan scroll internalnya
  let dy = e.deltaY; if (e.deltaMode === 1) dy *= 32; else if (e.deltaMode === 2) dy *= innerHeight;
  if (Math.abs(e.deltaX) > Math.abs(dy) || Math.abs(dy) < 4) return;

  const now = performance.now();
  const inner = innerScrollState(e.target, dy);
  if (inner === 'scroll') { lastInnerT = now; return; }       // biar kotak itu discroll dulu
  e.preventDefault();                                          // sisanya kita yang atur
  if (inner === 'edge' && now - lastInnerT < 450) return;     // baru mentok: tunggu gulir baru

  const abs = Math.abs(dy);
  const fresh = now - lastWheelT > 140 || abs > lastWheelAbs * 1.8;   // gulir BARU, bukan sisa inersia trackpad
  lastWheelT = now; lastWheelAbs = abs;
  if (pagingBusy || now < lockUntil || !fresh) return;
  goToIndex(nearestSection() + (dy > 0 ? 1 : -1));
}, { passive: false });

window.addEventListener('keydown', (e) => {
  if (!started || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
  if (htmlEl.classList.contains('modal-scroll-lock')) return;
  const onBody = !document.activeElement || document.activeElement === document.body;
  const k = e.key;
  let to = null;
  if (k === 'ArrowDown' || k === 'PageDown' || (k === ' ' && onBody && !e.shiftKey)) to = nearestSection() + 1;
  else if (k === 'ArrowUp' || k === 'PageUp' || (k === ' ' && onBody && e.shiftKey)) to = nearestSection() - 1;
  else if (k === 'Home') to = 0;
  else if (k === 'End') to = pageSections.length - 1;
  if (to === null || document.activeElement && /^(INPUT|TEXTAREA|SELECT|IFRAME)$/.test(document.activeElement.tagName)) return;
  if (innerScrollState(document.activeElement, k === 'ArrowUp' || k === 'PageUp' ? -1 : 1) === 'scroll') return;
  e.preventDefault();
  if (!pagingBusy) goToIndex(to);
});

// ukuran layar berubah -> rapikan lagi ke halaman terdekat
let pagingResizeT = 0;
window.addEventListener('resize', () => {
  clearTimeout(pagingResizeT);
  pagingResizeT = setTimeout(() => { if (started && !pagingBusy) scroller.scrollTop = sectionTop(pageSections[nearestSection()]); }, 200);
});

// animasi melayang di Pilih Arsip hanya jalan saat halamannya terlihat
const page4El = document.getElementById('page4');
if (page4El) new IntersectionObserver(([e]) => page4El.classList.toggle('on-screen', e.isIntersecting), { threshold: 0.05 }).observe(page4El);

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
  syncScrollLock();
  requestAnimationFrame(() => el.classList.add('visible'));
  if (el === rightSubpage) contentArchive.init();
}
function closeSubpage(el) {
  if (el === rightSubpage) contentArchive.closeModal(); // hentikan video kalau pemutar masih terbuka
  el.classList.remove('visible');
  setTimeout(() => { el.classList.add('hidden'); syncScrollLock(); }, 800);
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
    return { init(){}, closeModal(){}, isModalOpen(){ return false; }, posterUrls(){ return []; } };
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
  const posterUrls = (i) => (D[i] ? D[i][1] : []).map(poster).filter(Boolean);
  return { init, closeModal: closeM, isModalOpen: () => modal.classList.contains('open'), posterUrls };
})();

/* pramuat poster Content Archive: kategori pertama ditunggu preloader,
   kategori lain dimuat di background setelah web terbuka */
Preload.add(contentArchive.posterUrls(0), { noRef: true });
Preload.warm(D.slice(1).flatMap((_, k) => contentArchive.posterUrls(k + 1)), { noRef: true });

/* =====================================================================
  15) MODAL ISI BRAND — jumlah halaman dinamis (1 buat Content Archive,
===================================================================== */

const brandModal      = document.getElementById('brandModal');
const brandModalTrack = document.getElementById('brandModalTrack');
const closeBrandModalBtn = document.getElementById('closeBrandModal');

function openBrandModal(pages) {
  brandModalTrack.innerHTML = '';
  (pages || []).filter(d => d && d.bg).forEach(data => {
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
  syncScrollLock(); // kunci scroll halaman utama selagi popup terbuka
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
  syncScrollLock();
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
  syncScrollLock();
  try { servicesFrame.contentWindow.scrollTo(0, 0); } catch (e) {}
}

closeServicesModalBtn.addEventListener('click', () => closePopupOverlay(servicesModal));

window.addEventListener('message', (e) => {
  if (!servicesFrame || e.source !== servicesFrame.contentWindow || !e.data) return;
  if (e.data.type === 'servicesMouse') {
    // iframe-nya fullscreen, jadi koordinat di dalam = koordinat di layar
    mouseX = e.data.x; mouseY = e.data.y;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
    kickCursor();
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
  17) HALAMAN 2 — ARCHIVE (School / Experience / Skills / Programs)
  Tab bertumpuk: klik salah satu -> tab itu naik ke atas, isinya muncul.
  Datanya: HISTORY_DATA (bagian atas file ini). Bungkus IIFE biar nama
  variabelnya tidak bentrok dengan bagian lain.
===================================================================== */
(function(){
  const slide = document.getElementById('slide1');
  const archive = document.getElementById('historyArchive');
  const view = document.getElementById('historyView');
  const list = document.getElementById('historyList');
  const backBtn = document.getElementById('historyBack');
  const layers = [...document.querySelectorAll('#historyArchive .layer[data-key]')];
  if (!slide || !archive || !view || !list || !backBtn || !layers.length) return;

  const DATA = HISTORY_DATA;
  const root = document.documentElement;
  let current = null, opener = null;

  const el = (tag, cls, text) => Object.assign(document.createElement(tag), { className: cls || '', textContent: text || '' });

  // salinan biru dari tiap garis abu-abu; CSS cuma menampilkannya di sekitar kursor
  layers.forEach(l => {
    const b = el('span', 'blue');
    b.setAttribute('aria-hidden', 'true');
    b.append(l.querySelector('.outline').cloneNode(true));
    l.querySelectorAll('.rule').forEach(r => b.append(r.cloneNode(true)));
    l.querySelector('.hit').before(b);
    l.addEventListener('click', () => openView(l.dataset.key, l));
  });

  // posisi kursor buat cahaya biru: dihitung relatif ke kotak halaman ini
  // (bukan ke layar), jadi tetap pas walau halaman lagi ke-scroll setengah
  let px = 0, py = 0, tick = false, moving = false, vis = false;
  const setGlow = (x, y) => { archive.style.setProperty('--mx', x + 'px'); archive.style.setProperty('--my', y + 'px'); };
  addEventListener('pointermove', e => {
    if (!vis || moving || (archive.classList.contains('is-open') && !archive.classList.contains('partial')) || !archive.classList.contains('settled')) return;
    px = e.clientX; py = e.clientY;
    if (!tick) { tick = true; requestAnimationFrame(() => { const r = archive.getBoundingClientRect(); setGlow(px - r.left, py - r.top); tick = false; }); }
  }, { passive: true });
  root.addEventListener('mouseleave', () => setGlow(-9999, -9999));

  function render(key) {
    const d = DATA[key];
    view.setAttribute('aria-label', d.title);
    list.replaceChildren();
    d.items.forEach((it, i) => {
      const li = el('li');
      li.style.setProperty('--i', i);
      li.append(el('h2', '', it.title));
      if (it.place) li.append(el('p', 'place', it.place));
      if (it.note) li.append(el('p', 'note', it.note));
      list.append(li);
    });
    view.querySelector('.vscroll').scrollTop = 0;
  }

  let mv = 0;
  const pause = () => { moving = true; setGlow(-9999, -9999); clearTimeout(mv); mv = setTimeout(() => { moving = false; }, 1300); };

  // taruh tab yang dibuka di atas, tab di bawahnya tetap kelihatan (didorong turun
  // secukupnya). Experience (full:true) atau isi yang tidak muat -> buka penuh.
  function layout(key) {
    const i = layers.findIndex(l => l.dataset.key === key);
    const th = layers[0].querySelector('.outline').getBoundingClientRect().height, k = th / 122;
    const H = archive.clientHeight, S = H * 0.177, n = layers.length - 1 - i;
    const T = list.getBoundingClientRect().bottom - view.getBoundingClientRect().top + 80 * k;   // atas tab berikutnya (relatif ke halaman ini)
    const partial = !DATA[key].full && n > 0 && T + th + (n - 1) * S + H * 0.03 <= H;
    view.classList.toggle('partial', partial);
    view.style.setProperty('--vb', partial ? (H - T) + 'px' : '0px');
    archive.classList.toggle('partial', partial);
    archive.inert = !partial;
    layers.forEach((l, j) => {
      l.classList.toggle('open', j === i);
      l.classList.toggle('sink', j !== i && (!partial || j < i));
      if (partial && j > i) {
        const dy = T + (j - i - 1) * S - l.offsetTop;
        l.style.transform = `translateY(${dy}px)`;
        l.style.setProperty('--cy', (l.offsetTop + dy) + 'px');
      } else { l.style.removeProperty('transform'); l.style.removeProperty('--cy'); }
    });
  }

  function openView(key, from) {
    if (!DATA[key] || key === current) return;
    const first = !current;
    current = key;
    opener = from || layers.find(l => l.dataset.key === key);
    pause();
    const go = () => {
      render(key); layout(key);
      view.inert = false;
      view.setAttribute('aria-hidden', 'false');
      view.classList.add('on');
    };
    if (first) {
      archive.classList.add('is-open');
      go();
      setTimeout(() => backBtn.focus({ preventScroll: true }), 1000);
    } else {              // pindah antar tab: teks fade out dulu, baru geser
      view.classList.remove('on');
      setTimeout(() => { if (current === key) go(); }, 280);
    }
  }

  function closeView() {
    if (!current) return;
    current = null;
    view.classList.remove('on');
    view.setAttribute('aria-hidden', 'true');
    view.inert = true;
    archive.classList.remove('is-open', 'partial');
    archive.inert = false;
    pause();
    if (opener) { opener.classList.add('leaving'); const o = opener; setTimeout(() => o.classList.remove('leaving'), 1300); }
    layers.forEach(l => { l.classList.remove('open', 'sink'); l.style.removeProperty('transform'); l.style.removeProperty('--cy'); });
    if (opener) opener.focus({ preventScroll: true });
  }

  let rz = 0;
  addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { if (current) layout(current); }, 150); });
  backBtn.addEventListener('click', closeView);
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !current) return;
    if (document.querySelector('.subpage.visible, .popup-overlay.visible')) return;   // biarkan Esc menutup popup/subpage dulu
    closeView();
  });

  // intro: tab naik satu-satu (School dulu) — jalan sekali, begitu halaman ini terlihat
  let introPlayed = false;
  function playIntro() {
    if (introPlayed) return;
    introPlayed = true;
    const fontsReady = Promise.race([
      document.fonts ? document.fonts.ready : Promise.resolve(),
      new Promise(r => setTimeout(r, 1500))
    ]);
    fontsReady.then(() => requestAnimationFrame(() => requestAnimationFrame(() => {
      archive.classList.add('in');
      setTimeout(() => archive.classList.add('settled'), 2800);
    })));
  }
  new IntersectionObserver(([e]) => { if (e.isIntersecting) playIntro(); }, { threshold: 0.5 }).observe(slide);
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; }).observe(slide);
})();

} catch (err) {
  // Kalau ada error di salah satu fitur interaktif di atas, preloader di
  // bagian (2) tetap sudah jalan duluan dan tidak akan ikut stuck.
  console.error('Ada error di bagian interaktif halaman:', err);
}