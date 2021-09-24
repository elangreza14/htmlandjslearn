function start() {
  // JOIN array untuk menggabungkan semua
  // properti dalam array (index)

  // constraint type array yang primitive
  // number, string, boolean
  // ga berbentuk obj

  const kegiatan2 = ["budi", "beli", "bakso"];

  // const search = " || ";

  const result2 = kegiatan2.join(" - ");

  console.log(result2);
  console.log(typeof result2);
}

start();
