function start() {
  // // MAP array untuk pengulangan sesuatu property
  // // buat modif suatu properti
  // // const exArr = ["budi", "beli", "bakso"];
  // // const result2 = exArr.map((x) => x + "XXA");
  // const exArr = [1, 2, 3];
  // // 1,4,9
  // const pangkatDua = exArr.map((x) => x * x);
  // const pangkatDua2 = exArr.map((x) => {
  //   if (x == 3) {
  //     return x;
  //   } else {
  //     return x * x;
  //   }
  // });
  // // 1,4,3
  // const pangkatDua3 = exArr.map((x) => {
  //   return x == 3 ? x * x : x;
  // });
  // // 1,2,9
  // const pangkatDua4 = exArr.map((x, index) => {
  //   return index == 2 ? x * x : x;
  // });
  // // 1,2,9
  // console.log(pangkatDua);
  // console.log(pangkatDua2);
  // console.log(pangkatDua3);
  // console.log(pangkatDua4);

  const library = [
    {
      kategori: "fiksi",
      jumlahbuku: 1,
    },
    {
      kategori: "science",
      jumlahbuku: 2,
    },
    {
      kategori: "politik",
      jumlahbuku: 3,
    },
  ];

  console.log(library);

  const res = library.map((x) => {
    return x.jumlahbuku == 2 ? { ...x, jumlahbuku: 10 } : x;
  });
  console.log("filter", res);

  // ngeiterate
  // ngefilter
  // ngebalikin value ke tempat semula
}

start();
