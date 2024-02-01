function masukanNilaiArray(){
  const angkaRandom = [];
  for(let i = 0; i < 100; i++){
    let nilai = Math.floor(Math.random() * 50) + 1;
    angkaRandom.push(nilai);
  }
  return angkaRandom;
}

function cariIndexGenap(array){
  const angkaIndexGenap = [];
  for(let i = 0; i < array.length; i++){
    if(i % 2 === 0){
      angkaIndexGenap.push(array[i]);
    }
  }
  return angkaIndexGenap; 
}

function cariIndexGanjil(array){
  const angkaIndexGanjil = [];
  for(let i = 0; i < array.length ; i++){
    if(i % 2 != 0){
      angkaIndexGanjil.push(array[i]);
    }
  }
  return angkaIndexGanjil;
}

function cariMaxGenap(array){
  let nilaiMax = array[0];
  for(let i=0; i < array.length; i++){
    if(array[i] > nilaiMax){
      nilaiMax = array[i];
    }
  }
  return nilaiMax;
}

function cariMaxGanjil(array){
  let nilaiMax = array[0];
  for(let i =0 ; i < array.length ; i++){
    if(array[i] > nilaiMax){
      nilaiMax = array[i]
    }
  }
  return nilaiMax;
}

function cariMinGenap(array){
  let nilaiMin = array[0];
  for(let i = 0 ; i < array.length; i++){
    if(array[i] < nilaiMin){
    nilaiMin = array[i]
   }
  }
  return nilaiMin;
}

function cariMinGanjil(array){
  let nilaiMin = array[0];
  for(let i = 0 ; i < array.length ; i++){
    if(array[i] < nilaiMin) {
      nilaiMin = array[i];
    }
  }
  return nilaiMin;
}

function cariTotalNilaiGenap(array) {
  let totalNilai = 0;
  for(let i = 0; i < array.length ; i++){
    totalNilai +=  array[i]
  }
  return totalNilai;
}

function cariTotalNilaiGanjil(array){
  let totalNilai = 0;
  for(let i = 0 ; i < array.length ; i++){
    totalNilai += array[i];
  }
  return totalNilai;
}

function cariAverageGenap(array){
  let nilaiTotal = 0;
  let nilaiAverage = 0;
  for(let i = 0 ; i < array.length; i++){
    nilaiTotal += array[i]
  }
  nilaiAverage = nilaiTotal / array.length;
  return nilaiAverage;
}

function cariAverageGanjil(array){
  let totalNilai = 0;
  let nilaiAverage = 0;
  for(let i = 0 ; i < array.length ; i++){
    totalNilai += array[i]
  }
  nilaiAverage = totalNilai / array.length;
  return nilaiAverage;
}

const arrayAngkaRandom = masukanNilaiArray();
const arrayIndexGenap = cariIndexGenap(arrayAngkaRandom);
const arrayIndexGanjil = cariIndexGanjil(arrayAngkaRandom);
const nilaiMaximumGenap = cariMaxGenap(arrayIndexGenap);
const nilaiMinimumGenap = cariMinGenap(arrayIndexGenap)
const totalNilaiGenap = cariTotalNilaiGenap(arrayIndexGenap)
const nilaiAverageGenap = cariAverageGenap(arrayIndexGenap)
const nilaiMaximumGanjil = cariMaxGanjil(arrayIndexGanjil);
const nilaiMinimumGanjil = cariMinGanjil(arrayIndexGanjil);
const totalNilaiGanjil = cariTotalNilaiGanjil(arrayIndexGanjil);
const nilaiAverageGanjil = cariAverageGanjil(arrayIndexGanjil);

function bandingkanNilaiMax() {
  if(nilaiMaximumGanjil > nilaiMaximumGenap){
    return "Nilai maksimum array index ganjil lebih besar dibandingkan array index genap!"
  } else if (nilaiMaximumGanjil === nilaiMaximumGenap) {
    return "Nilai maksimum kedua array sama!"
  }else {
    return "Nilai maksimum array index genap lebih besar dibandingkan array index ganjil!";
  }
}

function bandingkanNilaiMin() {
  if(nilaiMinimumGanjil > nilaiMinimumGenap){
    return "Nilai minimum array index ganjil lebih besar dibandingkan array index genap!"
  } else if (nilaiMinimumGanjil === nilaiMinimumGenap) {
    return "Nilai minimum kedua array sama!"
  }else {
    return "Nilai minimum array index genap lebih besar dibandingkan array index ganjil!"
  }
}

function bandingkanNilaiTotal(){
  if(totalNilaiGanjil > totalNilaiGenap){
    return "Total Nilai array index ganjil lebih besar dibandingkan array index genap!"
  } else if (totalNilaiGanjil === totalNilaiGenap) {
    return "Total Nilai kedua array sama!"
  }else {
    return "Total Nilai array index genap lebih besar dibandingkan array index ganjil!"
  }
}

function bandingkanNilaiAverage(){
  if(nilaiAverageGanjil > nilaiAverageGenap){
    return "Nilai rata-rata array index ganjil lebih besar dibandingkan array index genap"
  } else if (nilaiAverageGanjil === nilaiAverageGenap){
    return "Nilai rata-rata kedua array sama!"
  } else {
    return "Nilai rata-rata array index genap lebih besar dibandingkan array index ganjil"
  }
}

console.log(arrayAngkaRandom);
console.log(`Array index Genap : [${arrayIndexGenap}]`);
console.log(`Jumlah index dalam index Genap : ${arrayIndexGenap.length}`)
console.log(`Nilai Maksimum index Genap : ${nilaiMaximumGenap}`);
console.log(`Nilai Minimum index Genap : ${nilaiMinimumGenap}`);
console.log(`Total Nilai index Genap : ${totalNilaiGenap}`);
console.log(`Nilai rata-rata array index Genap : ${nilaiAverageGenap}`);
console.log("===========================================")
console.log(`Array index Ganjil : [${arrayIndexGanjil}]`);
console.log(`Jumlah index dalam index Ganjil : ${arrayIndexGanjil.length}`)
console.log(`Nilai Maksimum index Ganjil : ${nilaiMaximumGanjil}`);
console.log(`Nilai Minimum index Ganjil : ${nilaiMinimumGanjil}`);
console.log(`Total Nilai index Genap: ${totalNilaiGanjil}`);
console.log(`Nilai rata-rata array index Ganjil : ${nilaiAverageGanjil}`);
console.log("===========================================")
console.log(bandingkanNilaiMax());
console.log(bandingkanNilaiMin());
console.log(bandingkanNilaiTotal());
console.log(bandingkanNilaiAverage());


