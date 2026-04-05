const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('src/assets/CV_Simon_Mobile_Focused.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('C:/Users/rober/AppData/Local/Temp/cv_text.txt', data.text);
}).catch(err => {
    console.error("Error formatting PDF: ", err);
});
