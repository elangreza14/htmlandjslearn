function start() {
  // INCLUDES array untuk mencari suatu dalam array (index)

  // constraint type array yang primitive
  // number, string, boolean
  // ga berbentuk obj

  const kegiatan2 = [11, "34", false];

  const search = true;

  const result2 = kegiatan2.includes(search);

  // kalo result ketemu
  // di bakal balikin true
  // kalo ga ada dia false

  // fungsi nya untuk mencari kondisi ada
  // atau tidak didalam suatu array
  // tanpa peduli isi nya

  console.log(result2);
}

start();
