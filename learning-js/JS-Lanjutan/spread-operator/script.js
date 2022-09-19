// ^ Spread Operator
// memecah iterables menjadi single element

// * Gabungin Array
// ? menggabungkan 2 buah array dengan spread operator ...
// const mhs = ['Akmal', 'Mega', 'Septi'];
// const dosen = ['Noeman', 'Prio', 'Hendarman'];
// const orang  = [...mhs, ...dosen];

// ? menggabungkan 2 buah array dengan method concat
// const orang = mhs.concat(dosen);
// console.log(orang);

// * meng-copy array
// ? kalau menggabungan dengan cara ini, ketika kita merubah isi dari array mhs1 seperti mengubah mhs1[0], maka isi dari array mhs akan ikut ke ubah juga.
// const mhs = ['Akmal', 'Mega', 'Septi'];
// const mhs1 = mhs;
// mhs1[0] = 'Ratu';
// console.log(mhs);

// ? mengcopy dengan spread operator tidak akan merubah isi dari array asal / sebelumnya.
// const mhs = ['Akmal', 'Mega', 'Septi'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Ratu';
// console.log(mhs);


// * Kasus lain
const liMhs = document.querySelectorAll('li');
// console.log(liMhs);

// ? Looping dengan for biasa
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// ? Looping dengan map
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;