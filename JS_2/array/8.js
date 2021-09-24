function start() {
  // FILTER array untuk mencari suatu array
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

  const result2 = kegiatan2.filter((x, index) => index > 1);
  console.log(result2);
}

start();
