'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('suzanne', { title: 'Suzanne' });
});
module.exports = router;
