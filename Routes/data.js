const express = require('express');
const mainPage = require('../Controller/mainPage');

const router = express.Router();

router.route('/').get(mainPage.mainPageController);
router.route('/aboutMe').get(mainPage.aboutMeController);
router.route('/projects').get(mainPage.projectController);

module.exports = router;