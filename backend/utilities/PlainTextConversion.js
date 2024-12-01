const PdfParser = require('pdf-parse');
const fs = require('fs');

const PlainTextConversion = (filepath) => {
    return new Promise((resolve, reject) => {
        try {
            let dataBuffer = fs.readFileSync(filepath);
            PdfParser(dataBuffer)
                .then((data) => {
                    resolve(data.text);
                })
                .catch((error) => {
                    console.error("Error while parsing PDF:", error);
                    reject(error);
                });
        } catch (error) {
            console.error("Error while reading file:", error);
            reject(error);
        }
    });
};

module.exports = PlainTextConversion;