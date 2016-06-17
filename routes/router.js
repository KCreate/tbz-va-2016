const express   = require('express');
const router    = express.Router({ strict: true });
const path      = require('path');
const fs        = require('fs');
const Remarkable= require('remarkable');
const md        = new Remarkable();

router.use('/:section', (req, res) => {
    const pages = ['umfrage', 'vergleich', 'interview', 'ueberuns'];
    if (pages.indexOf(req.params.section) > -1) {
        res.render(req.params.section, {
            ['current_' + req.params.section]: true,
        });
    } else {
        next();
    }
});

router.use(/\/$/, (req, res) => {
    res.render('home', {
        current_home: true,
    });
});

// Catch all errors that might happen while rendering
router.use((err, req, res, next) => {
    if (err) {
        console.warn('Trying to render non-existing view');
        next();
    }
});

// 404 handler
router.use(require('./notfound.js'));

module.exports = router;
