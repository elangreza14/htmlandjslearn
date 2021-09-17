function testConsoleSwitch(nilai) {
  // menentukan nilai mahasiswa dalam indeks A / B / C
  //  switch statement
  switch (nilai) {
    case nilai >= 75:
      console.log("A");
      break;
    case nilai >= 50:
      console.log("B");
      break;
    case nilai >= 25:
      console.log("C");
      break;
    default:
      console.log("NGGA LULUS");
      break;
  }
}

testConsoleSwitch(50);
