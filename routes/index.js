var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        // req.user is available for use here
        return next();
    }
    // denied. redirect to login
    res.redirect('/')
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/admin', ensureAuthenticated, function(req, res) {
    res.render('admin', { user: req.session.passport.user })
});

module.exports = router;