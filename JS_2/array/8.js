function start() {
  // Array Filter fungsinya memfilter suatu kondisi value dalam array

  const kegiatan2 = [
    {
      title: 1,
      name: "beberes bengkel",
    },
    {
      title: 2,
      name: "ngerjain mobil",
    },
    {
      title: 3,
      name: "ngerjain mobil",
    },
  ];
  // const result2 = kegiatan2.filter((x) => x.name == "ngerjain mobil");
  // console.log(result2);
  const result2 = kegiatan2.filter((x, index) => index > 1);
  console.log(result2);
}

start();
