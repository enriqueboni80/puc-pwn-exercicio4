var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/github',
    passport.authenticate('github'));
router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/admin');
    });

module.exports = router;