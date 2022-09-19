// Tagged Templates
// const nama = "Akmal";
// const umur = 20;

// // Rest Parameter (...nama_param) digunakan untuk menampung seluruh expression.
// function coba(strings, ...values) {
//   // let result = "";
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ""}`;
//   // });
//   // return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// Highlight
const nama = "Akmal";
const umur = 20;
const email = "akmalmaulf@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str} <span class='hl'>${values[i] || ""}</span> `,
    ""
  );
}

const str = highlight`Halo nama saya ${nama}, umur saya ${umur}. dan email saya adalah : ${email}`;
document.body.innerHTML = str;
