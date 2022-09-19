// ^ Async Await
// const coba = new Promise(resolve =>{ 
//     setTimeout(() => {
//         resolve('coba');
//     }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));

// ? menggunakan function biasa
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Berhasil');
            }, 2000);
        } else {
            reject('Kelamaan!');
        }
    });
}
// const coba = cobaPromise();
// coba
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba));

// ? menggunakan function dng async dan await
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.error(err);
    }
}
cobaAsync();
