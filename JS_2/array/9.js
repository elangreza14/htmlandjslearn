function start() {
  // FINDINDEX array untuk mencari suatu dalam array (index)
  const kegiatan2 = [
    {
      title: 1,
      name: "beberes bengkel", // 0
    },
    {
      title: 2,
      name: "ngerjain mobil", // 1
    },
    {
      title: 3,
      name: "ngerjain mobil", // 2
    },
  ];

  const result2 = kegiatan2.findIndex((x) => x.title == 5);

  // kalo result ketemu
  // di bakal balikin index
  // kalo ga ada dia kasih -1

  // fungsi nya untuk mencari kondisi ada
  // atau tidak didalam suatu array
  // tanpa peduli isi nya

  // index berguna untuk manipulasi array
  console.log(result2);
}

start();
