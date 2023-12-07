1

// // Foydalanuvchidan 3 ta raqam kiritishni so'raymiz
// var raqam1 = prompt("Birinchi raqamni kiriting:");
// var raqam2 = prompt("Ikkinchi raqamni kiriting:");
// var raqam3 = prompt("Uchinchi raqamni kiriting:");

// // Kiritilgan raqamlarni son qilib, yig'indisini topamiz
// var yigindi = parseInt(raqam1) + parseInt(raqam2) + parseInt(raqam3);

// // Natijani chiqaramiz
// alert("Kiritilgan raqamlar yig'indisi: " + yigindi);



2
// // Foydalanuvchidan 2 ta son kiritishni so'raymiz
// var son1 = prompt("Birinchi sonni kiriting:");
// var son2 = prompt("Ikkinchi sonni kiriting:");

// // Kiritilgan sonlarni son qilib, ularning kvadratlarini topamiz
// var kvadratYigindisi = Math.pow(parseInt(son1), 2) + Math.pow(parseInt(son2), 2);

// // Natijani chiqaramiz
// alert("Kiritilgan sonlarning kvadratlarining yig'indisi: " + kvadratYigindisi);



3
// // Foydalanuvchidan to'g'ri to'rtburchakning uzunligini olish
// var uzunlik = parseFloat(prompt("To'g'ri to'rtburchak uzunligini kiriting:"));

// // Foydalanuvchidan to'g'ri to'rtburchakning enini olish
// var eni = parseFloat(prompt("To'g'ri to'rtburchak enini kiriting:"));

// // Perimeterni hisoblash
// var perimetri = 2 * (uzunlik + eni);

// // Natijani chiqarish
// alert("To'g'ri to'rtburchak perimetri: " + perimetri);




4
// // Foydalanuvchidan kubning tomon uzunligini olish
// var tomonUzunligi = parseFloat(prompt("Kubning tomon uzunligini kiriting:"));

// // Kubning hajmini hisoblash
// var kubHajmi = Math.pow(tomonUzunligi, 3);

// // Kubning to'la sirtini hisoblash
// var tolaSirtin = 6 * Math.pow(tomonUzunligi, 2);

// // Natijani chiqarish
// alert("Kubning hajmi: " + kubHajmi);
// alert("Kubning to'la sirti: " + tolaSirtin);



5
// Foydalanuvchidan aylananing diametrini olish
var diametri = parseFloat(prompt("Aylananing diametrini kiriting:"));

// Aylananing radiusini hisoblash
var radius = diametri / 2;

// Aylananing yuzini hisoblash
var aylanaYuzi = Math.PI * Math.pow(radius, 2);

// Natijani chiqarish
alert("Aylananing yuzi: " + aylanaYuzi);
