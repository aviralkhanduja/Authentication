const res = require("express/lib/response");

exports.display=function(req,res){
    res.render('login');
};
module.exports.createSession = function(req, res){
    console.log("&&& right Place!");
    return res.redirect('/user-profile');
}
exports.displayUserSpecific=function(req,res){
    res.render('user_profile');
}
exports.destroySession=function(req,res){
    req.logout();
    return res.redirect('/');
}