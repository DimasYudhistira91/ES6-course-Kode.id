// DEFAULT PARAMETER

// // Cara lama:

// function greet(name, greeting) {
//     name = typeof name!== "undefined" ? name : "Student";
//     greeting = typeof greeting !== "undefined" ? greeting : "Welcome Dude";

//     return `${greeting} ${name}!`;
// }

// ES6 :
function greet(name = "Student", greeting = "Welcome Dude") {
    return `${greeting} ${name}!`;
}


// Contoh lain:
let Func = (a, b = 10) => a = b;

Func(20); // maka 20 akan masuk ke parameter a
Func(20, 50); //maka semua default parameter akan diganti dengan parameter 20 dan 50



// ARRAY HELPER

// 1. Filter (menemukan semua value yang sesuai dengan kondisi):
// var values = [1, 60, 34, 30, 20, 7];
// function lessThan20(val) {
//     return val < 20;
// }

// var valueLessThan20 = values.filter(lessThan20);
// console.log(valueLessThan20);

// disederhanakan dengan arrow function:
let values = [1, 60, 34, 30, 20, 7];

values = values.filter(val => val < 20);
console.log(values);


// 2. Find (menemukan value pertama dari kondisi yang telah ditentukan):
var person = [
    {name: 'Dimas', age: 30},
    {name: 'Dul Kempit', age: 24},
    {name: 'Karto Tuying', age: 40},
    {name: 'Babang Tamvan', age: 18},
    {name: 'Sudiro Singodimejo', age: 15}
];

function remaja(person) {
    return person.age > 10 && person.age < 20;
}
var remajaPertama = person.find(remaja);
console.log('remaja pertama yang ditemukan adalah ', remajaPertama);


// 3. Every (mengecek semua property apakah semua sesuai dengan kondisi atau tidak -> mengembalikan nilai boolean "true / false", jika ada satu yang tidak sesuai kondisi maka akan mengembalikan nilai false, akan true jika semua property sesuai dengan kondisi):
var anggota = [
    {name: 'Dimas', age: 30},
    {name: 'Dul Kempit', age: 24},
    {name: 'Karto Tuying', age: 40},
    {name: 'Babang Tamvan', age: 18},
    {name: 'Sudiro Singodimejo', age: 15}
];

function remaja(anggota) {
    return anggota.age > 10 && anggota.age < 20;
}
var anggotaRemaja = anggota.every(remaja);
console.log('apakah semua anggota adalah usia remaja? ', anggotaRemaja);


// 4. Some (kebalikan dari "every", some mengembalikan nilai true walaupun hanya ada 1 property yang sesuai dengan konsidi yang telah ditentukan):
var wargaRT = [
    {name: 'Dimas', age: 30},
    {name: 'Dul Kempit', age: 24},
    {name: 'Karto Tuying', age: 40},
    {name: 'Babang Tamvan', age: 18},
    {name: 'Sudiro Singodimejo', age: 15}
];

function remaja(wargaRT) {
    return wargaRT.age > 10 && wargaRT.age < 20;
}
var wargaRemaja = wargaRT.some(remaja);
console.log('beberapa warga berusia remaja ', wargaRemaja);



// 5. forEach (menampilkan semua isi object):
var colors = ['merah', 'kuning', 'hijau'];

function print(val) {
    console.log(val);
}
colors.forEach(print);


// 5. Map (mengolah lalu menampilkan semua hasil olahan):
var warna = ['merah', 'kuning', 'hijau'];

function kapital(val) {
    return val.toUpperCase();
}
var warnaKapital = warna.map(kapital);
console.log(warnaKapital);


// 6. Reduce
let height = [160, 170, 155, 163, 158];
let total = height.reduce((sum, item) => {
    return sum + item;
});
console.log(total);