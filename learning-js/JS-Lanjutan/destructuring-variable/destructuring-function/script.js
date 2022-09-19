// Destructuring

// ^ KASUS PERTAMA
// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

// * Cara biasa seperti ini memang bisa, tapi agak ribet karna kita harus menyertakan index saat ingin memanggilnya.
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// * menggunakan Destructuring sehingga kita tidak perlu menyertakan index saat ingin memanggilnya
// ? kita juga melakukan destructing pada return function, sehingga
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali)


// ^ KASUS KEDUA
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// ? kalau return kita berupa array maka kita tidak bisa acak dalam destructuringnya dan harus sesuai, kalau kita ingin destructuring scr acak maka kita harus mengubah return nya menjadi objek.
// const [tambah, kurang, kali, bagi] = kalkulasi(2,3);
// console.log(kali);

// * return menggunakan object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   }
// }
// ? karna return kita sudah object maka kita dapat mengubah urutan destructuringnya sesuai dengan kemauan kita.
// const {bagi, kali, kurang, tambah } = kalkulasi(2, 3);
// console.log(tambah);


// ^ KASUS LAIN -> Destructuring function arguments
const mhs1 = {
  nama: 'Akmal Maulfi',
  umur: 20,
  email: 'akmalmaulfi@gmail.com',
  nilai: {
    tugas: 70,
    uts: 75,
    uas: 80
  }
}

//  ? cetakMhs tanpa Destructuring
// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur}`;
// }

// console.log(cetakMhs(mhs1));


// ? cetakMhs dengan Destructuring
function cetakMhs({nama, umur, email, nilai: {tugas, uts, uas}}) {
  return`Halo, nama saya ${nama}, saya berumur ${umur}, dan email saya adalah ${email}, dan nilai uas saya adalah ${uas}`
}

console.log(cetakMhs(mhs1));
