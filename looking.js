const fs = require('fs');

const files = fs.readdirSync('./images/galery');
const jsonText = JSON.stringify(files, null, 2);

fs.writeFileSync('gallery.json', jsonText);