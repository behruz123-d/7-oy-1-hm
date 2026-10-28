const fs = require('fs');

// 10 ta tasodifiy son yaratish
const sonlar = [];

for (let i = 0; i < 10; i++) {
    sonlar.push(Math.floor(Math.random() * 100));
}

console.log("Tasodifiy sonlar:", sonlar);

// Sonlarni Buffer ko'rinishiga o'tkazish
const buffer = Buffer.from(sonlar);

// Buffer'ni faylga yozish
fs.writeFileSync('sonlar.bin', buffer);
console.log("Sonlar sonlar.bin fayliga yozildi!");

// Faylni Buffer ko'rinishida o'qish
const oqilganBuffer = fs.readFileSync('sonlar.bin');
const oqilganSonlar = Array.from(oqilganBuffer);

console.log("Fayldan o'qilgan sonlar:", oqilganSonlar);
console.log("Buffer matn ko'rinishida:", oqilganBuffer.toString());
