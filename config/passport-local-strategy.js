const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');
passport.use(new LocalStrategy({
    usernameField: 'Email'
},
function(email, password, done){
    // find a user and establish the identity
    console.log('Reached!');
    User.findOne({Email: email}, function(err, user)  {
        if (err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        if (!user || user.Password != password){
            console.log('Invalid Username/Password');
            return done(null, false);
        }
        
        return done(null, user);
    });
}


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
User.findById(id, function(err, user){
    if(err){
        console.log('Error in finding user --> Passport');
        return done(err);
    }

    return done(null, user);
});
});



module.exports = passport;