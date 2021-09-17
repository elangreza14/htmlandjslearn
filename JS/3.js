// type data dalam js yang sering dipakai developer untuk tipe angka

// TIPE NUMBER

const a = 1;
const b = 1.0; // 1+ 1.1 = 2.1
const c = 1.1; // 1+ 1.1 = 2.1
console.log(a, b);
console.log(a + b); // kalau dia berbentuk ahiran .0 maka dianggap menjadi integer
console.log(a + c); // kalau dia berbentuk ahiran .0 maka dianggap menjadi integer
console.log(typeof a);
console.log(typeof b); // ga ada beda antara float dan integer di JS
console.log(typeof (a + c));
