const fs = require('fs');

// Matnli fayldan o'qish
const matn = fs.readFileSync('matn.txt', 'utf8');
console.log("Fayldagi ma'lumot:", matn);

// Yangi fayl yaratish va unga yozish
fs.writeFileSync('yangi.txt', 'Salom, dunyo!');
console.log("yangi.txt fayli yaratildi!");
