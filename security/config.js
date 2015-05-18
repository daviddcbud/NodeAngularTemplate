/*jshint node: true */
module.exports = function () {
    var passport = require('passport'),
        User = require('../models/User'),
        settings = require('../config/settings')(),
        WindowsLiveStrategy = require('passport-windowslive').Strategy;
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        User.findOne({ id: obj.id }, function (err, user) {
            done(null, user);
        });
    });


    passport.use(new WindowsLiveStrategy({
        clientID: settings.clientId,
        clientSecret: settings.secret,
        callbackURL: settings.callback
    }, function (accessToken, refreshToken, profile, done) {
        var u = {photo : profile.photos[0].value, displayName : profile.displayName};
        User.findOneAndUpdate({windowsLiveId : profile.id}, u, function (err, user) {
            if (err) { console.log('error saving', err); }
            if (!user) {
                var newu = new User();
                newu.windowsLiveId = profile.id;
                newu.displayName = profile.displayName;
                newu.photo = u.photo;
                newu.save(function (err, user) {
                    console.log('found ' + user);
                    return done(err, user);
                });
            } else {
                console.log('found ' + user);
                return done(err, user);
            }
        });
    }));
};