const fs = require('fs');

const myInfo = JSON.parse(fs.readFileSync(`${__dirname}/../data/heroPageInfo.json`));
const project = JSON.parse(fs.readFileSync(`${__dirname}/../data/Projects.json`))

exports.mainPageController = (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: {
            myInfo
        }
    })
};

exports.aboutMeController = (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: {
            myInfo
        }
    })
}

exports.projectController = (req,res, next) => {
    res.status(200).json({
        message:'success',
        data: {
            project
        }
    })
}
