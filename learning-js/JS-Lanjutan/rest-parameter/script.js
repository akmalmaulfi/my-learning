// ^ Rest Parameter

// * Rest parameter hanya bisa digunakan diakhir argumen / jika argumen lebih dari 1.
function myFunc() {
  // * macam-macam return
  // ? return berupa object. 
  // return arguments;
  // ? merubah argument dari object menjadi array
  // return Array.from(arguments);
  // ? menggunakan spread operator, dan langsung berupa array
  // return [...arguments];
}
// console.log(myFunc(1, 2, 3, 4, 5));

function jumlahkan(...angka) {
  let total = 0;
  for (const a of angka) {
    total += a;
  }
  return total;
  // return angka.reduce((n, a) => n + a);
}
// console.log(jumlahkan(10,20,30,40));


// * Array Destructuring
// const kelompok1 = ['Akmal', 'Mega', 'Septi', 'Sismawati'];
// const [ketua, wakil, ...anggota] = kelompok1;


// * Object Destructuring
// const team = {
//   pm: 'Akmal',
//   frontEnd1: 'Erik',
//   frontEnd2: 'Gunawan',
//   backEnd: 'Sandy',
//   ux: 'Mega',
//   devOps: 'Septi'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// * Filtering
function filterBy(type, ...values) {
 return values.filter((a) => typeof a === type);

}

console.log(filterBy('string', 1, 2, 'Akmal', false, 10, true, 'Mega'));













