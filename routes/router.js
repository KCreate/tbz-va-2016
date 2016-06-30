const express   = require('express');
const router    = new express.Router({ strict: true });

// Remove .html from the url
router.use('/:section', (req, res, next) => {
    if (req.params.section.indexOf('.html') > -1) {
        const sectionName = req.params.section.split('.html')[0];
        res.redirect(sectionName);
    } else {
        next();
    }
});

// Redirect index to home
router.use('/:section', (req, res, next) => {
    if (req.params.section === 'index') {
        res.redirect('home');
    } else {
        next();
    }
});

// Main routes
router.use('/:section', (req, res, next) => {
    const pages = ['home', 'umfrage', 'vergleich', 'interview', 'fotoreportage'];
    if (pages.indexOf(req.params.section) > -1) {
        res.render(req.params.section, {
            ['current_' + req.params.section]: true,
        });
    } else {
        next();
    }
});

// For the index route, render the home page
router.use(/\/$/, (req, res) => {
    res.render('home', {
        current_home: true,
    });
});

// 404 handler
router.use(require('./notfound.js'));

module.exports = router;
