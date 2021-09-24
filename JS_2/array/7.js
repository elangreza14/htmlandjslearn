function start() {
  // Array FIND fungsinya mencari suatu value dalam array

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
  const result2 = kegiatan2.find((x) => x.name == "beberes kamar");
  console.log(result2);
}

start();
