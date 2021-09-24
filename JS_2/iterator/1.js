function start() {
  // ITERATOR untuk pengulangan sesuatu property

  const exArr = [1, 2, 3, 4]; // panjang 4

  for (let i = 0; i < exArr.length; i++) {
    const position = exArr.length - i - 1;
    // position = 4 - 0 = 4
    // exArr[4] => ga ada result
    // exArr[4 - 1] => 4
    const elementAwal = exArr[i];
    const elementBalik = exArr[position];
    console.log(elementAwal, elementBalik);
  }

  //   const result0 = exArr.map((x) => x * 10); // simple
  //   const result = exArr.map((x, index) => {
  //     console.log(index);
  //     const c = x * 12 * 1234;
  //     return c;
  //   });

  //   for (let i = 0; i < result.length; i++) {
  //     console.log(result[i]);
  //   }
  //   let result = 0;
  //   while (result < 11) {
  //     result = result + 2;
  //     console.log("in the loop", result);
  //     // ketika result = 12
  //     // ketika kondisi true maka terus berjalan
  //     // ketika kondisi false
  //     // 12 maka keluar dari loop / stop
  //   }

  //   console.log("final", result);
}

start();

// exercise;
