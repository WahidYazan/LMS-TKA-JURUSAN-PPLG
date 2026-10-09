export interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
}

// Daftar soal ujian lokal tanpa kunci jawaban untuk ditampilkan ke siswa
export const examQuestionsList: ExamQuestion[] = [
  {
    id: 1,
    question:
      "Apa tugas utama seorang Software Developer dalam pengembangan perangkat lunak?",
    options: [
      "Membangun aplikasi web, mobile, dan desktop",
      "Mengelola server dan infrastruktur",
      "Mendesain antarmuka pengguna",
      "Melakukan testing aplikasi",
    ],
  },
  {
    id: 2,
    question:
      "Metodologi apa yang menggunakan sprint dalam pengembangan software?",
    options: ["Waterfall", "Agile dan Scrum", "Kanban", "Lean"],
  },
  {
    id: 3,
    question:
      "Apa tujuan utama dari K3LH dalam lingkungan kerja teknologi informasi?",
    options: [
      "Meningkatkan produktivitas kerja",
      "Menjamin keselamatan dan kesehatan kerja",
      "Mengurangi biaya operasional",
      "Meningkatkan kualitas produk",
    ],
  },
  {
    id: 4,
    question:
      "Apa fungsi dari Environment Variables dalam pengembangan software?",
    options: [
      "Menyimpan konfigurasi sensitif",
      "Menyimpan data permanen",
      "Mengelola dependencies",
      "Menjalankan automated tests",
    ],
  },
  {
    id: 5,
    question:
      "Layer TCP/IP mana yang bertanggung jawab untuk end-to-end communication?",
    options: [
      "Network Layer",
      "Data Link Layer",
      "Transport Layer",
      "Application Layer",
    ],
  },
  {
    id: 6,
    question:
      "Apa perbedaan utama antara Array dan Linked List?",
    options: [
      "Array memiliki fixed size, Linked List dinamis",
      "Linked List lebih cepat untuk random access",
      "Array tidak bisa menyimpan tipe data berbeda",
      "Linked List tidak memerlukan memory allocation",
    ],
  },
  {
    id: 7,
    question:
      "Apa yang dimaksud dengan Recursion dalam pemrograman?",
    options: [
      "Loop yang berjalan tanpa henti",
      "Fungsi yang memanggil dirinya sendiri",
      "Variabel yang tidak bisa diubah",
      "Metode untuk mengompres data",
    ],
  },
  {
    id: 8,
    question:
      "Prinsip OOP mana yang menggambarkan kemampuan sebuah class untuk memiliki multiple forms?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
  },
  {
    id: 9,
    question:
      "Apa fungsi dari Access Modifier 'private' dalam OOP?",
    options: [
      "Dapat diakses dari class manapun",
      "Hanya dapat diakses dalam class yang sama",
      "Dapat diakses oleh subclass",
      "Dapat diakses dalam package yang sama",
    ],
  },
  {
    id: 10,
    question:
      "Apa yang dimaksud dengan Method Overriding?",
    options: [
      "Membuat method dengan nama sama dalam class yang sama",
      "Mengganti implementasi method di subclass",
      "Membuat method dengan parameter berbeda",
      "Menghapus method dari superclass",
    ],
  },
];

// Kunci jawaban tersimpan di server lokal untuk penilaian skor
export const localAnswerKeyMap: Record<number, number> = {
  1: 0,
  2: 1,
  3: 1,
  4: 0,
  5: 2,
  6: 0,
  7: 1,
  8: 2,
  9: 1,
  10: 1,
};
