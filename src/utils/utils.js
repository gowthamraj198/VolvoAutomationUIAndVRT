let resemble = require('resemblejs')
const compare = require("resemblejs").compare;
const fs = require("mz/fs");

module.exports = class Utils {

    compareScreenshots(filePath, image1, image2) {
        let result=''
        resemble(filePath+image1)
            .compareTo(filePath+image2)
            .onComplete(function (data) {
                fs.writeFile(filePath + 'output.png', data.getBuffer());
                result = data.misMatchPercentage;
            });
        return result
    }
}