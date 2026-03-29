# Modern Countdown Timer

Sebuah aplikasi web Countdown Timer minimalis yang dirancang untuk membantu produktivitas. Masukkan waktu yang diinginkan, tekan start, dan biarkan aplikasi ini mengingatkanmu saat waktu habis dengan alarm yang klasik.

## Fitur Utama

- Input Presisi: Masukkan durasi dalam menit dan detik secara terpisah.
- Real-time Update: Tampilan waktu yang diperbarui setiap detik dengan format MM:SS.
- Audio Alert: Memutar suara alarm selama 5 detik ketika waktu mencapai nol agar kamu tidak melewatkan momen penting.
- Responsive Design: Tampilan yang optimal baik di perangkat mobile, tablet, maupun desktop.
- Input Validation: Mencegah kesalahan input (angka negatif atau detik yang lebih dari 60).

## Cara Penggunaan

1. Buka berkas index.html di browser pilihanmu.
2. Masukkan jumlah Menit dan Detik pada kolom yang tersedia.
3. Klik tombol "Start Countdown".
4. Timer akan mulai berjalan, dan alarm akan berbunyi otomatis saat waktu habis!

## Detail Teknis

Proyek ini dibangun menggunakan:

- HTML5 Semantic Tags: Menggunakan `<main>` dan elemen input yang tepat.
- CSS Grid: Untuk tata letak yang rapi dan presisi di bagian tengah layar.
- Vanilla JavaScript: Menggunakan setInterval untuk perhitungan waktu dan Audio API untuk memutar suara.
