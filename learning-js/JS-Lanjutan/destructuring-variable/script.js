// * Destructuring Varible / Destructuring Assigment

//  ? Destructuring Array
// const perkenalan = ["halo", "nama", "saya", "akmal maulfi"];
//  const [salam, satu, dua, nama] = perkenalan;

//  * Skipping items / jika ingin ada elemen yg di skip
// const [salam, , , nama] = perkenalan;

//  * swap item / menukar nilai variabel
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
//  kita tuker nilainya
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(c);

// * misalkan kita ingin membongkar nilai pada array, tapi kita tidak tau jumlah dari arraynya
// * maka kita bisa menggunakan Rest Paremeter
// const [a, b, c, ...values] = [1, 2, 3, 4, 5, 6];
// * dan sisa dari properti akan dimasukan kedalam array values
// console.log(values);





//  ? Destructuring Object
// const mhs = {
//   nama: "Akmal Maulfi",
//   umur: 20,
// };
// *  kalau destructuring object namanya harus sama dengan value objectnya, beda dengan array yg nama destructuring nya bisa bebas
// const { nama, umur } = mhs;
// console.log(nama);

//  * Assignment tanpa deklarasi object dengan menggunakan tanda () 
// ({nama, umur} = { nama: 'Akmal Maulfi',umur: 20, });
// console.log(umur);

// * Assign ke variabel baru
// const mhs = {
//   nama: 'Akmal Ganteng',
//   umur: 20
// }
// const {nama: n, umur: u} = mhs;
// console.log(u);

// * Memberi nilai default 
// const mhs = {
//   nama: 'Akmal Maulfi',
//   umur: 20,
//   email: 'akmalmaulfi@gmai.com'
// }

// const {nama, umur, email='email@default.com'} = mhs;
// console.log(email)

// * Memberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: 'Akmal Maulfi',
//   umur: 20,
//   email: 'akmalmaulfi@gmail.com'
// }

// const {nama:n, umur:u, email:e='email@default.com'} = mhs;
// console.log(e)

// * Rest parameter dengan object
// const mhs = {
//   nama: 'Akmal Maulfi',
//   umur: 20,
//   email: 'akmalmaulfi@gmail.com'
// }

// const {nama, ...value} = mhs
// console.log(value)
// * jika ingin mengambil isi dari rest parameter
// console.log(`ini adalah ${value.umur} dari Rest Parameter value`)

// * Mengambil field pada object, setelah dikirim sebgai parameter untuk function
const mhs = {
  id: 123, 
  nama: 'Akmal Maulfi',
  umur: 20,
  email: 'akmalmaulfi@gmail.com'
}

//  ? kalo menggunakan mhs saja, maka kita akan menangkap semua varibel objectnya
// function getIdMhs(mhs) {
//   return mhs.id;
// }

//  ? kalo menggunakan kurawal {} kita akan membongkar si mhs terlebih dahulu lalu mengambil properti id
function getIdMhs({id}) {
  //  * tidak perlu menggunanakan nama objectnya terlebih dahulu, karna kita hanya menangkap id saja, jadi tinggal kita return nilai id nya
  return id;
}

console.log(getIdMhs(mhs))