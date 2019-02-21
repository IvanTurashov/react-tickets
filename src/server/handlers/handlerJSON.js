const fs = require('fs');

const readFile = path => new Promise((resolve, reject) => {
    fs.readFile(path, (err, content) => {
        if (err) {
            reject(err);
        }

        try {
            resolve(JSON.parse(content));
        } catch (err) {
            reject(err);
        }
    })
});

module.exports = {
    readFile
};