function hitungKembalian(uangBayar, jumlahUang) {
    let kembalian = jumlahUang - uangBayar;

    let a = parseInt(kembalian / 20000);
    let b = parseInt(kembalian % 20000);
    if (a !== 0) {
    console.log(`${a} x 20000`)
    }

    let c = parseInt(b / 10000);
    let d = parseInt(b % 10000);
    if (c !== 0) {
        console.log(`${c} x 10000`);
    }
    let e = parseInt(d / 5000);
    let f = parseInt(d % 5000);
    if (e !== 0){
        console.log (`${e} x 5000`);
    }
    let g = parseInt(f / 2000);
    let h = parseInt(f % 2000);
    if (g !== 0){
        console.log (`${g} x 2000`);
    }
    let i = parseInt(h / 1000);
    let j = parseInt(h % 1000);
    if (i !== 0) {
    console.log(`${i} x 1000`);
    }

    let k = parseInt(j / 500);
    let l = parseInt(j % 500);
    if (k !== 0) {
        console.log(`${k} x 500`);
    }
}
hitungKembalian(62500, 110000);