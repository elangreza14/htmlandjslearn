function start() {
  // REDUCE array untuk pengulangan sesuatu property

  const exArr = [1, 2, 3, 4];
  // mengiterate / mengulang sesuatu tapi saling menyambung
  // 1,4,9

  const result = exArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    10
  );
  //  1 (awal) + 1 + 2 = 3 [3,3,4]
  // 3 + 3 = 6 [6,4] // result
  // 10

  console.log(result);
}

start();
