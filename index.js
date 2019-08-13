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



// STRING LIRETAL

// * cara lama:
var barang = "sepatu";
var promo = "harga " + barang + "diskon 70%";
console.log(promo);
console.log(typeof promo);

// * cara baru:
var merkHP = "Xiaomi";
var diskon = `harga HP merk ${merkHP} sedang ada diskon 50%`;
console.log(diskon);
console.log(typeof diskon);

// contoh lain :
var text = `Selamat belajar
ES6 sampai paham
sepenuhnya`;

console.log(text);

// keuntungan jika menggunakan backtik dan string literal tidak perlu menggunakan konkatenasi / tanda + dan <br> untuk pindah baris, bisa juga untuk memasukkan inline function

function upper(s) {
    return s. toUpperCase();
}
var siapa = 'koding';
var text = `selamat datang ${upper('Teman')}
${siapa}`;
console.log(text);

// backtik sudah support scope literals (tidak mempengaruhi block scope lain dengan nama variabel yang sama)

function mangga(str) {
    var jenis = 'harumanis';
    console.log(str)
}

function jeruk() {
    var jenis = 'mandarin';
    mangga(`kombinasi jus mangga dan jeruk ${jenis}`);
}

var jenis = 'global';
jeruk();


// backtik juga bisa menampilkan raw dari string
console.log( String.raw`Hello\nWorld`);
console.log(`Hello\nWorld`);



// SPREAD & REST

// 1. Rest (memisahkan isi array):
var [c, d, ...m] = [1, 2, 3, 4, 5];

// yg dilakukan javascript adalah:
// var c = 1;
// var d = 2;
// var m = [3, 4, 5]; // disebut rest / sisa array

console.log(c,d,m);

// Spread (menggabungkan isi array):
var params = ['Hello', true, 23];
var other = [1, 2, ...params, 3];

// yang dilakukan js adalah:
// var other = [1, 2].concat[params];

var a = [2, 3, 4];
var b = [1, ...a, 5];
console.log(b);



// DESTRUCTURING

// 1. mengkestraksi Array:
function printElementPertamaDanKedua([first, second]) {
    console.log('element pertama adalah ' + first + ', element kedua adalah ' + second);
}

function printElementKeduaDanKeempat([, second, , fourth]) {
    console.log(`element kedua ${second} dan keempat ${fourth}`);
};

var arr = [1, 2, 3, 4, 5];

printElementPertamaDanKedua();
printElementKeduaDanKeempat();