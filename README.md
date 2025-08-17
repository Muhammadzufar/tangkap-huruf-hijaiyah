# Game Edukasi: Tangkap Huruf

Ini adalah game berbasis web yang dirancang untuk membantu anak-anak belajar mengenali dan menghafal huruf melalui permainan yang interaktif dan menyenangkan.

## Fitur

*   **Beragam Mode Belajar**: Pilih dari mode Hijaiyah, Alfabet Indonesia, Alfabet Inggris, atau mode Campuran.
*   **Gameplay Adaptif**: Tingkat kesulitan dan kecepatan permainan akan meningkat seiring dengan kenaikan level pemain.
*   **Visual Menarik**: Gelembung huruf yang muncul memiliki warna-warni pastel yang menarik secara visual.
*   **Audio Interaktif**: Dilengkapi dengan audio pelafalan huruf untuk membantu proses belajar. (Dapat disesuaikan).
*   **Responsif**: Didesain untuk dapat dimainkan dengan nyaman di perangkat desktop maupun mobile.
*   **Pengaturan In-Game**: Sesuaikan volume musik dan ukuran font langsung dari dalam permainan.

## Cara Bermain

1.  Buka file `index.html` di browser Anda.
2.  Pilih mode permainan yang Anda inginkan (contoh: Hijaiyah).
3.  Sebuah huruf target akan ditampilkan di bagian atas.
4.  Klik pada gelembung yang berisi huruf yang cocok dengan target.
5.  Setiap jawaban yang benar akan menambah skor dan memajukan progress level.
6.  Hati-hati, jangan sampai salah klik! Nyawa Anda terbatas.

## Kustomisasi Audio

Game ini dirancang untuk bekerja secara offline dan memungkinkan Anda untuk menambahkan data audio (suara) Anda sendiri dengan mudah.

1.  Buka file `audio_data.js`.
2.  Anda akan melihat daftar variabel yang diakhiri dengan `...Base64` (contoh: `placeholderBase64_alif`, `correctSoundBase64`, `musicBase64`, dll).
3.  Isi string kosong (`''`) pada setiap variabel dengan data audio berformat Base64 Anda.
4.  Simpan file, dan game akan secara otomatis menggunakan suara kustom Anda.