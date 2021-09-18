function start() {
  // Array Find fungsinya mencari suatu value dalam array

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
  const result2 = kegiatan2.find(
    (x) => x.name == "ngerjain mobil" && x.title == 3
  );
  console.log(result2);
}

start();
