
const express = require('express');
const router = express.Router();
const data = require('../data.json');
const project = JSON.parse(JSON.stringify(data));

router.get('/', (req, res) => {
    res.render('index',{ projects : project.projects});
});

router.get('/about', (req, res) => {
    res.render('about');
    });

module.exports = router;