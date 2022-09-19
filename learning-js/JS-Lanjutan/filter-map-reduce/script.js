const angka = [-1, -2, 3, 4, 5, 1, -6];

// Mencari angka >= 3 dengan menggunakan FOR
// const angkaBaru = [];
// for (let i = 0; i <= angka.length; i++) {
//   if (angka[i] >= 3) {
//     angkaBaru.push(angka[i]);
//   }
// }

// FILTER -> Mencari angka >= 3 dengan menggunakan filter
// const angkaBaru = angka.filter((a) => a >= 3);
// console.log(angkaBaru);

// MAP
// kasus : kalikan semua angka dengan 2
// const angkaBaru = angka.map((a) => a * 2);
// console.log(angkaBaru);

// reduce : melakukan sesuatu terhadap seluruh elemen pada arraynya
// kasus : jumlahkan seluruh elemen pada array
// angka 2 dibelakang koma adalah nilai awal sebelum di jumlahkan, jika tdk kita definisikan maka defaultnya adalah 0
// const angkaBaru = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   2
// );
// console.log(angkaBaru);

// Method Chaining
// cari angka > 5 lalu hasilnya dikalikan 3 kemudian di jumlahkan
const angkaBaru = angka
  .filter((a) => a > 2) // 3, 4, 5
  .map((a) => a * 3) // 9, 12, 15
  .reduce((acc, cur) => acc + cur); // 36

console.log(angkaBaru);
