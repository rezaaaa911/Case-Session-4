let nilaiSiswa = [
  {
    nama: 'Andi',
    nilai: 90
  },
  {
    nama: 'Rudi',
    nilai: 80
  },
  {
    nama: 'Dira',
    nilai: 100
  }
];

for (let i = 0; i < nilaiSiswa.length; i++) {
  for (let j = 0; j < nilaiSiswa.length - 1; j++) {
    if (nilaiSiswa[j].nilai < nilaiSiswa[j + 1].nilai) {
      let tempatSementara = nilaiSiswa[j];
      nilaiSiswa[j] = nilaiSiswa[j + 1];
      nilaiSiswa[j + 1] = tempatSementara;
    }
  }
}
for (let i = 0; i < nilaiSiswa.length; i++) {
  console.log(nilaiSiswa[i].nama + " : " + nilaiSiswa[i].nilai);
}
console.log("\nSiswa yang nilainya paling tinggi:");
console.log(nilaiSiswa[0].nama + " dengan nilai " + nilaiSiswa[0].nilai);
