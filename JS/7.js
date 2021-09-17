function testConsole(nilai) {
  // menentukan nilai mahasiswa dalam indeks A / B / C
  // if statement bisa dibuat switch statement
  if (nilai >= 75) {
    console.log("A");
  } else if (nilai >= 50) {
    console.log("B");
  } else {
    console.log("C");
  }
}

testConsole(50);
