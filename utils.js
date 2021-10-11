let fs = require('fs');

const createDir = (nameDir) => {
    fs.mkdir(nameDir, (err) => {
        if(err) console.error("Error: Creating a directory", err)
    })
}
const createFile = (file, data) => {
    fs.appendFile(file, data, function (err) {
        if (err) console.log("Error: Creating a file", err);
    });
}
const checkDirFile = (name, type, data) => {
    return new Promise((resolve) => {
        fs.access(name, (err) => {
            if (err) {
                (type === 'dir')? createDir(name) : createFile(name, data);
                resolve();
            }
            else resolve();
        })
    })
}


module.exports = {
    checkDirFile
}