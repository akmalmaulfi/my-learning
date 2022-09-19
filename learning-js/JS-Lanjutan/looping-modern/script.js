// ^ FOR..OF -> untuk looping iterable Object.
// * Iterable Object :
// - String
// - Array
// - Arguments / NodeList
// - TypedArray
// - Map
// - Set
// - User-defined types

// const mhs = ["Akmal", "Mega", "Septi"];

//  * Array
// ? Looping dengan for biasa
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// ? Looping dengan foreach
// mhs.forEach(m => console.log(m));

// ? forEach bisa punya 2 parameter, 1 untuk representasikan elemen, 1 untuk indexnya
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// })

// ? Looping dengan for of
// for (const m of mhs) {
//   console.log(m);
// }

// ? untuk menangkap index dengan menggunakan for bisa menggunakan method entries.
// for ([i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`)
// }

// * String
// const nama = "Akmal";
// ? Looping dengan for of
// for (n of nama) {
//   console.log(n)
// }

//  * NodeList
// const liNama = document.querySelectorAll(".nama");

// ? Looping Nodelist dengan foreach
// liNama.forEach(n => console.log(n.textContent));

// ? Looping Nodelist dengan for of
// for ( n of liNama) {
//   console.log(n.textContent);
// }

// * Arguments
// function jumlahkanAngka() {
// ? looping arguments
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));

// ^ FOR IN -> utk looping selain iterable object
const mhs = {
  nama: 'Akmal Maulfi',
  umur: 20,
  email: 'akmalmaulfi@gmail.com'
}

for (m in mhs) {
  // ? utk mengambil propertinya 
  // console.log(m);
  // ? utk mengambil value/isinya
  console.log(mhs[m]);
}