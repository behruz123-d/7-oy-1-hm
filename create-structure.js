const fs = require('fs');
const path = require('path');

const folders = [
    '__int_tests__',
    '__mocks__',
    '__tests__',
    'coverage',
    'dist',
    'docs/api',
    'public',
    'scripts/deployment',
    'src'
];

for (const folder of folders) {
    fs.mkdirSync(path.join(__dirname, folder), { recursive: true });
    console.log('Papka tayyor:', folder);
}

const files = {
    '.gitignore': 'node_modules/\ncoverage/\ndist/\n.env\n',
    'index.js': "const fs = require('fs');\n\nconsole.log('Loyiha ishga tushdi!');\nconsole.log('fs moduli ulandi:', typeof fs.readFileSync === 'function');\n",
    'package.json': JSON.stringify({
        name: 'birlashtirilgan-nodejs-vazifa',
        version: '1.0.0',
        description: 'Node.js uy vazifalari va loyiha tuzilmasi',
        main: 'index.js',
        scripts: {
            start: 'node index.js',
            module: 'node main.js',
            'fs-task': 'node fs-task.js',
            'buffer-task': 'node buffer-task.js',
            'create-structure': 'node create-structure.js'
        }
    }, null, 2) + '\n',
    'src/index.js': "function salom() {\n    return 'Salom, dunyo!';\n}\n\nmodule.exports = salom;\n",
    'docs/api/README.md': '# API hujjatlari\n\nAPI haqida ma\\'lumot shu yerga yoziladi.\n',
    'scripts/deployment/README.md': '# Deployment\n\nJoylashtirish skriptlari shu yerga yoziladi.\n'
};

for (const [file, content] of Object.entries(files)) {
    const fullPath = path.join(__dirname, file);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fayl yaratildi:', file);
    } else {
        console.log('Mavjud fayl saqlandi:', file);
    }
}

console.log('Loyiha tuzilmasi tayyor!');
