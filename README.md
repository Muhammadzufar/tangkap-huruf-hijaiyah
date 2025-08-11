# Game Edukasi: Tangkap Huruf Hijaiyah

Ini adalah sebuah game edukasi sederhana yang dirancang untuk membantu pemain belajar dan mengenali huruf-huruf hijaiyah (huruf Arab) dengan cara yang menyenangkan.

## Cara Bermain

1.  **Mulai Permainan**: Buka file `tangkap-huruf-hijaiyah.html` di browser Anda. Klik tombol **MULAI PERMAINAN** untuk memulai.
2.  **Target Huruf**: Perhatikan huruf hijaiyah yang ditampilkan di kotak target di bagian atas layar. Ini adalah huruf yang harus Anda tangkap.
3.  **Tangkap Gelembung**: Gelembung-gelembung yang berisi berbagai macam huruf hijaiyah akan jatuh dari atas layar.
4.  **Klik & Skor**: Klik pada gelembung yang berisi huruf yang sama dengan huruf target untuk mendapatkan skor.
5.  **Streak**: Jika Anda berhasil menangkap huruf yang benar secara berurutan, streak (beruntun) Anda akan bertambah.

## Kontrol Permainan

Di bagian bawah layar, terdapat panel kontrol dengan beberapa tombol:

*   **Mulai / Jeda / Lanjut**: Untuk memulai, menjeda, atau melanjutkan permainan.
*   **Ulangi Suara**: Untuk mendengarkan kembali suara dari huruf target.
*   **Ganti Huruf**: Untuk mengganti huruf target dengan huruf baru secara acak.
*   **Huruf Besar / Huruf Kecil**: Untuk mengubah ukuran font huruf di dalam gelembung.
*   **Slider Cepat**: Geser untuk mengatur kecepatan jatuhnya gelembung.
*   **Slider Musik**: Geser untuk mengatur volume musik latar.

## Kustomisasi

Game ini dapat dengan mudah dikustomisasi dengan mengubah beberapa variabel di dalam file `tangkap-huruf-hijaiyah.html`. Buka file tersebut dengan editor teks untuk melakukan perubahan.

### 1. Mengubah Suara Feedback (Benar & Salah)

Anda dapat menggunakan file audio Anda sendiri untuk suara feedback "benar" dan "salah". Audio harus dalam format Base64.

*   Cari variabel `correctSoundBase64` dan `incorrectSoundBase64`.
*   Isi string kosong dengan data Base64 dari file audio Anda.

```javascript
// Ganti string kosong di bawah ini dengan data Base64 dari file audio Anda.
const correctSoundBase64 = '...data:audio/mp3;base64,...'; // <<< ISI DATA BASE64 SUARA "BENAR"
const incorrectSoundBase64 = '...data:audio/mp3;base64,...'; // <<< ISI DATA BASE64 SUARA "SALAH"
```

### 2. Mengubah Suara Huruf Hijaiyah

Suara untuk setiap huruf hijaiyah juga dapat diganti menggunakan audio Base64.

*   Cari objek `letterSounds`.
*   Setiap huruf memiliki properti `base64`. Ganti nilai `placeholderBase64_...` dengan data Base64 audio Anda.

```javascript
const letterSounds = {
    'ا': { name: 'alif', base64: '...data:audio/mp3;base64,...' },
    'ب': { name: 'baak', base64: '...data:audio/mp3;base64,...' },
    // ... dan seterusnya
};
```

### 3. Mengubah Musik Latar

Musik latar juga dapat diganti dengan file audio Base64 Anda.

*   Cari objek `music`.
*   Ganti nilai dari properti `base64` dengan data Base64 dari file musik Anda.

```javascript
const music = {
    // ...
    base64: '...data:audio/mp3;base64,...', // <<< ISI DATA BASE64 MUSIK ANDA
    // ...
};
```

---

Dibuat oleh: zufar.muh@gmail.com
