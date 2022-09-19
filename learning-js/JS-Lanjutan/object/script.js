// cara untuk membuat Object pada Javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk object yg banyak
// const mahasiswa = {
//   nama: "Akmal Maulfi",
//   energi: "10",
//   makan: function (porsi) {
//     this.energi = parseInt(this.energi) + porsi;
//     console.log(`Halo ${this.nama}, selamat makan.`);
//   },
// };

// 2. function Declation

// membuat function secara terpisah, agar menghemat memori. jadi pen=mbuatan function dibalik layar hanya 1 kali.
// const methodMahasiswa = {
//   // PROBLEM : setiap ada penambahan atau pengurangan method baru maka harus di deklarasikan di parent objectnya. sehingga membuat efisiensi berkurang.
//   // Lebih efektif ketika membuat object.create
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain.`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   // sebagai penanda bahwa function akan membuat objek
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   // memanggil object lain
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

// let akmal = Mahasiswa("Akmal Maulfi", 50);

// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//   // kalau pake constructor dia tidak butuh variabel awal seperti function declaration, tetapi menggunakan keywoard this
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain.`);
//   };
// }

// let akmal = new Mahasiswa("Akmal", 50);

// 4. Object.create
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain.`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   // membuat object baru sambil ikut membawa properti dan method dari object lain
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }
// let akmal = Mahasiswa("Akmal Maulfi", 50);

// Menggunakan Prototype
function Mahasiswa(nama, energi) {
  // sebenearnya dibelakang layar javascript membuat variabel seperti ini
  // let this = Object.create(methodManusia), nah yang terjadi di dalam ini juga seperti ini
  // let this = Object.create(Mahasiswa.prototype), jadi secara default sebenarnya constructor function sudah punya parent yaitu prototype;
  // sehingga tidak perlu membuat object baru sebagai parent

  this.nama = nama;
  this.energi = energi;
}
// jadi kita bisa memanfaatkan prototype, sehingga tidak perlu membuat object baru
Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat bermain!`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur`;
};

let akmal = new Mahasiswa("akmal", 10);
